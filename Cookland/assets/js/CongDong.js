/*document.addEventListener('DOMContentLoaded', () => {
    
    // Lấy các nút cần xử lý sự kiện
    const likeButton = document.getElementById('like-button');
    const saveButton = document.getElementById('save-button');
    const shareButton = document.getElementById('share-button');
    
    // Mảng chứa các nút có trạng thái thay đổi
    const toggleButtons = [likeButton, saveButton]; 

    // Hàm xử lý khi click vào nút Like hoặc Save (có thể BẬT/TẮT trạng thái)
    const handleToggleClick = (event) => {
        const button = event.currentTarget;
        // Thêm/Bỏ lớp 'active' để thay đổi màu icon thông qua CSS
        button.classList.toggle('active'); 
    };

    // Gán sự kiện cho nút Like và Save
    toggleButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', handleToggleClick);
        }
    });

    // Hàm xử lý khi click vào nút Share (chỉ BẬT trạng thái, không TẮT)
    const handleShareClick = (event) => {
        const button = event.currentTarget;
        // Thêm lớp 'active' để thay đổi màu icon
        button.classList.add('active'); 

        // Tùy chọn: Tự động xóa lớp 'active' sau 1 khoảng thời gian 
        // để mô phỏng hành động chia sẻ hoàn tất.
        setTimeout(() => {
            button.classList.remove('active');
        }, 1500); // 1.5 giây
    };

    // Gán sự kiện cho nút Share
    if (shareButton) {
        shareButton.addEventListener('click', handleShareClick);
    }
});*/

function ClickLike() {
    const likeIcon = document.getElementById('like-button');
    likeIcon.classList.toggle('red');
    likeIcon.classList.toggle('white');
    
}
function ClickSave(){
    const saveIcon = document.getElementById('save-button');
    saveIcon.classList.toggle('white');
    saveIcon.classList.toggle('orange');
}
/*js cho hình ảnh phóng to */
// Lấy các phần tử modal
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");

/**
 * Mở modal và hiển thị ảnh toàn màn hình.
 * @param {string} imgSrc - Đường dẫn của ảnh cần hiển thị.
 */
function openFullscreenImage(imgSrc) {
  // Hiển thị modal
  modal.style.display = "block";
  
  // Thiết lập nguồn ảnh và chú thích
  modalImg.src = imgSrc;
  captionText.innerHTML = "Ảnh chi tiết của " + document.querySelector('.dish-name').innerText;
}

/**
 * Đóng modal khi click vào nút X hoặc khu vực nền đen.
 */
function closeFullscreenImage() {
  modal.style.display = "none";
}

// Xử lý sự kiện khi người dùng nhấn phím ESC để đóng modal
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeFullscreenImage();
    }
});
/*Nhúng footer*/
// Đặt code này vào file JavaScript của bạn (ví dụ: CongDong.js)

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy phần tử container mà bạn muốn nhúng code header vào
    const headerContainer = document.getElementById('footer');
    
    // 2. Kiểm tra xem phần tử có tồn tại không
    if (headerContainer) {
        // 3. Sử dụng fetch() để tải nội dung của header.html
        fetch('footer.html') // Đảm bảo đường dẫn này đúng
            .then(response => {
                // Kiểm tra xem response có OK không (Status code 200)
                if (!response.ok) {
                    throw new Error('Không thể tải header.html: ' + response.statusText);
                }
                return response.text(); // Chuyển response thành văn bản (HTML)
            })
            .then(html => {
                // 4. Chèn nội dung HTML đã tải vào phần tử container
                headerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Lỗi khi nhúng footer:', error);
                // Có thể hiển thị thông báo lỗi cho người dùng ở đây
            });
    }
}); 

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy phần tử container mà bạn muốn nhúng code header vào
    const headerContainer = document.getElementById('noibat');
    
    // 2. Kiểm tra xem phần tử có tồn tại không
    if (headerContainer) {
        // 3. Sử dụng fetch() để tải nội dung của header.html
        fetch('noibat.html') // Đảm bảo đường dẫn này đúng
            .then(response => {
                // Kiểm tra xem response có OK không (Status code 200)
                if (!response.ok) {
                    throw new Error('Không thể tải noibat.html: ' + response.statusText);
                }
                return response.text(); // Chuyển response thành văn bản (HTML)
            })
            .then(html => {
                // 4. Chèn nội dung HTML đã tải vào phần tử container
                headerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Lỗi khi nhúng noibat:', error);
                // Có thể hiển thị thông báo lỗi cho người dùng ở đây
            });
    }
}); 