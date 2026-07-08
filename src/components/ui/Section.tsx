import { Text, View } from "react-native";
import { fonts } from "@/constants/theme";

/** Numbered eyebrow label, e.g. "01 — 체험". */
export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={`text-[10px] text-mute tracking-[3px] ${className}`}
      style={{ fontFamily: fonts.sansMedium }}
    >
      {children}
    </Text>
  );
}

/** Section wrapper with the standard horizontal padding. */
export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <View className={`px-6 ${className}`}>{children}</View>;
}
