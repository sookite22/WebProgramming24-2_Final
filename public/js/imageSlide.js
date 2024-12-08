// 슬라이드 관련 변수
const slidesContainer = document.getElementById("slides");
const slides = document.querySelectorAll("#slides img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlide = 0;
let slideInterval;

// 슬라이드 이동 함수
function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length; // 인덱스 순환
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 이전 슬라이드
function prevSlide() {
    stopSlideShow(); // 자동 슬라이드 중지
    showSlide(currentSlide - 1);
    startSlideShow(); // 자동 슬라이드 재시작
}

// 다음 슬라이드
function nextSlide() {
    stopSlideShow();
    showSlide(currentSlide + 1);
    startSlideShow();
}

// 자동 슬라이드 시작
function startSlideShow() {
    slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000); // 5초 간격
}

// 자동 슬라이드 중지
function stopSlideShow() {
    clearInterval(slideInterval);
}

// 초기화
function initSlideShow() {
    showSlide(currentSlide); // 첫 번째 슬라이드 표시
    startSlideShow(); // 자동 슬라이드 시작
    prevButton.addEventListener("click", prevSlide); // 이전 버튼
    nextButton.addEventListener("click", nextSlide); // 다음 버튼
}

// 슬라이드 쇼 초기화 실행
initSlideShow();
