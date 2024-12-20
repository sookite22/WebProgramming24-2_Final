// 페이지 로드 시 로그인 상태 확인
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // 로그인 상태일 경우 로그인 버튼을 "Home"으로 변경
        document.getElementById('loginButton').textContent = 'Home';
        // 로그인된 사용자명 표시
        document.getElementById('usernameDisplay').textContent = localStorage.getItem('username');
    } else {
        // 로그인 안되어 있으면 로그인 페이지로 이동
        document.getElementById('loginButton').onclick = function() {
            window.location.href = 'login.html';
        };
    }
};

// 사이드 메뉴 열기
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open'); // open 클래스 토글
}
// 사이드 메뉴 닫기
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.remove('open'); // open 클래스 제거
}
// 로그아웃
function logout() {
    alert('로그아웃 되었습니다.');

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    // 사이드 메뉴 닫기
    document.getElementById('sideMenu').classList.remove('open');
    // 홈 버튼 텍스트 변경
    document.getElementById('loginButton').textContent = '로그인';
    // 홈 페이지로 리디렉션
    window.location.href = 'main.html'; // 홈 페이지로 리디렉션
}

// 저장된 즐겨찾기 데이터 확인
function viewFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.length === 0) {
        alert("저장된 즐겨찾기가 없습니다.");
    } else {
        const favoriteList = favorites.map(fav => `${fav.title} (${fav.lat}, ${fav.lng})`).join("\n");
        alert(`즐겨찾기 목록:\n${favoriteList}`);
    }
}