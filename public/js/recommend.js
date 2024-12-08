// 추천 아이템 임시 데이터
const items = [
    { id: 1, name: "가벼운 아우터", description: "가을철 필수 아이템", likes: 25, image: "item1.jpg" },
    { id: 2, name: "방수 신발", description: "비 오는 날에도 스타일리시하게", likes: 15, image: "item2.jpg" },
    { id: 3, name: "포근한 스웨터", description: "추운 날씨에도 따뜻하게", likes: 50, image: "item3.jpg" },
    { id: 4, name: "따뜻한 장갑", description: "차가운 날씨를 대비하는 필수 아이템", likes: 30, image: "item4.jpg" }
];

// 좋아요 수에 따라 아이템 정렬
function sortItemsByLikes(items) {
    return items.sort((a, b) => b.likes - a.likes);
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

// 페이지 로드 시 아이템 정렬 후 표시
window.onload = function() {
    const sortedItems = sortItemsByLikes(items);
    displayItems(sortedItems);
};
