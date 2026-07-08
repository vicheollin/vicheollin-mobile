import { Text } from "react-native";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Screen } from "@/components/Screen";
import {
  PageTitle,
  Placeholder,
  RuleList,
  Section,
  SectionLabel,
} from "@/components/ui";
import { CONVENIENCES, FACILITIES } from "@/constants/content";
import { fonts } from "@/constants/theme";

export default function FacilityScreen() {
  return (
    <Screen title="부대시설">
      <Section className="pt-8">
        <PageTitle
          label="FACILITIES"
          title="부대시설"
          lede="체험 사이사이 쉬어갈 수 있는 식당과 편의점, 캠핑장까지. 필요한 것은 파크 안에서 모두 해결하세요."
        />
      </Section>

      <Stagger className="gap-7 px-6 pt-7">
        {FACILITIES.map((facility) => (
          <StaggerItem key={facility.title}>
            <Placeholder label={facility.imgLabel} height={170} />
            <Text
              className="mt-3 text-ink text-lg tracking-[-0.5px]"
              style={{ fontFamily: fonts.sansBold }}
            >
              {facility.title}
            </Text>
            <Text
              className="mt-1 text-[12.5px] text-body leading-[22px]"
              style={{ fontFamily: fonts.sansLight }}
            >
              {facility.desc}
            </Text>
            <Text
              className="mt-2 text-[11px] text-moss tracking-[0.5px]"
              style={{ fontFamily: fonts.sansMedium }}
            >
              {facility.meta}
            </Text>
          </StaggerItem>
        ))}
      </Stagger>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">방문객 편의</SectionLabel>
          <RuleList items={CONVENIENCES} />
        </Reveal>
      </Section>
    </Screen>
  );
}
