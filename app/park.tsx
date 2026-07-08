import { Text, View } from "react-native";
import { Reveal } from "@/components/motion";
import { Screen } from "@/components/Screen";
import { PageTitle, Placeholder, Section, SectionLabel } from "@/components/ui";
import { PARK_GALLERY, PARK_SCENES } from "@/constants/content";
import { fonts } from "@/constants/theme";
import type { GalleryItem } from "@/types/content";

/** Split items into N columns for a simple masonry layout. */
function toColumns(items: GalleryItem[], count: number): GalleryItem[][] {
  const columns: GalleryItem[][] = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    columns[index % count].push(item);
  });
  return columns;
}

export default function ParkScreen() {
  const columns = toColumns(PARK_GALLERY, 2);

  return (
    <Screen title="공원">
      <Section className="pt-8">
        <PageTitle
          label="GARDEN & PARK"
          title={"천천히 걸어야\n보이는 풍경"}
          accentDot
          lede="능소화동굴부터 석상광장, 곶자왈 둘레길까지. 계절마다 다른 얼굴을 보여주는 비체올린의 공원입니다."
        />
      </Section>

      <Section className="gap-7 pt-7">
        {PARK_SCENES.map((scene) => (
          <View key={scene.title}>
            <Reveal kind="mask">
              <Placeholder label={scene.imgLabel} tone="green" height={200} />
            </Reveal>
            <Reveal>
              <SectionLabel className="mt-3">{scene.en}</SectionLabel>
              <Text
                className="mt-1 text-[19px] text-ink tracking-[-0.6px]"
                style={{ fontFamily: fonts.sansBold }}
              >
                {scene.title}
              </Text>
              <Text
                className="mt-1.5 text-[12.5px] text-body leading-[22px]"
                style={{ fontFamily: fonts.sansLight }}
              >
                {scene.desc}
              </Text>
            </Reveal>
          </View>
        ))}
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">공원 갤러리</SectionLabel>
        </Reveal>
        <View className="flex-row gap-2.5">
          {columns.map((column, columnIndex) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed 2-column layout, order never changes
            <View key={columnIndex} className="flex-1 gap-2.5">
              {column.map((item, i) => (
                <Reveal
                  key={item.label}
                  kind="mask"
                  delay={Math.min(i * 0.11, 0.66)}
                >
                  <Placeholder label={item.label} aspectRatio={item.ratio} />
                </Reveal>
              ))}
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}
