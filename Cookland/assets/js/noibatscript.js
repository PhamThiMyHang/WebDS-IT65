/* Lấy phần tử track – nơi chứa toàn bộ các card */
const track = document.getElementById('track');

/* Lấy 2 nút điều hướng trái phải */
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

/* Lấy danh sách tất cả các card đầu bếp */
const cards = document.querySelectorAll('.account-card');

/* Tổng số card */
const totalCards = cards.length;

/* Card hiện tại đang đứng ở vị trí bao nhiêu (index) */
let currentIndex = 0;

/* 
    Hàm xác định số lượng card sẽ hiển thị theo kích thước màn hình
    - Mobile ≤ 600px → 1 card
    - Tablet ≤ 1024px → 2 card
    - Desktop > 1024px → 4 card
*/
function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
}

/* 
    Hàm cập nhật vị trí slider (dịch chuyển theo trục X)
    - Lấy chiều rộng của 1 card
    - Mỗi card cách nhau 20px (gap)
    - Dịch chuyển track dựa theo currentIndex
*/
function updateSliderPosition() {
    const cardWidth = cards[0].getBoundingClientRect().width; // chiều rộng của card
    const gap = 20;                                           // khoảng cách giữa các card
    const moveAmount = (cardWidth + gap) * currentIndex;      // số px phải dịch chuyển

    track.style.transform = `translateX(-${moveAmount}px)`;  // dịch sang trái
}

/* 
    Nút NEXT – chuyển sang card tiếp theo
    - Nếu chưa tới cuối → tăng index
    - Nếu đang ở cuối → quay về đầu
*/
nextBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCards();

    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0; // quay lại đầu
    }

    updateSliderPosition();
});

/* 
    Nút PREV – lùi về card trước
    - Nếu chưa ở đầu → giảm index
    - Nếu đang ở đầu → nhảy về cuối
*/
prevBtn.addEventListener('click', () => {
    const visibleCards = getVisibleCards();

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - visibleCards; // nhảy về cuối
    }

    updateSliderPosition();
});

/* 
    Khi thay đổi kích thước màn hình:
    - Reset slider về vị trí đầu 
    - Update lại vị trí cho đúng số lượng card mới
*/
window.addEventListener('resize', () => {
    currentIndex = 0;
    updateSliderPosition();
});

/* 
    Hàm chuyển đổi trạng thái theo dõi 
    - Nếu đang theo dõi → chuyển lại nút Theo dõi
    - Nếu chưa theo dõi → chuyển thành Đang theo dõi
*/
function toggleFollow(btn) {
    if (btn.classList.contains('following')) {
        btn.classList.remove('following');
        btn.innerHTML = '<i class="fa-solid fa-plus"></i> Theo dõi';
    } else {
        btn.classList.add('following');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Đang theo dõi';
    }
}


