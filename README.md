# 비체올린 (VICHEOLLIN) — React Native 앱

Modern Editorial / Swiss Style의 제주 힐링카약파크 앱.
**Expo Router + NativeWind(TailwindCSS) + TypeScript + Zustand + Zod + React Query**

## 시작하기

```bash
pnpm install
pnpm start        # Expo Dev Server (i: iOS 시뮬레이터, a: Android)
pnpm ios
pnpm android
```

## 디렉토리 구조

```
app/                        # Expo Router pages & layouts
  _layout.tsx               # 루트 Stack (폰트 로딩, React Query Provider)
  (tabs)/                   # 하단 탭 (홈 · 체험 · 소식 · 메뉴)
    _layout.tsx
    index.tsx               # 홈
    experience.tsx          # 체험 허브
    community.tsx           # 소식 (이벤트 + 공지)
    menu.tsx                # 메뉴 (전체 내비 + 회사 정보)
  experience/[slug].tsx     # 카약 / 트라익 상세 (동적 라우트)
  about.tsx                 # 테마파크 소개 (운영시간·요금·가이드·주의)
  park.tsx                  # 공원 (풍경 + 마소너리 갤러리)
  facility.tsx              # 부대시설
  support.tsx               # 고객센터 (문의 폼 · 문의 내역 · FAQ)
src/
├── components/
│   ├── ui/                 # Button, Chip, List(Ruled/StepList/RuleList),
│   │                       # PageTitle, Placeholder, Section
│   ├── AppHeader.tsx       # 브랜드 헤더 (+뒤로가기)
│   └── Screen.tsx          # 공통 스크린 셸
├── constants/
│   ├── theme.ts            # 컬러 토큰 · 폰트 패밀리 · 플레이스홀더 톤
│   └── content.ts          # 모든 콘텐츠 데이터 (요금·시간·FAQ·공지 등)
├── contexts/               # (예약) React Context
├── hooks/
│   └── queries/            # (예약) React Query hooks — API 연결 시 사용
├── lib/
│   └── queryClient.ts      # React Query 클라이언트
├── locales/                # (예약) i18n ko/en
├── schemas/
│   └── inquiry.ts          # Zod 문의 폼 검증
├── services/               # (예약) API calls
├── store/
│   └── useInquiryStore.ts  # Zustand — 문의 내역 상태
├── types/
│   └── content.ts          # 콘텐츠 타입 정의
└── utils/
    └── date.ts
```

## 디자인 토큰

- `ink` #141612 (텍스트/블랙) · `moss` #3A5A40 (유일한 그린 액센트)
- `body` / `mute` / `dim` 텍스트 위계 · `line` 헤어라인
- Noto Sans KR(300–900) + Noto Serif KR — `@expo-google-fonts`로 로딩
- 카드/그림자 없는 헤어라인 룰 기반 에디토리얼 레이아웃

## 컨벤션

- `import React from "react"` 사용하지 않음 (react-jsx 자동 런타임)
- 스타일은 NativeWind `className` + 폰트만 `style` (RN은 fontFamily 상속 불가)
- 콘텐츠는 전부 `src/constants/content.ts` — API 연결 시 `services/` +
  `hooks/queries/`로 이전하고 타입은 `src/types/content.ts` 재사용
- 문의 폼: Zod 검증(`schemas/inquiry.ts`) → Zustand(`useInquiryStore`) 반영.
  백엔드 연결 시 store의 `submit`을 mutation으로 교체

## 이미지

모든 이미지는 `<Placeholder>` 컴포넌트입니다. 실제 사진이 준비되면
`expo-image`의 `<Image>`로 교체하세요 (`contentFit="cover"` 권장).
