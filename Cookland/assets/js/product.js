// product.js – FINAL VERSION: FIX TRÙNG ID VỚI HEADER

const allRecipes = [
  { id: 1, title: "Thịt kho tàu", meta: "60 phút · Trung bình", desc: "Món thịt kho mềm béo, thơm mùi nước dừa...", img: "assets/images/recipes/thit-kho-tau.jpg", section: "kho", tags: ["Việt Nam", ">60 phút"] },
  { id: 2, title: "Cá kho tộ", meta: "45 phút · Dễ", desc: "Cá lóc kho tộ đậm đà đưa cơm.", img: "assets/images/recipes/ca-kho-to.jpg", section: "kho", tags: ["Việt Nam", "30-60 phút"] },
  { id: 3, title: "Thịt kho trứng cút", meta: "40 phút · Dễ", desc: "Thịt ba rọi kho trứng cút béo ngậy.", img: "assets/images/recipes/thit-kho-trung-cut.jpg", section: "kho", tags: ["Việt Nam", "30-60 phút"] },
  { id: 4, title: "Bò kho bánh mì", meta: "70 phút · Trung bình", desc: "Bò kho thơm lừng quế hồi, chấm bánh mì.", img: "assets/images/recipes/bo-kho.jpg", section: "nau", tags: ["Việt Nam", ">60 phút"] },
  { id: 5, title: "Canh chua cá lóc", meta: "25 phút · Dễ", desc: "Canh chua thanh mát chuẩn vị miền Tây.", img: "assets/images/recipes/canh-chua.jpg", section: "nau", tags: ["Việt Nam", "<30 phút", "Healthy"] },
  { id: 6, title: "Bún bò Huế", meta: "120 phút · Khó", desc: "Hương vị đậm đà, cay nồng đặc trưng Huế.", img: "assets/images/recipes/bun-bo-hue.jpg", section: "nau", tags: ["Việt Nam", ">60 phút"] },
  { id: 7, title: "Gà rán giòn", meta: "30 phút · Dễ", desc: "Gà rán vàng giòn rụm thơm lừng.", img: "assets/images/recipes/ga-ran.jpg", section: "chien", tags: ["Âu", "30-60 phút"] },
  { id: 8, title: "Tôm chiên xù", meta: "20 phút · Dễ", desc: "Tôm chiên giòn tan, bé nào cũng thích.", img: "assets/images/recipes/tom-chien-xu.jpg", section: "chien", tags: ["<30 phút"] },
  { id: 9, title: "Salad Caesar gà nướng", meta: "15 phút · Dễ", desc: "Salad tươi mát, sốt Caesar béo ngậy.", img: "assets/images/recipes/salad-caesar.jpg", section: "healthy", tags: ["Healthy", "Âu", "<15 phút"] },
  { id:10, title: "Gỏi cuốn tôm thịt", meta: "20 phút · Dễ", desc: "Gỏi cuốn tươi ngon, chấm mắm nêm cực đã.", img: "assets/images/recipes/goi-cuon.jpg", section: "healthy", tags: ["Việt Nam", "Healthy", "<30 phút"] },
  { id:11, title: "Cơm gạo lứt rau củ", meta: "35 phút · Dễ", desc: "Thanh đạm, giàu chất xơ, tốt cho sức khỏe.", img: "assets/images/recipes/com-gao-lut.jpg", section: "healthy", tags: ["Healthy", "Vegan", "30-60 phút"] },
  { id:12, title: "Kimbap Hàn Quốc", meta: "30 phút · Trung bình", desc: "Cơm cuộn rong biển đầy ắp topping.", img: "assets/images/recipes/kimbap.jpg", section: "han", tags: ["Hàn Quốc", "30-60 phút"] },
  { id:13, title: "Bibimbap", meta: "25 phút · Dễ", desc: "Cơm trộn rau củ thịt bò sốt cay nồng.", img: "assets/images/recipes/bibimbap.jpg", section: "han", tags: ["Hàn Quốc", "Healthy", "<30 phút"] },
  { id:14, title: "Mì xào bò", meta: "18 phút · Dễ", desc: "Mì xào bò mềm thơm, rau cải xanh mướt.", img: "assets/images/recipes/mi-xao-bo.jpg", section: "nhanh", tags: ["<30 phút"] },
  { id:15, title: "Trứng ốp la bánh mì", meta: "10 phút · Siêu dễ", desc: "Bữa sáng nhanh gọn đầy đủ dinh dưỡng.", img: "assets/images/recipes/trung-op-la.jpg", section: "nhanh", tags: ["<15 phút"] }
];

const sections = {
  kho: "MÓN KHO",
  nau: "MÓN NẤU",
  chien: "MÓN CHIÊN - RÁN",
  healthy: "HEALTHY & EAT CLEAN",
  han: "MÓN HÀN",
  nhanh: "NẤU NHANH (< 30 PHÚT)"
};

const sectionsPerPage = 3;
let currentPage = 1;
let filteredRecipes = [...allRecipes];

