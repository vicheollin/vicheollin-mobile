import { Pressable, Text } from "react-native";
import { fonts } from "@/constants/theme";

export function Button({
  label,
  onPress,
  variant = "solid",
  className = "",
}: {
  label: string;
  onPress?: () => void;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const solid = variant === "solid";
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      className={`items-center py-4 active:opacity-80 ${
        solid ? "bg-ink" : "border border-ink bg-transparent"
      } ${className}`}
    >
      <Text
        className={`text-[12.5px] tracking-[1.5px] ${solid ? "text-white" : "text-ink"}`}
        style={{ fontFamily: fonts.sansMedium }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function Chip({ label }: { label: string }) {
  return (
    <Text
      className="border border-line px-3 py-1.5 text-[10.5px] text-body"
      style={{ fontFamily: fonts.sansMedium }}
    >
      {label}
    </Text>
  );
}
