export const colors = {
  ink: "#141612",
  moss: "#3A5A40",
  body: "#5A5D52",
  mute: "#6B6E64",
  dim: "#9A9A8C",
  line: "#DDDCD2",
  lineSoft: "#E2E0D5",
  paper: "#FFFFFF",
  danger: "#A8502E",
} as const;

/** Loaded in app/_layout.tsx via @expo-google-fonts. */
export const fonts = {
  sansLight: "NotoSansKR_300Light",
  sans: "NotoSansKR_400Regular",
  sansMedium: "NotoSansKR_500Medium",
  sansBold: "NotoSansKR_700Bold",
  sansBlack: "NotoSansKR_900Black",
  serif: "NotoSerifKR_400Regular",
  serifSemi: "NotoSerifKR_600SemiBold",
} as const;

/** Striped placeholder tones — swap for real imagery (expo-image) later. */
export const stripeTones = {
  green: ["#D9DED2", "#E6E9E0"],
  aqua: ["#D4DDD8", "#E2E8E3"],
  sand: ["#E0DCCB", "#EBE7D8"],
  beige: ["#E3E1D4", "#EDEBDF"],
} as const;

export type StripeTone = keyof typeof stripeTones;
