import Feather from "@expo/vector-icons/Feather";
import { type Href, router } from "expo-router";
import { Linking, Pressable, Text, View } from "react-native";
import { Stagger, StaggerItem } from "@/components/motion";
import { Screen } from "@/components/Screen";
import { PageTitle, Ruled, Section } from "@/components/ui";
import { COMPANY, CONTACT } from "@/constants/content";
import { colors, fonts } from "@/constants/theme";

const MENU: { label: string; href: Href }[] = [
  { label: "테마파크 소개", href: "/about" },
  { label: "카약", href: "/experience/kayak" },
  { label: "트라익", href: "/experience/trike" },
  { label: "공원", href: "/park" },
  { label: "부대시설", href: "/facility" },
  { label: "커뮤니티", href: "/community" },
  { label: "고객센터", href: "/support" },
];

export default function MenuScreen() {
  return (
    <Screen title="메뉴">
      <Section className="pt-8">
        <PageTitle label="MENU" title="메뉴" />
      </Section>
      <Section className="pt-6">
        <Stagger>
          <Ruled>
            {MENU.map((item) => (
              <StaggerItem key={item.label}>
                <Pressable
                  onPress={() => router.navigate(item.href)}
                  accessibilityRole="button"
                  className="flex-row items-center justify-between border-line border-b py-[19px] active:opacity-70"
                >
                  <Text
                    className="text-base text-ink"
                    style={{ fontFamily: fonts.sansMedium }}
                  >
                    {item.label}
                  </Text>
                  <Feather name="arrow-right" size={15} color={colors.moss} />
                </Pressable>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Pressable
                onPress={() => Linking.openURL(CONTACT.instagram)}
                accessibilityRole="link"
                className="flex-row items-center gap-2.5 border-line border-b py-[19px] active:opacity-70"
              >
                <Feather name="instagram" size={16} color={colors.ink} />
                <Text
                  className="text-base text-ink"
                  style={{ fontFamily: fonts.sansMedium }}
                >
                  인스타그램
                </Text>
                <View className="ml-auto">
                  <Feather
                    name="arrow-up-right"
                    size={15}
                    color={colors.moss}
                  />
                </View>
              </Pressable>
            </StaggerItem>
          </Ruled>
        </Stagger>

        <View className="mt-7">
          {[
            `${COMPANY.name} · 대표자 ${COMPANY.ceo}`,
            `사업자등록번호 ${COMPANY.regNo}`,
            CONTACT.address,
            `TEL ${CONTACT.tel} · FAX ${CONTACT.fax}`,
          ].map((line) => (
            <Text
              key={line}
              className="text-[10.5px] text-dim leading-[19px]"
              style={{ fontFamily: fonts.sansLight }}
            >
              {line}
            </Text>
          ))}
          <Text
            className="mt-2.5 text-[10px] text-dim tracking-[0.8px]"
            style={{ fontFamily: fonts.sansLight }}
          >
            {COMPANY.copyright}
          </Text>
        </View>
      </Section>
    </Screen>
  );
}
