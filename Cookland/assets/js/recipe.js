
// Danh sách tất cả công thức – mỗi món có id, title, meta, ảnh bìa, nguyên liệu, bước làm
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

    tips: [
      "Chọn thịt heo có màu hồng tươi, mỡ trắng sáng, nạc và mỡ cân bằng, ấn tay có độ đàn hồi, không có mùi lạ.",
      "Chọn trứng vịt có lớp phấn trắng bên ngoài, soi đèn thấy hồng trong suốt, túi khí nhỏ, lắc không nghe tiếng nước."
    ],

    steps: [
      {
        text: `<strong>1. Ướp thịt</strong><br>
              Thịt ba chỉ rửa sạch với nước muối loãng, để ráo rồi cắt miếng vừa ăn (nên chọn thịt có da mỏng để kho mau mềm và không ngấy).<br>
              Cho vào tô cùng 1 muỗng canh hành băm + 1 muỗng canh tỏi băm + 3 muỗng canh nước mắm + 2 muỗng canh đường + ⅓ muỗng canh hạt nêm + 1 muỗng cà phê tiêu. Trộn đều, bọc kín, ướp ít nhất 1 tiếng cho thấm gia vị.`,
        img: "assets/images/steps/uop-thit.jpg"
      },
      {
        text: `<strong>2. Thắng nước màu</strong><br>
              Bắc nồi lên bếp, cho 1 muỗng cà phê đường vào đun lửa vừa, khuấy đều đến khi đường tan và chuyển màu nâu cánh gián thì tắt bếp ngay.<br>
              Đổ thêm ½ chén nước lọc vào để loãng bớt, chờ nguội màu sẽ đậm hơn.`,
        img: "assets/images/steps/nuoc-mau.jpg"
      },
      {
        text: `<strong>3. Kho thịt</strong><br>
              Cho thịt đã ướp vào nồi nước màu, đảo đều với lửa lớn cho thịt săn lại.<br>
              Đổ 400ml nước dừa tươi vào, đun sôi rồi hạ lửa nhỏ, đậy nắp kho 30 phút.<br>
              Sau 30 phút, cho 5 quả trứng vịt luộc đã bóc vỏ vào, tiếp tục rim thêm 30–40 phút cho nước sệt lại, thịt và trứng thấm đều gia vị thì tắt bếp.`,
        img: "assets/images/steps/kho-thit-trung.jpg"
      },
      {
        text: `<strong>4. Thành phẩm</strong><br>
              Món thịt kho tàu có màu nâu cánh gián bóng đẹp, thịt mềm tan, béo nhẹ, trứng bùi béo cực kỳ đưa cơm!<br>
              Dọn ra đĩa, rắc thêm chút tiêu xay và hành lá cho thơm, dùng nóng là ngon nhất nhé!`,
        img: "assets/images/recipes/thit-kho-tau.jpg"  // Dùng ảnh bìa làm ảnh thành phẩm
      }
    ]
  },


  {
  id: 2,
  title: "Cá kho tộ ",
  meta: "60–75 phút · Trung bình · 4 người",
  hero: "assets/images/recipes/ca-kho-to.jpg",
  tags: ["Việt Nam", ">60 phút"],

  // ==================== NGUYÊN LIỆU ====================
  ingredients: [
    "Cá basa (hoặc cá lóc, cá tra, cá rô…) – 800gr",
    "Hành lá – 3 nhánh",
    "Hành tím – 3 củ",
    "Ớt tươi – 5 trái (tùy khẩu vị)",
    "Tỏi – 7 tép",
    "Dừa nạo – 1 trái (lấy nước cốt + nước dão)",
    "Nước màu đường – 2 muỗng cà phê",
    "Dầu ăn – 2.5 muỗng canh",
    "Nước mắm – 2 muỗng canh",
    "Đường – 2 muỗng cà phê",
    "Muối – 1 muỗng cà phê + 1 muỗng canh (sơ chế)",
    "Hạt nêm – 1 muỗng cà phê",
    "Bột ngọt – ½ muỗng cà phê",
    "Tương ớt – 1 muỗng canh",
    "Tiêu xay – 1 ít"
  ],

  // ==================== CHỈ 4 BƯỚC SIÊU RÕ RÀNG ====================
  steps: [
    {
      text: `<strong> Sơ chế nguyên liệu</strong><br>
            Cá basa cạo sạch nhớt, bỏ nội tạng và mang, rửa sạch rồi cắt khúc dày khoảng 1.5–2cm.<br>
            Cho cá vào thau + 1 muỗng canh muối, bóp nhẹ để khử tanh và làm sạch hết nhớt, rửa lại thật sạch, để ráo.<br>
            Hành tím + tỏi băm nhỏ. Hành lá đập dập phần đầu trắng, cắt nhỏ. Ớt cắt lát chéo.`,
      img: "assets/images/steps/ca-so-che.jpg"
    },
    {
      text: `<strong> Ướp cá</strong><br>
            Cho cá vào tô lớn, ướp với:<br>
            • 2 muỗng canh nước mắm<br>
            • 1 muỗng cà phê muối<br>
            • 1 muỗng cà phê hạt nêm<br>
            • 2 muỗng cà phê đường<br>
            • ½ muỗng cà phê bột ngọt<br>
            • ½ phần hành tím + tỏi băm<br>
            • 2 muỗng cà phê nước màu đường<br>
            Trộn đều, để 15–20 phút cho thấm gia vị.`,
      img: "assets/images/steps/uop-ca.jpg"
    },
    {
      text: `<strong> Kho cá</strong><br>
            Phi thơm dầu ăn với hành tím + tỏi băm + đầu hành lá.<br>
            Cho cá vào áp chảo sơ cho săn mặt (không cần chín hẳn), vớt ra xếp vào nồi đất.<br>
            Đổ phần dầu hành tỏi + nước ướp + 1 muỗng canh tương ớt vào nồi.<br>
            Chan nước dừa (cốt + dão) ngập mặt cá (nếu thiếu thì thêm nước lọc).<br>
            Đun sôi rồi hạ lửa nhỏ, kho liu riu 40–50 phút cho nước kho sệt lại.<br>
            Nếm nếm lại gia vị, cho ớt lát vào, rim thêm 20 phút nữa. Cuối cùng rắc hành lá + tiêu, tăng lửa lớn 1–2 phút cho sôi bùng rồi tắt bếp.`,
      img: "assets/images/steps/kho-ca-to.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Cá kho tộ miền Tây có màu nâu cánh gián óng ánh, thịt cá chắc mềm, không tanh, nước kho sánh đậm đà, cay cay mặn ngọt cực đưa cơm!<br>
            Dọn ra kèm cơm nóng, canh chua và rau luộc chấm kho là chuẩn vị miền Tây luôn nhé!`,
      img: "assets/images/recipes/ca-kho-to.jpg"
    }
  ]
},
  {
  id: 3,
  title: "Thịt kho trứng cút",
  meta: "75–90 phút · Trung bình · 4 người",
  hero: "assets/images/recipes/thit-kho-trung-cut.jpg",
  tags: ["Việt Nam", ">60 phút"],

  // ==================== NGUYÊN LIỆU ====================
  ingredients: [
    "Thịt ba chỉ – 300gr",
    "Trứng cút – 15 quả",
    "Dừa xiêm (hoặc nước dừa tươi) – 1 quả (khoảng 400–500ml)",
    "Hành lá – 3 nhánh",
    "Gừng – 1 củ nhỏ",
    "Ớt tươi – 2 quả",
    "Hành tím – 2 củ",
    "Tỏi – 2 tép",
    "Nước mắm – 1 muỗng canh",
    "Đường – 2 muỗng canh (dùng thắng màu)",
    "Dầu ăn – 3 muỗng canh",
    "Hạt nêm – ½ muỗng canh",
    "Bột ngọt – 1 muỗng cà phê",
    "Tiêu xay – 1 muỗng cà phê"
  ],

  // ==================== CHỈ 4 BƯỚC SIÊU RÕ RÀNG ====================
  steps: [
    {
      text: `<strong> Sơ chế & ướp thịt</strong><br>
            Thịt ba chỉ rửa sạch với nước muối, cắt khúc vừa ăn.<br>
            Chần sơ thịt với gừng + đầu hành lá trong 1 phút rồi vớt ra để ráo.<br>
            Thắng màu: cho 2 muỗng canh đường vào nồi, đun lửa vừa đến khi chuyển màu nâu cánh gián, cho thêm 2 muỗng canh nước lọc vào.<br>
            Giã nhuyễn 1 tép tỏi + 1 củ hành tím, thêm 3 muỗng canh nước lọc, chắt lấy nước cốt.<br>
            Ướp thịt với: nước hành tỏi + 1 muỗng canh nước mắm + ½ muỗng canh hạt nêm + 1 muỗng cà phê bột ngọt + 1 muỗng cà phê tiêu. Trộn đều, ướp ít nhất 1 giờ (càng lâu càng ngon).`,
      img: "assets/images/steps/uop-thit-trung-cut.jpg"
    },
    {
      text: `<strong> Luộc & chiên trứng cút</strong><br>
            Trứng cút luộc chín, bóc vỏ sạch.<br>
            Bắc chảo với 2 muỗng canh dầu ăn, chiên trứng cút cho vàng đều 2 mặt (giúp trứng đẹp, thơm và không vỡ khi kho).`,
      img: "assets/images/steps/chien-trung-cut.jpg"
    },
    {
      text: `<strong> Kho thịt</strong><br>
            Phi thơm 1 muỗng canh dầu ăn với hành tím + tỏi băm.<br>
            Cho thịt đã ướp vào áp chảo vàng đều 2 mặt.<br>
            Đổ toàn bộ nước ướp + nước màu + nước dừa xiêm vào nồi (ngập mặt thịt).<br>
            Đun sôi rồi hạ lửa nhỏ, kho liu riu 40–50 phút cho thịt mềm.<br>
            Cho trứng cút đã chiên vào, rim thêm 15–20 phút cho nước kho sệt lại, nêm nếm lại vừa ăn.`,
      img: "assets/images/steps/kho-thit-trung-cut.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Món thịt kho trứng cút nước dừa có màu nâu vàng óng ánh, thịt mềm tan, trứng thấm đẫm gia vị, nước kho sánh sệt, ngọt thanh từ nước dừa cực kỳ đưa cơm!<br>
            Rắc hành lá + ớt cắt lát lên trên, dùng nóng với cơm trắng là tuyệt nhất!`,
      img: "assets/images/recipes/thit-kho-trung-cut.jpg"
    }
  ]
},
  {
  id: 4,
  title: "Bò kho bánh mì",
  meta: "75 phút · Trung bình · 4 người",
  hero: "assets/images/recipes/bo-kho.jpg",
  tags: ["Việt Nam", ">60 phút"],

  // ==================== NGUYÊN LIỆU ====================
  ingredients: [
    "Thịt thăn bò (hoặc gầu/gân) – 500gr",
    "Bánh mì – 5 ổ",
    "Nước xốt gia vị bò kho – 1 gói (90gr)",
    "Nước dừa tươi – 1.5 lít",
    "Cà rốt – 2 củ",
    "Sả – 3 nhánh",
    "Gừng – 1 nhánh nhỏ",
    "Hành tím – 4 củ",
    "Hành tây – 1 củ",
    "Hạt dầu điều – 1 muỗng cà phê",
    "Nước mắm – 2 muỗng canh",
    "Bột năng – 2 muỗng canh",
    "Húng quế, ngò gai, ớt tươi – 1 ít",
    "Dầu ăn – 2 muỗng canh",
    "Đường, muối, tiêu, bột ngọt – 1 ít"
  ],

  // ==================== CHỈ 4 BƯỚC SIÊU RÕ RÀNG ====================
  steps: [
    {
      text: `<strong>1. Sơ chế & ướp bò</strong><br>
            Bò rửa sạch với muối + rượu trắng, cắt miếng vừa ăn.<br>
            Ướp bò với: 1 gói gia vị bò kho + 1.5 m.canh đường + 1 m.canh nước mắm + ½ phần sả, gừng, hành tím băm + chút tiêu.<br>
            Trộn đều, để tủ lạnh ướp 4 tiếng (hoặc qua đêm cho thật thấm).`,
      img: "assets/images/steps/uop-bo-kho.jpg"
    },
    {
      text: `<strong>2. Xào bò & thắng màu</strong><br>
            Phi thơm dầu với hạt dầu điều → vớt bỏ hạt.<br>
            Cho phần sả, hành tím, gừng còn lại vào phi thơm → cho bò đã ướp vào xào săn 5 phút.`,
      img: "assets/images/steps/xao-bo-kho.jpg"
    },
    {
      text: `<strong>3. Nấu bò kho</strong><br>
            Đổ 1.5 lít nước dừa + 1 củ hành tây vào → hầm lửa nhỏ 40 phút cho bò mềm.<br>
            Vớt hành tây ra → cho cà rốt + 1 m.canh hạt nêm + 1 m.canh nước mắm + 1 m.canh đường vào → hầm thêm 10 phút.<br>
            Pha 2 m.canh bột năng với nước → cho từ từ vào nồi, khuấy đều đến khi nước kho sánh đẹp → nếm lại vừa miệng.`,
      img: "assets/images/steps/kho-bo.jpg"
    },
    {
      text: `<strong>4. Thành phẩm</strong><br>
            Múc bò kho ra tô, rắc húng quế + ngò gai + ớt tươi lên trên.<br>
            Dùng nóng với bánh mì nóng giòn, chấm muối tiêu chanh hoặc nước mắm ớt → chuẩn vị Sài Gòn!<br>
            Nước kho sánh đậm đà, bò mềm tan, cà rốt ngọt, thơm lừng – ăn một lần là ghiền mãi!`,
      img: "assets/images/recipes/bo-kho.jpg"
    }
  ]
},
  // ==================== ID: 5 – CANH CHUA CÁ LÓC ====================
{
  id: 5,
  title: "Canh chua cá lóc",
  meta: "35 phút · Dễ · 4 người",
  hero: "assets/images/recipes/canh-chua.jpg",
  tags: ["Việt Nam", ">30 phút", "Healthy"],

  ingredients: [
    "Cá lóc (cá quả) – 500gr",
    "Thơm (dứa) – ¼ trái",
    "Cà chua – 2 trái",
    "Đậu bắp – 50gr",
    "Bạc hà (dọc mùng) – 50gr",
    "Me vắt – 20gr",
    "Giá đỗ – 50gr",
    "Ngò gai – 1 nhánh",
    "Rau ngổ (ngò ôm) – 1 nhánh",
    "Nước mắm – 1 muỗng canh",
    "Đường – 1 muỗng canh",
    "Hạt nêm – ½ muỗng canh",
    "Tiêu xay – 1 ít"
  ],

  steps: [
    {
      text: `<strong> Sơ chế cá & rau củ</strong><br>
            Cá lóc làm sạch, chà muối khử tanh, rửa lại, cắt khúc dày ~1.5 lóng tay.<br>
            Ướp cá với 1 muỗng canh nước mắm + ½ muỗng canh hạt nêm + chút tiêu trong 15 phút.<br>
            Thơm cắt miếng vừa ăn, cà chua bổ múi cau, đậu bắp & bạc hà cắt xéo, giá rửa sạch, ngò gai + rau ngổ cắt nhỏ.`,
      img: "assets/images/steps/so-che-ca-chua.jpg"
    },
    {
      text: `<strong> Làm nước cốt me</strong><br>
            Me vắt cho vào chén + 1 muỗng canh nước ấm 60°C, dầm cho me tan hết.<br>
            Đun sôi 1 lít nước, cho me vào nấu sôi lại để lấy vị chua.`,
      img: "assets/images/steps/cot-me.jpg"
    },
    {
      text: `<strong> Nấu canh</strong><br>
            Cho cá vào nồi nước me đang sôi, nấu 8–10 phút (vớt bọt để nước trong).<br>
            Thêm cà chua + thơm + đậu bắp + bạc hà + giá đỗ vào.<br>
            Nêm 1 muỗng canh đường + chút hạt nêm cho vừa miệng, nấu đến khi sôi lại.`,
      img: "assets/images/steps/nau-canh-chua.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Canh chua cá lóc trong veo, thơm lừng, vị chua ngọt thanh thanh từ me & thơm, cá chắc ngọt, rau củ giòn tươi.<br>
            Rắc ngò gai + rau ngổ lên trên, ăn nóng với cơm trắng hoặc bún tươi chấm nước mắm ớt là đỉnh cao luôn!`,
      img: "assets/images/recipes/canh-chua.jpg"
    }
  ]
},

// ==================== ID: 6 – BÚN BÒ HUẾ ====================
{
  id: 6,
  title: "Bún bò Huế",
  meta: "3–4 tiếng · Khó · 4 người",
  hero: "assets/images/recipes/bun-bo-hue.jpg",
  tags: ["Việt Nam", ">60 phút"],

  ingredients: [
    "Chân giò heo – 1kg",
    "Nạm bò – 500gr",
    "Bún sợi to – 200gr",
    "Huyết bò/heo – 1 tô (không bắt buộc)",
    "Chả cua/chả bò – 200gr (không bắt buộc)",
    "Dầu màu điều – 3 muỗng canh",
    "Sả – 7 cây",
    "Hành tây – 2 củ",
    "Tỏi – 1 củ",
    "Gừng – 1 củ",
    "Mắm ruốc – 2 muỗng canh",
    "Hành lá, giá đỗ, rau thơm, hoa chuối, chanh – 1 ít"
  ],

  steps: [
    {
      text: `<strong> Sơ chế nguyên liệu</strong><br>
            Chân giò chặt khoanh, chần sơ nước sôi + gừng → rửa sạch.<br>
            Nạm bò luộc chín mềm với gừng, thái mỏng.<br>
            Huyết luộc chín, thái miếng. Chả cua nặn viên luộc chín.<br>
            Sả: 4 cây băm nhỏ, 3 cây đập dập. Hành tây 1 củ bổ đôi, 1 củ thái mỏng.`,
      img: "assets/images/steps/so-che-bun-bo.jpg"
    },
    {
      text: `<strong> Xào màu & tóp mỡ</strong><br>
            Phi thơm 4 cây sả băm với dầu ăn → cho 3 muỗng canh dầu màu điều vào.<br>
            Phi vàng tỏi + hành băm + ớt → tắt bếp (dùng làm sa tế).`,
      img: "assets/images/steps/xao-mau-dieu.jpg"
    },
    {
      text: `<strong> Nấu nước dùng</strong><br>
            Ninh chân giò + 3 cây sả đập dập + 1 củ hành tây trong 3–4 tiếng (hớt bọt thường xuyên).<br>
            Hòa mắm ruốc với nước, gạn lấy phần nước trong cho vào nồi.<br>
            Nêm: 2 muỗng canh đường + 2 muỗng canh hạt nêm + 1 muỗng canh muối + sa tế → vừa miệng.`,
      img: "assets/images/steps/nuoc-dung-bun-bo.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Trụng bún cho vào tô, xếp nạm bò, chân giò, huyết, chả cua, hành tây thái mỏng, hành lá.<br>
            Chan nước dùng nóng hổi, ăn kèm giá, hoa chuối, rau thơm, chanh, ớt sa tế.<br>
            Một tô bún bò Huế chuẩn vị: thơm nồng sả + mắm ruốc, cay cay, ngọt thịt, béo ngậy – ngon quên lối về!`,
      img: "assets/images/recipes/bun-bo-hue.jpg"
    }
  ]
},
  // ==================== ID: 7 – GÀ RÁN SỐT CAY H&S ====================
{
  id: 7,
  title: "Gà rán sốt cay ",
  meta: "40 phút · Trung bình · 2 người",
  hero: "assets/images/recipes/ga-ran-sot-cay.jpg",
  tags: ["Âu", "30-60 phút"],

  ingredients: [
    "Cánh gà (hoặc đùi gà) – 4 cái",
    "Bột chiên giòn – 1 gói (~150gr)",
    "Mật ong – 3 muỗng canh",
    "Tương ớt – 4 muỗng canh",
    "Tương cà – 4 muỗng canh",
    "Ớt bột Hàn Quốc – 2 muỗng canh",
    "Tỏi băm – 1 muỗng canh",
    "Gừng băm – 1 muỗng canh",
    "Nước mắm – 3 muỗng canh",
    "Mè trắng rang – 1 ít",
    "Dầu ăn – 300ml",
    "Muối + tiêu – 1 ít"
  ],

  steps: [
    {
      text: `<strong> Sơ chế & ướp gà</strong><br>
            Cánh gà rửa sạch với muối loãng, để ráo, chặt miếng vừa ăn.<br>
            Ướp với ½ muỗng cà phê muối + 1 muỗng cà phê tiêu trong 15 phút cho thấm.`,
      img: "assets/images/steps/uop-ga-hs.jpg"
    },
    {
      text: `<strong> Chiên gà 2 lần (giòn tan)</strong><br>
            Chia bột chiên giòn làm 2 phần: 1 phần pha với nước thành hỗn hợp sệt, 1 phần để khô.<br>
            Nhúng gà qua bột ướt → lăn bột khô → chiên lần 1 lửa vừa 5 phút/mặt.<br>
            Vớt ra để ráo dầu 5 phút → chiên lần 2 lửa lớn cho vàng giòn ru.`,
      img: "assets/images/steps/chien-ga-hs.jpg"
    },
    {
      text: `<strong> Làm sốt H&S cay ngọt</strong><br>
            Phi thơm tỏi + gừng băm trong 1 muỗng canh dầu.<br>
            Cho vào: 3 m.canh mật ong + 4 m.canh tương ớt + 4 m.canh tương cà + 2 m.canh ớt bột + 3 m.canh nước mắm + ⅓ chén nước.<br>
            Đun sôi, nếm vừa miệng, sệt lại.`,
      img: "assets/images/steps/sot-hs.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Cho gà vừa chiên vào chảo sốt, đảo nhanh tay 30 giây cho áo đều sốt.<br>
            Rắc mè trắng rang lên trên.<br>
            Gà rán H&S vàng óng, giòn rụm, sốt cay ngọt mặn hài hòa, thơm nức mũi – cắn 1 miếng là ghiền luôn!`,
      img: "assets/images/recipes/ga-ran-sot-cay.jpg"
    }
  ]
},

// ==================== ID: 8 – TÔM CHIÊN XÙ ====================
{
  id: 8,
  title: "Tôm chiên xù",
  meta: "25 phút · Dễ · 2 người",
  hero: "assets/images/recipes/tom-chien-xu.jpg",
  tags: ["<30 phút"],

  ingredients: [
    "Tôm sú tươi – 300gr (size 15–20 con/kg)",
    "Trứng gà – 1 quả",
    "Bột chiên giòn – 100gr",
    "Bột chiên xù (panko) – 150gr",
    "Nước lọc – 70ml",
    "Dầu ăn – 400ml",
    "Muối + tiêu + bột ngọt + hạt nêm – 1 ít"
  ],

  steps: [
    {
      text: `<strong> Sơ chế tôm</strong><br>
            Cắt đầu tôm, bóc vỏ, rút chỉ lưng, giữ nguyên đuôi cho đẹp.<br>
            Rửa sạch với nước muối loãng → để ráo.`,
      img: "assets/images/steps/tom-so-che.jpg"
    },
    {
      text: `<strong> Pha bột ướt</strong><br>
            Cho 100gr bột chiên giòn + 1 quả trứng + 70ml nước lọc vào tô.<br>
            Nêm: ½ m.cà phê muối + ½ m.cà phê hạt nêm + ½ m.cà phê bột ngọt + chút tiêu.<br>
            Khuấy đều đến khi hỗn hợp sệt mịn.`,
      img: "assets/images/steps/bot-uot.jpg"
    },
    {
      text: `<strong> Lăn bột & chiên</strong><br>
            Nhúng tôm qua bột ướt → lăn đều qua bột chiên xù (panko).<br>
            Bắc chảo dầu thật nóng, thả tôm vào chiên lửa vừa 2–3 phút cho vàng giòn.<br>
            Vớt ra giấy thấm dầu.`,
      img: "assets/images/steps/chien-tom-xu.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Tôm chiên xù vàng ươm, vỏ giòn rụm, thịt tôm bên trong ngọt chắc, thơm lừng!<br>
            Chấm tương ớt hoặc mayonnaise là hết sảy. Món nhậu, món ăn vặt đều đỉnh!`,
      img: "assets/images/recipes/tom-chien-xu.jpg"
    }
  ]
},

// ==================== ID: 9 – SALAD CAESAR GÀ NƯỚNG ====================
{
  id: 9,
  title: "Salad Caesar gà nướng",
  meta: "10 phút · Dễ · 2 người",
  hero: "assets/images/recipes/salad-caesar.jpg",
  tags: ["Healthy", "Âu", "<15 phút"],

  ingredients: [
    "Ức gà (hoặc đùi gà rút xương) – 300gr",
    "Xà lách Romaine – 1 cây",
    "Bánh mì baguette – 2 lát",
    "Phô mai Parmesan bào – 30gr",
    "Trứng gà luộc – 1 quả (tùy thích)",
    "Sốt Caesar – 4–5 muỗng canh (có thể tự làm hoặc mua sẵn)",
    "Dầu ô liu – 2 muỗng canh",
    "Muối + tiêu + tỏi bột – 1 ít"
  ],

  steps: [
    {
      text: `<strong> Nướng gà & bánh mì</strong><br>
            Ướp ức gà với dầu ô liu + muối + tiêu + tỏi bột 10 phút.<br>
            Áp chảo (hoặc nướng lò) mỗi mặt 4–5 phút cho vàng đẹp, cắt lát mỏng.<br>
            Bánh mì cắt khối, phết dầu ô liu, nướng giòn (crouton).`,
      img: "assets/images/steps/nuong-ga-salad.jpg"
    },
    {
      text: `<strong> Sơ chế rau</strong><br>
            Xà lách Romaine rửa sạch, ngâm nước đá 5 phút cho giòn → xé miếng vừa ăn.<br>
            Trứng luộc cắt múi cau (tùy thích).`,
      img: "assets/images/steps/xa-lach-romaine.jpg"
    },
    {
      text: `<strong> Trộn salad</strong><br>
            Cho xà lách vào tô lớn, thêm gà nướng + crouton + phô mai Parmesan bào.<br>
            Rưới đều sốt Caesar, trộn nhẹ tay cho thấm.`,
      img: "assets/images/steps/tron-salad.jpg"
    },
    {
      text: `<strong> Thành phẩm</strong><br>
            Salad Caesar gà nướng tươi mát, giòn tan, sốt béo ngậy, gà thơm mềm, phô mai đậm đà – món ăn healthy mà ngon khó cưỡng!<br>
            Dùng làm bữa sáng, bữa nhẹ hoặc ăn kiêng đều chuẩn!`,
      img: "assets/images/recipes/salad-caesar.jpg"
    }
  ]
},
  // ==================== ID: 10 – GỎI CUỐN TÔM THỊT ====================
{
  id: 10,
  title: "Gỏi cuốn tôm thịt",
  meta: "25 phút · Dễ · 4 người",
  hero: "assets/images/recipes/goi-cuon.jpg",
  tags: ["Việt Nam", "Healthy", "<30 phút"],

  ingredients: [
    "Thịt ba chỉ – 300gr",
    "Tôm sú tươi – 300gr",
    "Bún tươi – 200gr",
    "Bánh tráng mỏng – 1 gói (~300gr)",
    "Hẹ – 10 nhánh",
    "Rau sống (xà lách, húng lủi, tía tô…) – 1 ít",
    "Ớt – 2 trái",
    "Tỏi – 1 củ",
    "Nước mắm – 5 muỗng canh",
    "Nước cốt chanh – 3 muỗng canh",
    "Đường – 2 muỗng canh"
  ],

  steps: [
    {
      text: `<strong>1. Luộc thịt & tôm</strong><br>
            Thịt ba chỉ chần sơ nước sôi + muối → luộc chín, thái lát mỏng.<br>
            Tôm luộc chín đỏ, bóc vỏ, chẻ đôi, bỏ chỉ lưng.`,
      img: "assets/images/steps/luoc-tom-thit.jpg"
    },
    {
      text: `<strong>2. Sơ chế rau & làm nước chấm</strong><br>
            Rau sống + hẹ rửa sạch, để ráo.<br>
            Pha nước chấm: 5 m.canh nước mắm + 3 m.canh nước cốt chanh + 2 m.canh đường + tỏi ớt băm.`,
      img: "assets/images/steps/rau-nuoc-cham.jpg"
    },
    {
      text: `<strong>3. Cuốn gỏi</strong><br>
            Nhúng nhẹ bánh tráng qua nước → xếp rau, bún, thịt, tôm, hẹ → cuốn chặt tay.<br>
            Lặp lại đến khi hết nguyên liệu.`,
      img: "assets/images/steps/cuon-goi.jpg"
    },
    {
      text: `<strong>4. Thành phẩm</strong><br>
            Gỏi cuốn trong veo, đầy đủ màu sắc, tôm ngọt, thịt mềm, rau thơm mát.<br>
            Chấm nước mắm chua ngọt đậm đà là “ngon quên lối về” luôn!`,
      img: "assets/images/recipes/goi-cuon.jpg"
    }
  ]
},

