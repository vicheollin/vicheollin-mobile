import { create } from "zustand";
import { BASE_INQUIRIES, BASE_INQUIRY_COUNT } from "@/constants/content";
import type { Inquiry } from "@/types/content";
import { todayString } from "@/utils/date";

export type BoardInquiry = Inquiry & { id: number };

type InquiryState = {
  inquiries: BoardInquiry[];
  totalCount: number;
  /**
   * Adds a locked (private) inquiry to the top of the board.
   * Mock board — phone/message from the form are validated but not stored.
   */
  submit: (payload: { name: string }) => void;
};

let nextId = BASE_INQUIRIES.length;

export const useInquiryStore = create<InquiryState>((set) => ({
  inquiries: BASE_INQUIRIES.map((inquiry, id) => ({ ...inquiry, id })),
  totalCount: BASE_INQUIRY_COUNT,
  submit: ({ name }) =>
    set((s) => ({
      inquiries: [
        {
          id: nextId++,
          title: "문의드립니다",
          writer: name,
          date: todayString(),
          views: 0,
          locked: true,
        },
        ...s.inquiries,
      ],
      totalCount: s.totalCount + 1,
    })),
}));
