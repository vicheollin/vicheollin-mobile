import type {
  Event,
  Experience,
  Facility,
  Faq,
  Fee,
  GalleryItem,
  Hour,
  Inquiry,
  Notice,
  ParkScene,
  Step,
} from "@/types/content";

export const HOURS: Hour[] = [
  { label: "하절기 (5월–8월)", value: "08:45 – 18:30" },
  { label: "간절기 (3–4월 · 9–10월)", value: "08:45 – 18:00" },
  { label: "동절기 (11월–2월)", value: "08:45 – 17:30" },
  { label: "입장 마감", value: "폐장 40분 전" },
];

export const FEES: Fee[] = [
  {
    type: "카약 + 공원 입장",
    note: "성인 18,000 · 청소년 17,000 · 소인 16,000",
    price: "18,000원~",
  },
  {
    type: "트라익 + 공원 입장",
    note: "전 연령 동일 · 만 10–65세, 140cm 이상",
    price: "25,000원",
  },
  {
    type: "트라익 + 카약 + 공원",
    note: "성인 41,000 · 청소년 40,000 · 소인 39,000",
    price: "41,000원~",
  },
  { type: "36개월 미만", note: "증빙서류 지참", price: "무료" },
];

export const GUIDE_STEPS: Step[] = [
  {
    num: "01",
    title: "매표 · 접수",
    desc: "입구 매표소에서 체험을 접수합니다. 온라인 구매 시 바코드를 제시해주세요.",
  },
  {
    num: "02",
    title: "안전 교육",
    desc: "카약은 매 40분, 트라익은 매 15분 간격으로 교육 후 탑승합니다.",
  },
  {
    num: "03",
    title: "체험 즐기기",
    desc: "카약, 트라익, 공원 산책을 순서대로 즐깁니다.",
  },
  {
    num: "04",
    title: "휴식 · 마무리",
    desc: "식당과 편의점에서 쉬어가며 하루를 마무리합니다.",
  },
];

export const ABOUT_CAUTION: string[] = [
  "모든 체험은 현장 안전 교육 이수 후 이용 가능합니다.",
  "음주 후에는 카약·트라익 체험이 제한됩니다.",
  "반려동물은 동반 가능합니다. 산책로에서는 목줄을 착용해주세요.",
  "드론 촬영은 사전 허가가 필요하며, 파크 전 구역은 금연입니다.",
];

export const EXPERIENCES: Record<"kayak" | "trike", Experience> = {
  kayak: {
    slug: "kayak",
    en: "HEALING KAYAK",
    label: "KAYAK",
    name: "카약",
    title: "숲 사이,\n물길을 젓다",
    tone: "aqua",
    imgLabel: "placeholder — 능소화동굴 수로 카약",
    chips: [
      "약 40분",
      "매 40분 간격 승선",
      "11세 이상 단독 탑승",
      "우천 시 가능",
    ],
    quote:
      "노를 저을 때마다 능소화 그늘이 머리 위로 지나갑니다. 물 위에서만 보이는 공원의 얼굴이 있습니다.",
    body: "숲터널을 모티브로 만든 수로에서 즐기는 정글 카약 탐험. 여름이면 전국 최대 규모의 능소화가 동굴 수로를 뒤덮습니다. 탑승 전 승선 교육이 진행되어 초보자도 쉽게 참여할 수 있으며, 120cm 미만 어린이는 보호자와 함께 탑승합니다.",
    steps: [
      {
        num: "01",
        title: "현장 접수",
        desc: "매표소에서 접수 후 방수팩과 구명조끼를 수령합니다.",
      },
      {
        num: "02",
        title: "승선 교육",
        desc: "패들 조작법과 안전 수칙을 배웁니다. 매 40분 간격 진행.",
      },
      {
        num: "03",
        title: "카약 탑승",
        desc: "안전요원의 도움을 받아 승선장에서 탑승합니다.",
      },
      {
        num: "04",
        title: "수로 탐험",
        desc: "숲터널 수로와 능소화동굴을 따라 약 40분간 체험합니다.",
      },
    ],
    safety: [
      "구명조끼는 체험 내내 반드시 착용합니다.",
      "안전요원의 안내와 지정 수로를 따라주세요.",
      "탑승 중 자리에서 일어나지 않습니다.",
      "소지품은 방수팩에 보관해주세요.",
    ],
    caution: [
      "11세 미만은 보호자 동반 탑승, 120cm 미만은 보호자 동승이 필수입니다.",
      "우천 시에도 이용 가능합니다. (우비 현장 판매 1,000원)",
      "현장 안전요원 판단에 따라 탑승이 제한될 수 있습니다.",
      "옷이 젖을 수 있으니 여벌 옷을 준비해주세요.",
    ],
    next: { label: "다음 체험 — 트라익", href: "/experience/trike" },
  },
  trike: {
    slug: "trike",
    en: "DRIFT TRIKE",
    label: "TRIKE PARK",
    name: "트라익",
    title: "바람의 속도,\n드리프트 트라익",
    tone: "sand",
    imgLabel: "placeholder — 트라익 트랙 주행 컷",
    chips: ["시속 80km", "매 15분 간격 교육·탑승", "만 10–65세 · 140cm 이상"],
    quote: "낮게 앉아 트랙을 미끄러지는 순간, 제주의 바람이 온몸을 지나갑니다.",
    body: "전용 트랙 위에서 즐기는 드리프트 트라익은 비체올린에서 가장 빠른 시간입니다. 매 15분 간격으로 교육 후 탑승하며, 휴게시간은 12:30–13:30입니다.",
    steps: [
      {
        num: "01",
        title: "현장 접수",
        desc: "매표소에서 접수 후 헬멧과 보호장비를 착용합니다.",
      },
      {
        num: "02",
        title: "탑승 교육",
        desc: "조작법과 트랙 수칙을 배웁니다. 매 15분 간격 진행.",
      },
      {
        num: "03",
        title: "트랙 주행",
        desc: "전용 트랙에서 드리프트 주행을 즐깁니다.",
      },
      {
        num: "04",
        title: "복귀 · 반납",
        desc: "주행 후 장비를 반납하고 공원 관람을 이어갑니다.",
      },
    ],
    safety: [
      "헬멧과 보호장비를 반드시 착용합니다.",
      "주행 중 핸들에서 손을 떼지 않습니다.",
      "지정 트랙과 진행 방향을 지켜주세요.",
      "안전요원의 수신호에 따라 주행합니다.",
    ],
    caution: [
      "만 10세 이상 65세 이하, 신장 140cm 이상 탑승 가능합니다.",
      "점검 시간(10:15 / 11:30 / 14:45 / 15:45)에는 운행이 잠시 중단됩니다.",
      "우천 시 트랙 상황에 따라 운행이 중단될 수 있습니다.",
      "치마보다는 바지 착용을 권장합니다.",
    ],
    next: { label: "다음 체험 — 공원 산책", href: "/park" },
  },
};

