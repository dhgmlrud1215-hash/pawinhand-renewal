import { rescueStoryData } from "../rescueStoryData";

export const helpRequestsData = [
  {
    id: 10,
    mainCategory: "도움이 필요해요",
    subCategory: "입양 홍보",

    author: {
        nickname: "하안세상1117",
        profileImage: "/images/community/profile10.jpg",
        introduction: "사지말고 입양하세요.",
    },

    title: "순한 진도믹스 둥이공주에요",

    content: null,

    createdAt: "2026-07-21T15:00:00",
    timeText: "1시간 전",

    images: [
        "/images/community/community10.jpg",
        "/images/community/community10-1.jpg",
        "/images/community/community10-2.jpg",
    ],

    likes: 8,
    shares: 0,
    views: 81,
    comments: 0,

    appLink: "#",

    animalNotice: {
        image: "/images/community/community10-notice.jpg",
        status: "완료",
        gender: "암컷",
        species: "[개] 믹스견",
        noticeNumber: "충북-청주-2025-00369",
        registeredDate: "2025.05.07",
        foundPlace: "팔봉 1길 43-30",
    },

    shelter: {
        name: "반려동물보호센터",
        region: "충청북도 청주시",
        image: "/images/community/shelter-default.png",
    },

    detailSections: [
        {
            title: "기본 정보",
            content:
            "• 이름 : 둥이\n" +
            "• 성별 : 암컷\n" +
            "• 나이 : 24년생 추정\n" +
            "• 몸무게 : 6kg\n" +
            "• 중성화 여부 : 미중성\n" +
            "• 건강상태 : 키트검사 정상 / 사상충 1기 치료 중",
        },

        {
            title: "성격 소개",
            content:
            "둥이는 정말 얌전하고 차분한 아이예요.\n\n" +
            "겁이 많아 아직 사람의 손길을 무서워하고, 혼자 구석에 웅크리고 있다가 조금씩 나와 주변을 살펴봅니다.\n\n" +
            "사람이 가까이 가면 긴장해 떨기도 하지만 공격성은 전혀 없고, 천천히 시간을 두고 다가가면 마음을 여는 아이입니다.\n\n" +
            "배변은 패드에 잘 하고, 외부 소음에도 크게 짖지 않습니다.\n\n" +
            "아이가 안정감을 찾을 때까지 기다려 주고 평생 함께해 주실 가족을 기다리고 있습니다.",
        },

        {
            title: "입양 조건",
            content:
            "• 실내에서 함께 생활하실 분\n" +
            "• 가족 구성원 모두가 입양에 동의하시는 분\n" +
            "• 하루 8시간 이상 집을 비우지 않는 가정\n\n" +
            "둥이의 소심하고 겁많은 성격을 이해해 주시고 끝까지 책임감 있게 사랑해 주실 분을 기다립니다.",
        },

        {
            title: "입양 문의",
            content:
            "📞 010-4885-7686\n\n" +
            "인스타그램 : white_world1117",
        },
        ],
  },

  {
    id: 11,

    mainCategory: "도움이 필요해요",
    subCategory: "입양 홍보",

    author: {
      nickname: "꾹꾸깍까",
      profileImage: "/images/community/profile11.jpg",
      introduction: "사지말고 입양하세요.",
    },

    title: "💙애교쟁이 장수 왕자💙",

    content:
      "*유기동물 입양홍보 필수 입력사항입니다. 입력되지 않은 글은 삭제될 수 있습니다.",

    createdAt: "2026-07-21T17:34:00",
    timeText: "26분 전",

    images: [
      "/images/community/community11.jpg",
      "/images/community/community11-1.jpg",
      "/images/community/community11-2.jpg",
      "/images/community/community11-3.jpg",
      "/images/community/community11-4.jpg",
    ],

    likes: null,
    shares: null,
    views: null,
    comments: null,

    appLink:
      "http://pawinhand.kr/link/linker.html?type=story&idx=388754",

    animalNotice: null,

    shelter: null,

    detailSections: [
      {
        title: "동물정보",
        content:
          "💙 이름: 장수\n" +
          "💙 출생: 2016년생 추정\n" +
          "💙 체중: 18kg 이내\n" +
          "💙 성별: 중성화 완료 왕다님\n\n" +
          "장수 sns링크 : https://www.instagram.com/p/Ctq0GXHpjUt/?igshid=MzRlODBiNWFlZA==",
      },

      {
        title: "입양(임보)조건",
        content:
          "🐾 확인서 작성 후 집안 및 산책로 내외부 사진 공유\n" +
          "🐾 SNS 계정 생성 및 소식 공유\n" +
          "🐾 동물 등록/항체가 검사/사상충 검사 진행\n" +
          "🐾 중문 설치, 물품 구비\n" +
          "🐾 소식은 1년간 입양:월 1회, 임보:주 3회 이상이며 제한이 없습니다\n" +
          "🐾 필요 물품은 아이 성향에 따라 달라질 수 있습니다\n" +
          "🐾 안전과 직결된 부분은 요청드린 제품을 구매해 주셔야 합니다.",
      },

      {
        title: "입양(임보)방법",
        content:
          "신청서 제출하기 전에 한 생명을 책임지는 일에 필요한 만큼 자세하고 신중하게 작성해 주세요🙏\n\n" +
          "01029513665로 문자, 전화 주시면 신청서 링크 보내드리겠습니다",
      },

      {
        title: "입양 진행 안내",
        content:
          "🐾 신청서 작성 및 검토 후 유선, 대면 인터뷰 진행 입양/임보 확정 및 이동 절차 등 세부 항목 논의\n" +
          "🐾 신청서 제출 이후 첫 상담까지 최대 약 7일까지 소요될 수 있습니다\n" +
          "🐾 신청서를 제출한다고 해서 임보/입양이 확정되지 않습니다.",
      },

      {
        title: "안내 사항",
        content:
          "* 모금을 유도하는 치료비 내역, 모금 내역 등은 기재할 수 없습니다. 입양홍보 목적으로만 이용해주세요.",
      },
    ],
  },

  {
    id: 12,

    mainCategory: "도움이 필요해요",
    subCategory: "입양 홍보",

    author: {
      nickname: "쿠키초코맘",
      profileImage: "/images/community/profile12.png",
      introduction: "사지말고 입양하세요.",
    },

    title: "얼굴미남 석양이 가족찾아요^^~",

    content:
      "*유기동물 입양홍보 필수 입력사항입니다. 입력되지 않은 글은 삭제될 수 있습니다.",

    createdAt: "2026-07-21T17:16:00",
    timeText: "44분 전",

    images: [
      "/images/community/community12.png",
      "/images/community/community12-1.png",
      "/images/community/community12-2.png",
      "/images/community/community12-3.png",
      "/images/community/community12-4.png",
    ],

    likes: null,
    shares: null,
    views: null,
    comments: null,

    appLink: null,

    animalNotice: null,

    shelter: null,

    detailSections: [
      {
        title: "공고정보",
        content:
          "• 포해피니스의 시작, 방치되던 보호소 인수!\n\n" +
          "👇 인수하게 된 과정\n" +
          "https://m.cafe.daum.net/forhappiness2019/oBPV/9\n\n" +
          "👇 인수하던 날의 영상\n" +
          "https://youtu.be/i2HxEVNv4RI",
      },

      {
        title: "동물정보",
        content:
          "🐱 석양 (남/중성화 완료)\n" +
          "🐱 7세 이상 추정\n" +
          "🐱 진도믹스\n" +
          "🐱 몸무게 : 25kg (추정)\n\n" +
          "💉 심장사상충 음성\n" +
          "💉 매달 심장사상충 + 내외부구충 예방\n\n" +
          "💕 잘생긴 외모, 잘생긴 성격!\n" +
          "💕 친구들과 트러블없이 잘 지내는 인싸\n" +
          "💕 검사 밖에서도 간식 잘 받아먹는 간식러버!\n" +
          "💕 쫄보이지만 더 쫄보인 친구들을 챙겨주는 스윗강아지 🥰\n\n" +
          "처음에는 사람과 있을 때 불안한 모습을 보였지만\n" +
          "훈련을 통해 금세 나아지고 이제는 천~천히 다가가면 빗질도 가능해요!\n\n" +
          "성격미남, 얼굴천재 석양이의 가족을 기다려요!",
      },

      {
        title: "입양(임보)조건",
        content:
          "1) 가족 전구성원 동의\n" +
          "2) 주양육자 : 25~70세\n" +
          "4) 중성화 필수 동의\n" +
          "5) 입양 후 SNS 등을 통한 근황 전달 동의\n\n" +
          "⚠ 집이 비는 시간이 긴 경우, 신혼부부, 아이가 아직 어린 경우에는 입양이 어려울 수 있습니다.\n" +
          "⚠ 입양비(책임비) 있습니다.\n" +
          "(사단법인 포해피니스 유기동물 쉼터 '다음카페'에서 매달의 모든 입출금 내역과 영수증을, 편집없는 통파일로 확인하실 수 있습니다)\n" +
          "6) 실내보육을 원칙으로 하지만, 혹 불가능한 경우 주변환경 및 견사환경 및 외부펜스 등을 확인하고 있습니다.",
      },

      {
        title: "입양(임보)방법",
        content:
          "🌼 입양문의시 카카오톡 '포해피니스' 플러스채널\n" +
          "입양문의 및 상담 → 입양 신청서 전달 → 검토 후 입양 진행\n\n" +
          "검토 후, 입양이 반려되실 수 있는 점 양해 부탁드립니다.🙏\n" +
          "당일입양은 불가합니다!\n\n" +
          "더 자세한 내용이 궁금하시다면 아래 링크 참고 해주세요.\n\n" +
          "<입양안내>\n" +
          "https://m.cafe.daum.net/forhappiness2019/p4Lb/20?svc=cafeapp\n\n" +
          "<포해피니스 공식계정>\n" +
          "https://www.instagram.com/forhappiness_2019/",
      },

      {
        title: "안내 사항",
        content:
          "* 모금을 유도하는 치료비 내역, 모금 내역 등은 기재할 수 없습니다. 입양홍보 목적으로만 이용해주세요.",
      },
    ],
  },

  {
    id: 13,

    mainCategory: "도움이 필요해요",
    subCategory: "임보 요청",

    author: {
      nickname: "봉볼봉볼",
      profileImage: "/images/community/profile13.jpg",
      introduction: "사지말고 입양하세요.",
    },

    title: "🍀 사랑스러운 보리의 임보자를 찾습니다 🍀",

    content: null,

    createdAt: "2026-07-21T15:00:00",
    timeText: "3시간 전",

    images: [
      "/images/community/community13.jpg",
      "/images/community/community13-1.jpg",
      "/images/community/community13-2.jpg",
      "/images/community/community13-3.jpg",
      "/images/community/community13-4.jpg",
    ],

    likes: null,
    shares: null,
    views: null,
    comments: null,

    appLink: null,

    animalNotice: null,

    shelter: null,

    rescueStory: rescueStoryData.find((story) => story.communityPostId === 13),

    detailSections: [
      {
        title: "동물 정보",
        content:
          "보리 정보\n" +
          "- 이름: 보리\n" +
          "- 나이: 3,4살 추정\n" +
          "- 성별: 여\n" +
          "- 몸무게: 19kg\n" +
          "- 중성화: O\n" +
          "- 건강: 심장사상충 후 처치약 복용완료 예방접종 완료\n" +
          "- 성격: 성격은 순하고 고집도 없고 헛짖음 없고, 입질없고, 지저분함없음!\n" +
          "자기가 좋아하는 사람에게는 다 허용해요\n" +
          "60대 남성은 조금 경계함 (전 보호자 영향으로)\n" +
          "여자는 다 좋아함\n" +
          "아이들과도 관계 좋음\n" +
          "발만지기 얼굴만지기 가능\n" +
          "목욕도 얌전히 잘함 고양이에게 흥분도 있습니다\n" +
          "에너지 많고 산책을 좋아합니다\n" +
          "새로운 환경에 긴장하지만 호기심이 많은편이라 알려주는대로 습득이 빠른아이입니다\n" +
          "실외배변 아이입니다",
      },

      {
        title: "임양/임보 조건",
        content:
          "- 가족 구성원 전원 동의가 필요합니다\n" +
          "- 집비우는 시간이 적었으면 좋겠습니다\n" +
          "- 구조견의 특징을 잘 이해하시고 끝까지 책임질 수 있는 분\n" +
          "- 임시보호 시 입보계약서 작성합니다\n" +
          "- 등카케줄 ❌, 미성년자 상담 ❌ 부모님께서 직접 연락주세요\n" +
          "\n" +
          "⚠ 집이 바뀌면 불안해 할 수 있으니 천천히 적응할 수 있도록 기다려주세요 🙏\n" +
          "⚠ 이동봉사, 직접이동 등 조율가능합니다",
      },

      {
        title: "기타 정보",
        content:
          "임보문의 오픈채팅으로 연락 부탁드려요 ~~\n\n" +
          "위하키 입양봉사\n" +
          "https://open.kakao.com/o/snSTI7Nh\n\n" +
          "임보자찾습니다\n" +
          "작은천사의 임시보호해주실분\n" +
          "가족환영\n" +
          "사지말고입양해주세요",
      },
    ],
  },

  {
    id: 14,

    mainCategory: "도움이 필요해요",
    subCategory: "임보 요청",

    author: {
      nickname: "봉볼봉볼",
      profileImage: "/images/community/profile13.jpg",
      introduction: "사지말고 입양하세요.",
    },

    title: "🐾 몽글이의 임보자 찾습니다 🐾",

    content: null,

    createdAt: "2026-07-21T15:00:00",
    timeText: "3시간 전",

    images: [
      "/images/community/community14.jpg",
      "/images/community/community14-1.jpg",
      "/images/community/community14-2.jpg",
      "/images/community/community14-3.jpg",
      "/images/community/community14-4.jpg",
    ],

    likes: null,
    shares: null,
    views: null,
    comments: null,

    appLink: null,

    animalNotice: null,

    shelter: null,

    rescueStory: rescueStoryData.find((story) => story.communityPostId === 14),

    detailSections: [
      {
        title: "동물 정보",
        content:
          "🐶 몽글 🐶\n" +
          "견종 : 말티즈\n" +
          "성별 : 여\n" +
          "나이 : 8살 추정\n" +
          "몸무게 : 3.5kg",
      },

      {
        title: "건강",
        content:
          "- 피부, 심장 음성\n" +
          "- 코로나, 지알디아 양성\n" +
          "- 종합백신, 광견예방접종 예정\n" +
          "- 심장판막증 B1단계(심장약 아직 안먹어도 되요)\n" +
          "- 왼쪽눈은 날카로운 것에 찔려 방치된것으로 보입니다\n" +
          "- 안연고를 아침 저녁으로 바르고 있어요\n" +
          "- 한쪽 눈 적출수술\n" +
          "- 앞발은 인대가 끊어진 상태며 류마티스가 진행될수 있다고 합니다\n" +
          "- 중성화예정",
      },

      {
        title: "성격",
        content:
          "- 아이에 대한 두려움이 있어요\n" +
          "- 사람을 좋아합니다\n" +
          "- 강아지 친구들과 고양이랑 잘지냅니다",
      },

      {
        title: "식사",
        content:
          "- 소프트사료 먹어요\n" +
          "- 말랑한 간식을 좋아합니다",
      },

      {
        title: "배변",
        content:
          "- 배변훈련이 필요합니다",
      },

      {
        title: "생활",
        content:
          "- 잠잘때 사람과 같이 자는걸 좋아해요",
      },

      {
        title: "짖음, 분리불안",
        content:
          "- 아이에 대한 두려움이 있어 아이 나갈때 짖음 있어요\n" +
          "- 분리불안 없어요",
      },

      {
        title: "산책",
        content:
          "- 아이 두려움이 있어 산책 조금씩만 하고 있습니다",
      },

      {
        title: "성격&특징",
        content:
          "- 전체적인 외모로 봤을때 번식모견으로 보입니다\n" +
          "- 발 만지는거 안좋아합니다\n" +
          "- 옷입는 것에 익숙하지 않습니다(안고 입히면 괜찮아요)\n" +
          "- 신체를 만지면 화를 냅니다(약간 입질있어요)\n" +
          "- 살살 달래가며 접촉해야 해요",
      },

      {
        title: "입양/임보 조건",
        content:
          "- 가족구성원 전원 동의가 필요합니다\n" +
          "- 집비우는 시간이 적었으면 좋겠습니다\n" +
          "- 구조견의 특징을 잘 이해하시고 끝까지 책임질수 있는 분\n" +
          "- 임시보호 시 임보계약서 작성합니다\n" +
          "- 등카페 ❌, 미성년자 상담 ❌ 부모님께서 직접 연락주세요",
      },

      {
        title: "입양/임보 절차",
        content:
          "* 강아지는 환경이 바뀌면 불안해 할 수 있으니 천천히 적응 할 수 있도록 기다려주세요🙏\n" +
          "* 이동봉사, 직접이동 등 조율가능합니다\n\n" +
          "입양문의 이쪽으로 문의해주세요\n" +
          "https://open.kakao.com/o/snSTI7Nh",
      },

      {
        title: "기타 정보",
        content:
          "임보자찾습니다\n" +
          "작은천사의 임시보호해주실분\n" +
          "가족환영\n" +
          "사지말고입양해주세요",
      },
    ],
  },

  {
    id: 15,

    mainCategory: "도움이 필요해요",
    subCategory: "임보 요청",

    author: {
      nickname: "기다려예쁜아기들",
      profileImage: "/images/community/profile15.jpg",
      introduction: "사지말고 입양하세요.",
    },

    title: "3~4개월 아기고양이 임보자 찾습니다",

    content: null,

    createdAt: "2026-07-21T14:00:00",
    timeText: "4시간 전",

    images: [
      "/images/community/community15.jpg",
      "/images/community/community15-1.jpg",
      "/images/community/community15-2.jpg",
    ],

    likes: null,
    shares: null,
    views: null,
    comments: null,

    appLink: null,

    animalNotice: null,

    shelter: null,

    rescueStory: rescueStoryData.find((story) => story.communityPostId === 15),


    detailSections: [
      {
        title: "동물 정보",
        content:
          "3~4개월 남아이고 애교가 많아요!! 성격은 엄청 활발하고 사람 손을 잘 탑니다.. 도로에서 구조한건데 깨끗하고 예뻐요!",
      },

      {
        title: "입양/임보 조건",
        content:
          "어렵게 구조한 만큼 사랑으로 예쁘게 대해주실 분.. 가족 모두가 동의한 행복한 가정이면 좋겠습니다.",
      },

      {
        title: "입양/임보 절차",
        content:
          "경기도 양주시에 거주하고있습니다.. 가까운 지역은 최대한 데려다드리려고 합니다. 임보가 가능하신 분은 빠르게 연락주세요",
      },

      {
        title: "기타 정보",
        content:
          "구조하자마자 병원에 데려갔다왔습니다.",
      },
    ],
  },
];
