function LostSearch({ searchText, setSearchText }) {
    return (
        <div className="lost-search">
            <input 
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="지역이나 품종을 검색해보세요"
                aria-label="실종 및 목격 제보 검색"
            />
        </div>
    );
}

export default LostSearch;
