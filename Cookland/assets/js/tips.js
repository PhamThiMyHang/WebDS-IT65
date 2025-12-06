let posts = JSON.parse(localStorage.getItem('cookland_posts')) || [
    {id:1, title:"Mẹo khử mùi tanh của cá chỉ trong 30 giây", content:"Chỉ cần chà cá với vài lát chanh tươi hoặc ngâm nước vo gạo 10 phút là mùi tanh bay hết...", image:"assets/images/meokhumui.jpg", date:"2025-04-01", author:"Bếp trưởng Minh", category:"meo", likes:[]},
    {id:2, title:"Cách bảo quản rau sống tươi cả tuần không héo", content:"Rửa sạch → để thật ráo → bọc giấy báo → cho vào túi zip → để ngăn mát tủ lạnh...", image:"assets/images/cachbaoquan.jpg", date:"2025-03-28", author:"Cô giáo Lan", category:"meo", likes:[]},
    {id:3, title:"Review nồi chiên không dầu Xiaomi 6L – đáng tiền!", content:"Mình dùng được 6 tháng rồi, chiên gì cũng giòn, dễ vệ sinh, tiết kiệm dầu...", image:"", date:"2025-03-25", author:"Huyền Kitchen", category:"review", likes:[]},
];
localStorage.setItem('cookland_posts', JSON.stringify(posts));

let currentPostId = null;
const itemsPerPage = 5;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html').then(r=>r.text()).then(d=>document.getElementById('header').innerHTML=d);
    fetch('footer.html').then(r=>r.text()).then(d=>document.getElementById('footer').innerHTML=d);

    renderPosts();
    setupPagination();
    setupFilters();
    setupAddForm();

    // Tìm kiếm mới (debounce)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let timer;
        searchInput.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                currentPage = 1;
                renderPosts();
            }, 300);
        });
    }
});

function getFilteredPosts() {
    let filtered = posts;
    const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value);
    if (checked.length > 0) {
        filtered = posts.filter(p => checked.includes(p.category));
    }
    const search = document.getElementById('searchInput')?.value.toLowerCase().trim();
    if (search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(search) || p.content.toLowerCase().includes(search));
    }
    return filtered;
}

function renderPosts() {
    const filtered = getFilteredPosts();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pagePosts = filtered.slice(start, end);

    const container = document.getElementById('postList');
    container.innerHTML = '';
    if (pagePosts.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;font-size:1.5rem;padding:100px 0;">Chưa có bài viết nào phù hợp</p>';
        return;
    }

    const frag = document.createDocumentFragment();
    pagePosts.forEach(p => {
        const isLiked = p.likes.includes('user1');
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <h3 class="post-title">${p.title}</h3>
            <div class="post-meta">
                <i class="far fa-user"></i> ${p.author} • 
                <i class="far fa-calendar-alt"></i> ${p.date}
            </div>
            <div class="post-content">${p.content.substring(0,180)}...</div>
            ${p.image ? `<img src="${p.image}" alt="Ảnh minh họa">` : ''}
            <div style="text-align:right;margin-top:15px;">
                <i class="fas fa-heart post-like ${isLiked?'loved':''}"
                   onclick="event.stopPropagation(); togglePostLike(${p.id})"></i>
            </div>
        `;
        card.onclick = () => showPostDetail(p.id);
        frag.appendChild(card);
    });
    container.appendChild(frag);
    setupPagination(filtered.length);
}

function setupPagination(totalItems = posts.length) {
    const total = getFilteredPosts().length;
    const totalPages = Math.max(1, Math.ceil(total / itemsPerPage));
    currentPage = Math.min(currentPage, totalPages);

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;

    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('div');
        btn.className = 'page-num';
        if (i === currentPage) btn.classList.add('active');
        btn.textContent = i;
        btn.onclick = () => { currentPage = i; renderPosts(); };
        pageNumbers.appendChild(btn);
    }
}

document.getElementById('prevPage').onclick = () => { if(currentPage>1) {currentPage--; renderPosts();} };
document.getElementById('nextPage').onclick = () => { const max = Math.ceil(getFilteredPosts().length/itemsPerPage); if(currentPage<max) {currentPage++; renderPosts();} };

function setupFilters() {
    document.querySelector('.btn-apply').onclick = () => { currentPage = 1; renderPosts(); };
    document.querySelector('.btn-reset').onclick = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
        currentPage = 1; renderPosts();
    };
}

function showPostDetail(id) {
    const p = posts.find(x => x.id === id);
    currentPostId = id;
    document.getElementById('postModalTitle').textContent = p.title;
    document.getElementById('postModalBody').innerHTML = `
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : ''}
        <p class="text-muted" style="margin:15px 0;"><strong>Tác giả:</strong> ${p.author} • ${p.date}</p>
        <p style="font-size:1.1rem;line-height:1.9;">${p.content.replace(/\n/g, '<br>')}</p>
    `;
    const isLiked = p.likes.includes('user1');
    document.getElementById('modalHeart').className = isLiked ? 'fas fa-heart' : 'far fa-heart';
    document.getElementById('likeText').textContent = isLiked ? 'Đã yêu thích' : 'Yêu thích';
    openModal('postModal');
}

window.togglePostLike = function(id) {
    if (!localStorage.getItem('cookland_loggedin')) {
        alert('Bạn cần đăng nhập để thích bài viết!');
        return;
    }
    const post = posts.find(x => x.id === id);
    const user = 'user1';
    const idx = post.likes.indexOf(user);
    if (idx > -1) post.likes.splice(idx, 1);
    else post.likes.push(user);
    localStorage.setItem('cookland_posts', JSON.stringify(posts));
    renderPosts();
    if (currentPostId === id) showPostDetail(id);
};

function setupAddForm() {
    document.getElementById('addPostForm').onsubmit = function(e) {
        e.preventDefault();
        if (!localStorage.getItem('cookland_loggedin')) {
            alert('Vui lòng đăng nhập để đăng bài!');
            return;
        }
        const form = e.target;
        const newPost = {
            id: Date.now(),
            title: form[0].value.trim(),
            content: form[1].value.trim(),
            image: form[2].value.trim() || '',
            date: new Date().toISOString().split('T')[0],
            author: localStorage.getItem('cookland_username') || 'Người dùng CookLand',
            category: form[3].value,
            likes: []
        };
        posts.unshift(newPost);
        localStorage.setItem('cookland_posts', JSON.stringify(posts));
        form.reset();
        closeModal('addPostModal');
        currentPage = 1;
        renderPosts();
        alert('Đăng bài thành công!');
    };
}

function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }