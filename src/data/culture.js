export const cultureData = {
  campaign: {
    name: "입양캠페인",
    type: "campaign",
    items: [
      {
        id: 1,
        title: "[제주] 날개를 달아줄개 ✈️",
        description: "제주도 유기동물 입양 캠페인",
        period: "2023-11-14 ~ 2026-12-31",
        image: "/images/culture/campaign01.png",
        link: "/campaign/1",
      },
      {
        id: 2,
        title: "[유한클로락스] Clean up! Cheer up!",
        description: "유기동물 입양 응원 캠페인",
        period: "2026-01-01 ~ 2026-12-31",
        image: "/images/culture/campaign02.jpeg",
        link: "/campaign/2",
      },
      {
        id: 3,
        title: "[브라벡토] 건강하게 유기동물 입양해요",
        description: "내외부기생충 예방 캠페인",
        period: "2024-03-01 ~ 2026-11-30",
        image: "/images/culture/campaign03.png",
        link: "/campaign/3",
      },
      {
        id: 4,
        title: "[힐스] Shelter To Home",
        description: "보호소에서 입양된 가정까지 영양적으로 건강하도록!",
        period: "2025-02-01 ~ 2026-12-31",
        image: "/images/culture/campaign04.png",
        link: "/campaign/4",
      },
    ],
  },

  donation: {
    name: "포인기부",
    type: "donation",
    items: [
      {
        id: 1,
        title: "유기동물의 영양적인 건강을 위해 보호소에 사료를 기부해요!",
        company: "힐스코리아",
        status: "진행중",
        participation: 756,
        progress: 14,
        image: "/images/culture/donation01.png",
        link: "/donation/1",
      },
      {
        id: 2,
        title: "위생적인 보호소 환경 개선을 위해 기부해요!",
        company: "유한클로락스",
        status: "진행중",
        participation: 1368,
        progress: 38,
        image: "/images/culture/donation02.jpeg",
        link: "/donation/2",
      },
    ],
  },

  volunteer: {
    name: "봉사활동",
    type: "volunteer",
    items: [
      {
        id: 1,
        subCategory: "이동 봉사",
        nickname: "미니둥이",
        createdAt: "2026-07-13T16:20:00",
        from: "대구광역시 북구",
        to: "서울특별시 노원구",
        content:
          "입양가는 아이를 대구에서 서울까지 데려다 주실 천사님을 구해 봐요 🥹 아직 아가라서 차내에서는 문제가 없을 거예요.\n목요일 제외 주중이나 주말, 편하신 시간에 부탁드릴게요.\n쪽지나 댓글 부탁드릴게요! 감사합니다 😭",
        image: "/images/culture/volunteer01.jpg",
        link: "/volunteer/1",
      },

      {
        id: 2,
        subCategory: "이동 봉사",
        nickname: "봄비7",
        createdAt: "2026-07-21T00:00:00",

        from: "충청남도 서천군\n서천군 마산면 한마로 1189-20",

        to: "경기도 용인시\n처인구 중부대로1294",

        content:
          "안락사위기인 초희의 임보자가 나와 하루라도 빨리 데리고 나오려합니다.\n" +
          "5kg밖에 안되는 작은아이 이동봉사 도와주십시오.\n" +
          "캔넬필요. 26.7.19일부터 가능\n" +
          "문의. 카톡 bgs0327",

        image: [
          "/images/culture/volunteer02.jpg",
          "/images/culture/volunteer02-1.jpg",
        ],

        link: "/volunteer/2",
      },

      {
        id: 3,
        subCategory: "이동 봉사",
        author: {
          nickname: "모리보니",
          profileImage: "/images/culture/profile03.jpg",
          introduction: "사지말고 입양하세요.",
        },
        createdAt: "2026-07-22T00:00:00",

        from: "서울특별시 동작구\n다이크동물종합병원",

        to: "충청남도 홍성군\n홍성",

        content:
          "수유임보가 필요한 아이예요.\n" +
          "충남끝까지 이동가능하신 분 계실까요?",

        image: "/images/culture/volunteer03.jpg",

        link: "/volunteer/3",

        animalNotice: {
          image: "/images/culture/volunteer03-notice.jpg",
          status: "공고중",
          gender: "암컷",
          species: "[고양이] 한국 고양이",
          noticeNumber: "서울-동작-2026-00097",
          registeredDate: "2026.07.21",
          foundPlace: "신상도초등학교 정문",
        },

        shelter: {
          name: "다이크동물종합병원",
          region: "서울특별시 동작구",
          image: "/images/community/shelter-default.png",
        },
      },

      {
        id: 4,
        subCategory: "봉사 모집",
        author: {
          nickname: "지후야다녀오",
          profileImage: "/images/culture/profile04.png",
          introduction: "사지말고 입양하세요.",
        },
        title: "🌈 🍀 산책봉사자분들 필요해요!",
        createdAt: "2026-07-05T00:00:00",
        from: "해당 없음",
        to: "경기도 화성시",
        content:
          "일주일 중 봉사자들이 오는 주말만을 손꼽아 기다리는 쉼터아이들이에요! 일주일에 단 한 번의 봉사시간, 콧바람 쐬어주며 아이들 산책을 도와줄 봉사자분들을 기다립니다.\n" +
          "봉사란 거창한 게 아닙니다. 오셔서 쉼터 아이들 사랑의 손길로 쓰다듬어 주시며 산책 한 번만 도와주셔도 정말 큰 도움이 된답니다.\n\n" +
          "🌻 봉사가 처음이셔도 괜찮습니다. 어렵지 않을 뿐더러 옆에서 친절히 안내해 드릴게요!\n" +
          "🌻 혼자 오셔도 환영합니다. 봉사자 한 분 한 분이 참 소중한 쉼터입니다.\n" +
          "🌻 매주가 아니어도 괜찮아요. 어느 때라도 시간 여유가 되실 때 아이들 산책 도와주시러 방문해주신다면 참 감사할 것 같아요!\n\n" +
          "봉사문의: 카톡 nara6368\n지역: 경기도 화성시\n시간: 매주 토요일 오전 10시~오후 1시",
        image: "/images/culture/volunteer04.jpg",
        link: "/volunteer/4",
      },

      {
        id: 5,
        subCategory: "봉사 모집",
        author: {
          nickname: "USIM",
          profileImage: "/images/community/default-profile.jpg",
          introduction: "사지말고 입양하세요.",
        },
        title: "🐾 유기견 봉사 크루 ‘유심’ 모집 🐶",
        createdAt: "2026-05-26T00:00:00",
        from: "해당 없음",
        to: "서울특별시 구로구\n한국동물구조관리협회",
        content:
          "작은 마음 하나로, 강아지와 우리의 하루를 조금 더 따뜻하게 채워갈 유심 크루를 찾습니다 🐾\n\n" +
          "안녕하세요! 🌻\n돕고자 하는 마음을 담은 유기견 봉사 모임 [유심]입니다!\n\n" +
          "저희는 거창한 봉사보다는 강아지와 함께 걷고, 교감하는 시간을 통해 서로에게 온기를 나누는 활동을 하고 있어요.\n\n" +
          "유기견에게는 산책 한 번이 기다림의 하루를 바꿔주고, 우리에게도 생각보다 꽤 기분 좋은 힐링이 됩니다.\n\n" +
          "가벼운 마음만으로도 충분히 시작하실 수 있어요 👍👍\n\n" +
          "🐾 모집 대상\n- 서울 거주 20대\n- 동물을 사랑하고 좋아하는 분\n- 부담 없이 의미 있는 활동을 해보고 싶은 분\n\n" +
          "🐾 활동 내용\n1. 월 1회 유기견 보호소 산책 봉사(필수 참여)\n- 서울·경기권 보호소 방문\n- 산책 및 교감 활동(쓰다듬기, 놀아주기 등)\n\n" +
          "2. 선택 활동(자율 참여)\n- 유기견 인식 개선 콘텐츠 제작\n- 간단한 캠페인 및 소규모 봉사 활동\n\n" +
          "3. 친목 및 번개 모임(선택 참여)\n- 가벼운 식사·소모임\n- 유기견 카페 방문 등\n\n" +
          "🐾 모집 일정\n상시 모집(소규모 인원으로 운영됩니다)\n\n" +
          "🐾 지원 방법\n아래 링크를 통해 간단 지원서 작성\n👉 https://forms.gle/pRkWjGu5G3m7NPMs7\n\n" +
          "🐾 선발 과정\n1차: 지원서 확인\n2차: 간단한 온라인 인터뷰(10~15분, 편하게 진행됩니다 🙋‍♀️)\n\n" +
          "🐾 면접 질문 예시\n- 지원하게 된 이유는 무엇인가요?\n- 강아지를 좋아하시게 된 계기가 있나요?\n- 활동을 통해 기대하는 점은 무엇인가요?\n- 함께 활동할 때 중요하게 생각하는 점은 무엇인가요?\n\n" +
          "돕고자 하는 마음으로 시작해, 강아지와 우리의 하루를 조금 더 따뜻하게. 부담 없이, 하지만 의미 있게 함께해요 🐾",
        image: [
          "/images/culture/volunteer05.jpg",
          "/images/culture/volunteer05-1.jpg",
        ],
        link: "/volunteer/5",
        shelter: {
          name: "한국동물구조관리협회",
          region: "서울특별시 구로구",
          image: "/images/community/shelter-default.png",
        },
      },
    ],
  },
};