// ==================== ID: 11 – CƠM GẠO LỨT RAU CỦ ====================
{
  id: 11,
  title: "Cơm gạo lứt rau củ",
  meta: "45 phút · Dễ · 4 người",
  hero: "assets/images/recipes/com-gao-lut.jpg",
  tags: ["Healthy", "Vegan", "30-60 phút"],

  ingredients: [
    "Gạo lứt – 2 chén",
    "Cà rốt, bắp Mỹ, đậu Hà Lan – 200gr",
    "Nước dừa tươi – 200ml (tùy thích)",
    "Hành tím, tỏi băm – 1 ít",
    "Dầu ăn – 1 muỗng canh",
    "Muối – ½ muỗng cà phê"
  ],

  steps: [
    { text: `<strong>1. Ngâm gạo lứt</strong><br>Ngâm gạo lứt 6–8 tiếng (hoặc qua đêm) cho mềm.`, img: "assets/images/steps/ngam-gao-lut.jpg" },
    { text: `<strong>2. Sơ chế rau củ</strong><br>Cà rốt, bắp, đậu cắt hạt lựu. Phi thơm hành tỏi, xào sơ rau củ 3 phút.`, img: "assets/images/steps/rau-cu.jpg" },
    { text: `<strong>3. Nấu cơm</strong><br>Cho gạo + rau củ vào nồi cơm điện, thêm nước dừa + nước thường (tỷ lệ 1:1.2), nấu như cơm bình thường.`, img: "assets/images/steps/nau-com-lut.jpg" },
    { text: `<strong>4. Thành phẩm</strong><br>Cơm gạo lứt dẻo thơm, hạt rau củ ngọt tự nhiên, thanh đạm, cực kỳ tốt cho sức khỏe!`, img: "assets/images/recipes/com-gao-lut.jpg" }
  ]
},

