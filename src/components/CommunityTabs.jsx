import { COMMUNITY_CATEGORIES } from "../data/communityCategories";

function CommunityTabs({
  mainCategory,
  subCategory,
  onMainCategoryChange,
  onSubCategoryChange,
}) {
  return (
    <nav className="community-tabs" aria-label="커뮤니티 카테고리">
      <div className="community-main-tabs">
        {Object.keys(COMMUNITY_CATEGORIES).map((category) => (
          <button
            type="button"
            key={category}
            className={mainCategory === category ? "active" : ""}
            onClick={() => onMainCategoryChange(category)}
            aria-pressed={mainCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="community-sub-tabs">
        {COMMUNITY_CATEGORIES[mainCategory].map((category) => (
          <button
            type="button"
            key={category}
            className={subCategory === category ? "active" : ""}
            onClick={() => onSubCategoryChange(category)}
            aria-pressed={subCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default CommunityTabs;
