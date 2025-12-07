// assets/js/recipe.js – ĐÃ GIẢM BƯỚC ẢNH (một số món có, một số món không)
const recipes = [
  {
  id: 1,
  title: "Thịt kho tàu",
  meta: "90 phút · Trung bình · 6 người",
  hero: "assets/images/recipes/thit-kho-tau.jpg",
  tags: ["Việt Nam", ">60 phút"],

  // ==================== NGUYÊN LIỆU ====================
  ingredients: [
    "Thịt ba chỉ (hoặc chân giò) – 500gr",
    "Trứng vịt luộc bóc vỏ – 5 quả",
    "Nước dừa tươi – 400ml",
    "Hành tím băm – 1 muỗng canh",
    "Tỏi băm – 1 muỗng canh",
    "Nước mắm ngon – 3 muỗng canh",
    "Đường – 2 muỗng canh + 1 muỗng cà phê (để thắng màu)",
    "Hạt nêm – ⅓ muỗng canh",
    "Tiêu xay – 1 muỗng cà phê"
  ],

  // ==================== MẸO CHỌN NGUYÊN LIỆU (tùy chọn hiển thị) ====================
  tips: [
    "Chọn thịt heo có màu hồng tươi, mỡ trắng sáng, nạc và mỡ cân bằng, ấn tay có độ đàn hồi, không có mùi lạ.",
    "Chọn trứng vịt có lớp phấn trắng bên ngoài, soi đèn thấy hồng trong suốt, túi khí nhỏ, lắc không nghe tiếng nước."
  ],

  // ==================== CHỈ 4 BƯỚC NHƯ BẠN YÊU CẦU ====================
  steps: [
    {
      text: `<strong> Ướp thịt</strong><br>
            Thịt ba chỉ rửa sạch với nước muối loãng, để ráo rồi cắt miếng vừa ăn (nên chọn thịt có da mỏng để kho mau mềm và không ngấy).<br>
            Cho vào tô cùng 1 muỗng canh hành băm + 1 muỗng canh tỏi băm + 3 muỗng canh nước mắm + 2 muỗng canh đường + ⅓ muỗng canh hạt nêm + 1 muỗng cà phê tiêu. Trộn đều, bọc kín, ướp ít nhất 1 tiếng cho thấm gia vị.`,
      img: "assets/images/steps/uop-thit.jpg"
    },
    {
      text: `<strong> Thắng nước màu</strong><br>
            Bắc nồi lên bếp, cho 1 muỗng cà phê đường vào đun lửa vừa, khuấy đều đến khi đường tan và chuyển màu nâu cánh gián thì tắt bếp ngay.<br>
            Đổ thêm ½ chén nước lọc vào để loãng bớt, chờ nguội màu sẽ đậm hơn.`,
      img: "assets/images/steps/nuoc-mau.jpg"
    },
    {
      text: `<strong> Kho thịt</strong><br>
            Cho thịt đã ướp vào nồi nước màu, đảo đều với lửa lớn cho thịt săn lại.<br>
            Đổ 400ml nước dừa tươi vào, đun sôi rồi hạ lửa nhỏ, đậy nắp kho 30 phút.<br>
            Sau 30 phút, cho 5 quả trứng vịt luộc đã bóc vỏ vào, tiếp tục rim thêm 30–40 phút cho nước sệt lại, thịt và trứng thấm đều gia vị thì tắt bếp.`,
      img: "assets/images/steps/kho-thit-trung.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Món thịt kho tàu có màu nâu cánh gián bóng đẹp, thịt mềm tan, béo nhẹ, trứng bùi béo cực kỳ đưa cơm!<br>
            Dọn ra đĩa, rắc thêm chút tiêu xay và hành lá cho thơm, dùng nóng là ngon nhất nhé!`,
      img: "assets/images/recipes/thit-kho-tau.jpg"
    }
  ]
},
  { 
    id: 2, 
    title: "Cá kho tộ", 
    meta: "45 phút · Dễ", 
    hero: "assets/images/recipes/ca-kho-to.jpg", 
    ingredients: ["1kg cá lóc", "Nước mắm, đường, tiêu", "Hành lá, ớt, tỏi"], 
    steps: [
      {text:"Cắt cá thành khoanh.", img:"assets/images/steps/ca1.jpg"},
      {text:"Thắng đường làm nước màu.", img:"assets/images/steps/nuoc-mau2.jpg"},
      {text:"Kho cá với gia vị 40 phút trong nồi đất là ngon nhất."}
    ]
  },
  { 
    id: 3, 
    title: "Thịt kho trứng cút", 
    meta: "40 phút · Dễ", 
    hero: "assets/images/recipes/thit-kho-trung-cut.jpg", 
    ingredients: ["400g thịt heo", "20 trứng cút", "Nước dừa", "Gia vị"], 
    steps: [
      {text:"Luộc và lột vỏ trứng cút.", img:"assets/images/steps/trung-cut.jpg"},
      {text:"Áp chảo thịt cho săn lại.", img:"assets/images/steps/ap-chao.jpg"},
      {text:"Thêm trứng + nước dừa + gia vị, rim nhỏ lửa đến khi cạn.", img:"assets/images/steps/rim-can.jpg"}
    ]
  },
  { 
    id: 4, 
    title: "Bò kho bánh mì", 
    meta: "70 phút · Trung bình", 
    hero: "assets/images/recipes/bo-kho.jpg", 
    ingredients: ["800g bò vụn", "Cà rốt, khoai tây", "Quế, hồi, ngũ vị hương"], 
    steps: [
      {text:"Ướp bò với gia vị.", img:"assets/images/steps/bo1.jpg"},
      {text:"Xào săn bò rồi cho nước vào ninh mềm.", img:"assets/images/steps/ninh-mem.jpg"},
      {text:"Thêm cà rốt, khoai tây nấu chín, nêm nếm lại là xong."}
    ]
  },
  { 
    id: 5, 
    title: "Canh chua cá lóc", 
    meta: "25 phút · Dễ", 
    hero: "assets/images/recipes/canh-chua.jpg", 
    ingredients: ["1 con cá lóc", "Dọc mùng, đậu bắp", "Me chua, cà chua", "Rau thơm"], 
    steps: [
      {text:"Sơ chế cá và rau củ.", img:"assets/images/steps/so-che-ca.jpg"},
      {text:"Nấu nước sôi, cho me + cà chua vào nêm chua ngọt."},
      {text:"Thả cá và rau vào, tắt bếp ngay khi sôi lại."}
    ]
  },
  { 
    id: 6, 
    title: "Bún bò Huế", 
    meta: "120 phút · Khó", 
    hero: "assets/images/recipes/bun-bo-hue.jpg", 
    ingredients: ["1kg bò", "Xương heo", "Sả, mắm ruốc", "Bún, rau sống"], 
    steps: [
      {text:"Hầm xương lấy nước dùng trong 3-4 tiếng.", img:"assets/images/steps/ham-xuong.jpg"},
      {text:"Xào mắm ruốc + sả cho thơm, cho vào nồi nước dùng."},
      {text:"Thái thịt bò tái, chan nước dùng nóng, ăn kèm rau sống."}
    ]
  },
  { 
    id: 7, 
    title: "Gà rán giòn", 
    meta: "30 phút · Dễ", 
    hero: "assets/images/recipes/ga-ran.jpg", 
    ingredients: ["Cánh/giờ gà", "Bột chiên giòn", "Trứng, sữa"], 
    steps: [
      {text:"Ướp gà với muối tiêu 15 phút."},
      {text:"Nhúng gà qua hỗn hợp trứng + sữa.", img:"assets/images/steps/nhung-trung.jpg"},
      {text:"Lăn qua bột chiên giòn, chiên ngập dầu vàng giòn.", img:"assets/images/steps/chien-vang.jpg"}
    ]
  },
  { 
    id: 8, 
    title: "Tôm chiên xù", 
    meta: "20 phút · Dễ", 
    hero: "assets/images/recipes/tom-chien-xu.jpg", 
    ingredients: ["300g tôm sú", "Bột chiên xù", "Trứng, bột mì"], 
    steps: [
      {text:"Bóc vỏ tôm, để nguyên đuôi."},
      {text:"Lăn tôm: bột mì → trứng → bột xù.", img:"assets/images/steps/lan-bot.jpg"},
      {text:"Chiên ngập dầu đến khi vàng giòn."}
    ]
  },
  { 
    id: 9, 
    title: "Salad Caesar gà nướng", 
    meta: "15 phút · Dễ", 
    hero: "assets/images/recipes/salad-caesar.jpg", 
    ingredients: ["Xà lách Romaine", "Gà nướng", "Bánh mì nướng", "Sốt Caesar"], 
    steps: [
      {text:"Nướng gà áp chảo cho chín vàng.", img:"assets/images/steps/nuong-ga.jpg"},
      {text:"Xé xà lách, thêm bánh mì nướng giòn."},
      {text:"Rưới sốt Caesar, trộn đều là xong."}
    ]
  },
  { 
    id: 10, 
    title: "Gỏi cuốn tôm thịt", 
    meta: "20 phút · Dễ", 
    hero: "assets/images/recipes/goi-cuon.jpg", 
    ingredients: ["Bánh tráng", "Tôm, thịt luộc", "Bún, rau sống", "Mắm nêm"], 
    steps: [
      {text:"Luộc tôm và thịt ba chỉ.", img:"assets/images/steps/luoc-tom.jpg"},
      {text:"Nhúng bánh tráng, xếp rau → bún → thịt → tôm, cuốn chặt."},
      {text:"Chấm mắm nêm pha sẵn."}
    ]
  },
  { 
    id: 11, 
    title: "Cơm gạo lứt rau củ", 
    meta: "35 phút · Dễ", 
    hero: "assets/images/recipes/com-gao-lut.jpg", 
    ingredients: ["Gạo lứt", "Cà rốt, bắp, đậu Hà Lan", "Nước dừa"], 
    steps: [
      {text:"Ngâm gạo lứt 6-8 tiếng.", img:"assets/images/steps/ngam-gao.jpg"},
      {text:"Hấp cùng rau củ cắt hạt lựu và chút nước dừa cho thơm."}
    ]
  },
  { 
    id: 12, 
    title: "Kimbap Hàn Quốc", 
    meta: "30 phút · Trung bình", 
    hero: "assets/images/recipes/kimbap.jpg", 
    ingredients: ["Rong biển", "Cơm, cà rốt, dưa leo", "Trứng, cua"], 
    steps: [
      {text:"Trải rong biển lên mành tre."},
      {text:"Dàn đều cơm, xếp nguyên liệu vào giữa.", img:"assets/images/steps/dan-com.jpg"},
      {text:"Cuốn chặt, cắt khoanh vừa ăn."}
    ]
  },
  { 
    id: 13, 
    title: "Bibimbap", 
    meta: "25 phút · Dễ", 
    hero: "assets/images/recipes/bibimbap.jpg", 
    ingredients: ["Cơm nóng", "Thịt bò, rau củ", "Trứng ốp la", "Tương ớt"], 
    steps: [
      {text:"Xào riêng từng loại rau củ."},
      {text:"Xếp cơm vào tô, sắp rau + thịt bò lên trên.", img:"assets/images/steps/xep-rau.jpg"},
      {text:"Đặt trứng ốp la ở giữa, rưới tương ớt, trộn đều khi ăn."}
    ]
  },
  { 
    id: 14, 
    title: "Mì xào bò", 
    meta: "18 phút · Dễ", 
    hero: "assets/images/recipes/mi-xao-bo.jpg", 
    ingredients: ["Mì trứng", "Thịt bò", "Rau cần, giá"], 
    steps: [
      {text:"Luộc mì cho vừa chín tới."},
      {text:"Xào bò tái với tỏi.", img:"assets/images/steps/xao-bo.jpg"},
      {text:"Cho mì + rau vào đảo nhanh tay, nêm gia vị."}
    ]
  },
  { 
    id: 15, 
    title: "Trứng ốp la bánh mì", 
    meta: "10 phút · Siêu dễ", 
    hero: "assets/images/recipes/trung-op-la.jpg", 
    ingredients: ["Bánh mì", "Trứng", "Pate, rau thơm"], 
    steps: [
      {text:"Chiên trứng lòng đào."},
      {text:"Kẹp vào bánh mì cùng pate, dưa leo, rau mùi.", img:"assets/images/steps/kep-banhmi.jpg"}
    ]
  }
];

// Lấy id từ URL
const params = new URLSearchParams(window.location.search);
const recipeId = parseInt(params.get("id"));
const recipe = recipes.find(r => r.id === recipeId);

// Render chi tiết món
function renderRecipe() {
  const container = document.getElementById("recipeContainer");

  if (!recipe) {
    container.innerHTML = `<p style="text-align:center;padding:100px;font-size:20px;color:#999;">Không tìm thấy công thức này.</p>`;
    return;
  }

  container.innerHTML = `
    <img class="hero" src="${recipe.hero}" alt="${recipe.title}">
    <h2 class="recipe-title">${recipe.title}</h2>
    <div class="meta">${recipe.meta}</div>

    <h3 class="section-title">Nguyên liệu</h3>
    <ul class="ingredients">
      ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3 class="section-title">Cách làm</h3>
    <ol class="steps">
      ${recipe.steps.map(step => `
        <li>
          <p>${step.text}</p>
          ${step.img ? `<img class="step-img" src="${step.img}" alt="Bước nấu">` : ""}
        </li>
      `).join("")}
    </ol>
  `;
}

// Smart back – quay lại đúng vị trí + giữ trạng thái lọc
document.getElementById("smartBack")?.addEventListener("click", (e) => {
  e.preventDefault();
  history.back();
});

renderRecipe();