// ==================== ID: 12 – KIMBAP HÀN QUỐC ====================
{
  id: 12,
  title: "Kimbap Hàn Quốc",
  meta: "40 phút · Trung bình · 2 người",
  hero: "assets/images/recipes/kimbap.jpg",
  tags: ["Hàn Quốc", "30-60 phút"],

  ingredients: [
    "Gạo (nếp hoặc tẻ) – 125gr (~1.5 chén)",
    "Rong biển khô – 4 lá",
    "Dưa leo – 2 quả",
    "Cà rốt – 1 củ",
    "Xúc xích – 5 cây",
    "Trứng gà – 3 quả",
    "Hành lá – 3 nhánh",
    "Nước mắm, hạt nêm, dầu mè – 1 ít",
    "Tương ớt + mayonnaise – để chấm"
  ],

  steps: [
    {
      text: `<strong>1. Sơ chế nguyên liệu</strong><br>
            Cà rốt + dưa leo cắt thanh dài mỏng.<br>
            Xúc xích cắt đôi. Trứng chiên mỏng, cắt sợi. Hành lá chần sơ.`,
      img: "assets/images/steps/nhan-kimbap.jpg"
    },
    {
      text: `<strong>2. Nấu & nêm cơm</strong><br>
            Vo gạo sạch, nấu chín → xới tơi.<br>
            Nêm cơm nóng với 1 m.cà phê nước mắm + 1 m.cà phê hạt nêm + chút dầu mè cho bóng đẹp.`,
      img: "assets/images/steps/com-kimbap.jpg"
    },
    {
      text: `<strong>3. Cuốn kimbap</strong><br>
            Trải rong biển → dàn đều cơm (chừa mép 2cm).<br>
            Xếp nhân: trứng + xúc xích + cà rốt + dưa leo + hành lá → cuốn chặt bằng tay hoặc mành tre.`,
      img: "assets/images/steps/cuon-kimbap.jpg"
    },
    {
      text: `<strong>4. Thành phẩm</strong><br>
            Cắt khoanh vừa ăn, chấm tương ớt + mayonnaise.<br>
            Kimbap đầy màu sắc, giòn ngọt, thơm lừng – chuẩn vị Hàn Quốc ngay tại nhà!`,
      img: "assets/images/recipes/kimbap.jpg"
    }
  ]
},

