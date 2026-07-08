const newData = [
  // --- HOẠT ĐỘNG, THỜI GIAN & THỜI TIẾT ---
  {"word_vi": "Nói", "word_bru": "Tá tơng", "word_vi_slug": "noi", "category": "hoat-dong"},
  {"word_vi": "Về", "word_bru": "Chu", "word_vi_slug": "ve", "category": "hoat-dong"},
  {"word_vi": "Mấy (bao nhiêu)", "word_bru": "Xể", "word_vi_slug": "may", "category": "thoi-gian"},
  {"word_vi": "Giờ", "word_bru": "Zơ", "word_vi_slug": "gio", "category": "thoi-gian"},
  {"word_vi": "Khi", "word_bru": "Hồi", "word_vi_slug": "khi", "category": "thoi-gian"},
  {"word_vi": "Đâu (Mô)", "word_bru": "Lẽ", "word_vi_slug": "dau", "category": "hoat-dong"},
  {"word_vi": "Đi", "word_bru": "Pớ", "word_vi_slug": "di", "category": "hoat-dong"},
  {"word_vi": "Xuống", "word_bru": "Xêêng", "word_vi_slug": "xuong", "category": "hoat-dong"},
  {"word_vi": "Lên", "word_bru": "Chôn", "word_vi_slug": "len", "category": "hoat-dong"},
  {"word_vi": "Về nhà", "word_bru": "Chu đung", "word_vi_slug": "ve-nha", "category": "hoat-dong"},
  {"word_vi": "Đi làm", "word_bru": "Pớ tá", "word_vi_slug": "di-lam", "category": "hoat-dong"},
  {"word_vi": "Ăn cơm", "word_bru": "Cha đôi", "word_vi_slug": "an-com", "category": "hoat-dong"},
  {"word_vi": "Đi chơi", "word_bru": "Pớ lợi", "word_vi_slug": "di-choi", "category": "hoat-dong"},
  {"word_vi": "Đi rẫy", "word_bru": "Pớ xaray", "word_vi_slug": "di-ray", "category": "hoat-dong"},
  {"word_vi": "Đi học", "word_bru": "Pớ họoc (Riên)", "word_vi_slug": "di-hoc", "category": "hoat-dong"},
  {"word_vi": "Hôm nay", "word_bru": "Ta ngay nay", "word_vi_slug": "hom-nay", "category": "thoi-gian"},
  {"word_vi": "Ngày mai", "word_bru": "Ta ngay pơnơ", "word_vi_slug": "ngay-mai", "category": "thoi-gian"},
  {"word_vi": "Tối", "word_bru": "Xa đau, ka năm", "word_vi_slug": "toi", "category": "thoi-gian"},
  {"word_vi": "Sáng", "word_bru": "Pang", "word_vi_slug": "sang", "category": "thoi-gian"},
  {"word_vi": "Sáng sớm", "word_bru": "Ta Rựp", "word_vi_slug": "sang-som", "category": "thoi-gian"},
  {"word_vi": "Chiều", "word_bru": "Ta Bư", "word_vi_slug": "chieu", "category": "thoi-gian"},
  {"word_vi": "Hỏi", "word_bru": "Blớl", "word_vi_slug": "hoi", "category": "hoat-dong"},
  {"word_vi": "Buổi trưa", "word_bru": "Ma đăng tơơng", "word_vi_slug": "buoi-trua", "category": "thoi-gian"},
  {"word_vi": "Nắng", "word_bru": "Phuộc", "word_vi_slug": "nang", "category": "thoi-tiet"},
  {"word_vi": "Hàng ngày", "word_bru": "Ku rangay", "word_vi_slug": "hang-ngay", "category": "thoi-gian"},
  {"word_vi": "Ngủ dậy", "word_bru": "Ta mơ", "word_vi_slug": "ngu-day", "category": "hoat-dong"},

  // --- MUA BÁN & ĐỒ VẬT ---
  {"word_vi": "Mua", "word_bru": "Chơơng", "word_vi_slug": "mua", "category": "mua-sam"},
  {"word_vi": "Bán", "word_bru": "Chể", "word_vi_slug": "ban", "category": "mua-sam"},
  {"word_vi": "Thích", "word_bru": "I Bưn", "word_vi_slug": "thich", "category": "mua-sam"},
  {"word_vi": "Cần", "word_bru": "Zọoc", "word_vi_slug": "can", "category": "mua-sam"},
  {"word_vi": "Của (của tao, của mày)", "word_bru": "Đô", "word_vi_slug": "cua", "category": "mua-sam"},
  {"word_vi": "Này", "word_bru": "Nay", "word_vi_slug": "nay", "category": "mua-sam"},
  {"word_vi": "Của anh", "word_bru": "Đô Ai", "word_vi_slug": "cua-anh", "category": "mua-sam"},
  {"word_vi": "Của họ", "word_bru": "Đô Alây", "word_vi_slug": "cua-ho", "category": "mua-sam"},
  {"word_vi": "Của anh ấy (đó)", "word_bru": "Đô Ai ki", "word_vi_slug": "cua-anh-ay", "category": "mua-sam"},
  {"word_vi": "Của chúng tôi", "word_bru": "Đô hể", "word_vi_slug": "cua-chung-toi", "category": "mua-sam"},
  {"word_vi": "Màu đỏ", "word_bru": "Ku xau", "word_vi_slug": "mau-do", "category": "mau-sac"},
  {"word_vi": "Trắng", "word_bru": "Klóoc", "word_vi_slug": "trang", "category": "mau-sac"},
  {"word_vi": "Màu xanh", "word_bru": "Ra moong", "word_vi_slug": "mau-xanh", "category": "mau-sac"},
  {"word_vi": "Màu vàng", "word_bru": "Ra rỉa", "word_vi_slug": "mau-vang", "category": "mau-sac"},
  {"word_vi": "Đen", "word_bru": "Kum", "word_vi_slug": "den", "category": "mau-sac"},
  {"word_vi": "Chuối", "word_bru": "Pơ Riệt", "word_vi_slug": "chuoi", "category": "thuc-pham"},
  {"word_vi": "Bí", "word_bru": "Cà đức", "word_vi_slug": "bi", "category": "thuc-pham"},
  {"word_vi": "Bí đao", "word_bru": "A luôi", "word_vi_slug": "bi-dao", "category": "thuc-pham"},
  {"word_vi": "Mướp", "word_bru": "Nôông", "word_vi_slug": "muop", "category": "thuc-pham"},
  {"word_vi": "Áo", "word_bru": "Xa Lục", "word_vi_slug": "ao", "category": "trang-phuc"},
  {"word_vi": "Váy", "word_bru": "Ra Kắt", "word_vi_slug": "vay", "category": "trang-phuc"},
  {"word_vi": "Còn", "word_bru": "Nơong", "word_vi_slug": "con", "category": "mua-sam"},
  {"word_vi": "Hết", "word_bru": "Nhẻ", "word_vi_slug": "het", "category": "mua-sam"},
  {"word_vi": "Không có", "word_bru": "Tà bưn", "word_vi_slug": "khong-co", "category": "mua-sam"},
  {"word_vi": "Con gà", "word_bru": "A truồi", "word_vi_slug": "con-ga", "category": "dong-vat"},

  // --- GIA ĐÌNH & XÃ HỘI ---
  {"word_vi": "Gia đình tôi", "word_bru": "Đung Kử", "word_vi_slug": "gia-dinh-toi", "category": "gia-dinh"},
  {"word_vi": "Nhà tôi", "word_bru": "Đung hể", "word_vi_slug": "nha-toi", "category": "gia-dinh"},
  {"word_vi": "Bản", "word_bru": "Vil", "word_vi_slug": "ban", "category": "gia-dinh"},
  {"word_vi": "Bố", "word_bru": "Pá", "word_vi_slug": "bo", "category": "gia-dinh"},
  {"word_vi": "Mẹ", "word_bru": "Pí", "word_vi_slug": "me", "category": "gia-dinh"},
  {"word_vi": "Em gái", "word_bru": "A mọa", "word_vi_slug": "em-gai", "category": "gia-dinh"},
  {"word_vi": "Nam giới", "word_bru": "Xa Miêng", "word_vi_slug": "nam-gioi", "category": "gia-dinh"},
  {"word_vi": "Nữ giới", "word_bru": "Mặc xem", "word_vi_slug": "nu-gioi", "category": "gia-dinh"},
  {"word_vi": "Trẻ nhỏ", "word_bru": "Ka nen", "word_vi_slug": "tre-nho", "category": "gia-dinh"},
  {"word_vi": "Chết", "word_bru": "Cu chit", "word_vi_slug": "chet", "category": "gia-dinh"},
  {"word_vi": "Chồng", "word_bru": "Ka dác", "word_vi_slug": "chong", "category": "gia-dinh"},
  {"word_vi": "Vợ", "word_bru": "La Kuồi", "word_vi_slug": "vo", "category": "gia-dinh"},
  {"word_vi": "Con đầu", "word_bru": "Con nhoang", "word_vi_slug": "con-dau", "category": "gia-dinh"},
  {"word_vi": "Con út", "word_bru": "Con Radoi", "word_vi_slug": "con-ut", "category": "gia-dinh"},
  {"word_vi": "Nông dân", "word_bru": "Koai đung xaray", "word_vi_slug": "nong-dan", "category": "nghe-nghiep"},

  // --- CƠ THỂ CON NGƯỜI ---
  {"word_vi": "Đầu", "word_bru": "Plơ", "word_vi_slug": "dau", "category": "co-the"},
  {"word_vi": "Đầu tóc", "word_bru": "Xóc plơ", "word_vi_slug": "dau-toc", "category": "co-the"},
  {"word_vi": "Tai", "word_bru": "Katun", "word_vi_slug": "tai", "category": "co-the"},
  {"word_vi": "Mắt", "word_bru": "Mạt", "word_vi_slug": "mat", "category": "co-the"},
  {"word_vi": "Mũi", "word_bru": "Muũ", "word_vi_slug": "mui", "category": "co-the"},
  {"word_vi": "Quai hàm", "word_bru": "Ta Bang", "word_vi_slug": "quai-ham", "category": "co-the"},
  {"word_vi": "Cổ", "word_bru": "Ta Coong", "word_vi_slug": "co", "category": "co-the"},
  {"word_vi": "Vai", "word_bru": "a pans", "word_vi_slug": "vai", "category": "co-the"},
  {"word_vi": "Tay", "word_bru": "A ti", "word_vi_slug": "tay", "category": "co-the"},
  {"word_vi": "Ngón tay", "word_bru": "Đem a ti", "word_vi_slug": "ngon-tay", "category": "co-the"},
  {"word_vi": "Bàn tay", "word_bru": "Ta lang ati", "word_vi_slug": "ban-tay", "category": "co-the"},
  {"word_vi": "Ngực", "word_bru": "A pơm", "word_vi_slug": "nguc", "category": "co-the"},
  {"word_vi": "Vú", "word_bru": "Tỏo", "word_vi_slug": "vu", "category": "co-the"},
  {"word_vi": "Bụng", "word_bru": "Pung", "word_vi_slug": "bung", "category": "co-the"},
  {"word_vi": "Thắt lưng", "word_bru": "A king", "word_vi_slug": "that-lung", "category": "co-the"},
  {"word_vi": "Mông", "word_bru": "Pung pang", "word_vi_slug": "mong", "category": "co-the"},
  {"word_vi": "Đùi", "word_bru": "Lu", "word_vi_slug": "dui", "category": "co-the"},
  {"word_vi": "Bắp chân", "word_bru": "A loong", "word_vi_slug": "bap-chan", "category": "co-the"},
  {"word_vi": "Cổ tay", "word_bru": "Ta coong a ti", "word_vi_slug": "co-tay", "category": "co-the"},
  {"word_vi": "Cổ chân", "word_bru": "Ta coong A dưưng", "word_vi_slug": "co-chan", "category": "co-the"},
  {"word_vi": "Bàn chân", "word_bru": "Ta lang A dưưng", "word_vi_slug": "ban-chan", "category": "co-the"},
  {"word_vi": "Miệng", "word_bru": "Bộô", "word_vi_slug": "mieng", "category": "co-the"},
  {"word_vi": "Răng", "word_bru": "Ka neeng", "word_vi_slug": "rang", "category": "co-the"},
  {"word_vi": "Môi", "word_bru": "Ta bâns", "word_vi_slug": "moi", "category": "co-the"},

  // --- ỐM ĐAU, BỆNH TẬT ---
  {"word_vi": "Đau", "word_bru": "A-i", "word_vi_slug": "dau", "category": "benh-tat"},
  {"word_vi": "Đau dạ dày", "word_bru": "I ộô", "word_vi_slug": "dau-da-day", "category": "benh-tat"},
  {"word_vi": "Đau nặng", "word_bru": "I lữ", "word_vi_slug": "dau-nang", "category": "benh-tat"},
  {"word_vi": "Mới đau", "word_bru": "Bợi i", "word_vi_slug": "moi-dau", "category": "benh-tat"},
  {"word_vi": "Đau lâu", "word_bru": "I đun", "word_vi_slug": "dau-lau", "category": "benh-tat"},

  // --- NHÀ CỬA & SẠCH ĐẸP ---
  {"word_vi": "Vệ sinh", "word_bru": "Ra xa", "word_vi_slug": "ve-sinh", "category": "nha-cua"},
  {"word_vi": "Sạch sẽ", "word_bru": "Ba ráh", "word_vi_slug": "sach-se", "category": "nha-cua"},
  {"word_vi": "Quét", "word_bru": "Pếh", "word_vi_slug": "quet", "category": "nha-cua"},
  {"word_vi": "Dưới sàn nhà", "word_bru": "Pưn Karum", "word_vi_slug": "duoi-san-nha", "category": "nha-cua"},
  {"word_vi": "Trên nhà", "word_bru": "Pơơng đung", "word_vi_slug": "tren-nha", "category": "nha-cua"},
  {"word_vi": "Nhà cửa", "word_bru": "Đung xu", "word_vi_slug": "nha-cua", "category": "nha-cua"},
  {"word_vi": "Bát (chén)", "word_bru": "Chen, tà ngan", "word_vi_slug": "bat-chen", "category": "nha-cua"},
  {"word_vi": "Đũa", "word_bru": "Tũa", "word_vi_slug": "dua", "category": "nha-cua"},
  {"word_vi": "Nấu", "word_bru": "Ta cọo", "word_vi_slug": "nau", "category": "am-thuc"},
  {"word_vi": "Chín", "word_bru": "Chin", "word_vi_slug": "chin", "category": "am-thuc"},
  {"word_vi": "Nóng", "word_bru": "Ka tau", "word_vi_slug": "nong", "category": "am-thuc"},
  {"word_vi": "Nguội", "word_bru": "lieng", "word_vi_slug": "nguoi", "category": "am-thuc"}
];
async function addWords() {
  let count = 0;
  for (const word of newData) {
    try {
      const response = await fetch('http://localhost:5000/api/words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(word)
      });
      
      const result = await response.json();
      if (result.success) {
        console.log(`✅ Đã thêm: ${word.word_vi}`);
        count++;
      }
    } catch (error) {
      console.error(`🔴 Lỗi khi thêm ${word.word_vi}:`, error.message);
    }
  }
  console.log(`\n🎉 Hoàn tất! Đã đẩy thành công ${count} từ vào Database.`);
}

addWords();