import { adoptionStoriesData } from "./community/adoptionStories";
import { helpRequestsData } from "./community/helpRequests";
import { infoGuideData } from "./community/infoGuides";
import { newsPostsData } from "./community/newsPosts";
import { volunteerPostsData } from "./community/volunteerPosts";

export const communityData = [
  ...adoptionStoriesData,
  ...volunteerPostsData,
  ...helpRequestsData,
  ...infoGuideData,
  ...newsPostsData,
];
