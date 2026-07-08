import Feather from "@expo/vector-icons/Feather";
import { router, useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, fonts } from "@/constants/theme";

/** Sticky app header: brand wordmark + optional back + page title. */
export function AppHeader({ title }: { title?: string }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <View
      className="flex-row items-center gap-3 border-line-soft border-b bg-paper px-5 pb-2.5"
      style={{ paddingTop: insets.top + 8 }}
    >
      {canGoBack && (
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="뒤로 가기"
          hitSlop={8}
          className="h-8 w-8 items-center justify-center rounded-full border border-line active:opacity-70"
        >
          <Feather name="arrow-left" size={15} color={colors.ink} />
        </Pressable>
      )}
      <Pressable
        onPress={() => router.navigate("/")}
        accessibilityRole="button"
        accessibilityLabel="홈으로 이동"
        className="flex-row items-baseline gap-1.5"
      >
        <Text
          className="text-[15px] text-ink"
          style={{ fontFamily: fonts.sansBlack }}
        >
          비체올린
        </Text>
        <Text
          className="text-[8.5px] text-dim tracking-[2px]"
          style={{ fontFamily: fonts.sansMedium }}
        >
          VICHEOLLIN
        </Text>
      </Pressable>
      {title ? (
        <Text
          className="ml-auto text-[11px] text-mute"
          style={{ fontFamily: fonts.sansMedium }}
        >
          {title}
        </Text>
      ) : null}
    </View>
  );
}
