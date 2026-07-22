import { cultureData } from "../culture";

export const volunteerPostsData = cultureData.volunteer.items.map((item) => ({
    id: 1000 + item.id,
    mainCategory: "도움이 필요해요",
    subCategory: item.subCategory || "이동 봉사",
    author: {
      nickname: item.author?.nickname || item.nickname,
      profileImage:
        item.author?.profileImage || "/images/community/default-profile.jpg",
      introduction:
        item.author?.introduction ||
        "따뜻한 이동 봉사의 손길을 기다립니다.",
    },
    title:
      item.title ||
      `${item.from}에서 ${item.to}까지 이동 봉사자를 찾습니다`,
    content: item.content,
    createdAt: item.createdAt,
    timeText: "2026-07-13",
    images: Array.isArray(item.image)
      ? item.image
      : item.image
        ? [item.image]
        : [],
    likes: 0,
    shares: 0,
    views: 0,
    comments: 0,
    appLink: null,
    animalNotice: item.animalNotice || null,
    shelter: item.shelter || null,
}));
