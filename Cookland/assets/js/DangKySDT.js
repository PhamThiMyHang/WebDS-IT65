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

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    const iconMat = document.getElementById('IconMat');
    const form = document.querySelector('form[name="Form"]');
    
    // URL MockAPI Resource User của bạn
    const MOCK_API_URL = 'https://69396822c8d59937aa07b680.mockapi.io/User';

    // 1. Chức năng Hiển thị/Ẩn Mật khẩu
    window.LayKieuDuLieuTuMat = function() {

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

    };

    // 2. Xử lý sự kiện khi nhấn nút "Sign up" (Submit form)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

        handleSignUp();
    });

    // 3. Hàm xử lý Đăng ký và gửi dữ liệu lên MockAPI
    async function handleSignUp() {
        
        // Lấy giá trị từ các trường input (bao gồm trường name mới)
        const nameInput = document.querySelector('input[name="name"]');
        const SDTInput = document.querySelector('input[name="SDT"]');
        const passwordValue = passwordInput.value;
        
        // Giả sử HTML của bạn hiện đã có:
        // <input type="text" name="name">
        // <input type="email" name="Email"> 
        // <input type="password" name="password">

        // Thu thập dữ liệu
        const userData = {
            name: nameInput ? nameInput.value : 'Guest User', // Lấy name, nếu không tìm thấy input vẫn dùng giá trị mặc định
            SDT: SDTInput.value, 
            password: passwordValue,
            SDT: "",             // SDT là chuỗi trống
            avatar: "",          // avatar là chuỗi trống
            idBaiViet: "",       // idBaiViet là chuỗi trống
            Number: 0            // Number là số 0
        };

        if (!userData.name || !userData.SDT || !userData.password) {
            alert('Vui lòng điền đầy đủ Tên, Email và Mật khẩu.');
            return;
        }

        try {
            const response = await fetch(MOCK_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const newUser = await response.json();
                console.log('Đăng ký thành công, Dữ liệu nhận được:', newUser);
                alert(`Đăng ký thành công! Chào mừng ${newUser.name}.`);

                // Mã hóa tên để tránh lỗi ký tự đặc biệt trong URL
                const encodedName = encodeURIComponent(newUser.name);
                
                // Tạo URL chuyển hướng với query parameter 'userName'
                const redirectURL = `TrangChuCaNhan.html?userName=${encodedName}`;
                
                // Chuyển hướng người dùng
                window.location.href = redirectURL;

            } else {
                console.error('Lỗi khi đăng ký:', response.statusText);
                alert('Đăng ký thất bại. Vui lòng thử lại. Lỗi: ' + response.status);
            }
        } catch (error) {
            console.error('Lỗi kết nối mạng:', error);
            alert('Lỗi kết nối. Vui lòng kiểm tra kết nối Internet và thử lại.');
        }
    }
});