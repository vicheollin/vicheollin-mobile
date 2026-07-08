import { type DimensionValue, Text, View } from "react-native";
import { colors, fonts, type StripeTone, stripeTones } from "@/constants/theme";

/**
 * Image placeholder — swap for expo-image <Image> when real photography
 * is available. Diagonal-stripe look approximated with a two-tone field.
 */
export function Placeholder({
  label,
  tone = "beige",
  height,
  aspectRatio,
  className = "",
}: {
  label: string;
  tone?: StripeTone;
  height?: DimensionValue;
  aspectRatio?: number;
  className?: string;
}) {
  const [base, light] = stripeTones[tone];
  return (
    <View
      className={`items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundColor: light, height, aspectRatio }}
    >
      {/* stripe hint */}
      <View
        className="absolute -inset-1/2 opacity-60"
        style={{
          backgroundColor: base,
          transform: [{ rotate: "45deg" }, { scaleX: 2 }],
        }}
      />
      <Text
        className="px-3 text-center text-[10px]"
        style={{ fontFamily: fonts.sans, color: colors.mute }}
      >
        {label}
      </Text>
    </View>
  );
}
