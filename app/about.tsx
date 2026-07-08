import { Text, View } from "react-native";
import {
  ParallaxBleed,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { Screen } from "@/components/Screen";
import {
  KeyValueRow,
  PageTitle,
  Ruled,
  RuleList,
  Section,
  SectionLabel,
  StepList,
} from "@/components/ui";
import { ABOUT_CAUTION, FEES, GUIDE_STEPS, HOURS } from "@/constants/content";
import { fonts } from "@/constants/theme";

export default function AboutScreen() {
  return (
    <Screen title="테마파크 소개">
      <Section className="pt-8">
        <PageTitle
          label="ABOUT"
          title="테마파크 소개"
          lede="비체올린은 2015년 문을 연 국내 최초의 힐링카약파크입니다. 숲터널을 모티브로 한 수로, 능소화동굴, 곶자왈 둘레길이 하나의 공원으로 이어집니다."
        />
      </Section>

      <ParallaxBleed
        label="placeholder — 파크 항공 전경"
        tone="green"
        height={200}
        className="mt-6"
      />

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">운영 시간</SectionLabel>
          <Ruled>
            {HOURS.map((hour) => (
              <KeyValueRow
                key={hour.label}
                label={hour.label}
                value={hour.value}
              />
            ))}
          </Ruled>
          <Text
            className="mt-3 text-[11px] text-dim leading-[18px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            연중무휴 · 기상 상황에 따라 해상 체험이 중단될 수 있습니다.
          </Text>
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">
            이용 요금 — 공원 관람 포함
          </SectionLabel>
        </Reveal>
        <Stagger>
          <Ruled>
            {FEES.map((fee) => (
              <StaggerItem key={fee.type}>
                <View className="border-line border-b py-3.5">
                  <View className="flex-row items-baseline justify-between gap-3">
                    <Text
                      className="flex-1 text-[13px] text-ink"
                      style={{ fontFamily: fonts.sansMedium }}
                    >
                      {fee.type}
                    </Text>
                    <Text
                      className="text-[13px] text-moss"
                      style={{ fontFamily: fonts.sansBold }}
                    >
                      {fee.price}
                    </Text>
                  </View>
                  <Text
                    className="mt-0.5 text-[11px] text-dim"
                    style={{ fontFamily: fonts.sansLight }}
                  >
                    {fee.note}
                  </Text>
                </View>
              </StaggerItem>
            ))}
          </Ruled>
          <StaggerItem>
            <Text
              className="mt-3 text-[11px] text-dim leading-[18px]"
              style={{ fontFamily: fonts.sansLight }}
            >
              36개월 미만 무료(증빙 지참) · 경로·장애인·유공자 할인 현장 신분증
              제시 · 단체(20인 이상) 전화 문의
            </Text>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">관람 가이드</SectionLabel>
          <StepList steps={GUIDE_STEPS} />
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">주의사항</SectionLabel>
          <RuleList items={ABOUT_CAUTION} />
        </Reveal>
      </Section>
    </Screen>
  );
}