// ==================== ID: 13 – BIBIMBAP KIỂU VIỆT ====================
{
  id: 13,
  title: "Bibimbap Hàn Quốc kiểu Việt",
  meta: "25 phút · Dễ · 2 người",
  hero: "assets/images/recipes/bibimbap.jpg",
  tags: ["Hàn Quốc", "Healthy", "<30 phút"],

  ingredients: [
    "Thịt bò cắt sợi – 200gr",
    "Cà rốt, bí ngòi, nấm, rau bina, giá đỗ – 50gr mỗi loại",
    "Hành tây – 1 củ",
    "Rong biển khô – 20gr",
    "Trứng gà – 2 quả",
    "Tương ớt Gochujang (hoặc tương ớt thường) – 3–4 m.canh",
    "Nước tương, dầu mè, đường, tỏi băm – 1 ít"
  ],

  steps: [
    {
      text: `<strong>1. Sơ chế & xào rau</strong><br>
            Rau bina + giá đỗ trụng chín, vắt ráo, trộn dầu mè + nước tương.<br>
            Xào riêng: cà rốt, bí ngòi, nấm, hành tây với chút muối.`,
      img: "assets/images/steps/xao-rau-bibim.jpg"
    },
    {
      text: `<strong>2. Xào thịt bò</strong><br>
            Ướp bò với tỏi băm + đường + nước tương + dầu mè → xào tái nhanh tay.`,
      img: "assets/images/steps/xao-bo-bibim.jpg"
    },
    {
      text: `<strong>3. Chiên trứng</strong><br>
            Chiên 2 trứng lòng đào (giữ nguyên lòng đỏ).`,
      img: "assets/images/steps/trung-bibim.jpg"
    },
    {
      text: `<strong>4. Xếp tô & làm sốt</strong><br>
            Xếp cơm → rau củ vòng quanh → thịt bò → trứng ở giữa → rong biển cắt sợi.<br>
            Pha sốt: tương ớt + chút giấm + mè rang → rưới lên trên.<br>
            Trộn đều khi ăn – cay cay, ngọt thịt, giòn rau, siêu ngon!`,
      img: "assets/images/recipes/bibimbap.jpg"
    }
  ]
},

