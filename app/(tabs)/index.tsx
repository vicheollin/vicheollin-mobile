import Feather from "@expo/vector-icons/Feather";
import { Link, router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  ParallaxBleed,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { Screen } from "@/components/Screen";
import {
  Button,
  Placeholder,
  Ruled,
  Section,
  SectionLabel,
} from "@/components/ui";
import { HOME_GALLERY, NOTICES } from "@/constants/content";
import { colors, fonts } from "@/constants/theme";

const HOME_INDEX = [
  {
    num: "01",
    title: "카약",
    desc: "숲터널 수로 · 약 40분 · 매 40분 간격",
    href: "/experience/kayak",
  },
  {
    num: "02",
    title: "트라익",
    desc: "전용 트랙 · 시속 80km · 매 15분 간격",
    href: "/experience/trike",
  },
  {
    num: "03",
    title: "공원 산책",
    desc: "곶자왈 둘레길 · 석상광장 · 능소화동굴",
    href: "/park",
  },
] as const;

const HOME_PROGRAM = [
  {
    title: "힐링 카약",
    sub: "숲터널 수로 탐험",
    meta: "40분 간격 승선",
    label: "placeholder — 카약 체험 컷",
    href: "/experience/kayak",
  },
  {
    title: "드리프트 트라익",
    sub: "전용 트랙 주행",
    meta: "15분 간격 교육 후 탑승",
    label: "placeholder — 트라익 트랙 컷",
    href: "/experience/trike",
  },
] as const;

const HOME_NOTICES = NOTICES.slice(0, 4);

export default function HomeScreen() {
  return (
    <Screen title="홈">
      {/* Hero — typography as graphic */}
      <Section className="pt-8">
        <Reveal delay={0.1}>
          <SectionLabel className="mb-3">
            HEALING KAYAK PARK — SINCE 2015
          </SectionLabel>
        </Reveal>
        <Reveal delay={0.25}>
          <Text
            className="text-[40px] text-ink leading-[43px] tracking-[-1.8px]"
            style={{ fontFamily: fonts.sansBlack, paddingTop: 7 }}
          >
            빛에 올린{"\n"}자연, 비체올린<Text className="text-moss">.</Text>
          </Text>
        </Reveal>
        <Reveal delay={0.45}>
          <Text
            className="mt-4 text-[13px] text-body leading-[24px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            국내 최초의 힐링카약파크. 제주 한경의 숲과 수로 위에서 카약을 젓고,
            바람을 달리고, 천천히 걷습니다.
          </Text>
        </Reveal>
      </Section>

      <ParallaxBleed
        label="placeholder — 수로 카약 와이드 컷"
        tone="green"
        height={240}
        className="mt-6"
      />

      <Section className="pt-8">
        <Reveal>
          <Text
            className="text-[16px] text-ink leading-[28px]"
            style={{ fontFamily: fonts.serifSemi }}
          >
            "빛에 올린"이라는 말에서 태어난 이름처럼, 비체올린은 햇빛 위에
            올려놓은 자연 속 <Text className="text-moss">힐링 테마파크</Text>
            입니다.
          </Text>
        </Reveal>
      </Section>

      {/* Experience index */}
      <Section className="pt-9">
        <Reveal>
          <SectionLabel className="mb-3.5">01 — 체험</SectionLabel>
        </Reveal>
        <Stagger>
          <Ruled>
            {HOME_INDEX.map((item) => (
              <StaggerItem key={item.num}>
                <Pressable
                  onPress={() => router.navigate(item.href)}
                  accessibilityRole="button"
                  className="flex-row items-center gap-3.5 border-line border-b py-5 active:opacity-70"
                >
                  <Text
                    className="w-6 text-[11px] text-dim"
                    style={{ fontFamily: fonts.sans }}
                  >
                    {item.num}
                  </Text>
                  <View className="flex-1">
                    <Text
                      className="text-[20px] text-ink tracking-[-0.8px]"
                      style={{ fontFamily: fonts.sansBold }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      className="mt-0.5 text-[11.5px] text-body"
                      style={{ fontFamily: fonts.sansLight }}
                    >
                      {item.desc}
                    </Text>
                  </View>
                  <Feather name="arrow-right" size={17} color={colors.moss} />
                </Pressable>
              </StaggerItem>
            ))}
          </Ruled>
        </Stagger>
      </Section>

      {/* Gallery strip */}
      <View className="pt-9">
        <Reveal>
          <Section className="mb-3.5 flex-row items-baseline justify-between">
            <SectionLabel>02 — 풍경</SectionLabel>
            <Link href="/park" asChild>
              <Pressable accessibilityRole="link" hitSlop={8}>
                <Text
                  className="text-[11px] text-ink underline"
                  style={{ fontFamily: fonts.sansMedium }}
                >
                  공원 전체 보기 →
                </Text>
              </Pressable>
            </Link>
          </Section>
        </Reveal>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2 px-6"
        >
          {HOME_GALLERY.map((g, i) => (
            <View key={g.label} className="w-[150px]">
              <Reveal kind="mask" delay={Math.min(i * 0.11, 0.66)}>
                <Placeholder label={g.label} aspectRatio={4 / 5} />
              </Reveal>
              <Text
                className="mt-1.5 text-[10.5px] text-mute"
                style={{ fontFamily: fonts.sans }}
              >
                {g.caption}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Info — festival / program / news */}
      <Section className="pt-9">
        <Reveal>
          <SectionLabel className="mb-3.5">03 — 안내</SectionLabel>
        </Reveal>

        {/* Featured : festival */}
        <Reveal>
          <Text
            className="mb-3.5 text-[26px] text-ink tracking-[-0.8px]"
            style={{ fontFamily: fonts.sansBlack }}
          >
            FESTIVAL
          </Text>
        </Reveal>
        <Reveal kind="mask">
          <Placeholder
            label="placeholder — 능소화동굴 수로 대표 컷"
            tone="green"
            aspectRatio={16 / 10}
          />
        </Reveal>
        <Reveal>
          <Text
            className="mt-3.5 text-[18px] text-ink tracking-[-0.4px]"
            style={{ fontFamily: fonts.sansBold }}
          >
            2026 능소화 축제
          </Text>
          <Text
            className="mt-0.5 text-[10.5px] text-dim tracking-[1px]"
            style={{ fontFamily: fonts.sansMedium }}
          >
            TRUMPET CREEPER FESTIVAL
          </Text>
          <Text
            className="mt-2.5 text-[12.5px] text-body leading-[22px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            전국 최대 규모의 능소화 축제. 한여름이면 주황빛 꽃이 동굴 수로를
            가득 덮고, 그 아래를 카약으로 통과하는 특별한 계절이 시작됩니다.
          </Text>
        </Reveal>
        <Stagger>
          <Ruled className="mt-3">
            <StaggerItem>
              <View className="flex-row justify-between gap-3 border-line border-b py-3">
                <Text
                  className="text-[12.5px] text-body"
                  style={{ fontFamily: fonts.sansLight }}
                >
                  축제기간
                </Text>
                <Text
                  className="text-[12.5px] text-ink"
                  style={{ fontFamily: fonts.sansMedium }}
                >
                  2026-06-20 – 08-09
                </Text>
              </View>
            </StaggerItem>
            <StaggerItem>
              <View className="flex-row justify-between gap-3 border-line border-b py-3">
                <Text
                  className="text-[12.5px] text-body"
                  style={{ fontFamily: fonts.sansLight }}
                >
                  운영시간
                </Text>
                <Text
                  className="text-[12.5px] text-ink"
                  style={{ fontFamily: fonts.sansMedium }}
                >
                  08:45 – 18:30
                </Text>
              </View>
            </StaggerItem>
            <StaggerItem>
              <View className="flex-row justify-between gap-3 border-line border-b py-3">
                <Text
                  className="text-[12.5px] text-body"
                  style={{ fontFamily: fonts.sansLight }}
                >
                  휴무일
                </Text>
                <Text
                  className="text-[12.5px] text-ink"
                  style={{ fontFamily: fonts.sansMedium }}
                >
                  연중무휴
                </Text>
              </View>
            </StaggerItem>
          </Ruled>
          <StaggerItem>
            <Button
              label="VIEW MORE →"
              variant="outline"
              className="mt-4"
              onPress={() => router.navigate("/park")}
            />
          </StaggerItem>
        </Stagger>

        {/* Program */}
        <Reveal>
          <Text
            className="mt-9 mb-4 text-[26px] text-ink tracking-[-0.8px]"
            style={{ fontFamily: fonts.sansBlack }}
          >
            PROGRAM
          </Text>
        </Reveal>
        <Stagger className="flex-row gap-3.5">
          {HOME_PROGRAM.map((p) => (
            <StaggerItem key={p.title} className="flex-1">
              <Pressable
                onPress={() => router.navigate(p.href)}
                accessibilityRole="button"
                className="active:opacity-70"
              >
                <Placeholder label={p.label} aspectRatio={4 / 3} />
                <Text
                  className="mt-2.5 text-[13.5px] text-ink leading-[18px]"
                  style={{ fontFamily: fonts.sansBold }}
                >
                  {p.title}
                  {"\n"}
                  {p.sub}
                </Text>
                <Text
                  className="mt-1 text-[10.5px] text-dim"
                  style={{ fontFamily: fonts.sansLight }}
                >
                  {p.meta}
                </Text>
              </Pressable>
            </StaggerItem>
          ))}
        </Stagger>

        {/* News */}
        <View className="mt-9 mb-3.5 flex-row items-baseline justify-between">
          <Reveal>
            <Text
              className="text-[26px] text-ink tracking-[-0.8px]"
              style={{ fontFamily: fonts.sansBlack }}
            >
              NEWS
            </Text>
          </Reveal>
          <Link href="/(tabs)/community" asChild>
            <Pressable accessibilityRole="link" hitSlop={8}>
              <Text
                className="text-[11px] text-ink underline"
                style={{ fontFamily: fonts.sansMedium }}
              >
                전체 보기 →
              </Text>
            </Pressable>
          </Link>
        </View>
        <Stagger>
          <Ruled>
            {HOME_NOTICES.map((n) => (
              <StaggerItem key={n.title}>
                <Link href="/(tabs)/community" asChild>
                  <Pressable
                    accessibilityRole="button"
                    className="flex-row items-baseline gap-3 border-line border-b py-3.5 active:opacity-70"
                  >
                    <Text
                      numberOfLines={1}
                      className="flex-1 text-[12.5px] text-body"
                      style={{ fontFamily: fonts.sansLight }}
                    >
                      [{n.cat}] {n.title}
                    </Text>
                    <Text
                      className="text-[10.5px] text-dim"
                      style={{ fontFamily: fonts.sans }}
                    >
                      {n.date}
                    </Text>
                  </Pressable>
                </Link>
              </StaggerItem>
            ))}
          </Ruled>
        </Stagger>

        <Stagger>
          <StaggerItem>
            <Button
              label="문의하기 →"
              variant="outline"
              className="mt-9"
              onPress={() => router.navigate("/support")}
            />
            <Button
              label="테마파크 소개 →"
              className="mt-2.5"
              onPress={() => router.navigate("/about")}
            />
          </StaggerItem>
        </Stagger>
      </Section>
    </Screen>
  );
}
