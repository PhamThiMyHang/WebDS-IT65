// ==========================================
// PHẦN 1: LOGIC CHO HERO SLIDER (GIỮ NGUYÊN)
// ==========================================

// Biến slideIndex dùng để lưu slide hiện tại (bắt đầu từ slide 1)
let slideIndex = 1;

// Tự động chuyển slide mỗi 4 giây (4000ms)
let slideInterval = setInterval(() => { 
    plusSlides(1); 
}, 4000);

// Hàm chuyển slide tiếp theo hoặc lùi (n có thể là +1 hoặc -1)
function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

// Hàm nhảy đến slide cụ thể (khi bấm dot ở dưới)
function currentSlide(n) {
    showSlides(slideIndex = n);

    // Reset lại bộ đếm tự chạy để khi user bấm dot xong nó vẫn tự chạy bình thường
    clearInterval(slideInterval);
    slideInterval = setInterval(() => { plusSlides(1); }, 4000);
}

// Hàm hiển thị slide theo chỉ số slideIndex
function showSlides(n) {
    let slides = document.getElementsByClassName("slide"); // Lấy tất cả slide
    let dots = document.getElementsByClassName("dot");     // Lấy tất cả dot tròn

    // Nếu vượt quá số slide → quay về slide đầu
    if (n > slides.length) { 
        slideIndex = 1;
    }

    // Nếu nhỏ hơn slide 1 → quay về slide cuối
    if (n < 1) { 
        slideIndex = slides.length;
    }

    // Ẩn hết tất cả slide (bỏ class "active")
    for (let i = 0; i < slides.length; i++) { 
        slides[i].classList.remove("active"); 
    }

    // Tắt trạng thái active của tất cả dot
    for (let i = 0; i < dots.length; i++) { 
        dots[i].classList.remove("active"); 
    }

    // Hiển thị slide hiện tại (thêm class active để CSS xử lý hiệu ứng)
    slides[slideIndex - 1].classList.add("active");

    // Dot tương ứng sáng lên (active)
    dots[slideIndex - 1].classList.add("active");
}

// ==========================================
// PHẦN 2: LOGIC CHO MENU ACTIVE (MỚI THÊM)
// ==========================================

// Lấy danh sách tất cả các thẻ <a> trong menu
const menuLinks = document.querySelectorAll('.nav-menu li a');

// Duyệt qua từng link để gán sự kiện click
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Bước 1: Xóa class 'active' khỏi TẤT CẢ các link (reset về trạng thái thường)
        menuLinks.forEach(item => item.classList.remove('active'));
        
        // Bước 2: Thêm class 'active' vào CHÍNH link vừa được click
        this.classList.add('active');
    });
});
