async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('Không thể tải ${file}');
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Chạy lần lượt các file
async function loadAllComponents() {
    // Bước 1: Tải HTML giao diện về trước
    // Dùng await để đảm bảo Header load xong mới load tới cái khác (tránh vỡ khung)
    await loadComponent('header-placeholder', 'header.html');
    await loadComponent('noibat-placeholder', 'noibat.html');
    await loadComponent('footer-placeholder', 'footer.html');

    // Bước 2: Sau khi HTML đã hiện ra đủ, mới tải file JS chức năng chính
    // (File scriptheader.js chứa logic Slider, Menu, Follow...)
    const script = document.createElement('script');
    script.src = 'assets/js/scriptheader.js'; 
    document.body.appendChild(script);
}

// Bắt đầu chạy khi mở web
document.addEventListener("DOMContentLoaded", loadAllComponents);