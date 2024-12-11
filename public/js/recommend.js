// 추천 아이템 임시 데이터
const items = [
    { id: 1, name: "가벼운 아우터", description: "가을철 필수 아이템", likes: 25, image: "item1.jpg", season: "fall" },
    { id: 2, name: "방수 신발", description: "비 오는 날에도 스타일리시하게", likes: 15, image: "item2.jpg", season: "spring" },
    { id: 3, name: "포근한 니트", description: "추운 날씨에도 따뜻하게", likes: 50, image: "item3.jpg", season: "winter" },
    { id: 4, name: "따뜻한 코트", description: "차가운 날씨를 대비하는 필수 아이템", likes: 30, image: "item4.jpg", season: "winter" },
    { id: 5, name: "따뜻한 장갑", description: "차가운 날씨를 대비하는 필수 아이템", likes: 30, image: "item4.jpg", season: "winter" }
];

// 좋아요 수에 따라 아이템 정렬
function sortItemsByLikes(items) {
    return items.sort((a, b) => b.likes - a.likes);
}

// 계절 필터 적용
function filterItemsBySeason(items, season) {
    if (season === "all") return items;
    return items.filter(item => item.season === season);
}

// 아이템 렌더링
function displayItems(items) {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ''; // 기존 아이템 제거

    items.forEach(item => {
        const itemElement = `
            <div class="item">
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p>좋아요 수: ${item.likes}</p>
            </div>
        `;
        itemList.innerHTML += itemElement;
    });
}

// 페이지 로드 시 초기화
window.onload = function() {
    const seasonFilter = document.getElementById("seasonFilter");

    // 기본 정렬 및 렌더링
    let sortedItems = sortItemsByLikes(items);
    displayItems(sortedItems);

    // 필터링 이벤트
    seasonFilter.addEventListener("change", () => {
        const selectedSeason = seasonFilter.value;
        const filteredItems = filterItemsBySeason(sortedItems, selectedSeason);
        displayItems(filteredItems);
    });
};
