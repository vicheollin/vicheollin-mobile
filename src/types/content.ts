import type { Href } from "expo-router";
import type { StripeTone } from "@/constants/theme";

export type Step = { num: string; title: string; desc: string };
export type Hour = { label: string; value: string };
export type Fee = { type: string; note: string; price: string };
export type GalleryItem = { label: string; caption?: string; ratio?: number };
export type ParkScene = {
  en: string;
  title: string;
  desc: string;
  imgLabel: string;
};
export type Facility = {
  title: string;
  desc: string;
  meta: string;
  imgLabel: string;
};
export type Event = { title: string; desc: string; period: string };
export type Notice = {
  cat: "공지" | "이벤트" | "안내";
  title: string;
  date: string;
};
export type Faq = { q: string; a: string };

export type Inquiry = {
  title: string;
  writer: string;
  date: string;
  views: number;
  locked: boolean;
};

export type Experience = {
  slug: "kayak" | "trike";
  en: string;
  label: string;
  /** Short Korean name for headers/nav (e.g. "카약"). */
  name: string;
  title: string;
  tone: StripeTone;
  imgLabel: string;
  chips: string[];
  quote: string;
  body: string;
  steps: Step[];
  safety: string[];
  caution: string[];
  next: { label: string; href: Href };
};