// ==================== ID: 14 – MÌ XÀO BÒ RAU CẢI ====================
{
  id: 14,
  title: "Mì xào bò rau cải",
  meta: "20 phút · Dễ · 4 người",
  hero: "assets/images/recipes/mi-xao-bo.jpg",
  tags: ["<30 phút"],

  ingredients: [
    "Mì gói (hoặc mì trứng) – 4 gói",
    "Thịt bò – 400gr (thái mỏng)",
    "Cải thìa – 500gr",
    "Hành lá, ngò rí – 1 ít",
    "Tỏi + hành tím băm – 1 ít",
    "Dầu ăn – 2 muỗng canh",
    "Dầu mè – 2 muỗng canh",
    "Nước tương, dầu hào, đường, hạt nêm – 1 ít"
  ],

  steps: [
    {
      text: `<strong>1. Sơ chế & ướp bò</strong><br>
            Bò thái mỏng, ướp: 1 m.canh hạt nêm + ½ m.canh đường + 2 m.canh dầu mè + chút tỏi băm → 30 phút.`,
      img: "assets/images/steps/uop-bo-mi.jpg"
    },
    {
      text: `<strong>2. Chuẩn bị rau & mì</strong><br>
            Cải thìa rửa sạch, cắt khúc. Hành lá, ngò rí cắt khúc.<br>
            Trụng mì qua nước sôi cho mềm, xả nước lạnh, để ráo.`,
      img: "assets/images/steps/rau-cay-mi.jpg"
    },
    {
      text: `<strong>3. Xào rau & bò</strong><br>
            Phi thơm hành tỏi → xào cải thìa với hạt nêm + đường → trút ra.<br>
            Dùng lại chảo, xào bò tái nhanh tay → cho mì + cải vào → nêm nước tương, dầu hào, dầu mè → đảo đều.`,
      img: "assets/images/steps/xao-mi-bo.jpg"
    },
    {
      text: `<strong>4. Thành phẩm</strong><br>
            Mì xào bò rau cải nóng hổi, mì dai, bò mềm, cải giòn ngọt, thơm lừng dầu mè.<br>
            Rắc hành ngò + tiêu → món sáng/trưa đều “hết sảy”!`,
      img: "assets/images/recipes/mi-xao-bo.jpg"
    }
  ]
},

