import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Reveal } from "@/components/motion";
import { Screen } from "@/components/Screen";
import {
  Button,
  KeyValueRow,
  PageTitle,
  Ruled,
  Section,
  SectionLabel,
} from "@/components/ui";
import { CONTACT, FAQS } from "@/constants/content";
import { colors, fonts } from "@/constants/theme";
import { inquirySchema } from "@/schemas/inquiry";
import { useInquiryStore } from "@/store/useInquiryStore";

const INPUT_CLASS = "border-b border-line px-1 py-3.5 text-[13px] text-ink";

const CONTACT_ROWS = [
  ["전화", CONTACT.tel],
  ["팩스", CONTACT.fax],
  ["주소", CONTACT.address],
  ["운영", CONTACT.hours],
] as const;

function InquiryForm() {
  const submit = useInquiryStore((s) => s.submit);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const result = inquirySchema.safeParse({ name, phone, message });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "입력값을 확인해주세요.");
      return;
    }
    submit({ name: result.data.name });
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setName("");
    setPhone("");
    setMessage("");
    setError(null);
  };

  if (sent) {
    return (
      <View className="items-center border border-ink px-5 py-7">
        <Text
          className="text-[15px] text-ink"
          style={{ fontFamily: fonts.sansBold }}
        >
          문의가 접수되었습니다
        </Text>
        <Text
          className="mt-1.5 text-body text-xs"
          style={{ fontFamily: fonts.sansLight }}
        >
          영업일 기준 1–2일 내에 답변드리겠습니다.
        </Text>
        <Button
          label="새 문의 작성"
          variant="outline"
          className="mt-4 self-stretch"
          onPress={handleReset}
        />
      </View>
    );
  }

  return (
    <Ruled>
      <View className="flex-row">
        <TextInput
          value={name}
          onChangeText={(v) => {
            setName(v);
            setError(null);
          }}
          placeholder="성함"
          placeholderTextColor={colors.dim}
          className={`flex-1 border-r ${INPUT_CLASS}`}
          style={{ fontFamily: fonts.sans }}
        />
        <TextInput
          value={phone}
          onChangeText={(v) => {
            setPhone(v);
            setError(null);
          }}
          placeholder="연락처"
          placeholderTextColor={colors.dim}
          keyboardType="phone-pad"
          className={`flex-1 pl-3.5 ${INPUT_CLASS}`}
          style={{ fontFamily: fonts.sans }}
        />
      </View>
      <TextInput
        value={message}
        onChangeText={(v) => {
          setMessage(v);
          setError(null);
        }}
        placeholder="문의 내용을 입력해주세요"
        placeholderTextColor={colors.dim}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        className={`min-h-[96px] ${INPUT_CLASS}`}
        style={{ fontFamily: fonts.sans }}
      />
      {error ? (
        <Text
          className="mt-2.5 text-[11.5px] text-danger"
          style={{ fontFamily: fonts.sans }}
        >
          {error}
        </Text>
      ) : null}
      <Button label="문의 보내기 →" className="mt-4" onPress={handleSubmit} />
    </Ruled>
  );
}

function InquiryBoard() {
  const inquiries = useInquiryStore((s) => s.inquiries);
  const totalCount = useInquiryStore((s) => s.totalCount);

  return (
    <View>
      <View className="mb-3.5 flex-row items-baseline justify-between">
        <SectionLabel>문의 내역</SectionLabel>
        <Text
          className="text-[11px] text-dim"
          style={{ fontFamily: fonts.sans }}
        >
          총 {totalCount}건
        </Text>
      </View>
      <Ruled>
        {inquiries.map((inquiry) => (
          <View key={inquiry.id} className="border-line border-b py-3.5">
            <View className="flex-row items-center gap-2">
              <Text
                className="flex-1 text-[12.5px] text-ink"
                numberOfLines={1}
                style={{ fontFamily: fonts.sans }}
              >
                {inquiry.title}
              </Text>
              {inquiry.locked && (
                <Feather name="lock" size={11} color={colors.dim} />
              )}
            </View>
            <Text
              className="mt-1 text-[10.5px] text-dim"
              style={{ fontFamily: fonts.sans }}
            >
              {inquiry.writer} · {inquiry.date} · 조회 {inquiry.views}
            </Text>
          </View>
        ))}
      </Ruled>
      <Text
        className="mt-2.5 text-[10.5px] text-dim"
        style={{ fontFamily: fonts.sansLight }}
      >
        잠금 표시된 글은 비밀글입니다.
      </Text>
    </View>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Ruled>
      {FAQS.map((faq, index) => {
        const open = openIndex === index;
        return (
          <View key={faq.q} className="border-line border-b">
            <Pressable
              onPress={() => setOpenIndex(open ? -1 : index)}
              accessibilityRole="button"
              accessibilityState={{ expanded: open }}
              className="flex-row items-center justify-between gap-3 py-4 active:opacity-70"
            >
              <Text
                className="flex-1 text-[13.5px] text-ink"
                style={{ fontFamily: fonts.sansMedium }}
              >
                {faq.q}
              </Text>
              <Feather
                name={open ? "minus" : "plus"}
                size={16}
                color={colors.moss}
              />
            </Pressable>
            {open && (
              <Text
                className="pb-4 text-[12.5px] text-body leading-[23px]"
                style={{ fontFamily: fonts.sansLight }}
              >
                {faq.a}
              </Text>
            )}
          </View>
        );
      })}
    </Ruled>
  );
}

export default function SupportScreen() {
  return (
    <Screen title="고객센터">
      <Section className="pt-8">
        <PageTitle
          label="SUPPORT"
          title="고객센터"
          lede="궁금한 점이 있으신가요? 무엇이든 물어보세요."
        />
      </Section>

      <Section className="pt-7">
        <Reveal>
          <SectionLabel className="mb-3.5">문의하기</SectionLabel>
          <InquiryForm />
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">연락처</SectionLabel>
          <Ruled>
            {CONTACT_ROWS.map(([label, value]) => (
              <KeyValueRow key={label} label={label} value={value} />
            ))}
          </Ruled>
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <InquiryBoard />
        </Reveal>
      </Section>

      <Section className="pt-8">
        <Reveal>
          <SectionLabel className="mb-3.5">자주 묻는 질문</SectionLabel>
          <FaqAccordion />
        </Reveal>
      </Section>
    </Screen>
  );
}
