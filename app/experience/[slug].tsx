import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { ParallaxBleed, Reveal } from "@/components/motion";
import { Screen } from "@/components/Screen";
import {
  Button,
  Chip,
  RuleList,
  Section,
  SectionLabel,
  StepList,
} from "@/components/ui";
import { EXPERIENCES } from "@/constants/content";
import { fonts } from "@/constants/theme";

export default function ExperienceDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const experience =
    slug && slug in EXPERIENCES
      ? EXPERIENCES[slug as keyof typeof EXPERIENCES]
      : null;

  if (!experience) {
    return (
      <Screen title="체험">
        <Section className="pt-10">
          <Text
            className="text-body text-sm"
            style={{ fontFamily: fonts.sans }}
          >
            존재하지 않는 체험입니다.
          </Text>
        </Section>
      </Screen>
    );
  }

  return (
    <Screen title={experience.name}>
      <ParallaxBleed
        label={experience.imgLabel}
        tone={experience.tone}
        height={250}
      />

      <Section className="pt-7">
        <Reveal>
          <SectionLabel className="mb-2.5">{experience.label}</SectionLabel>
          <Text
            className="text-[34px] text-ink leading-[38px] tracking-[-1.4px]"
            style={{ fontFamily: fonts.sansBlack, paddingTop: 6 }}
          >
            {experience.title}
            <Text className="text-moss">.</Text>
          </Text>
          <View className="mt-4 flex-row flex-wrap gap-1.5">
            {experience.chips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </View>
        </Reveal>
        <Reveal>
          <Text
            className="mt-6 text-[15px] text-ink leading-[27px]"
            style={{ fontFamily: fonts.serifSemi }}
          >
            {experience.quote}
          </Text>
          <Text
            className="mt-3.5 text-[12.5px] text-body leading-[23px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            {experience.body}
          </Text>
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">이용 방법</SectionLabel>
          <StepList steps={experience.steps} />
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">안전 수칙</SectionLabel>
          <RuleList items={experience.safety} />
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">주의사항</SectionLabel>
          <RuleList items={experience.caution} />
          <Button
            label={`${experience.next.label} →`}
            variant="outline"
            className="mt-6"
            onPress={() => router.navigate(experience.next.href)}
          />
        </Reveal>
      </Section>
    </Screen>
  );
}
