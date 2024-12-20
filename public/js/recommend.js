// 추천 아이템 임시 데이터
const items = [
    { id: 1, name: "패딩", description: "겨울 필수 아이템", likes: 50, image: "./img/패딩.png", season: "winter" },
    { id: 2, name: "레인부츠", description: "비나 눈이 오는 날에도 스타일리시하게", likes: 41, image: "./img/레인부츠.png", season: "winter" },
    { id: 3, name: "포근한 니트", description: "추운 날씨에도 따뜻하게", likes: 33, image: "./img/니트.png", season: "winter" },
    { id: 4, name: "따뜻한 코트", description: "차가운 날씨를 대비하는 필수 아이템", likes: 30, image: "./img/코트.png", season: "winter" },
    { id: 5, name: "따뜻한 장갑", description: "차가운 날씨를 대비하는 필수 아이템", likes: 30, image: "./img/장갑.png", season: "winter" },
    { id: 6, name: "민소매", description: "더운 날도 시원한 민소매", likes: 11, image: "./img/민소매.png", season: "summer" }
];

// 좋아요 수에 따라 아이템 정렬
function sortItemsByLikes(items) {
    return items.sort((a, b) => b.likes - a.likes);
}

// 계절 필터
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
