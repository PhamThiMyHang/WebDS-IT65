document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ CookLand!");
});
// Biến slideIndex dùng để lưu slide hiện tại (bắt đầu từ slide 1)
let slideIndex = 1;

// Tự động chuyển slide mỗi 4 giây (4000ms)
let slideInterval = setInterval(() => { 
    plusSlides(1); 
}, 4000);

// Hàm chuyển slide tiếp theo hoặc lùi (n có thể là +1 hoặc -1)
// Ví dụ: plusSlides(1) → chuyển sang slide kế
function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

// Hàm nhảy đến slide cụ thể (khi bấm dot ở dưới)
// Khi người dùng click dot → dừng interval cũ, tạo interval mới (reset lại thời gian)
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
