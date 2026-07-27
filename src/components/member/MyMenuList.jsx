import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BookHeart,
  CircleHelp,
  ClipboardPenLine,
  FilePenLine,
  HouseHeart,
  Mail,
  Megaphone,
  MessageSquareText,
  PawPrint,
  UserRound,
} from "lucide-react";

const iconComponents = {
  membership: BadgeCheck,
  adoption: ClipboardPenLine,
  message: Mail,
  login: UserRound,
  profile: UserRound,
  pets: PawPrint,
  shelters: HouseHeart,
  stories: BookHeart,
  posts: FilePenLine,
  notice: Megaphone,
  help: CircleHelp,
  sms: MessageSquareText,
};

export function MyMenuIcon({ item }) {
  if (item.iconKey) {
    const Icon = iconComponents[item.iconKey];

    return (
      <Icon
        className="mypage-vector-icon"
        strokeWidth={1.9}
        aria-hidden="true"
      />
    );
  }

  return <img className="mypage-brand-icon" src={item.icon} alt="" />;
}

function MyMenuList({ title, items, external = false }) {
  return (
    <section
      className={`mypage-menu-section${external ? " mypage-sns-section" : ""}`}
    >
      <h2>{title}</h2>

      <div className="mypage-menu-list">
        {items.map((item) => {
          const content = (
            <>
              <MyMenuIcon item={item} />
              <span>{item.title}</span>
              <strong aria-hidden="true">›</strong>
            </>
          );

          if (item.onClick) {
            return (
              <button
                className="mypage-menu-row"
                type="button"
                onClick={item.onClick}
                key={item.id}
              >
                {content}
              </button>
            );
          }

          if (external) {
            return (
              <a
                className="mypage-menu-row"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                {content}
              </a>
            );
          }

          return (
            <Link className="mypage-menu-row" to={item.path} key={item.id}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MyMenuList;
