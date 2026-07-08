import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "성함을 입력해주세요."),
  phone: z
    .string()
    .trim()
    .min(9, "연락처를 입력해주세요.")
    .regex(/^[0-9-]+$/, "숫자와 - 만 입력 가능합니다."),
  message: z.string().trim().min(1, "문의 내용을 입력해주세요."),
});

export type InquiryForm = z.infer<typeof inquirySchema>;
