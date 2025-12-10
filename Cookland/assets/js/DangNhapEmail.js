
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


document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const iconMat = document.getElementById('IconMat');
    const form = document.querySelector('form[name="Form"]');
    
    // URL MockAPI Resource User của bạn
    const MOCK_API_URL = 'https://69396822c8d59937aa07b680.mockapi.io/User';

    // 1. Chức năng Hiển thị/Ẩn Mật khẩu
    window.LayKieuDuLieuTuMat = function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            iconMat.classList.remove('bi-eye-slash');
            iconMat.classList.add('bi-eye');
        } else {
            passwordInput.type = 'password';
            iconMat.classList.remove('bi-eye');
            iconMat.classList.add('bi-eye-slash');
        }
    };

    // 2. Xử lý sự kiện khi nhấn nút "Sign in" (Submit form)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

        handleSignIn();
    });

    // 3. Hàm xử lý Đăng nhập
    async function handleSignIn() {
        
        // Lấy giá trị từ các trường input
        const EmailInput = document.querySelector('input[name="Email"]');
        const EmailValue = EmailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!EmailValue || !passwordValue) {
            alert('Vui lòng điền đầy đủ Số điện thoại và Mật khẩu.');
            return;
        }

        try {
            // **Bước 1: Tra cứu người dùng bằng SDT**
            // Sử dụng Query Parameter để lọc dữ liệu MockAPI theo SDT.
            const filterURL = `${MOCK_API_URL}?Email=${encodeURIComponent(EmailValue)}`;
            
            const response = await fetch(filterURL);

            if (!response.ok) {
                // Lỗi server hoặc không kết nối được
                alert('Đăng nhập không thành công. Lỗi kết nối server.');
                console.error('Lỗi API:', response.status);
                return;
            }
            
            const users = await response.json();

            if (users.length === 0) {
                // Không tìm thấy người dùng nào có SDT này
                alert('Đăng nhập không thành công. Số điện thoại chưa đăng ký.');
                return;
            }

            // **Bước 2: So sánh Mật khẩu**
            const user = users[0]; // Lấy người dùng đầu tiên tìm thấy
            
            if (user.password === passwordValue) {
                // Đăng nhập thành công
                alert(`Đăng nhập thành công! Chào mừng ${user.name}.`);

                // **Bước 3: Chuyển hướng và truyền dữ liệu name**
                const encodedName = encodeURIComponent(user.name);
                const redirectURL = `TrangChuCaNhan.html?userName=${encodedName}`;
                
                window.location.href = redirectURL;
                
            } else {
                // Mật khẩu không khớp
                alert('Đăng nhập không thành công. Mật khẩu không đúng.');
            }

        } catch (error) {
            console.error('Lỗi xử lý đăng nhập:', error);
            alert('Đã xảy ra lỗi hệ thống. Vui lòng thử lại.');
        }
    }
});