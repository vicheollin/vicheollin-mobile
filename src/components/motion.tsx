import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  measure,
  type SharedValue,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { colors, type StripeTone } from "@/constants/theme";
import { Placeholder } from "./ui/Placeholder";

/** Same curve as the web build: cubic-bezier(0.16, 1, 0.3, 1). */
export const EASE = Easing.bezier(0.16, 1, 0.3, 1);

/** Shared in-view trigger: fire once when 12% of the element is visible. */
const VIEW_AMOUNT = 0.12;

type ScrollCtxValue = {
  scrollY: SharedValue<number>;
  /** Bumped on layout so reveals re-check visibility before any scroll. */
  tick: SharedValue<number>;
};

const ScrollCtx = createContext<ScrollCtxValue | null>(null);

/** Drop-in ScrollView that feeds scroll position to <Reveal>/<ParallaxBleed>. */
export function MotionScrollView({
  children,
  ...props
}: Omit<React.ComponentProps<typeof Animated.ScrollView>, "children"> & {
  children: ReactNode;
}) {
  const scrollY = useSharedValue(0);
  const tick = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  const ctx = useMemo(() => ({ scrollY, tick }), [scrollY, tick]);
  return (
    <Animated.ScrollView
      {...props}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      <ScrollCtx.Provider value={ctx}>{children}</ScrollCtx.Provider>
    </Animated.ScrollView>
  );
}

/** 0 → 1 once the referenced element scrolls into view (12% visible). */
function useRevealProgress(
  ref: ReturnType<typeof useAnimatedRef<Animated.View>>,
  delaySeconds: number,
  duration: number,
) {
  const ctx = useContext(ScrollCtx);
  const { height: windowHeight } = useWindowDimensions();
  // Outside a MotionScrollView there is no scroll signal — show immediately.
  const progress = useSharedValue(ctx ? 0 : 1);
  const fired = useSharedValue(false);
  const scrollY = ctx?.scrollY;
  const tick = ctx?.tick;

  useAnimatedReaction(
    () => (scrollY ? scrollY.value + (tick?.value ?? 0) : 0),
    () => {
      if (fired.value) return;
      const m = measure(ref);
      if (m === null) return;
      const visibleTop = m.pageY + m.height * VIEW_AMOUNT;
      if (visibleTop <= windowHeight && m.pageY + m.height >= 0) {
        fired.value = true;
        progress.value = withDelay(
          delaySeconds * 1000,
          withTiming(1, { duration, easing: EASE }),
        );
      }
    },
  );

  const bump = () => {
    if (tick) tick.value += 1;
  };
  return { progress, bump };
}

type RevealKind = "up" | "fade" | "mask";

interface RevealProps {
  children: ReactNode;
  kind?: RevealKind;
  delay?: number;
  className?: string;
}

/** Scroll-triggered reveal. kind: "up" (fade+slide), "fade", "mask" (clip reveal). */
export function Reveal({
  children,
  kind = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useAnimatedRef<Animated.View>();
  const { progress, bump } = useRevealProgress(
    ref,
    delay,
    kind === "up" ? 950 : 1100,
  );
  const maskHeight = useSharedValue(0);

  const upStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * 32 }],
  }));
  const fadeStyle = useAnimatedStyle(() => ({ opacity: progress.value }));
  const maskContentStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: (1 - progress.value) * 26 },
      { scale: 1.05 - 0.05 * progress.value },
    ],
  }));
  // Paper-colored cover slides down out of the clipped box — approximates the
  // web clip-path inset(0 0 100% 0) → inset(0 0 0% 0) top-down wipe.
  const maskCoverStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * maskHeight.value }],
  }));

  if (kind === "mask") {
    return (
      <Animated.View
        ref={ref}
        className={className}
        style={{ overflow: "hidden" }}
        onLayout={(event) => {
          maskHeight.value = event.nativeEvent.layout.height;
          bump();
        }}
      >
        <Animated.View style={maskContentStyle}>{children}</Animated.View>
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colors.paper,
            },
            maskCoverStyle,
          ]}
        />
      </Animated.View>
    );
  }
  return (
    <Animated.View
      ref={ref}
      className={className}
      style={kind === "fade" ? fadeStyle : upStyle}
      onLayout={bump}
    >
      {children}
    </Animated.View>
  );
}

const StaggerCtx = createContext<{ next: () => number } | null>(null);

/** Container that staggers its <StaggerItem> children by 110ms. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const counter = useRef(0);
  counter.current = 0; // reset each render; items re-claim indices in tree order
  const value = useMemo(() => ({ next: () => counter.current++ }), []);
  return (
    <View className={className}>
      <StaggerCtx.Provider value={value}>{children}</StaggerCtx.Provider>
    </View>
  );
}

export function StaggerItem({
  children,
  kind = "up",
  className,
}: {
  children: ReactNode;
  kind?: RevealKind;
  className?: string;
}) {
  const ctx = useContext(StaggerCtx);
  const indexRef = useRef<number | null>(null);
  if (indexRef.current === null) indexRef.current = ctx ? ctx.next() : 0;
  return (
    <Reveal kind={kind} delay={indexRef.current * 0.11} className={className}>
      {children}
    </Reveal>
  );
}

/**
 * Full-bleed hero band: parallax (background moves slower than content)
 * + very slow Ken Burns zoom. Same Placeholder look — swap for <Image />
 * when real photography/video is available.
 */
export function ParallaxBleed({
  label,
  tone = "green",
  height,
  className = "",
}: {
  label: string;
  tone?: StripeTone;
  height: number;
  className?: string;
}) {
  const ref = useAnimatedRef<Animated.View>();
  const ctx = useContext(ScrollCtx);
  const { height: windowHeight } = useWindowDimensions();
  const parallaxY = useSharedValue(0);
  const zoom = useSharedValue(1);
  const scrollY = ctx?.scrollY;
  const tick = ctx?.tick;

  useEffect(() => {
    zoom.value = withRepeat(
      withTiming(1.09, { duration: 30000, easing: Easing.inOut(Easing.quad) }),
      -1,
      true,
    );
  }, [zoom]);

  useAnimatedReaction(
    () => (scrollY ? scrollY.value + (tick?.value ?? 0) : 0),
    () => {
      const m = measure(ref);
      if (m === null) return;
      // 0 when the band's top meets the viewport bottom, 1 when its bottom
      // leaves the top — mirrors framer's ["start end", "end start"] range.
      const p = (windowHeight - m.pageY) / (windowHeight + m.height);
      const clamped = Math.min(Math.max(p, 0), 1);
      parallaxY.value = (clamped - 0.5) * 0.14 * m.height;
    },
  );

  const bleedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: parallaxY.value }, { scale: zoom.value }],
  }));

  return (
    <Animated.View
      ref={ref}
      className={className}
      style={{ height, overflow: "hidden" }}
      onLayout={() => {
        if (tick) tick.value += 1;
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: -height * 0.12,
            bottom: -height * 0.12,
          },
          bleedStyle,
        ]}
      >
        <Placeholder label={label} tone={tone} className="flex-1" />
      </Animated.View>
    </Animated.View>
  );
}
