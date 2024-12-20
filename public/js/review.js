// 임시 데이터: 업로드된 스타일 사진과 설명, 좋아요 수, 댓글
const reviews = [
    {
        id: 1,
        image: './img/style1.png',
        description: '가을에 어울리는 코트 맛집',
        likes: 10,
        comments: ['너무 예뻐요', '멋지다']
    },
    {
        id: 2,
        image: './img/style2.png',
        description: '비 오는 날에 어울리는 스타일!',
        likes: 5,
        comments: ['레인부츠 어디꺼예요?', '좋아요!']
    },
    {
        id: 3,
        image: './img/style3.png',
        description: '내 맘대로 입기기',
        likes: 7,
        comments: ['이 스타일 너무 편해 보인다!', '욜']
    },
    {
        id: 4,
        image: './img/style4.png',
        description: '겨울 하면 패딩이죠',
        likes: 11,
        comments: ['키가 몇인가요?', '패딩 너무 예쁘다ㅠㅠㅠ']
    }
];

// 리뷰 리스트 표시 함수
function displayReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = ''; // 기존 리뷰들 제거

    reviews.forEach(review => {
        const reviewElement = `
            <div class="review">
                <img src="${review.image}" alt="스타일 이미지">
                <p>${review.description}</p>
                <button class="like-btn" onclick="likeReview(${review.id})">좋아요 (${review.likes})</button>
                <div class="comments">
                    <h4>댓글</h4>
                    <ul id="comments-${review.id}">
                        ${review.comments.map(comment => `<li>${comment}</li>`).join('')}
                    </ul>
                    <textarea id="comment-input-${review.id}" placeholder="댓글을 입력하세요..."></textarea>
                    <button onclick="addComment(${review.id})">댓글 추가</button>
                </div>
            </div>
        `;
        reviewList.innerHTML += reviewElement;
    });
}

// 좋아요 버튼 클릭 시 좋아요 수 증가
function likeReview(id) {
    const review = reviews.find(r => r.id === id);
    review.likes += 1;
    displayReviews(); // 업데이트된 내용 다시 렌더링
}

// 댓글 추가 함수
function addComment(id) {
    const commentInput = document.getElementById(`comment-input-${id}`);
    const newComment = commentInput.value.trim();

    if (newComment) {
        const review = reviews.find(r => r.id === id);
        review.comments.push(newComment);
        commentInput.value = ''; // 댓글 입력란 초기화
        displayReviews(); // 업데이트된 내용 다시 렌더링
    }
}

// 업로드 모달 열기
document.getElementById('uploadBtn').addEventListener('click', () => {
    // 모달 초기화
    document.getElementById('description').value = ''; // 설명 초기화
    document.getElementById('images').value = ''; // 파일 초기화
    document.getElementById('imagePreview').innerHTML = ''; // 미리보기 초기화

    // 모달 표시
    document.getElementById('uploadModal').style.display = 'flex';
});

// 업로드 모달 닫기
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('uploadModal').style.display = 'none';
});

// 페이지 로드 시 업로드 모달 숨기기
window.onload = function () {
    document.getElementById('uploadModal').style.display = 'none'; // 모달 숨김
    displayReviews(); // 리뷰 목록 표시
};

// 사진 선택 시 미리보기 표시
document.getElementById('images').addEventListener('change', function (event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('imagePreview');
    previewContainer.innerHTML = ''; // 기존 미리보기 제거

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewWrapper = document.createElement('div');
            previewWrapper.classList.add('preview-wrapper');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-img'); // 미리보기 이미지 스타일

            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// 업로드 폼 제출 처리
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const images = document.getElementById('images').files;
    const description = document.getElementById('description').value;

    if (images.length > 0 && description) {
        // 새로운 리뷰 추가
        const newReview = {
            id: reviews.length + 1,
            image: URL.createObjectURL(images[0]), // 첫 번째 이미지만 미리보기
            description: description,
            likes: 0,
            comments: []
        };
        reviews.push(newReview);

        displayReviews(); // 리뷰 리스트 업데이트
        document.getElementById('uploadModal').style.display = 'none'; // 모달 닫기
    }
});
