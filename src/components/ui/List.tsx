import { Text, View } from "react-native";
import { fonts } from "@/constants/theme";
import type { Step } from "@/types/content";

/** Hairline-ruled list container (top rule is ink, rows are line). */
export function Ruled({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <View className={`border-ink border-t ${className}`}>{children}</View>;
}

/** Plain text row (안전 수칙 / 주의사항 / 편의 목록). */
export function RuleList({ items }: { items: string[] }) {
  return (
    <Ruled>
      {items.map((item) => (
        <View key={item} className="border-line border-b py-3.5">
          <Text
            className="text-[12.5px] text-body leading-[21px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            {item}
          </Text>
        </View>
      ))}
    </Ruled>
  );
}

/** Numbered step rows (이용 방법 / 관람 가이드). */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <Ruled>
      {steps.map((s) => (
        <View key={s.num} className="flex-row gap-4 border-line border-b py-4">
          <Text
            className="w-6 text-moss text-xs"
            style={{ fontFamily: fonts.sansMedium }}
          >
            {s.num}
          </Text>
          <View className="flex-1">
            <Text
              className="text-ink text-sm"
              style={{ fontFamily: fonts.sansBold }}
            >
              {s.title}
            </Text>
            <Text
              className="mt-1 text-body text-xs leading-[20px]"
              style={{ fontFamily: fonts.sansLight }}
            >
              {s.desc}
            </Text>
          </View>
        </View>
      ))}
    </Ruled>
  );
}

/** Key/value row (운영 시간, 연락처). */
export function KeyValueRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View className="flex-row items-baseline justify-between gap-3 border-line border-b py-3.5">
      <Text
        className="text-[13px] text-body"
        style={{ fontFamily: fonts.sansLight }}
      >
        {label}
      </Text>
      <Text
        className="text-[13px] text-ink"
        style={{ fontFamily: fonts.sansMedium }}
      >
        {value}
      </Text>
    </View>
  );
}