// ==================== ID: 15 – BÁNH MÌ TRỨNG ỐP LA ====================
{
  id: 15,
  title: "Bánh mì trứng ốp la",
  meta: "10 phút · Siêu dễ · 2 người",
  hero: "assets/images/recipes/trung-op-la.jpg",
  tags: ["<15 phút"],

  ingredients: [
    "Bánh mì baguette – 2 ổ",
    "Trứng gà – 5 quả",
    "Cà chua – 1 trái",
    "Khoai tây – 1 củ",
    "Cà rốt – 1/2 củ (tùy thích)",
    "Hành tím + tỏi – 1 ít",
    "Hành ngò (rau mùi) – 1 ít",
    "Dầu ăn – 1 muỗng canh",
    "Muối, tiêu, xì dầu, dầu hào, tương ớt – 1 ít"
  ],

  steps: [
    {
      text: `<strong>1. Sơ chế rau củ</strong><br>
            Cà rốt + khoai tây + cà chua cắt hạt lựu.<br>
            Hành ngò cắt khúc. Hành tím + tỏi đập dập.`,
      img: "assets/images/steps/rau-cu-banhmi.jpg"
    },
    {
      text: `<strong>2. Xào rau củ</strong><br>
            Phi thơm hành tỏi → cho cà rốt + khoai tây xào mềm → cho cà chua vào.<br>
            Nêm chút muối, tiêu, xì dầu, dầu hào → dằm nhẹ cho sệt.`,
      img: "assets/images/steps/xao-rau-banhmi.jpg"
    },
    {
      text: `<strong>3. Chiên trứng</strong><br>
            Dồn rau củ sang một bên chảo → đập 5 quả trứng vào.<br>
            Rắc muối tiêu → đậy nắp chiên lửa nhỏ 2–3 phút (lòng đào hoặc chín tùy thích).`,
      img: "assets/images/steps/chien-trung-banhmi.jpg"
    },
    {
      text: `<strong>4. Thành phẩm</strong><br>
            Rắc hành ngò lên trứng → đặt lên bánh mì đã rạch sẵn.<br>
            Chấm tương ớt/tương cà → bánh mì trứng ốp la rau củ nóng hổi, béo ngậy, siêu đưa cơm!`,
      img: "assets/images/recipes/trung-op-la.jpg"
    }
  ]
}
];

