import { newsData } from "../news";

export const newsPostsData = newsData
  .filter((item) => item.category === "소식")
  .map((item) => ({
    id: 3000 + item.id,
    mainCategory: "포인핸드 정보",
    subCategory: "소식",
    author: {
      nickname: "포인핸드",
      profileImage: "/images/community/default-profile.jpg",
      introduction: "포인핸드의 새로운 소식을 전해드려요.",
    },
    title: item.title,
    content: item.content.filter(Boolean).join("\n"),
    createdAt: item.createdAt || null,
    timeText: item.createdAt || "등록일 미정",
    images: item.images || [],
    likes: 0,
    shares: 0,
    views: 0,
    comments: 0,
    appLink: item.buttonLink || null,
    animalNotice: null,
    shelter: null,
  }));
