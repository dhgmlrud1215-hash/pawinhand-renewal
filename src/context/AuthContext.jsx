import { useEffect, useMemo, useState } from "react";
import { getMemberSession, logoutMember } from "../api/memberApi";
import { AuthContext } from "./authContext";
import {
  clearMemberSession,
  getStoredMember,
  MEMBER_CHANGE_EVENT,
  saveMemberProfile,
  saveMemberSession,
} from "../utils/memberStorage";

export function AuthProvider({ children }) {
  const [member, setMember] = useState(() => getStoredMember());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const syncMember = () => setMember(getStoredMember());

    window.addEventListener(MEMBER_CHANGE_EVENT, syncMember);
    window.addEventListener("storage", syncMember);

    return () => {
      window.removeEventListener(MEMBER_CHANGE_EVENT, syncMember);
      window.removeEventListener("storage", syncMember);
    };
  }, []);

  useEffect(() => {
    getMemberSession()
      .then((data) => {
        if (data.member) {
          setMember(saveMemberSession(data.member));
        }
      })
      .catch(() => {
        // 세션이 없거나 서버에 연결되지 않은 경우 로컬 상태를 유지합니다.
      })
      .finally(() => setIsLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      member,
      isLoading,
      signIn(memberData) {
        const savedMember = saveMemberSession(memberData);
        setMember(savedMember);
        return savedMember;
      },
      async signOut() {
        try {
          await logoutMember();
        } catch {
          // 서버 로그아웃 실패 시에도 브라우저 로그인 상태는 정리합니다.
        } finally {
          clearMemberSession();
          setMember(null);
        }
      },
      saveProfile(profile) {
        const savedMember = saveMemberProfile(profile);
        setMember(savedMember);
        return savedMember;
      },
      refreshMember() {
        const savedMember = getStoredMember();
        setMember(savedMember);
        return savedMember;
      },
    }),
    [isLoading, member],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