// Lấy id từ URL (ví dụ: recipe.html?id=5 → lấy được số 5)
const params = new URLSearchParams(window.location.search);
const recipeId = parseInt(params.get("id"));      // Chuyển chuỗi thành số
const recipe = recipes.find(r => r.id === recipeId); // Tìm món có id trùng

// Hàm render toàn bộ chi tiết món lên trang
function renderRecipe() {
  const container = document.getElementById("recipeContainer"); // Nơi nhét nội dung

  // Nếu không tìm thấy món (id sai hoặc không tồn tại)
  if (!recipe) {
    container.innerHTML = `<p style="text-align:center;padding:100px;font-size:20px;color:#999;">Không tìm thấy công thức này.</p>`;
    return;
  }

  // Render nội dung món ăn
  container.innerHTML = `
    <!-- Ảnh bìa món ăn -->
    <img class="hero" src="${recipe.hero}" alt="${recipe.title}">
    
    <!-- Tiêu đề + thông tin thời gian, độ khó -->
    <h2 class="recipe-title">${recipe.title}</h2>
    <div class="meta">${recipe.meta}</div>

    <!-- Danh sách nguyên liệu -->
    <h3 class="section-title">Nguyên liệu</h3>
    <ul class="ingredients">
      ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <!-- Các bước làm -->
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

// Nút "Quay lại" thông minh – không reload trang, giữ nguyên trạng thái lọc + phân trang ở trang trước
document.getElementById("smartBack")?.addEventListener("click", (e) => {
  e.preventDefault();   
  history.back();       // Quay lại trang trước đúng vị trí cũ
});

// Chạy hàm render ngay khi trang tải xong
renderRecipe();