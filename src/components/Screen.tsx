import { View } from "react-native";
import { AppHeader } from "./AppHeader";
import { MotionScrollView } from "./motion";

/** Standard screen shell: header + scrollable white body. */
export function Screen({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <View className="flex-1 bg-paper">
      <AppHeader title={title} />
      <MotionScrollView
        className="flex-1"
        contentContainerClassName="pb-12"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </MotionScrollView>
    </View>
  );
}
