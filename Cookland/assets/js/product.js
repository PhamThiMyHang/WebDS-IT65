// assets/js/product.js – CHỈ LỌC KHI BẤM NÚT "ÁP DỤNG"
const allRecipes = [ /* giữ nguyên mảng allRecipes như cũ */ 
  { id: 1, title: "Thịt kho tàu", meta: "60 phút · Trung bình", desc: "Món thịt kho mềm béo, thơm mùi nước dừa...", img: "assets/images/recipes/thit-kho-tau.jpg", section: "kho", tags: ["Việt Nam", ">60 phút"] },
  { id: 2, title: "Cá kho tộ", meta: "45 phút · Dễ", desc: "Cá lóc kho tộ đậm đà.", img: "assets/images/recipes/ca-kho-to.jpg", section: "kho", tags: ["Việt Nam", "30-60 phút"] },
  { id: 3, title: "Thịt kho trứng cút", meta: "40 phút · Dễ", desc: "Thịt ba rọi kho trứng cút béo ngậy.", img: "assets/images/recipes/thit-kho-trung-cut.jpg", section: "kho", tags: ["Việt Nam", "30-60 phút"] },
  { id: 4, title: "Bò kho bánh mì", meta: "70 phút · Trung bình", desc: "Bò kho thơm lừng quế hồi.", img: "assets/images/recipes/bo-kho.jpg", section: "nau", tags: ["Việt Nam", ">60 phút"] },
  { id: 5, title: "Canh chua cá lóc", meta: "25 phút · Dễ", desc: "Canh chua thanh mát miền Tây.", img: "assets/images/recipes/canh-chua.jpg", section: "nau", tags: ["Việt Nam", "<30 phút", "Healthy"] },
  { id: 6, title: "Bún bò Huế", meta: "120 phút · Khó", desc: "Hương vị đậm đà Huế.", img: "assets/images/recipes/bun-bo-hue.jpg", section: "nau", tags: ["Việt Nam", ">60 phút"] },
  { id: 7, title: "Gà rán giòn", meta: "30 phút · Dễ", desc: "Gà rán vàng giòn thơm lừng.", img: "assets/images/recipes/ga-ran.jpg", section: "chien", tags: ["Âu", "30-60 phút"] },
  { id: 8, title: "Tôm chiên xù", meta: "20 phút · Dễ", desc: "Tôm chiên giòn tan.", img: "assets/images/recipes/tom-chien-xu.jpg", section: "chien", tags: ["<30 phút"] },
  { id: 9, title: "Salad Caesar gà nướng", meta: "15 phút · Dễ", desc: "Salad tươi mát ăn kiêng.", img: "assets/images/recipes/salad-caesar.jpg", section: "healthy", tags: ["Healthy", "Âu", "<15 phút"] },
  { id:10, title: "Gỏi cuốn tôm thịt", meta: "20 phút · Dễ", desc: "Gỏi cuốn tươi ngon.", img: "assets/images/recipes/goi-cuon.jpg", section: "healthy", tags: ["Việt Nam", "Healthy", "<30 phút"] },
  { id:11, title: "Cơm gạo lứt rau củ", meta: "35 phút · Dễ", desc: "Thanh đạm tốt cho sức khỏe.", img: "assets/images/recipes/com-gao-lut.jpg", section: "healthy", tags: ["Healthy", "Vegan", "30-60 phút"] },
  { id:12, title: "Kimbap Hàn Quốc", meta: "30 phút · Trung bình", desc: "Cơm cuộn rong biển đầy topping.", img: "assets/images/recipes/kimbap.jpg", section: "han", tags: ["Hàn Quốc", "30-60 phút"] },
  { id:13, title: "Bibimbap", meta: "25 phút · Dễ", desc: "Cơm trộn rau củ thịt bò.", img: "assets/images/recipes/bibimbap.jpg", section: "han", tags: ["Hàn Quốc", "Healthy", "<30 phút"] },
  { id:14, title: "Mì xào bò", meta: "18 phút · Dễ", desc: "Mì xào bò mềm thơm.", img: "assets/images/recipes/mi-xao-bo.jpg", section: "nhanh", tags: ["<30 phút"] },
  { id:15, title: "Trứng ốp la bánh mì", meta: "10 phút · Siêu dễ", desc: "Bữa sáng nhanh gọn.", img: "assets/images/recipes/trung-op-la.jpg", section: "nhanh", tags: ["<15 phút"] }
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

// ==================== LẤY BỘ LỌC HIỆN TẠI ====================
function getCurrentFilters() {
  const query = document.getElementById("searchInput")?.value.toLowerCase().trim() || "";

  const style = document.querySelector('input[name="style"]:checked')?.value || null;
  const diet  = document.querySelector('input[name="diet"]:checked')?.value || null;
  const time  = document.querySelector('input[name="time"]:checked')?.value || null;

  return { query, style, diet, time };
}

// ==================== ÁP DỤNG LỌC (chỉ chạy khi bấm nút Áp dụng) ====================
function applyFilters() {
  const { query, style, diet, time } = getCurrentFilters();

  filteredRecipes = allRecipes.filter(recipe => {
    // Tìm kiếm
    const matchSearch = !query ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.desc.toLowerCase().includes(query) ||
      recipe.tags.some(t => t.toLowerCase().includes(query));

    // Lọc từng nhóm (chỉ kiểm tra nếu người dùng đã chọn)
    const matchStyle = !style || recipe.tags.includes(style);
    const matchDiet  = !diet  || recipe.tags.includes(diet);
    const matchTime  = !time  || recipe.tags.includes(time);

    return matchSearch && matchStyle && matchDiet && matchTime;
  });

  currentPage = 1;
  render();
}

// Xóa toàn bộ
function clearAllFilters() {
  document.getElementById("searchInput").value = "";
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  filteredRecipes = [...allRecipes];
  currentPage = 1;
  render();
}

// ==================== RENDER & PAGINATION (giữ nguyên như cũ) ====================
function render() {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  const availableSections = Object.keys(sections).filter(sec =>
    filteredRecipes.some(r => r.section === sec)
  );

  const totalPages = Math.max(1, Math.ceil(availableSections.length / sectionsPerPage));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * sectionsPerPage;
  const end = start + sectionsPerPage;
  const sectionsThisPage = availableSections.slice(start, end);

  if (sectionsThisPage.length === 0) {
    container.innerHTML = "<p style='text-align:center;padding:80px;font-size:18px;color:#999;'>Không tìm thấy công thức nào phù hợp.</p>";
  } else {
    sectionsThisPage.forEach(sec => {
      const title = document.createElement("h2");
      title.className = "section-title";
      title.textContent = sections[sec];
      container.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "grid";

      filteredRecipes.filter(r => r.section === sec).forEach(r => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
          <a href="recipe.html?id=${r.id}">
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
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNumbers = document.getElementById("pageNumbers");
  if (!pageNumbers) return;

  pageNumbers.innerHTML = "";
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    pageNumbers.appendChild(btn);
  }
}

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  // Chỉ chạy lọc khi bấm nút "Áp dụng"
  document.getElementById("applyFilter")?.addEventListener("click", applyFilters);
  document.getElementById("clearFilter")?.addEventListener("click", clearAllFilters);

  // Nút phân trang
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); }
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    const available = Object.keys(sections).filter(sec => filteredRecipes.some(r => r.section === sec));
    const total = Math.max(1, Math.ceil(available.length / sectionsPerPage));
    if (currentPage < total) { currentPage++; render(); window.scrollTo(0,0); }
  });

  // Render lần đầu
  render();
});