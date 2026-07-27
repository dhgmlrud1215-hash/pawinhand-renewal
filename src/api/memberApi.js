const MEMBER_API_BASE_URL =
  import.meta.env.VITE_MEMBER_API_BASE_URL ||
  "https://dhgmlrud00.dothome.co.kr/server/member";

async function postMemberRequest(endpoint, payload) {
  const response = await fetch(`${MEMBER_API_BASE_URL}/${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: {
      // PHP reads php://input directly. text/plain keeps this request from
      // triggering the hosting server's unsupported CORS preflight.
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error("서버 응답을 확인할 수 없습니다.");
  }

  if (!response.ok) {
    throw new Error(data.message || "요청 처리에 실패했습니다.");
  }

  return data;
}

export function joinMember(form, agreements) {
  return postMemberRequest("join.php", {
    userId: form.userId.trim(),
    password: form.password,
    name: form.name.trim(),
    nickname: form.nickname.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    marketing: agreements.marketing,
  });
}

export function loginMember(userId, password) {
  return postMemberRequest("login.php", {
    userId: userId.trim(),
    password,
  });
}

export function checkMemberId(userId) {
  return postMemberRequest("check_id.php", {
    userId: userId.trim(),
  });
}

export function updateMember(member) {
  return postMemberRequest("update.php", {
    nickname: member.nickname.trim(),
    email: member.email.trim(),
    phone: member.phone.trim(),
  });
}

export function deleteMember(password) {
  return postMemberRequest("delete.php", { password });
}

export function logoutMember() {
  return postMemberRequest("logout.php", {});
}

export async function getMemberSession() {
  const response = await fetch(`${MEMBER_API_BASE_URL}/session.php`, {
    method: "GET",
    credentials: "include",
  });
  const responseText = await response.text();
  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error("서버 응답을 확인할 수 없습니다.");
  }

  if (!response.ok) {
    throw new Error(data.message || "세션 확인에 실패했습니다.");
  }

  return data;
}