export const HOME_GALLERY: GalleryItem[] = [
  { label: "능소화동굴 수로", caption: "한여름의 능소화동굴" },
  { label: "카약 위 가족", caption: "아이와 함께하는 첫 카약" },
  { label: "석상광장", caption: "석상광장의 오후" },
  { label: "트라익 트랙", caption: "드리프트 트라익" },
  { label: "곶자왈 둘레길", caption: "곶자왈 둘레길" },
  { label: "유채꽃길", caption: "봄의 유채꽃길" },
];

export const PARK_SCENES: ParkScene[] = [
  {
    en: "TRUMPET CREEPER CAVE",
    title: "능소화동굴",
    desc: "전국 최대 규모의 능소화 축제가 열리는 곳. 한여름이면 주황빛 꽃이 동굴 수로를 가득 덮습니다.",
    imgLabel: "placeholder — 능소화동굴",
  },
  {
    en: "GOTJAWAL TRAIL",
    title: "곶자왈 둘레길",
    desc: "제주 천혜의 자연숲 사이로 이어지는 둘레길. 동백길과 유채꽃길, 감귤밭을 지나 미로공원까지 닿습니다.",
    imgLabel: "placeholder — 곶자왈 둘레길",
  },
  {
    en: "STONE STATUE PLAZA",
    title: "석상광장",
    desc: "제주 석상들이 모여 있는 광장이자 비체올린의 대표 포토존입니다.",
    imgLabel: "placeholder — 석상광장",
  },
];

export const PARK_GALLERY: GalleryItem[] = [
  { label: "봄 · 유채꽃길", ratio: 4 / 5 },
  { label: "여름 · 능소화", ratio: 3 / 4 },
  { label: "가을 · 감귤밭", ratio: 1 },
  { label: "겨울 · 동백길", ratio: 4 / 3 },
  { label: "미로공원", ratio: 3 / 4 },
  { label: "석상광장", ratio: 1 },
  { label: "카약 수로", ratio: 4 / 5 },
  { label: "캠핑장", ratio: 4 / 3 },
];

export const FACILITIES: Facility[] = [
  {
    title: "식당 & 편의점",
    desc: "식사와 간식, 음료를 한자리에서. 우비, 방수팩 등 체험용품도 구매할 수 있습니다.",
    meta: "08:45 – 18:00 · 입구 옆",
    imgLabel: "식당 · 편의점 내부 사진",
  },
  {
    title: "캠핑장",
    desc: "공원 안에서 하룻밤. 자연 속에서 머무는 캠핑 사이트를 운영합니다. 이용료 별도, 사전 예약제.",
    meta: "예약제 · 공원 안쪽",
    imgLabel: "캠핑장 전경 사진",
  },
  {
    title: "기념품 숍",
    desc: "비체올린 굿즈와 제주 공예품, 엽서. 여행의 기억을 담아갈 수 있는 소품들.",
    meta: "08:45 – 18:00 · 편의점 내",
    imgLabel: "기념품 진열 사진",
  },
  {
    title: "샤워장 · 탈의실",
    desc: "카약 체험 후 이용할 수 있는 온수 샤워장과 탈의실, 물품 보관함을 운영합니다.",
    meta: "08:45 – 18:00 · 승선장 옆",
    imgLabel: "샤워장 입구 사진",
  },
];

