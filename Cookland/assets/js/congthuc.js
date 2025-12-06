let recipes = JSON.parse(localStorage.getItem('cookland_recipes')) || [
    {id:1,title:"Phở bò Hà Nội",image:"assets/images/phoboHN.jpg",time:"180 phút",level:"Khó",desc:"Quốc hồn quốc túy",style:"vietnam",diet:"",difficulty:"kho",cooktime:"60+",ingredients:["Xương bò","Hồi, quế","Bánh phở"],steps:["Ninh xương 8 tiếng","Pha nước dùng","Trụng phở"]},
    {id:2,title:"Gỏi cuốn tôm thịt",image:"assets/images/goicuontomthit.jpg",time:"15 phút",level:"Dễ",desc:"Món khai vị healthy",style:"vietnam",diet:"healthy",difficulty:"de",cooktime:"15",ingredients:["Bánh tráng","Tôm","Thịt"],steps:["Luộc tôm thịt","Cuốn","Chấm"]},
    {id:3,title:"Salad Caesar",image:"assets/images/SaladCaesar.jpg",time:"20 phút",level:"Dễ",desc:"Healthy & ngon miệng",style:"au",diet:"healthy",difficulty:"de",cooktime:"15",ingredients:["Xà lách","Gà","Sốt"],steps:["Trộn rau","Rưới sốt"]},
    {id:4,title:"Cà ri gà",image:"assets/images/cariga.jpg",time:"35 phút",level:"Trung bình",desc:"Thơm lừng, đậm đà",style:"an-do",diet:"",difficulty:"trung-binh",cooktime:"30",ingredients:["Gà","Cà ri","Nước cốt dừa"],steps:["Xào gà","Đun sôi"]},
    {id:5,title:"Bánh flan",image:"assets/images/banhflan.jpg",time:"60 phút",level:"Dễ",desc:"Mềm mịn tan chảy",style:"au",diet:"",difficulty:"de",cooktime:"60",ingredients:["Trứng","Sữa","Đường"],steps:["Làm caramel","Hấp"]},
    {id:6,title:"Bún bò Huế",image:"assets/images/bunbohue.jpg",time:"120 phút",level:"Khó",desc:"Đậm đà cố đô",style:"vietnam",diet:"",difficulty:"kho",cooktime:"60+",ingredients:["Xương bò","Mắm ruốc"],steps:["Ninh xương","Pha mắm ruốc"]}
];

let currentTab = 'all';
let favorites = JSON.parse(localStorage.getItem('cookland_favs') || '[]');

const recipeListEl = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');

function isLoggedIn() {
    return localStorage.getItem('cookland_loggedin') === 'true';
}
function requireLogin(action) {
    if (!isLoggedIn()) {
        alert(`Bạn cần đăng nhập để ${action}!`);
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html').then(r=>r.text()).then(d=>document.getElementById('header').innerHTML=d);
    fetch('footer.html').then(r=>r.text()).then(d=>document.getElementById('footer').innerHTML=d);

    renderRecipes();
    updateFavCount();

    // Tìm kiếm
    let timer;
    searchInput.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(renderRecipes, 300);
    });

    // Lọc
    document.querySelector('.btn-apply')?.addEventListener('click', renderRecipes);
    document.querySelector('.btn-reset')?.addEventListener('click', () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
        renderRecipes();
    });

    // Thêm công thức
    document.getElementById('addForm')?.addEventListener('submit', e => {
        e.preventDefault();
        if (!requireLogin('đăng công thức mới')) return;

        const f = e.target.elements;
        const newRecipe = {
            id: Date.now(),
            title: f[0].value.trim(),
            image: f[1].value.trim() || 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80',
            time: f[2].value.trim(),
            level: f[3].value,
            desc: "Công thức mới từ cộng đồng",
            style: "vietnam",
            diet: "",
            difficulty: f[3].value === "Dễ" ? "de" : f[3].value === "Khó" ? "kho" : "trung-binh",
            cooktime: f[2].value.includes("15") ? "15" : f[2].value.includes("30") ? "30" : f[2].value.includes("60") ? "60" : "60+",
            ingredients: f[4].value.split('\n').map(x => x.trim()).filter(x => x),
            steps: f[5].value.split('\n').map(x => x.trim()).filter(x => x)
        };
        recipes.unshift(newRecipe);
        localStorage.setItem('cookland_recipes', JSON.stringify(recipes));
        e.target.reset();
        closeModal('addModal');
        renderRecipes();
        alert('Đăng công thức thành công!');
    });
});

function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

function toggleFavorite(id, e) {
    e.stopPropagation();
    if (!requireLogin('yêu thích công thức')) return;

    if (favorites.includes(id)) {
        favorites = favorites.filter(x => x !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('cookland_favs', JSON.stringify(favorites));
    updateFavCount();
    renderRecipes();
}

function updateFavCount() {
    const el = document.getElementById('favCount');
    if (el) el.textContent = favorites.length;
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderRecipes();
}

function getFilteredRecipes() {
    let list = currentTab === 'favorite' ? recipes.filter(r => favorites.includes(r.id)) : recipes;
    const q = searchInput.value.toLowerCase().trim();
    if (q) list = list.filter(r => r.title.toLowerCase().includes(q));
    const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value);
    if (checked.length > 0) {
        list = list.filter(r => checked.some(v => r.style === v || r.diet === v || r.difficulty === v || r.cooktime === v));
    }
    return list;
}

function renderRecipes() {
    const list = getFilteredRecipes();
    recipeListEl.innerHTML = '';

    if (list.length === 0) {
        recipeListEl.innerHTML = '<p style="text-align:center;color:#999;font-size:1.6rem;padding:120px 0;">Không tìm thấy công thức nào</p>';
        return;
    }

    const frag = document.createDocumentFragment();
    list.forEach(r => {
        const loved = favorites.includes(r.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${r.image}" alt="${r.title}">
            </div>
            <div class="card-body">
                <h5>${r.title}</h5>
                <p class="info"><i class="far fa-clock"></i> ${r.time} • ${r.level}</p>
                <p>${r.desc}</p>
                <div class="card-actions">
                    <button onclick="showDetail(${r.id})">Xem chi tiết →</button>
                    <i class="fas fa-heart ${loved ? 'loved' : ''}" onclick="event.stopPropagation(); toggleFavorite(${r.id}, event)"></i>
                </div>
            </div>
        `;
        card.addEventListener('click', e => {
            if (!e.target.closest('button') && !e.target.closest('i')) showDetail(r.id);
        });
        frag.appendChild(card);
    });
    recipeListEl.appendChild(frag);
}

function showDetail(id) {
    const r = recipes.find(x => x.id === id);
    if (!r) return;
    document.getElementById('detailTitle').textContent = r.title;
    document.getElementById('detailBody').innerHTML = `
        <img src="${r.image}" alt="${r.title}" style="border-radius:16px;width:100%;">
        <p style="margin:15px 0;font-size:1.1rem;">
            <strong>Thời gian:</strong> ${r.time} • <strong>Độ khó:</strong> ${r.level}
        </p>
        <h3>Nguyên liệu</h3>
        <ul style="margin-left:20px;line-height:1.8;">${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>Cách làm</h3>
        <ol style="margin-left:20px;line-height:1.8;">${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    `;
    openModal('detailModal');
}