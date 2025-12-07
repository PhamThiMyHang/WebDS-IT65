// assets/js/tips.js – HOÀN CHỈNH: Lọc theo 2 nhóm + tìm kiếm + chỉ bấm Áp dụng mới lọc
const allTips = [
  { id:1, title:"Mẹo khử mùi tanh của cá chỉ trong 30 giây", content:"Chà cá với chanh tươi hoặc ngâm nước vo gạo.", tags:["#dễlàm","#nhanhgọn","#khửmùi"] },
  { id:2, title:"Cách bảo quản rau sống tươi cả tuần", content:"Rửa sạch → để ráo → bọc giấy báo → túi zip.", tags:["#bảooquản","#raulá"] },
  { id:3, title:"Review nồi chiên không dầu Xiaomi 6L", content:"Chiên giòn, tiết kiệm dầu, dễ vệ sinh.", tags:["#review","#dụngcụ"] },
  { id:4, title:"Mẹo luộc trứng lòng đào hoàn hảo", content:"Luộc 6 phút + ngâm đá → lòng đỏ chảy đẹp.", tags:["#dễlàm","#trứng","#nhanhgọn"] },
  { id:5, title:"Cách làm sạch thớt gỗ tự nhiên", content:"Muối + chanh chà mạnh → rửa sạch → phơi nắng.", tags:["#khửmùi","#dễlàm"] },
  { id:6, title:"Mẹo giữ bánh mì giòn lâu", content:"Bọc giấy bạc → tủ đông → nướng lại 5 phút.", tags:["#bảooquản"] },
  { id:7, title:"Review máy xay sinh tố Philips", content:"Xay đá mịn, bền, dễ rửa.", tags:["#review","#dụngcụ"] },
  { id:8, title:"Mẹo nấu cơm dẻo không khô", content:"Ngâm gạo + thêm tí dầu ăn.", tags:["#dễlàm","#cơm","#nấuăn"] },
  { id:9, title:"Khử mùi tủ lạnh bằng cà phê", content:"Đặt bã cà phê 24h là hết mùi.", tags:["#khửmùi","#nhanhgọn"] },
  { id:10,title:"Mẹo chọn trái cây tươi ngon", content:"Chọn quả nặng tay, thơm, không vết thâm.", tags:["#raulá","#nấuăn"] },
  { id:11,title:"Mẹo làm mềm thịt bò nhanh", content:"Ướp dứa hoặc baking soda 30 phút.", tags:["#dễlàm","#nấuăn"] },
  { id:12,title:"Cách bảo quản gia vị khô lâu", content:"Hộp kín + nơi khô ráo.", tags:["#bảooquản"] },
  { id:13,title:"Mẹo rã đông thịt an toàn", content:"Chuyển xuống ngăn mát trước 12h.", tags:["#bảooquản","#an_toàn"] }
];

const itemsPerPage = 6;
let currentPage = 1;
let filtered = [...allTips];

// Lấy giá trị bộ lọc hiện tại
function getFilters() {
  const query = document.getElementById("searchInput")?.value.trim().toLowerCase() || "";

  const typeFilters = Array.from(document.querySelectorAll('input[name="type"]:checked'))
    .map(cb => cb.value.toLowerCase());

  const levelFilters = Array.from(document.querySelectorAll('input[name="level"]:checked'))
    .map(cb => cb.value.toLowerCase());

  return { query, typeFilters, levelFilters };
}

// Chỉ lọc khi bấm nút Áp dụng
function applyFilter() {
  const { query, typeFilters, levelFilters } = getFilters();

  filtered = allTips.filter(tip => {
    // 1. Tìm kiếm theo từ khóa (tên + nội dung + hashtag)
    const matchesSearch = !query ||
      tip.title.toLowerCase().includes(query) ||
      tip.content.toLowerCase().includes(query) ||
      tip.tags.some(tag => tag.toLowerCase().includes(query));

    // 2. Lọc theo Loại mẹo
    const matchesType = typeFilters.length === 0 ||
      typeFilters.some(filter => tip.tags.some(tag => tag.includes(`#${filter}`)));

    // 3. Lọc theo Độ dễ
    const matchesLevel = levelFilters.length === 0 ||
      levelFilters.some(filter => tip.tags.some(tag => tag.includes(`#${filter}`)));

    return matchesSearch && matchesType && matchesLevel;
  });

  currentPage = 1;
  render();
}

function clearAllFilters() {
  document.getElementById("searchInput").value = "";
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  filtered = [...allTips];
  currentPage = 1;
  render();
}

// Render danh sách
function render() {
  const container = document.getElementById("tipsList");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filtered.slice(start, end);

  if (pageData.length === 0) {
    container.innerHTML = `<p style="text-align:center;padding:100px;color:#999;font-size:18px;">Không tìm thấy mẹo nào phù hợp</p>`;
  } else {
    pageData.forEach(t => {
      const item = document.createElement("div");
      item.className = "tip-item";
      item.innerHTML = `
        <h3 class="tip-title"><a href="tip.html?id=${t.id}">${t.title}</a></h3>
        <div class="tip-tags">
          ${t.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="tip-content">${t.content}</div>
      `;
      container.appendChild(item);
    });
  }
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const pageNumbers = document.getElementById("pageNumbers");
  pageNumbers.innerHTML = "";

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage >= totalPages;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => { currentPage = i; render(); window.scrollTo({top:0,behavior:'smooth'}); };
    pageNumbers.appendChild(btn);
  }
}

// Khởi động
document.addEventListener("DOMContentLoaded", () => {
  render();

  document.getElementById("applyFilter")?.addEventListener("click", applyFilter);
  document.getElementById("clearFilter")?.addEventListener("click", clearAllFilters);

  document.getElementById("prevBtn").onclick = () => {
    if (currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); }
  };
  document.getElementById("nextBtn").onclick = () => {
    if (currentPage < Math.ceil(filtered.length / itemsPerPage)) {
      currentPage++; render(); window.scrollTo(0,0);
    }
  };
});