export const CONVENIENCES: string[] = [
  "무료 주차장 (대형버스 가능)",
  "유모차 · 휠체어 대여",
  "물품 보관함 · 탈의실 · 샤워장",
  "수유실 · 기저귀 교환대",
  "반려동물 동반 가능",
  "AED · 응급 구급함 상시 비치",
];

export const EVENTS: Event[] = [
  {
    title: "능소화 축제",
    desc: "전국 최대 규모의 능소화 축제. 한여름의 능소화동굴 수로를 카약으로 통과하는 특별한 계절입니다.",
    period: "2026. 6월 말 – 8월 초",
  },
  {
    title: "인스타그램 인증 이벤트",
    desc: "#비체올린 해시태그와 함께 사진을 올리면 편의점 음료 1개를 드립니다.",
    period: "상시 진행",
  },
];

export const NOTICES: Notice[] = [
  {
    cat: "공지",
    title: "하절기 운영시간 안내 (08:45–18:30)",
    date: "2026.06.28",
  },
  {
    cat: "공지",
    title: "태풍 북상에 따른 카약 체험 임시 중단 안내 (7/5–7/6)",
    date: "2026.06.30",
  },
  {
    cat: "이벤트",
    title: "2026 능소화 축제 개막 — 개화 현황 안내",
    date: "2026.06.20",
  },
  {
    cat: "안내",
    title: "트라익 파크 트랙 정기 점검 시간 안내",
    date: "2026.06.12",
  },
  {
    cat: "공지",
    title: "주차장 확장 공사 완료 — 대형버스 주차 가능",
    date: "2026.05.30",
  },
  {
    cat: "안내",
    title: "단체(20인 이상) 할인 안내 및 예약 방법",
    date: "2026.05.18",
  },
];

export const FAQS: Faq[] = [
  {
    q: "예약 없이 방문해도 되나요?",
    a: "네, 현장 접수로 이용 가능합니다. 성수기(7–8월) 능소화 축제 기간 주말에는 대기가 길어질 수 있어 전화 문의를 권장합니다.",
  },
  {
    q: "카약은 수영을 못해도 탈 수 있나요?",
    a: "구명조끼를 착용하고 잔잔한 수로에서 진행되며 안전요원이 상시 대기하므로 안전하게 즐기실 수 있습니다. 11세 이상은 단독 탑승이 가능합니다.",
  },
  {
    q: "비 오는 날에도 운영하나요?",
    a: "카약은 우천 시에도 이용 가능합니다(우비 현장 판매 1,000원). 트라익은 트랙 상황에 따라 중단될 수 있으니 방문 전 확인해주세요.",
  },
  {
    q: "트라익은 누구나 탈 수 있나요?",
    a: "만 10세 이상 65세 이하, 신장 140cm 이상이면 탑승 가능합니다. 매 15분 간격으로 교육 후 탑승합니다.",
  },
  {
    q: "반려동물 동반이 가능한가요?",
    a: "네, 가능합니다. 산책로에서는 목줄을 착용해주시고, 카약·트라익 체험은 동반이 제한됩니다.",
  },
];

export const BASE_INQUIRY_COUNT = 534;

export const BASE_INQUIRIES: Inquiry[] = [
  {
    title: "제주투어패스 이용시 입장료만 무료인가요? 아니면 카약도 무료인가요?",
    writer: "에버누리",
    date: "2026-05-21",
    views: 65,
    locked: false,
  },
  {
    title: "카약체험",
    writer: "조은숙",
    date: "2026-03-12",
    views: 2,
    locked: true,
  },
  {
    title: "입장권 구매 (1)",
    writer: "임상준",
    date: "2026-01-19",
    views: 3,
    locked: true,
  },
  {
    title: "제주패스로 카약이용시 추가금",
    writer: "이정훈",
    date: "2025-11-30",
    views: 2,
    locked: true,
  },
  {
    title: "제주 지역 제휴 협력 제안드립니다",
    writer: "최진혁",
    date: "2025-11-18",
    views: 1,
    locked: true,
  },
  {
    title: "카약 이용시 구명 조끼 착용 여부 확인 부탁해요",
    writer: "카약 이용 문의",
    date: "2025-10-15",
    views: 2,
    locked: true,
  },
];

export const CONTACT = {
  tel: "064-773-0000",
  fax: "064-773-5678",
  address: "제주특별자치도 제주시 한경면 판포리 725-1",
  hours: "매일 08:45 – 18:30 (하절기)",
  instagram: "https://www.instagram.com",
} as const;

export const COMPANY = {
  name: "주식회사 비체올린",
  ceo: "강정훈",
  regNo: "736-88-00499",
  copyright: "COPYRIGHT 2015 THE VICHEOLLIN.",
} as const;
