import { Text } from "react-native";
import { Reveal } from "@/components/motion";
import { fonts } from "@/constants/theme";
import { SectionLabel } from "./Section";

/** Oversized editorial page header (eyebrow + black headline + lede). */
export function PageTitle({
  label,
  title,
  lede,
  accentDot = false,
}: {
  label: string;
  title: string;
  lede?: string;
  accentDot?: boolean;
}) {
  return (
    <Reveal>
      <SectionLabel className="mb-2.5">{label}</SectionLabel>
      <Text
        className="text-[36px] text-ink leading-[40px] tracking-[-1.5px]"
        style={{ fontFamily: fonts.sansBlack, paddingTop: 6 }}
      >
        {title}
        {accentDot && <Text className="text-moss">.</Text>}
      </Text>
      {lede ? (
        <Text
          className="mt-3.5 text-[13px] text-body leading-[24px]"
          style={{ fontFamily: fonts.sansLight }}
        >
          {lede}
        </Text>
      ) : null}
    </Reveal>
  );
}
