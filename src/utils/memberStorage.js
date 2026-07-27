const MEMBER_KEY = "member";
const MEMBER_CHANGE_EVENT = "member-change";
const LEGACY_DEFAULT_PROFILE_IMAGE = "/images/animals/animal01-4.jpg";

export const DEFAULT_PROFILE_IMAGE = "/images/mypage.jpg";

function parseJson(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function getProfileKey(member) {
  const memberId = member?.user_id || member?.userId || member?.id;
  return memberId ? `member-profile:${memberId}` : null;
}

function getSavedProfile(member) {
  const profileKey = getProfileKey(member);
  return profileKey ? parseJson(localStorage.getItem(profileKey)) : null;
}

function notifyMemberChange() {
  window.dispatchEvent(new Event(MEMBER_CHANGE_EVENT));
}

export function getStoredMember() {
  const member = parseJson(localStorage.getItem(MEMBER_KEY));

  if (!member) return null;

  return {
    ...member,
    ...getSavedProfile(member),
  };
}

export function getMemberProfileImage(member) {
  const profileImage = member?.profileImage || member?.profile_image;

  if (!profileImage || profileImage === LEGACY_DEFAULT_PROFILE_IMAGE) {
    return DEFAULT_PROFILE_IMAGE;
  }

  return profileImage;
}

export function getMemberCoverImage(member) {
  const coverImage = member?.coverImage || member?.cover_image;

  return coverImage === LEGACY_DEFAULT_PROFILE_IMAGE ? "" : coverImage || "";
}

export function saveMemberSession(member) {
  const mergedMember = {
    ...member,
    ...getSavedProfile(member),
  };

  localStorage.setItem(MEMBER_KEY, JSON.stringify(mergedMember));
  notifyMemberChange();

  return mergedMember;
}

export function saveMemberProfile(profile) {
  const member = getStoredMember();

  if (!member) return null;

  const profileKey = getProfileKey(member);
  const profileData = {
    nickname: profile.nickname,
    phone: profile.phone,
    region: profile.region,
    interests: profile.interests,
    introduction: profile.introduction,
    profileImage: profile.profileImage,
    profile_image: profile.profileImage,
    coverImage: profile.coverImage,
    cover_image: profile.coverImage,
  };
  const mergedMember = {
    ...member,
    ...profileData,
  };

  if (profileKey) {
    localStorage.setItem(profileKey, JSON.stringify(profileData));
  }
  localStorage.setItem(MEMBER_KEY, JSON.stringify(mergedMember));
  notifyMemberChange();

  return mergedMember;
}

export function clearMemberSession() {
  localStorage.removeItem(MEMBER_KEY);
  notifyMemberChange();
}

export { MEMBER_CHANGE_EVENT };
