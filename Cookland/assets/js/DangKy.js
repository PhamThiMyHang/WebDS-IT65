document.addEventListener('DOMContentLoaded', function() {
    
    // === 1. KHAI BÁO CÁC PHẦN TỬ VÀ HẰNG SỐ ===
    // Khai báo các biến ở phạm vi đầu tiên của khối DOMContentLoaded
    const passwordInput = document.getElementById('passwordInput');
    const form = document.querySelector('form[name="Form"]');
    
    // URL MockAPI Resource User của bạn
    const MOCK_API_URL = 'https://69396822c8d59937aa07b680.mockapi.io/User';

    // ==========================================================
    // KHỐI 1: CHỨC NĂNG HIỂN THỊ/ẨN MẬT KHẨU
    // ==========================================================
    // Hàm này được định nghĩa ở phạm vi toàn cục (window) để HTML gọi được qua onclick
    window.LayKieuDuLieuTuMat = function() {
        const toggleIcon = document.getElementById('IconMat'); 
        
        if (passwordInput && toggleIcon) {
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
    };
    
    // ==========================================================
    // KHỐI 2: NHÚNG FOOTER
    // ==========================================================
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể tải footer.html: ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Lỗi khi nhúng footer:', error);
            });
    }

    // ==========================================================
    // KHỐI 3: XỬ LÝ ĐĂNG KÝ (SIGN UP)
    // ==========================================================
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn chặn form tải lại trang
            handleSignUp();
        });
    }

    async function handleSignUp() {
        
        // **BƯỚC 1: Lấy Dữ liệu Input**
        // Đảm bảo selector khớp với HTML: name="name" và name="Email"
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="Email"]');
        
        // Lấy giá trị an toàn
        const nameValue = nameInput ? nameInput.value.trim() : '';
        const emailValue = emailInput ? emailInput.value.trim() : ''; 
        const passwordValue = passwordInput ? passwordInput.value.trim() : '';

        // **BƯỚC 2: Kiểm tra hợp lệ cơ bản**
        if (!nameValue || !emailValue || !passwordValue) {
            alert('Vui lòng điền đầy đủ Tên, Email và Mật khẩu.');
            return;
        }

        const userData = {
            name: nameValue,
            Email: emailValue, // Gửi lên MockAPI với key là 'Email'
            password: passwordValue,
        };

        // **BƯỚC 3: Gửi Dữ liệu lên MockAPI**
        try {
            const response = await fetch(MOCK_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            
            console.log('API Response Status:', response.status);

            if (response.ok) {
                // Đăng ký thành công (Status 201 Created)
                const newUser = await response.json();
                console.log('Dữ liệu người dùng mới:', newUser);
                alert(`Đăng ký thành công! Chào mừng ${newUser.name}.`);

                // Chuyển hướng
                const encodedName = encodeURIComponent(newUser.name);
                const redirectURL = `TrangChuCaNhan.html?userName=${encodedName}`;
                
                window.location.href = redirectURL;

            } else {
                // Lỗi HTTP (4xx, 5xx)
                console.error('Lỗi khi gửi dữ liệu (HTTP Error):', response.status, response.statusText);
                alert(`Đăng ký thất bại. Vui lòng thử lại. Lỗi: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            // Lỗi kết nối mạng hoặc CORS
            console.error('Lỗi nghiêm trọng (Mạng/CORS):', error);
            alert('Lỗi kết nối. Vui lòng kiểm tra console log để biết chi tiết.');
        }
    }
});