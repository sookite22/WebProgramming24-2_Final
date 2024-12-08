// 여행지 데이터
const destinations = [
    { id: 1, name: "파리", description: "낭만적인 가을 여행", image: "destination1.jpg" },
    { id: 2, name: "도쿄", description: "현대적이면서도 전통적인 도시", image: "destination2.jpg" },
    { id: 3, name: "발리", description: "따뜻한 해변과 여유로운 휴식", image: "destination3.jpg" }
];

// Awesomplete 초기화
let awesomplete = new Awesomplete("#searchInput", {
    list: destinations.map(destination => destination.name), // 여행지 이름만 가져옴
    minChars: 1, // 최소 글자수 (1글자부터 자동 완성 시작)
    autoFirst: true // 첫 번째 일치 항목 자동 선택
});

// 검색 함수
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    // 검색어에 맞는 결과 필터링
    const filteredDestinations = destinations.filter(dest => dest.name.includes(query));
    // Awesomplete 리스트에 필터링된 결과로 업데이트
    awesomplete.list = filteredDestinations.map(destination => destination.name);
}
