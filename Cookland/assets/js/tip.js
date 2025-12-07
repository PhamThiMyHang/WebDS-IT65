// assets/js/tip.js – ĐẦY ĐỦ 15 MẸO + SMART BACK
const tips = [
  { id: 1, title: "Mẹo khử mùi tanh của cá chỉ trong 30 giây", content: "Chỉ cần chà cá với vài lát chanh tươi hoặc ngâm nước vo gạo 10 phút là mùi tanh bay hết. Cách này an toàn, tự nhiên, không dùng hóa chất.", image: "assets/images/meokhumui.jpg" },
  { id: 2, title: "Cách bảo quản rau sống tươi cả tuần không héo", content: "Rửa sạch rau, để thật ráo nước, bọc giấy báo hoặc khăn giấy, cho vào túi zip kín, đặt ở ngăn mát tủ lạnh. Tránh để gần trái cây chín.", image: "assets/images/cachbaoquan.jpg" },
  { id: 3, title: "Review nồi chiên không dầu Xiaomi 6L – đáng tiền!", content: "Nồi chiên Xiaomi 6L thiết kế đẹp, công suất mạnh, chiên giòn mà không dầu mỡ. Dễ vệ sinh, giá rẻ, dùng 6 tháng vẫn tốt.", image: "" },
  { id: 4, title: "Mẹo luộc trứng lòng đào hoàn hảo", content: "Đun nước sôi, thả trứng vào luộc đúng 6 phút, vớt ra ngâm nước đá 2 phút để dễ bóc vỏ. Lòng đỏ chảy vừa phải.", image: "assets/images/luoc-trung.jpg" },
  { id: 5, title: "Cách làm sạch thớt gỗ không dùng hóa chất", content: "Rắc muối biển lên thớt, cắt đôi chanh chà mạnh 5 phút, rửa sạch bằng nước ấm, phơi khô dưới nắng để khử khuẩn.", image: "assets/images/lam-sach-thot.jpg" },
  { id: 6, title: "Mẹo giữ bánh mì giòn lâu", content: "Bọc bánh mì trong giấy bạc, để tủ đông. Khi ăn, nướng lò 5 phút ở 180°C là giòn như mới.", image: "assets/images/bao-quan-banhmi.jpg" },
  { id: 7, title: "Review máy xay sinh tố Philips – mạnh mẽ!", content: "Máy xay Philips xay đá mịn, lưỡi dao sắc, dễ rửa. Giá rẻ, dùng hàng ngày cho sinh tố, súp rất tiện.", image: "assets/images/may-xay.jpg" },
  { id: 8, title: "Mẹo nấu cơm dẻo không bị khô", content: "Ngâm gạo 30 phút trước nấu, thêm 1 thìa dầu ăn hoặc bơ vào nồi, cơm sẽ dẻo thơm hơn.", image: "assets/images/nau-com.jpg" },
  { id: 9, title: "Cách khử mùi tủ lạnh tự nhiên", content: "Đặt bã cà phê hoặc hộp baking soda mở nắp vào tủ 24h, mùi hôi bay hết. Thay mới mỗi tháng.", image: "assets/images/khu-mui-tulanh.jpg" },
  { id: 10, title: "Mẹo chọn trái cây tươi ngon", content: "Xem màu sắc rực rỡ, ngửi mùi thơm tự nhiên, sờ độ đàn hồi, tránh quả mềm nhũn hoặc có vết thâm.", image: "assets/images/chon-traicay.jpg" },
  { id: 11, title: "Review dao bếp Victorinox – sắc bén!", content: "Dao Victorinox cắt gì cũng dễ, lưỡi thép cao cấp, cầm chắc tay. Bền bỉ, giá phải chăng cho bếp gia đình.", image: "assets/images/dao-bep.jpg" },
  { id: 12, title: "Mẹo làm mềm thịt bò nhanh", content: "Ướp thịt với nước ép dứa hoặc baking soda 30 phút trước nấu, thịt mềm mà giữ vị ngon.", image: "assets/images/mem-thitbo.jpg" },
  { id: 13, title: "Cách bảo quản gia vị khô lâu dài", content: "Đóng gia vị vào hộp kín, để nơi mát mẻ, khô ráo, tránh ánh nắng trực tiếp để giữ hương vị.", image: "assets/images/bao-quan-gia-vi.jpg" },
  { id: 14, title: "Mẹo rã đông thực phẩm an toàn", content: "Chuyển từ tủ đông xuống ngăn mát 12h trước, tránh rã đông ở nhiệt độ phòng để ngừa vi khuẩn.", image: "assets/images/ra-dong.jpg" },
  { id: 15, title: "Review lò nướng Bosch – chuyên nghiệp!", content: "Lò nướng Bosch nhiều chế độ, nướng đều, dễ điều khiển. Chất lượng cao, phù hợp bếp chuyên nghiệp.", image: "assets/images/lo-nuong.jpg" }
];

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const tipId = parseInt(params.get("id"));
const tip = tips.find(t => t.id === tipId);

// Render chi tiết mẹo
function renderTip() {
  const container = document.getElementById("recipeContainer");

  if (!tip) {
    container.innerHTML = `<p style="text-align:center;padding:100px;font-size:20px;color:#999;">Không tìm thấy mẹo vặt này.</p>`;
    return;
  }

  container.innerHTML = `
    <img class="hero" src="${tip.image || 'assets/images/default-tip.jpg'}" alt="${tip.title}">
    <h2 class="recipe-title">${tip.title}</h2>
    <div class="meta">Mẹo hay từ Cookland</div>

    <h3 class="section-title">Nội dung mẹo</h3>
    <p class="content">${tip.content.replace(/\n/g, '<br>')}</p>
  `;
}

// Smart back – quay lại đúng vị trí + giữ trạng thái lọc
document.getElementById("smartBack")?.addEventListener("click", (e) => {
  e.preventDefault();
  history.back();
});

renderTip();