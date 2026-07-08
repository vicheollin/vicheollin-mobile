import { Text, View } from "react-native";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Screen } from "@/components/Screen";
import { PageTitle, Ruled, Section, SectionLabel } from "@/components/ui";
import { EVENTS, NOTICES } from "@/constants/content";
import { colors, fonts } from "@/constants/theme";
import type { Notice } from "@/types/content";

const CAT_COLOR: Record<Notice["cat"], string> = {
  공지: colors.ink,
  이벤트: colors.moss,
  안내: colors.dim,
};

export default function CommunityScreen() {
  return (
    <Screen title="커뮤니티">
      <Section className="pt-8">
        <PageTitle label="COMMUNITY" title="소식" />
      </Section>

      <Section className="pt-7">
        <Reveal>
          <SectionLabel className="mb-3.5">이벤트</SectionLabel>
        </Reveal>
        <Stagger>
          <Ruled>
            {EVENTS.map((ev) => (
              <StaggerItem key={ev.title}>
                <View className="border-line border-b py-5">
                  <Text
                    className="text-[9.5px] text-moss tracking-[2.5px]"
                    style={{ fontFamily: fonts.sansBold }}
                  >
                    EVENT
                  </Text>
                  <Text
                    className="mt-2 text-[17px] text-ink tracking-[-0.5px]"
                    style={{ fontFamily: fonts.sansBold }}
                  >
                    {ev.title}
                  </Text>
                  <Text
                    className="mt-1.5 text-body text-xs leading-[21px]"
                    style={{ fontFamily: fonts.sansLight }}
                  >
                    {ev.desc}
                  </Text>
                  <Text
                    className="mt-2 text-[11px] text-dim"
                    style={{ fontFamily: fonts.sans }}
                  >
                    {ev.period}
                  </Text>
                </View>
              </StaggerItem>
            ))}
          </Ruled>
        </Stagger>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <View className="mb-3.5 flex-row items-baseline justify-between">
            <SectionLabel>공지사항</SectionLabel>
            <Text
              className="text-[11px] text-dim"
              style={{ fontFamily: fonts.sans }}
            >
              총 {NOTICES.length}건
            </Text>
          </View>
        </Reveal>
        <Stagger>
          <Ruled>
            {NOTICES.map((n) => (
              <StaggerItem key={n.title}>
                <View className="border-line border-b py-3.5">
                  <View className="flex-row items-baseline gap-2.5">
                    <Text
                      className="w-9 text-[10px] tracking-[1px]"
                      style={{
                        fontFamily: fonts.sansBold,
                        color: CAT_COLOR[n.cat],
                      }}
                    >
                      {n.cat}
                    </Text>
                    <Text
                      className="flex-1 text-[13px] text-ink leading-[21px]"
                      style={{ fontFamily: fonts.sans }}
                    >
                      {n.title}
                    </Text>
                  </View>
                  <Text
                    className="mt-1 pl-[46px] text-[10.5px] text-dim"
                    style={{ fontFamily: fonts.sans }}
                  >
                    {n.date}
                  </Text>
                </View>
              </StaggerItem>
            ))}
          </Ruled>
        </Stagger>
      </Section>
    </Screen>
  );
}
