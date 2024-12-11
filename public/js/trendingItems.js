// 추천 리스트 데이터 로드
async function loadTrendingItems() {
    try {
        const response = await fetch('data/recommend.json'); // JSON 파일 경로
        const data = await response.json();

        // 좋아요 수 기준으로 정렬 후 상위 3개 가져오기
        const trendingItems = data.sort((a, b) => b.likes - a.likes).slice(0, 3);

        // DOM 업데이트
        const trendingItemsContainer = document.getElementById('trendingItemsContainer');
        trendingItemsContainer.innerHTML = trendingItems.map(item => `
            <div class="item">
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('트렌딩 아이템 로드 실패:', error);
    }
}

// 페이지 로드 시 실행
window.onload = loadTrendingItems;
