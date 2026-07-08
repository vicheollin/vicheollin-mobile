import "../global.css";

import {
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";
import {
  NotoSerifKR_400Regular,
  NotoSerifKR_600SemiBold,
} from "@expo-google-fonts/noto-serif-kr";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { colors } from "@/constants/theme";
import { queryClient } from "@/lib/queryClient";

export default function RootLayout() {
  const [loaded] = useFonts({
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
    NotoSerifKR_400Regular,
    NotoSerifKR_600SemiBold,
  });

  if (!loaded) return <View className="flex-1 bg-paper" />;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.paper },
          animation: "fade_from_bottom",
        }}
      />
    </QueryClientProvider>
  );
}
