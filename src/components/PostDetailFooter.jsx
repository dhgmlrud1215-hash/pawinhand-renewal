import Mainbanner from "./Mainbanner";

const DEFAULT_APP_LINK = "https://pawinhand.kr/link/linker.html";

function PostDetailFooter({ appLink, align = "default" }) {
  const href = appLink && appLink !== "#" ? appLink : DEFAULT_APP_LINK;

  return (
    <div
      className={`post-detail-footer${align === "right-column" ? " right-column" : ""}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="community-app-link"
      >
        포인핸드 앱에서 보기
      </a>

      <div className="post-detail-banner">
        <Mainbanner variant="embedded" />
      </div>
    </div>
  );
}

export default PostDetailFooter;
