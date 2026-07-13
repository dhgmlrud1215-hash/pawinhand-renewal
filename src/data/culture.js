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
        nickname: "미니둥이",
        createdAt: "2026-07-13T16:20:00",
        from: "대구광역시 북구",
        to: "서울특별시 노원구",
        content:
          "입양가는 아이를 대구에서 서울까지 데려다 주실 천사님을 구해 봐요 🥹 아직 아가라서 차내에서는 문제가 없을 거예요.\n목요일 제외 주중이나 주말, 편하신 시간에 부탁드릴게요.\n쪽지나 댓글 부탁드릴게요! 감사합니다 😭",
        image: "/images/culture/volunteer01.jpg",
        link: "/volunteer/1",
      },
    ],
  },
};
