// assets/js/tips.js – ĐÃ ĐỒNG BỘ HOÀN TOÀN VỚI tip.js (15 mẹo, đúng id, đúng tiêu đề)
const allTips = [
  { id: 1,  title: "4 mẹo khử mùi tanh của cá siêu hiệu quả, chỉ 30 giây là hết tanh!", content: "Chà cá với chanh tươi hoặc ngâm nước vo gạo...", tags: ["#dễlàm","#nhanhgọn","#khửmùi"] },
  { id: 2,  title: "Bí kíp bảo quản rau sống tươi ngon cả tuần đến 10 ngày không héo", content: "Đừng bao giờ rửa rau trước khi bảo quản...", tags: ["#bảooquản","#raulá"] },
  { id: 3,  title: "Review nồi chiên không dầu Xiaomi 6L: Đáng tiền với công nghệ chiên không dầu...", content: "Dung tích 6L, công nghệ 360°...", tags: ["#review","#dụngcụ"] },
  { id: 4,  title: "Mẹo luộc trứng lòng đào hoàn hảo: 6 phút vàng, lòng đỏ dẻo mịn không tanh!", content: "Luộc 6 phút + ngâm đá 2 phút...", tags: ["#dễlàm","#trứng","#nhanhgọn"] },
  { id: 5,  title: "Cách làm sạch thớt gỗ không dùng hóa chất: 5 bước tự nhiên, khử khuẩn 99%!", content: "Muối biển + chanh chà mạnh 5 phút...", tags: ["#khửmùi","#dễlàm"] },
  { id: 6,  title: "Mẹo giữ bánh mì giòn lâu: 5 cách bảo quản đến 1 tháng không mốc...", content: "Cắt lát → bọc giấy bạc → đông lạnh...", tags: ["#bảooquản"] },
  { id: 7,  title: "Review máy xay sinh tố Philips: Ưu nhược điểm chi tiết, xay mịn đá chỉ 30 giây!", content: "Lưỡi dao ProMix, cối thủy tinh...", tags: ["#review","#dụngcụ"] },
  { id: 8,  title: "Mẹo nấu cơm dẻo không bị khô: 5 bí quyết chuẩn vị...", content: "Ngâm gạo 30 phút + thêm dầu ăn...", tags: ["#dễlàm","#cơm","#nấuăn"] },
  { id: 9,  title: "Cách khử mùi tủ lạnh tự nhiên: 6 mẹo hút hôi chỉ 24h...", content: "Đặt bã cà phê khô hoặc baking soda...", tags: ["#khửmùi","#nhanhgọn"] },
  { id:10, title: "Mẹo chọn trái cây tươi ngon: 5 bí quyết kiểm tra màu sắc, mùi...", content: "Chọn quả nặng tay, thơm tự nhiên...", tags: ["#raulá","#nấuăn"] },
  { id:11, title: "Review dao bếp Victorinox: Ưu nhược điểm chi tiết, sắc bén Thụy Sĩ...", content: "Thép X50CrMoV15, cán Fibrox...", tags: ["#review","#dụngcụ"] },
  { id:12, title: "Mẹo làm mềm thịt bò nhanh: 5 cách ướp 15 phút, thịt tan chảy không dai!", content: "Ướp nước ép dứa hoặc baking soda...", tags: ["#dễlàm","#nấuăn"] },
  { id:13, title: "Cách bảo quản gia vị khô lâu dài: 5 mẹo giữ hương vị nguyên vẹn 1-2 năm...", content: "Hộp kín + gói hút ẩm...", tags: ["#bảooquản"] },
  { id:14, title: "Mẹo rã đông thực phẩm an toàn: 5 cách tránh vi khuẩn...", content: "Chuyển ngăn mát 12-24h hoặc ngâm nước lạnh...", tags: ["#bảooquản","#an_toàn"] },
  { id:15, title: "Review lò nướng Bosch: Ưu nhược điểm chi tiết, nướng đều 4D HotAir...", content: "Công nghệ 4D HotAir, tự làm sạch...", tags: ["#review","#dụngcụ"] }
];

const itemsPerPage = 6;
let currentPage = 1;
let filtered = [...allTips];

// --- CẬP NHẬT 1: Đổi ID input thành tipsSearchInput ---
function getFilters() {
  // Lấy giá trị từ ID mới
  const input = document.getElementById("tipsSearchInput");
  const query = input ? input.value.trim().toLowerCase() : "";

  const typeFilters = Array.from(document.querySelectorAll('input[name="type"]:checked'))
    .map(cb => cb.value.toLowerCase());

  const levelFilters = Array.from(document.querySelectorAll('input[name="level"]:checked'))
    .map(cb => cb.value.toLowerCase());

  return { query, typeFilters, levelFilters };
}

function applyFilter() {
  const { query, typeFilters, levelFilters } = getFilters();

  filtered = allTips.filter(tip => {
    const matchesSearch = !query ||
      tip.title.toLowerCase().includes(query) ||
      tip.content.toLowerCase().includes(query) ||
      tip.tags.some(tag => tag.toLowerCase().includes(query));

    const matchesType = typeFilters.length === 0 ||
      typeFilters.some(filter => tip.tags.some(tag => tag.includes(`#${filter}`)));

    const matchesLevel = levelFilters.length === 0 ||
      levelFilters.some(filter => tip.tags.some(tag => tag.includes(`#${filter}`)));

    return matchesSearch && matchesType && matchesLevel;
  });

  currentPage = 1;
  render();
}

// --- CẬP NHẬT 2: Xóa ID mới ---
function clearAllFilters() {
  const input = document.getElementById("tipsSearchInput");
  if(input) input.value = "";
  
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  filtered = [...allTips];
  currentPage = 1;
  render();
}

function render() {
  const container = document.getElementById("tipsList");
  if(!container) return;
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filtered.slice(start, end);

  if (pageData.length === 0) {
    container.innerHTML = `<p style="text-align:center;padding:50px;color:#999;font-size:18px;">Không tìm thấy mẹo nào phù hợp.</p>`;
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
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!pageNumbers) return;
  pageNumbers.innerHTML = "";

  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages || totalPages === 0;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => { 
      currentPage = i; 
      render(); 
      window.scrollTo({top:0,behavior:'smooth'}); 
    };
    pageNumbers.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  // 1. Nút Lọc
  document.getElementById("applyFilter")?.addEventListener("click", applyFilter);
  document.getElementById("clearFilter")?.addEventListener("click", clearAllFilters);

  // --- CẬP NHẬT 3: Sự kiện cho ô tìm kiếm mới ---
  const searchInput = document.getElementById("tipsSearchInput");
  const searchBtn = document.getElementById("tipsSearchBtn");

  // Gõ Enter trong ô input
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Chặn reload form
        applyFilter();
      }
    });
    // (Tuỳ chọn) Tìm ngay khi gõ:
    // searchInput.addEventListener("input", applyFilter); 
  }

  // Click icon kính lúp
  if (searchBtn) {
    searchBtn.addEventListener("click", applyFilter);
  }

  // Phân trang
  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; render(); window.scrollTo(0,0); }
  });
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    if (currentPage < Math.ceil(filtered.length / itemsPerPage)) {
      currentPage++; render(); window.scrollTo(0,0);
    }
  });
});