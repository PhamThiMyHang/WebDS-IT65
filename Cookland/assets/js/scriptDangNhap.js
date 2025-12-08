 function LayKieuDuLieuTuMat() {

    const passwordInput = document.getElementById('passwordInput');

    const toggleIcon = document.getElementById('IconMat');

    if (passwordInput.type === 'password') {

        passwordInput.type = 'text';

        toggleIcon.classList.remove('bi-eye-slash');

        toggleIcon.classList.add('bi-eye');

    } else {

        passwordInput.type = 'password';

        toggleIcon.classList.remove('bi-eye');

        toggleIcon.classList.add('bi-eye-slash');

    }

}

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
                    throw new Error('Không thể tải noibat.html: ' + response.statusText);
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