// Hàm xóa dấu tiếng Việt + xử lý Đ/đ
function removeAccents(str) {
  if (!str) return "";
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ|Đ/g, "d");
  str = str.replace(/[^a-zA-Z0-9 ]/g, ""); 
  return str.toLowerCase().trim();
}

function getCurrentFilters() {
  // QUAN TRỌNG: Gọi đúng ID mới "productSearchInput"
  const input = document.getElementById("productSearchInput");
  const query = input ? input.value : "";
  
  const style = document.querySelector('input[name="style"]:checked')?.value || null;
  const diet  = document.querySelector('input[name="diet"]:checked')?.value || null;
  const time  = document.querySelector('input[name="time"]:checked')?.value || null;
  return { query, style, diet, time };
}

function applyFilters() {
  const { query, style, diet, time } = getCurrentFilters();
  const queryClean = removeAccents(query);

  filteredRecipes = allRecipes.filter(recipe => {
    const titleClean = removeAccents(recipe.title);
    const matchSearch = !query || titleClean.includes(queryClean);
    const matchStyle = !style || recipe.tags.includes(style);
    const matchDiet  = !diet  || recipe.tags.includes(diet);
    const matchTime  = !time  || recipe.tags.includes(time);
    return matchSearch && matchStyle && matchDiet && matchTime;
  });

  currentPage = 1;
  render();
}

function clearAllFilters() {
  // Gọi đúng ID mới
  const input = document.getElementById("productSearchInput");
  if(input) input.value = "";
  
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  filteredRecipes = [...allRecipes];
  currentPage = 1;
  render();
}

function render() {
  const container = document.getElementById("recipesContainer");
  if (!container) return;
  container.innerHTML = "";

  if (filteredRecipes.length === 0) {
    const input = document.getElementById("productSearchInput");
    const term = input ? input.value : "";
    
    let msg = term 
        ? `Không tìm thấy món nào tên là: <strong style="color:#A0522D">"${term}"</strong>`
        : "Không tìm thấy công thức phù hợp với bộ lọc.";
    
    container.innerHTML = `
      <div style="text-align:center; padding: 60px 20px;">
        <p style="font-size: 20px; color: #666; margin-bottom: 20px;">${msg}</p>
        <button id="resetBtn" style="padding:10px 20px; background:#CC55D0; color:#fff; border:none; border-radius:8px; cursor:pointer;">Xóa bộ lọc</button>
      </div>
    `;
    document.getElementById('resetBtn')?.addEventListener('click', clearAllFilters);
    renderPagination(0);
    return;
  }

  const availableSections = Object.keys(sections).filter(sec =>
    filteredRecipes.some(r => r.section === sec)
  );
  const totalPages = Math.max(1, Math.ceil(availableSections.length / sectionsPerPage));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * sectionsPerPage;
  const end = start + sectionsPerPage;
  const sectionsThisPage = availableSections.slice(start, end);

  sectionsThisPage.forEach(sec => {
    const h2 = document.createElement("h2");
    h2.className = "section-title";
    h2.textContent = sections[sec];
    container.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "grid";

    filteredRecipes.filter(r => r.section === sec).forEach(r => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
          <a href="recipe.html?id=${r.id}" style="overflow:hidden">
            <img class="thumb" src="${r.img}" alt="${r.title}">
          </a>
          <div class="card-body">
            <h3 class="card-title">${r.title}</h3>
            <div class="card-meta">${r.meta}</div>
            <div class="card-tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <div class="card-desc">${r.desc}</div>
          </div>
          <div class="card-footer">
            <a class="view-link" href="recipe.html?id=${r.id}">Xem chi tiết</a>
          </div>
        `;
        grid.appendChild(card);
      });
    container.appendChild(grid);
  });
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNumbers = document.getElementById("pageNumbers");

  if (!pageNumbers) return;
  pageNumbers.innerHTML = "";
  
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages || totalPages === 0;

  if (totalPages === 0) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    pageNumbers.appendChild(btn);
  }
}

// KHỞI CHẠY
document.addEventListener("DOMContentLoaded", () => {
  // Lấy đúng ID productSearchInput
  const searchInput = document.getElementById("productSearchInput"); 
  const searchBtn = document.getElementById("searchBtn");
  const applyBtn = document.getElementById("applyFilter");
  const clearBtn = document.getElementById("clearFilter");

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters); // Gõ là tìm
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyFilters();
      }
    });
  }

  if (searchBtn) searchBtn.addEventListener("click", applyFilters);
  if (applyBtn) applyBtn.addEventListener("click", applyFilters);
  if (clearBtn) clearBtn.addEventListener("click", clearAllFilters);

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); }
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    const avail = Object.keys(sections).filter(s => filteredRecipes.some(r => r.section === s));
    const total = Math.max(1, Math.ceil(avail.length / sectionsPerPage));
    if (currentPage < total) { currentPage++; render(); window.scrollTo(0,0); }
  });

  render();
});