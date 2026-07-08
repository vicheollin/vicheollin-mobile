import Feather from "@expo/vector-icons/Feather";
import { type Href, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Stagger, StaggerItem } from "@/components/motion";
import { Screen } from "@/components/Screen";
import { PageTitle, Placeholder, Section, SectionLabel } from "@/components/ui";
import { colors, fonts, type StripeTone } from "@/constants/theme";

const CARDS: {
  en: string;
  title: string;
  desc: string;
  imgLabel: string;
  tone: StripeTone;
  href: Href;
}[] = [
  {
    en: "HEALING KAYAK",
    title: "카약",
    desc: "숲터널 수로 위에서 즐기는 정글 카약 탐험. 여름엔 능소화동굴을 지나갑니다.",
    imgLabel: "placeholder — 카약",
    tone: "aqua",
    href: "/experience/kayak",
  },
  {
    en: "DRIFT TRIKE",
    title: "트라익",
    desc: "시속 80km, 전용 트랙 위의 드리프트 트라익.",
    imgLabel: "placeholder — 트라익",
    tone: "sand",
    href: "/experience/trike",
  },
  {
    en: "GARDEN WALK",
    title: "공원 산책",
    desc: "곶자왈 둘레길과 석상광장, 계절마다 다른 산책 코스.",
    imgLabel: "placeholder — 공원",
    tone: "green",
    href: "/park",
  },
];

export default function ExperienceScreen() {
  return (
    <Screen title="체험">
      <Section className="pt-8">
        <PageTitle label="EXPERIENCES" title="체험" />
      </Section>
      <Stagger className="gap-6 px-6 pt-7">
        {CARDS.map((card) => (
          <StaggerItem key={card.title}>
            <Pressable
              onPress={() => router.navigate(card.href)}
              accessibilityRole="button"
              className="active:opacity-80"
            >
              <Placeholder
                label={card.imgLabel}
                tone={card.tone}
                height={170}
              />
              <SectionLabel className="mt-3">{card.en}</SectionLabel>
              <View className="mt-1 flex-row items-center gap-2">
                <Text
                  className="text-[21px] text-ink tracking-[-0.8px]"
                  style={{ fontFamily: fonts.sansBold }}
                >
                  {card.title}
                </Text>
                <Feather name="arrow-right" size={15} color={colors.moss} />
              </View>
              <Text
                className="mt-1 text-body text-xs leading-[20px]"
                style={{ fontFamily: fonts.sansLight }}
              >
                {card.desc}
              </Text>
            </Pressable>
          </StaggerItem>
        ))}
      </Stagger>
    </Screen>
  );
}
