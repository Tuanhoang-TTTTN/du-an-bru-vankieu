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
  {"word_vi": "Nguội", "word_bru": "lieng", "word_vi_slug": "nguoi", "category": "am-thuc"},

  // --- MUA BÁN ---
  { "word_vi": "Mua", "word_bru": "Chơơng", "word_vi_slug": "mua", "category": "mua-ban" },
  { "word_vi": "Bán", "word_bru": "Chể", "word_vi_slug": "ban", "category": "mua-ban" },
  { "word_vi": "Mấy", "word_bru": "Xể", "word_vi_slug": "may", "category": "mua-ban" },
  { "word_vi": "Thích", "word_bru": "I Bưn", "word_vi_slug": "thich", "category": "mua-ban" },
  { "word_vi": "Cần", "word_bru": "Zọoc", "word_vi_slug": "can", "category": "mua-ban" },
  { "word_vi": "Của", "word_bru": "Đô", "word_vi_slug": "cua", "category": "mua-ban" },
  { "word_vi": "Này", "word_bru": "Nay", "word_vi_slug": "nay", "category": "mua-ban" },
  { "word_vi": "Của anh", "word_bru": "Đô Ai", "word_vi_slug": "cua-anh", "category": "mua-ban" },
  { "word_vi": "Của họ", "word_bru": "Đô Alây", "word_vi_slug": "cua-ho", "category": "mua-ban" },
  { "word_vi": "Của anh ấy", "word_bru": "Đô Ai ki", "word_vi_slug": "cua-anh-ay", "category": "mua-ban" },
  { "word_vi": "Của chúng tôi", "word_bru": "Đô hể", "word_vi_slug": "cua-chung-toi", "category": "mua-ban" },

  // --- MÀU SẮC ---
  { "word_vi": "Màu đỏ", "word_bru": "Ku xau", "word_vi_slug": "mau-do", "category": "mau-sac" },
  { "word_vi": "Màu trắng", "word_bru": "Klóoc", "word_vi_slug": "mau-trang", "category": "mau-sac" },
  { "word_vi": "Màu xanh", "word_bru": "Ra moong", "word_vi_slug": "mau-xanh", "category": "mau-sac" },
  { "word_vi": "Màu vàng", "word_bru": "Ra rỉa", "word_vi_slug": "mau-vang", "category": "mau-sac" },
  { "word_vi": "Màu đen", "word_bru": "Kum", "word_vi_slug": "mau-den", "category": "mau-sac" },

  // --- RAU CỦ QUẢ ---
  { "word_vi": "Chuối", "word_bru": "Pơ Riệt", "word_vi_slug": "chuoi", "category": "rau-cu-qua" },
  { "word_vi": "Bí", "word_bru": "Cà đức", "word_vi_slug": "bi", "category": "rau-cu-qua" },
  { "word_vi": "Bí đao", "word_bru": "A luôi", "word_vi_slug": "bi-dao", "category": "rau-cu-qua" },
  { "word_vi": "Mướp", "word_bru": "Nôông", "word_vi_slug": "muop", "category": "rau-cu-qua" },

  // --- QUẦN ÁO ---
  { "word_vi": "Áo", "word_bru": "Xa Lục", "word_vi_slug": "ao", "category": "quan-ao" },
  { "word_vi": "Váy", "word_bru": "Ra Kắt", "word_vi_slug": "vay", "category": "quan-ao" },

  // --- TRẠNG THÁI ---
  { "word_vi": "Còn", "word_bru": "Nơong", "word_vi_slug": "con", "category": "trang-thai" },
  { "word_vi": "Hết", "word_bru": "Nhẻ", "word_vi_slug": "het", "category": "trang-thai" },
  { "word_vi": "Không có", "word_bru": "Tà bưn", "word_vi_slug": "khong-co", "category": "trang-thai" },
  { "word_vi": "Chết", "word_bru": "Cu chit", "word_vi_slug": "chet", "category": "trang-thai" },

  // --- ĐỘNG VẬT ---
  { "word_vi": "Con gà", "word_bru": "A truồi", "word_vi_slug": "con-ga", "category": "dong-vat" },

  // --- GIA ĐÌNH ---
  { "word_vi": "Gia đình tôi", "word_bru": "Đung Kử", "word_vi_slug": "gia-dinh-toi", "category": "gia-dinh" },
  { "word_vi": "Nhà tôi", "word_bru": "Đung hể", "word_vi_slug": "nha-toi", "category": "gia-dinh" },
  { "word_vi": "Bản", "word_bru": "Vil", "word_vi_slug": "ban-lang", "category": "gia-dinh" },
  { "word_vi": "Bố", "word_bru": "Pá", "word_vi_slug": "bo", "category": "gia-dinh" },
  { "word_vi": "Mẹ", "word_bru": "Pí", "word_vi_slug": "me", "category": "gia-dinh" },
  { "word_vi": "Em gái", "word_bru": "A mọa", "word_vi_slug": "em-gai", "category": "gia-dinh" },
  { "word_vi": "Nam giới", "word_bru": "Xa Miêng", "word_vi_slug": "nam-gioi", "category": "gia-dinh" },
  { "word_vi": "Nữ giới", "word_bru": "Mặc xem", "word_vi_slug": "nu-gioi", "category": "gia-dinh" },
  { "word_vi": "Trẻ nhỏ", "word_bru": "Ka nen", "word_vi_slug": "tre-nho", "category": "gia-dinh" },
  { "word_vi": "Chồng", "word_bru": "Ka dác", "word_vi_slug": "chong", "category": "gia-dinh" },
  { "word_vi": "Vợ", "word_bru": "La Kuồi", "word_vi_slug": "vo", "category": "gia-dinh" },
  { "word_vi": "Con đầu", "word_bru": "Con nhoang", "word_vi_slug": "con-dau", "category": "gia-dinh" },
  { "word_vi": "Con út", "word_bru": "Con Radoi", "word_vi_slug": "con-ut", "category": "gia-dinh" },
  { "word_vi": "Nông dân", "word_bru": "Koai đung xaray", "word_vi_slug": "nong-dan", "category": "gia-dinh" },

  // --- BỘ PHẬN CƠ THỂ ---
  { "word_vi": "Đầu", "word_bru": "Plơ", "word_vi_slug": "dau", "category": "co-the" },
  { "word_vi": "Đầu tóc", "word_bru": "Xóc plơ", "word_vi_slug": "dau-toc", "category": "co-the" },
  { "word_vi": "Tai", "word_bru": "Katun", "word_vi_slug": "tai", "category": "co-the" },
  { "word_vi": "Mắt", "word_bru": "Mạt", "word_vi_slug": "mat", "category": "co-the" },
  { "word_vi": "Mũi", "word_bru": "Muũ", "word_vi_slug": "mui", "category": "co-the" },
  { "word_vi": "Quai hàm", "word_bru": "Ta Bang", "word_vi_slug": "quai-ham", "category": "co-the" },
  { "word_vi": "Cổ", "word_bru": "Ta Coong", "word_vi_slug": "co", "category": "co-the" },
  { "word_vi": "Vai", "word_bru": "A pans", "word_vi_slug": "vai", "category": "co-the" },
  { "word_vi": "Tay", "word_bru": "A ti", "word_vi_slug": "tay", "category": "co-the" },
  { "word_vi": "Ngón tay", "word_bru": "Đem a ti", "word_vi_slug": "ngon-tay", "category": "co-the" },
  { "word_vi": "Bàn tay", "word_bru": "Ta lang ati", "word_vi_slug": "ban-tay", "category": "co-the" },
  { "word_vi": "Ngực", "word_bru": "A pơm", "word_vi_slug": "nguc", "category": "co-the" },
  { "word_vi": "Vú", "word_bru": "Tỏo", "word_vi_slug": "vu", "category": "co-the" },
  { "word_vi": "Bụng", "word_bru": "Pung", "word_vi_slug": "bung", "category": "co-the" },
  { "word_vi": "Thắt lưng", "word_bru": "A king", "word_vi_slug": "that-lung", "category": "co-the" },
  { "word_vi": "Mông", "word_bru": "Pung pang", "word_vi_slug": "mong", "category": "co-the" },
  { "word_vi": "Đùi", "word_bru": "Lu", "word_vi_slug": "dui", "category": "co-the" },
  { "word_vi": "Bắp chân", "word_bru": "A loong", "word_vi_slug": "bap-chan", "category": "co-the" },
  { "word_vi": "Cổ tay", "word_bru": "Ta coong a ti", "word_vi_slug": "co-tay", "category": "co-the" },
  { "word_vi": "Cổ chân", "word_bru": "Ta coong A dưưng", "word_vi_slug": "co-chan", "category": "co-the" },
  { "word_vi": "Bàn chân", "word_bru": "Ta lang A dưưng", "word_vi_slug": "ban-chan", "category": "co-the" },
  { "word_vi": "Miệng", "word_bru": "Bộô", "word_vi_slug": "mieng", "category": "co-the" },
  { "word_vi": "Răng", "word_bru": "Ka neeng", "word_vi_slug": "rang", "category": "co-the" },
  { "word_vi": "Môi", "word_bru": "Ta bâns", "word_vi_slug": "moi", "category": "co-the" },

  // --- ĐAU ỐM ---
  { "word_vi": "Đau", "word_bru": "A-i", "word_vi_slug": "dau", "category": "benh-tat" },
  { "word_vi": "Đau dạ dày", "word_bru": "I ộô", "word_vi_slug": "dau-da-day", "category": "benh-tat" },
  { "word_vi": "Đau nặng", "word_bru": "I lữ", "word_vi_slug": "dau-nang", "category": "benh-tat" },
  { "word_vi": "Mới đau", "word_bru": "Bợi i", "word_vi_slug": "moi-dau", "category": "benh-tat" },
  { "word_vi": "Đau lâu", "word_bru": "I đun", "word_vi_slug": "dau-lau", "category": "benh-tat" },

  // --- NHÀ CỬA & VỆ SINH ---
  { "word_vi": "Vệ sinh", "word_bru": "Ra xa", "word_vi_slug": "ve-sinh", "category": "nha-cua" },
  { "word_vi": "Sạch sẽ", "word_bru": "Ba ráh", "word_vi_slug": "sach-se", "category": "nha-cua" },
  { "word_vi": "Quét", "word_bru": "Pếh", "word_vi_slug": "quet", "category": "nha-cua" },
  { "word_vi": "Dưới sàn nhà", "word_bru": "Pưn Karum", "word_vi_slug": "duoi-san-nha", "category": "nha-cua" },
  { "word_vi": "Trên nhà", "word_bru": "Pơơng đung", "word_vi_slug": "tren-nha", "category": "nha-cua" },
  { "word_vi": "Nhà cửa", "word_bru": "Đung xu", "word_vi_slug": "nha-cua", "category": "nha-cua" },
  { "word_vi": "Bát", "word_bru": "Chen, tà ngan", "word_vi_slug": "bat", "category": "nha-cua" },
  { "word_vi": "Đũa", "word_bru": "Tũa", "word_vi_slug": "dua", "category": "nha-cua" },
  { "word_vi": "Nấu", "word_bru": "Ta cọo", "word_vi_slug": "nau", "category": "nha-cua" },
  { "word_vi": "Chín", "word_bru": "Chin", "word_vi_slug": "chin", "category": "nha-cua" },
  { "word_vi": "Nóng", "word_bru": "Ka tau", "word_vi_slug": "nong", "category": "nha-cua" },
  { "word_vi": "Nguội", "word_bru": "Lieng", "word_vi_slug": "nguoi", "category": "nha-cua" },
   { "word_vi": "Hôm nay", "word_bru": "Nay", "word_vi_slug": "hom-nay", "category": "thoi-gian" },
  { "word_vi": "Ngày mai", "word_bru": "Kê", "word_vi_slug": "ngay-mai", "category": "thoi-gian" },
  { "word_vi": "Hôm qua", "word_bru": "Măng", "word_vi_slug": "hom-qua", "category": "thoi-gian" },
  { "word_vi": "Sáng", "word_bru": "Plơi", "word_vi_slug": "sang", "category": "thoi-gian" },
  { "word_vi": "Tối", "word_bru": "Măng tối", "word_vi_slug": "toi", "category": "thoi-gian" },

  // --- ĐỘNG TỪ ---
  { "word_vi": "Ăn", "word_bru": "Cha", "word_vi_slug": "an", "category": "dong-tu" },
  { "word_vi": "Uống", "word_bru": "Đớc", "word_vi_slug": "uong", "category": "dong-tu" },
  { "word_vi": "Đi", "word_bru": "Lơi", "word_vi_slug": "di", "category": "dong-tu" },
  { "word_vi": "Đứng", "word_bru": "Yêng", "word_vi_slug": "dung", "category": "dong-tu" },
  { "word_vi": "Ngồi", "word_bru": "Tơm", "word_vi_slug": "ngoi", "category": "dong-tu" },
  { "word_vi": "Ngủ", "word_bru": "Pơng", "word_vi_slug": "ngu", "category": "dong-tu" },

  // --- ĐỒ ĂN ---
  { "word_vi": "Cơm", "word_bru": "Azư", "word_vi_slug": "com", "category": "do-an" },
  { "word_vi": "Thịt", "word_bru": "Sac", "word_vi_slug": "thit", "category": "do-an" },
  { "word_vi": "Cá", "word_bru": "Ka", "word_vi_slug": "ca", "category": "do-an" },
  { "word_vi": "Rau", "word_bru": "Rau", "word_vi_slug": "rau", "category": "do-an" },
  { "word_vi": "Muối", "word_bru": "Blư", "word_vi_slug": "muoi", "category": "do-an" },

  // --- ĐỒ UỐNG ---
  { "word_vi": "Nước", "word_bru": "Đớc", "word_vi_slug": "nuoc", "category": "do-uong" },
  { "word_vi": "Rượu", "word_bru": "Avol", "word_vi_slug": "ruou", "category": "do-uong" },
  { "word_vi": "Trà", "word_bru": "Cha", "word_vi_slug": "tra", "category": "do-uong" },

  // --- PHƯƠNG HƯỚNG ---
  { "word_vi": "Trái", "word_bru": "Clê", "word_vi_slug": "trai", "category": "phuong-huong" },
  { "word_vi": "Phải", "word_bru": "Choong", "word_vi_slug": "phai", "category": "phuong-huong" },
  { "word_vi": "Trên", "word_bru": "Pơơng", "word_vi_slug": "tren", "category": "phuong-huong" },
  { "word_vi": "Dưới", "word_bru": "Pưn", "word_vi_slug": "duoi", "category": "phuong-huong" },
  { "word_vi": "Trong", "word_bru": "Troong", "word_vi_slug": "trong", "category": "phuong-huong" },
  { "word_vi": "Ngoài", "word_bru": "Ngoài", "word_vi_slug": "ngoai", "category": "phuong-huong" },

  // --- THIÊN NHIÊN ---
  { "word_vi": "Trời", "word_bru": "Trơi", "word_vi_slug": "troi", "category": "thien-nhien" },
  { "word_vi": "Mưa", "word_bru": "Mưn", "word_vi_slug": "mua", "category": "thien-nhien" },
  { "word_vi": "Nắng", "word_bru": "Nắng", "word_vi_slug": "nang", "category": "thien-nhien" },
  { "word_vi": "Gió", "word_bru": "Pơl", "word_vi_slug": "gio", "category": "thien-nhien" },
  { "word_vi": "Sông", "word_bru": "Krông", "word_vi_slug": "song", "category": "thien-nhien" },
  { "word_vi": "Núi", "word_bru": "Pơr", "word_vi_slug": "nui", "category": "thien-nhien" },

  // --- CÂU GIAO TIẾP ---
  { "word_vi": "Xin chào", "word_bru": "Tabỡp", "word_vi_slug": "xin-chao", "category": "giao-tiep" },
  { "word_vi": "Cảm ơn", "word_bru": "Sa-ỡn", "word_vi_slug": "cam-on", "category": "giao-tiep" },
  { "word_vi": "Xin lỗi", "word_bru": "Tơm lỗi", "word_vi_slug": "xin-loi", "category": "giao-tiep" },
  { "word_vi": "Vâng", "word_bru": "Ừ", "word_vi_slug": "vang", "category": "giao-tiep" },
  { "word_vi": "Không", "word_bru": "Tà", "word_vi_slug": "khong", "category": "giao-tiep" },

  // --- TÍNH TỪ ---
  { "word_vi": "To", "word_bru": "Đôm", "word_vi_slug": "to", "category": "tinh-tu" },
  { "word_vi": "Nhỏ", "word_bru": "Tí", "word_vi_slug": "nho", "category": "tinh-tu" },
  { "word_vi": "Dài", "word_bru": "Đai", "word_vi_slug": "dai", "category": "tinh-tu" },
  { "word_vi": "Ngắn", "word_bru": "Klên", "word_vi_slug": "ngan", "category": "tinh-tu" },
  { "word_vi": "Đẹp", "word_bru": "Đep", "word_vi_slug": "dep", "category": "tinh-tu" },
  { "word_vi": "Xấu", "word_bru": "Xâu", "word_vi_slug": "xau", "category": "tinh-tu" },

   // --- CON VẬT ---
  { "word_vi": "Con chó", "word_bru": "", "word_vi_slug": "con-cho", "category": "dong-vat" },
  { "word_vi": "Con mèo", "word_bru": "", "word_vi_slug": "con-meo", "category": "dong-vat" },
  { "word_vi": "Con bò", "word_bru": "", "word_vi_slug": "con-bo", "category": "dong-vat" },
  { "word_vi": "Con trâu", "word_bru": "", "word_vi_slug": "con-trau", "category": "dong-vat" },
  { "word_vi": "Con lợn", "word_bru": "", "word_vi_slug": "con-lon", "category": "dong-vat" },
  { "word_vi": "Con dê", "word_bru": "", "word_vi_slug": "con-de", "category": "dong-vat" },
  { "word_vi": "Con vịt", "word_bru": "", "word_vi_slug": "con-vit", "category": "dong-vat" },
  { "word_vi": "Con ngan", "word_bru": "", "word_vi_slug": "con-ngan", "category": "dong-vat" },
  { "word_vi": "Con ngỗng", "word_bru": "", "word_vi_slug": "con-ngong", "category": "dong-vat" },
  { "word_vi": "Con chim", "word_bru": "", "word_vi_slug": "con-chim", "category": "dong-vat" },
  { "word_vi": "Con cá", "word_bru": "", "word_vi_slug": "con-ca", "category": "dong-vat" },
  { "word_vi": "Con tôm", "word_bru": "", "word_vi_slug": "con-tom", "category": "dong-vat" },
  { "word_vi": "Con cua", "word_bru": "", "word_vi_slug": "con-cua", "category": "dong-vat" },
  { "word_vi": "Con ếch", "word_bru": "", "word_vi_slug": "con-ech", "category": "dong-vat" },
  { "word_vi": "Con rắn", "word_bru": "", "word_vi_slug": "con-ran", "category": "dong-vat" },
  { "word_vi": "Con khỉ", "word_bru": "", "word_vi_slug": "con-khi", "category": "dong-vat" },
  { "word_vi": "Con voi", "word_bru": "", "word_vi_slug": "con-voi", "category": "dong-vat" },
  { "word_vi": "Con hổ", "word_bru": "", "word_vi_slug": "con-ho", "category": "dong-vat" },
  { "word_vi": "Con báo", "word_bru": "", "word_vi_slug": "con-bao", "category": "dong-vat" },
  { "word_vi": "Con nai", "word_bru": "", "word_vi_slug": "con-nai", "category": "dong-vat" },

  // --- ĐỒ VẬT GIA ĐÌNH ---
  { "word_vi": "Nhà", "word_bru": "", "word_vi_slug": "nha", "category": "do-vat" },
  { "word_vi": "Cửa", "word_bru": "", "word_vi_slug": "cua", "category": "do-vat" },
  { "word_vi": "Cửa sổ", "word_bru": "", "word_vi_slug": "cua-so", "category": "do-vat" },
  { "word_vi": "Bàn", "word_bru": "", "word_vi_slug": "ban", "category": "do-vat" },
  { "word_vi": "Ghế", "word_bru": "", "word_vi_slug": "ghe", "category": "do-vat" },
  { "word_vi": "Giường", "word_bru": "", "word_vi_slug": "giuong", "category": "do-vat" },
  { "word_vi": "Chiếu", "word_bru": "", "word_vi_slug": "chieu", "category": "do-vat" },
  { "word_vi": "Chăn", "word_bru": "", "word_vi_slug": "chan", "category": "do-vat" },
  { "word_vi": "Gối", "word_bru": "", "word_vi_slug": "goi", "category": "do-vat" },
  { "word_vi": "Mùng", "word_bru": "", "word_vi_slug": "mung", "category": "do-vat" },
  { "word_vi": "Đèn", "word_bru": "", "word_vi_slug": "den", "category": "do-vat" },
  { "word_vi": "Đèn pin", "word_bru": "", "word_vi_slug": "den-pin", "category": "do-vat" },
  { "word_vi": "Quạt", "word_bru": "", "word_vi_slug": "quat", "category": "do-vat" },
  { "word_vi": "Xô", "word_bru": "", "word_vi_slug": "xo", "category": "do-vat" },
  { "word_vi": "Chậu", "word_bru": "", "word_vi_slug": "chau", "category": "do-vat" },
  { "word_vi": "Nồi", "word_bru": "", "word_vi_slug": "noi", "category": "do-vat" },
  { "word_vi": "Nắp nồi", "word_bru": "", "word_vi_slug": "nap-noi", "category": "do-vat" },
  { "word_vi": "Muỗng", "word_bru": "", "word_vi_slug": "muong", "category": "do-vat" },
  { "word_vi": "Dao", "word_bru": "", "word_vi_slug": "dao", "category": "do-vat" },
  { "word_vi": "Kéo", "word_bru": "", "word_vi_slug": "keo", "category": "do-vat" },
  { "word_vi": "Rổ", "word_bru": "", "word_vi_slug": "ro", "category": "do-vat" },
  { "word_vi": "Thau", "word_bru": "", "word_vi_slug": "thau", "category": "do-vat" },
  { "word_vi": "Can nước", "word_bru": "", "word_vi_slug": "can-nuoc", "category": "do-vat" },
  { "word_vi": "Bình nước", "word_bru": "", "word_vi_slug": "binh-nuoc", "category": "do-vat" },
  { "word_vi": "Khăn", "word_bru": "", "word_vi_slug": "khan", "category": "do-vat" },
   { "word_vi": "Sách", "word_bru": "", "word_vi_slug": "sach", "category": "hoc-tap" },
  { "word_vi": "Vở", "word_bru": "", "word_vi_slug": "vo", "category": "hoc-tap" },
  { "word_vi": "Giấy", "word_bru": "", "word_vi_slug": "giay", "category": "hoc-tap" },
  { "word_vi": "Bút", "word_bru": "", "word_vi_slug": "but", "category": "hoc-tap" },
  { "word_vi": "Bút chì", "word_bru": "", "word_vi_slug": "but-chi", "category": "hoc-tap" },
  { "word_vi": "Bút mực", "word_bru": "", "word_vi_slug": "but-muc", "category": "hoc-tap" },
  { "word_vi": "Tẩy", "word_bru": "", "word_vi_slug": "tay", "category": "hoc-tap" },
  { "word_vi": "Thước", "word_bru": "", "word_vi_slug": "thuoc", "category": "hoc-tap" },
  { "word_vi": "Compa", "word_bru": "", "word_vi_slug": "compa", "category": "hoc-tap" },
  { "word_vi": "Máy tính", "word_bru": "", "word_vi_slug": "may-tinh", "category": "hoc-tap" },
  { "word_vi": "Bảng", "word_bru": "", "word_vi_slug": "bang", "category": "hoc-tap" },
  { "word_vi": "Phấn", "word_bru": "", "word_vi_slug": "phan", "category": "hoc-tap" },
  { "word_vi": "Cặp sách", "word_bru": "", "word_vi_slug": "cap-sach", "category": "hoc-tap" },
  { "word_vi": "Ba lô", "word_bru": "", "word_vi_slug": "ba-lo", "category": "hoc-tap" },
  { "word_vi": "Hộp bút", "word_bru": "", "word_vi_slug": "hop-but", "category": "hoc-tap" },

  // --- DỤNG CỤ LAO ĐỘNG ---
  { "word_vi": "Cuốc", "word_bru": "", "word_vi_slug": "cuoc", "category": "dung-cu" },
  { "word_vi": "Xẻng", "word_bru": "", "word_vi_slug": "xeng", "category": "dung-cu" },
  { "word_vi": "Rìu", "word_bru": "", "word_vi_slug": "riu", "category": "dung-cu" },
  { "word_vi": "Búa", "word_bru": "", "word_vi_slug": "bua", "category": "dung-cu" },
  { "word_vi": "Cưa", "word_bru": "", "word_vi_slug": "cua-go", "category": "dung-cu" },
  { "word_vi": "Liềm", "word_bru": "", "word_vi_slug": "liem", "category": "dung-cu" },
  { "word_vi": "Rựa", "word_bru": "", "word_vi_slug": "rua", "category": "dung-cu" },
  { "word_vi": "Gùi", "word_bru": "", "word_vi_slug": "gui", "category": "dung-cu" },
  { "word_vi": "Dây thừng", "word_bru": "", "word_vi_slug": "day-thung", "category": "dung-cu" },
  { "word_vi": "Thang", "word_bru": "", "word_vi_slug": "thang", "category": "dung-cu" },
  { "word_vi": "Xe cút kít", "word_bru": "", "word_vi_slug": "xe-cut-kit", "category": "dung-cu" },
  { "word_vi": "Giỏ", "word_bru": "", "word_vi_slug": "gio", "category": "dung-cu" },
  { "word_vi": "Lưới", "word_bru": "", "word_vi_slug": "luoi", "category": "dung-cu" },
  { "word_vi": "Cần câu", "word_bru": "", "word_vi_slug": "can-cau", "category": "dung-cu" },
  { "word_vi": "Bẫy", "word_bru": "", "word_vi_slug": "bay", "category": "dung-cu" },

  // --- NHẠC CỤ ---
  { "word_vi": "Cồng", "word_bru": "", "word_vi_slug": "cong", "category": "nhac-cu" },
  { "word_vi": "Chiêng", "word_bru": "", "word_vi_slug": "chieng", "category": "nhac-cu" },
  { "word_vi": "Trống", "word_bru": "", "word_vi_slug": "trong", "category": "nhac-cu" },
  { "word_vi": "Kèn", "word_bru": "", "word_vi_slug": "ken", "category": "nhac-cu" },
  { "word_vi": "Sáo", "word_bru": "", "word_vi_slug": "sao", "category": "nhac-cu" },
  { "word_vi": "Đàn", "word_bru": "", "word_vi_slug": "dan", "category": "nhac-cu" },
  { "word_vi": "Đàn ghi-ta", "word_bru": "", "word_vi_slug": "dan-ghita", "category": "nhac-cu" },
  { "word_vi": "Đàn nhị", "word_bru": "", "word_vi_slug": "dan-nhi", "category": "nhac-cu" },
  { "word_vi": "Đàn bầu", "word_bru": "", "word_vi_slug": "dan-bau", "category": "nhac-cu" },
  { "word_vi": "Đàn tranh", "word_bru": "", "word_vi_slug": "dan-tranh", "category": "nhac-cu" },
  { "word_vi": "Đàn organ", "word_bru": "", "word_vi_slug": "dan-organ", "category": "nhac-cu" },
  { "word_vi": "Piano", "word_bru": "", "word_vi_slug": "piano", "category": "nhac-cu" },
  { "word_vi": "Violin", "word_bru": "", "word_vi_slug": "violin", "category": "nhac-cu" },
  { "word_vi": "Maracas", "word_bru": "", "word_vi_slug": "maracas", "category": "nhac-cu" },
  { "word_vi": "Chuông", "word_bru": "", "word_vi_slug": "chuong", "category": "nhac-cu" },
   // --- THỰC PHẨM ---
  { "word_vi": "Cơm", "word_bru": "", "word_vi_slug": "com", "category": "thuc-pham" },
  { "word_vi": "Gạo", "word_bru": "", "word_vi_slug": "gao", "category": "thuc-pham" },
  { "word_vi": "Nếp", "word_bru": "", "word_vi_slug": "nep", "category": "thuc-pham" },
  { "word_vi": "Cháo", "word_bru": "", "word_vi_slug": "chao", "category": "thuc-pham" },
  { "word_vi": "Bánh", "word_bru": "", "word_vi_slug": "banh", "category": "thuc-pham" },
  { "word_vi": "Bánh mì", "word_bru": "", "word_vi_slug": "banh-mi", "category": "thuc-pham" },
  { "word_vi": "Mì", "word_bru": "", "word_vi_slug": "mi", "category": "thuc-pham" },
  { "word_vi": "Thịt", "word_bru": "", "word_vi_slug": "thit", "category": "thuc-pham" },
  { "word_vi": "Cá", "word_bru": "", "word_vi_slug": "ca", "category": "thuc-pham" },
  { "word_vi": "Tôm", "word_bru": "", "word_vi_slug": "tom", "category": "thuc-pham" },
  { "word_vi": "Cua", "word_bru": "", "word_vi_slug": "cua", "category": "thuc-pham" },
  { "word_vi": "Trứng", "word_bru": "", "word_vi_slug": "trung", "category": "thuc-pham" },
  { "word_vi": "Muối", "word_bru": "", "word_vi_slug": "muoi", "category": "thuc-pham" },
  { "word_vi": "Đường", "word_bru": "", "word_vi_slug": "duong", "category": "thuc-pham" },
  { "word_vi": "Mật ong", "word_bru": "", "word_vi_slug": "mat-ong", "category": "thuc-pham" },

  // --- RAU CỦ ---
  { "word_vi": "Rau", "word_bru": "", "word_vi_slug": "rau", "category": "rau-cu" },
  { "word_vi": "Cải", "word_bru": "", "word_vi_slug": "cai", "category": "rau-cu" },
  { "word_vi": "Bắp cải", "word_bru": "", "word_vi_slug": "bap-cai", "category": "rau-cu" },
  { "word_vi": "Cà rốt", "word_bru": "", "word_vi_slug": "ca-rot", "category": "rau-cu" },
  { "word_vi": "Khoai", "word_bru": "", "word_vi_slug": "khoai", "category": "rau-cu" },
  { "word_vi": "Khoai lang", "word_bru": "", "word_vi_slug": "khoai-lang", "category": "rau-cu" },
  { "word_vi": "Khoai tây", "word_bru": "", "word_vi_slug": "khoai-tay", "category": "rau-cu" },
  { "word_vi": "Sắn", "word_bru": "", "word_vi_slug": "san", "category": "rau-cu" },
  { "word_vi": "Ngô", "word_bru": "", "word_vi_slug": "ngo", "category": "rau-cu" },
  { "word_vi": "Đậu", "word_bru": "", "word_vi_slug": "dau", "category": "rau-cu" },
  { "word_vi": "Đậu phộng", "word_bru": "", "word_vi_slug": "dau-phong", "category": "rau-cu" },
  { "word_vi": "Ớt", "word_bru": "", "word_vi_slug": "ot", "category": "rau-cu" },
  { "word_vi": "Hành", "word_bru": "", "word_vi_slug": "hanh", "category": "rau-cu" },
  { "word_vi": "Tỏi", "word_bru": "", "word_vi_slug": "toi", "category": "rau-cu" },
  { "word_vi": "Gừng", "word_bru": "", "word_vi_slug": "gung", "category": "rau-cu" },

  // --- TRÁI CÂY ---
  { "word_vi": "Chuối", "word_bru": "", "word_vi_slug": "chuoi", "category": "trai-cay" },
  { "word_vi": "Xoài", "word_bru": "", "word_vi_slug": "xoai", "category": "trai-cay" },
  { "word_vi": "Cam", "word_bru": "", "word_vi_slug": "cam", "category": "trai-cay" },
  { "word_vi": "Quýt", "word_bru": "", "word_vi_slug": "quyt", "category": "trai-cay" },
  { "word_vi": "Bưởi", "word_bru": "", "word_vi_slug": "buoi", "category": "trai-cay" },
  { "word_vi": "Dứa", "word_bru": "", "word_vi_slug": "dua", "category": "trai-cay" },
  { "word_vi": "Dưa hấu", "word_bru": "", "word_vi_slug": "dua-hau", "category": "trai-cay" },
  { "word_vi": "Đu đủ", "word_bru": "", "word_vi_slug": "du-du", "category": "trai-cay" },
  { "word_vi": "Mít", "word_bru": "", "word_vi_slug": "mit", "category": "trai-cay" },
  { "word_vi": "Ổi", "word_bru": "", "word_vi_slug": "oi", "category": "trai-cay" },
  { "word_vi": "Chanh", "word_bru": "", "word_vi_slug": "chanh", "category": "trai-cay" },
  { "word_vi": "Me", "word_bru": "", "word_vi_slug": "me", "category": "trai-cay" },
  { "word_vi": "Vải", "word_bru": "", "word_vi_slug": "vai", "category": "trai-cay" },
  { "word_vi": "Nhãn", "word_bru": "", "word_vi_slug": "nhan", "category": "trai-cay" },
  { "word_vi": "Dừa", "word_bru": "", "word_vi_slug": "dua-trai", "category": "trai-cay" },
   // --- PHƯƠNG TIỆN ---
  { "word_vi": "Xe đạp", "word_bru": "", "word_vi_slug": "xe-dap", "category": "phuong-tien" },
  { "word_vi": "Xe máy", "word_bru": "", "word_vi_slug": "xe-may", "category": "phuong-tien" },
  { "word_vi": "Ô tô", "word_bru": "", "word_vi_slug": "o-to", "category": "phuong-tien" },
  { "word_vi": "Xe buýt", "word_bru": "", "word_vi_slug": "xe-buyt", "category": "phuong-tien" },
  { "word_vi": "Xe tải", "word_bru": "", "word_vi_slug": "xe-tai", "category": "phuong-tien" },
  { "word_vi": "Máy kéo", "word_bru": "", "word_vi_slug": "may-keo", "category": "phuong-tien" },
  { "word_vi": "Thuyền", "word_bru": "", "word_vi_slug": "thuyen", "category": "phuong-tien" },
  { "word_vi": "Xuồng", "word_bru": "", "word_vi_slug": "xuong", "category": "phuong-tien" },
  { "word_vi": "Ca nô", "word_bru": "", "word_vi_slug": "ca-no", "category": "phuong-tien" },
  { "word_vi": "Tàu hỏa", "word_bru": "", "word_vi_slug": "tau-hoa", "category": "phuong-tien" },
  { "word_vi": "Máy bay", "word_bru": "", "word_vi_slug": "may-bay", "category": "phuong-tien" },
  { "word_vi": "Xe cứu thương", "word_bru": "", "word_vi_slug": "xe-cuu-thuong", "category": "phuong-tien" },

  // --- ĐỊA ĐIỂM ---
  { "word_vi": "Trường học", "word_bru": "", "word_vi_slug": "truong-hoc", "category": "dia-diem" },
  { "word_vi": "Bệnh viện", "word_bru": "", "word_vi_slug": "benh-vien", "category": "dia-diem" },
  { "word_vi": "Trạm y tế", "word_bru": "", "word_vi_slug": "tram-y-te", "category": "dia-diem" },
  { "word_vi": "Chợ", "word_bru": "", "word_vi_slug": "cho", "category": "dia-diem" },
  { "word_vi": "Cửa hàng", "word_bru": "", "word_vi_slug": "cua-hang", "category": "dia-diem" },
  { "word_vi": "Ủy ban", "word_bru": "", "word_vi_slug": "uy-ban", "category": "dia-diem" },
  { "word_vi": "Nhà văn hóa", "word_bru": "", "word_vi_slug": "nha-van-hoa", "category": "dia-diem" },
  { "word_vi": "Sân bóng", "word_bru": "", "word_vi_slug": "san-bong", "category": "dia-diem" },
  { "word_vi": "Rừng", "word_bru": "", "word_vi_slug": "rung", "category": "dia-diem" },
  { "word_vi": "Đồi", "word_bru": "", "word_vi_slug": "doi", "category": "dia-diem" },
  { "word_vi": "Suối", "word_bru": "", "word_vi_slug": "suoi", "category": "dia-diem" },
  { "word_vi": "Cầu", "word_bru": "", "word_vi_slug": "cau", "category": "dia-diem" },

  // --- THIÊN NHIÊN ---
  { "word_vi": "Mặt trời", "word_bru": "", "word_vi_slug": "mat-troi", "category": "thien-nhien" },
  { "word_vi": "Mặt trăng", "word_bru": "", "word_vi_slug": "mat-trang", "category": "thien-nhien" },
  { "word_vi": "Ngôi sao", "word_bru": "", "word_vi_slug": "ngoi-sao", "category": "thien-nhien" },
  { "word_vi": "Mây", "word_bru": "", "word_vi_slug": "may", "category": "thien-nhien" },
  { "word_vi": "Mưa", "word_bru": "", "word_vi_slug": "mua", "category": "thien-nhien" },
  { "word_vi": "Nắng", "word_bru": "", "word_vi_slug": "nang", "category": "thien-nhien" },
  { "word_vi": "Gió", "word_bru": "", "word_vi_slug": "gio", "category": "thien-nhien" },
  { "word_vi": "Sấm", "word_bru": "", "word_vi_slug": "sam", "category": "thien-nhien" },
  { "word_vi": "Chớp", "word_bru": "", "word_vi_slug": "chop", "category": "thien-nhien" },
  { "word_vi": "Cầu vồng", "word_bru": "", "word_vi_slug": "cau-vong", "category": "thien-nhien" },

  // --- NGHỀ NGHIỆP ---
  { "word_vi": "Nông dân", "word_bru": "", "word_vi_slug": "nong-dan", "category": "nghe-nghiep" },
  { "word_vi": "Giáo viên", "word_bru": "", "word_vi_slug": "giao-vien", "category": "nghe-nghiep" },
  { "word_vi": "Bác sĩ", "word_bru": "", "word_vi_slug": "bac-si", "category": "nghe-nghiep" },
  { "word_vi": "Y tá", "word_bru": "", "word_vi_slug": "y-ta", "category": "nghe-nghiep" },
  { "word_vi": "Công an", "word_bru": "", "word_vi_slug": "cong-an", "category": "nghe-nghiep" },
  { "word_vi": "Bộ đội", "word_bru": "", "word_vi_slug": "bo-doi", "category": "nghe-nghiep" },
  { "word_vi": "Thợ mộc", "word_bru": "", "word_vi_slug": "tho-moc", "category": "nghe-nghiep" },
  { "word_vi": "Thợ xây", "word_bru": "", "word_vi_slug": "tho-xay", "category": "nghe-nghiep" },

  // --- QUẦN ÁO ---
  { "word_vi": "Quần", "word_bru": "", "word_vi_slug": "quan", "category": "quan-ao" },
  { "word_vi": "Áo", "word_bru": "", "word_vi_slug": "ao", "category": "quan-ao" },
  { "word_vi": "Mũ", "word_bru": "", "word_vi_slug": "mu", "category": "quan-ao" },
  { "word_vi": "Khăn quàng", "word_bru": "", "word_vi_slug": "khan-quang", "category": "quan-ao" },
  { "word_vi": "Giày", "word_bru": "", "word_vi_slug": "giay", "category": "quan-ao" },
  { "word_vi": "Dép", "word_bru": "", "word_vi_slug": "dep", "category": "quan-ao" },
  { "word_vi": "Tất", "word_bru": "", "word_vi_slug": "tat", "category": "quan-ao" },
  { "word_vi": "Thắt lưng", "word_bru": "", "word_vi_slug": "that-lung", "category": "quan-ao" },
   { "word_vi": "Xin chào", "word_bru": "", "word_vi_slug": "xin-chao", "category": "giao-tiep" },
  { "word_vi": "Tạm biệt", "word_bru": "", "word_vi_slug": "tam-biet", "category": "giao-tiep" },
  { "word_vi": "Cảm ơn", "word_bru": "", "word_vi_slug": "cam-on", "category": "giao-tiep" },
  { "word_vi": "Xin lỗi", "word_bru": "", "word_vi_slug": "xin-loi", "category": "giao-tiep" },
  { "word_vi": "Vâng", "word_bru": "", "word_vi_slug": "vang", "category": "giao-tiep" },
  { "word_vi": "Không", "word_bru": "Tỡ", "word_vi_slug": "khong", "category": "giao-tiep" },
  { "word_vi": "Đúng", "word_bru": "", "word_vi_slug": "dung", "category": "giao-tiep" },
  { "word_vi": "Sai", "word_bru": "", "word_vi_slug": "sai", "category": "giao-tiep" },
  { "word_vi": "Xin mời", "word_bru": "", "word_vi_slug": "xin-moi", "category": "giao-tiep" },
  { "word_vi": "Hẹn gặp lại", "word_bru": "", "word_vi_slug": "hen-gap-lai", "category": "giao-tiep" },

  // --- CẢM XÚC ---
  { "word_vi": "Vui", "word_bru": "", "word_vi_slug": "vui", "category": "cam-xuc" },
  { "word_vi": "Buồn", "word_bru": "", "word_vi_slug": "buon", "category": "cam-xuc" },
  { "word_vi": "Giận", "word_bru": "", "word_vi_slug": "gian", "category": "cam-xuc" },
  { "word_vi": "Sợ", "word_bru": "", "word_vi_slug": "so", "category": "cam-xuc" },
  { "word_vi": "Lo", "word_bru": "", "word_vi_slug": "lo", "category": "cam-xuc" },
  { "word_vi": "Yêu", "word_bru": "", "word_vi_slug": "yeu", "category": "cam-xuc" },
  { "word_vi": "Ghét", "word_bru": "", "word_vi_slug": "ghet", "category": "cam-xuc" },
  { "word_vi": "Ngạc nhiên", "word_bru": "", "word_vi_slug": "ngac-nhien", "category": "cam-xuc" },

  // --- TÍNH TỪ ---
  { "word_vi": "To", "word_bru": "", "word_vi_slug": "to", "category": "tinh-tu" },
  { "word_vi": "Nhỏ", "word_bru": "", "word_vi_slug": "nho", "category": "tinh-tu" },
  { "word_vi": "Dài", "word_bru": "", "word_vi_slug": "dai", "category": "tinh-tu" },
  { "word_vi": "Ngắn", "word_bru": "", "word_vi_slug": "ngan", "category": "tinh-tu" },
  { "word_vi": "Cao", "word_bru": "", "word_vi_slug": "cao", "category": "tinh-tu" },
  { "word_vi": "Thấp", "word_bru": "", "word_vi_slug": "thap", "category": "tinh-tu" },
  { "word_vi": "Nặng", "word_bru": "", "word_vi_slug": "nang", "category": "tinh-tu" },
  { "word_vi": "Nhẹ", "word_bru": "", "word_vi_slug": "nhe", "category": "tinh-tu" },
  { "word_vi": "Nhanh", "word_bru": "", "word_vi_slug": "nhanh", "category": "tinh-tu" },
  { "word_vi": "Chậm", "word_bru": "", "word_vi_slug": "cham", "category": "tinh-tu" },
  { "word_vi": "Mạnh", "word_bru": "", "word_vi_slug": "manh", "category": "tinh-tu" },
  { "word_vi": "Yếu", "word_bru": "", "word_vi_slug": "yeu", "category": "tinh-tu" },

  // --- ĐỘNG TỪ ---
  { "word_vi": "Đi", "word_bru": "", "word_vi_slug": "di", "category": "dong-tu" },
  { "word_vi": "Đứng", "word_bru": "", "word_vi_slug": "dung", "category": "dong-tu" },
  { "word_vi": "Ngồi", "word_bru": "", "word_vi_slug": "ngoi", "category": "dong-tu" },
  { "word_vi": "Chạy", "word_bru": "", "word_vi_slug": "chay", "category": "dong-tu" },
  { "word_vi": "Nhảy", "word_bru": "", "word_vi_slug": "nhay", "category": "dong-tu" },
  { "word_vi": "Ăn", "word_bru": "", "word_vi_slug": "an", "category": "dong-tu" },
  { "word_vi": "Uống", "word_bru": "", "word_vi_slug": "uong", "category": "dong-tu" },
  { "word_vi": "Ngủ", "word_bru": "", "word_vi_slug": "ngu", "category": "dong-tu" },
  { "word_vi": "Thức", "word_bru": "", "word_vi_slug": "thuc", "category": "dong-tu" },
  { "word_vi": "Làm", "word_bru": "", "word_vi_slug": "lam", "category": "dong-tu" },
  { "word_vi": "Học", "word_bru": "", "word_vi_slug": "hoc", "category": "dong-tu" },
  { "word_vi": "Đọc", "word_bru": "", "word_vi_slug": "doc", "category": "dong-tu" },
  { "word_vi": "Viết", "word_bru": "", "word_vi_slug": "viet", "category": "dong-tu" },
  { "word_vi": "Nghe", "word_bru": "", "word_vi_slug": "nghe", "category": "dong-tu" },
  { "word_vi": "Nói", "word_bru": "", "word_vi_slug": "noi", "category": "dong-tu" },

  // --- PHƯƠNG HƯỚNG ---
  { "word_vi": "Trái", "word_bru": "", "word_vi_slug": "trai", "category": "phuong-huong" },
  { "word_vi": "Phải", "word_bru": "", "word_vi_slug": "phai", "category": "phuong-huong" },
  { "word_vi": "Trên", "word_bru": "", "word_vi_slug": "tren", "category": "phuong-huong" },
  { "word_vi": "Dưới", "word_bru": "", "word_vi_slug": "duoi", "category": "phuong-huong" },
  { "word_vi": "Trong", "word_bru": "", "word_vi_slug": "trong", "category": "phuong-huong" },
  { "word_vi": "Ngoài", "word_bru": "", "word_vi_slug": "ngoai", "category": "phuong-huong" },

  // --- THỜI GIAN ---
  { "word_vi": "Hôm nay", "word_bru": "", "word_vi_slug": "hom-nay", "category": "thoi-gian" },
  { "word_vi": "Hôm qua", "word_bru": "", "word_vi_slug": "hom-qua", "category": "thoi-gian" },
  { "word_vi": "Ngày mai", "word_bru": "", "word_vi_slug": "ngay-mai", "category": "thoi-gian" },
  { "word_vi": "Buổi sáng", "word_bru": "", "word_vi_slug": "buoi-sang", "category": "thoi-gian" },
  { "word_vi": "Buổi trưa", "word_bru": "", "word_vi_slug": "buoi-trua", "category": "thoi-gian" },
  { "word_vi": "Buổi chiều", "word_bru": "", "word_vi_slug": "buoi-chieu", "category": "thoi-gian" },
  { "word_vi": "Buổi tối", "word_bru": "", "word_vi_slug": "buoi-toi", "category": "thoi-gian" },
   // --- HOẠT ĐỘNG ĐỜI SỐNG ---
  { "word_vi": "Thức dậy", "word_bru": "", "word_vi_slug": "thuc-day", "category": "hoat-dong" },
  { "word_vi": "Đánh răng", "word_bru": "", "word_vi_slug": "danh-rang", "category": "hoat-dong" },
  { "word_vi": "Rửa mặt", "word_bru": "", "word_vi_slug": "rua-mat", "category": "hoat-dong" },
  { "word_vi": "Tắm", "word_bru": "", "word_vi_slug": "tam", "category": "hoat-dong" },
  { "word_vi": "Gội đầu", "word_bru": "", "word_vi_slug": "goi-dau", "category": "hoat-dong" },
  { "word_vi": "Mặc quần áo", "word_bru": "", "word_vi_slug": "mac-quan-ao", "category": "hoat-dong" },
  { "word_vi": "Cởi quần áo", "word_bru": "", "word_vi_slug": "coi-quan-ao", "category": "hoat-dong" },
  { "word_vi": "Nấu ăn", "word_bru": "", "word_vi_slug": "nau-an", "category": "hoat-dong" },
  { "word_vi": "Rửa bát", "word_bru": "", "word_vi_slug": "rua-bat", "category": "hoat-dong" },
  { "word_vi": "Giặt quần áo", "word_bru": "", "word_vi_slug": "giat-quan-ao", "category": "hoat-dong" },
  { "word_vi": "Phơi quần áo", "word_bru": "", "word_vi_slug": "phoi-quan-ao", "category": "hoat-dong" },
  { "word_vi": "Quét nhà", "word_bru": "", "word_vi_slug": "quet-nha", "category": "hoat-dong" },
  { "word_vi": "Lau nhà", "word_bru": "", "word_vi_slug": "lau-nha", "category": "hoat-dong" },
  { "word_vi": "Dọn dẹp", "word_bru": "", "word_vi_slug": "don-dep", "category": "hoat-dong" },
  { "word_vi": "Đi chợ", "word_bru": "", "word_vi_slug": "di-cho", "category": "hoat-dong" },
  { "word_vi": "Mua hàng", "word_bru": "", "word_vi_slug": "mua-hang", "category": "hoat-dong" },
  { "word_vi": "Bán hàng", "word_bru": "", "word_vi_slug": "ban-hang", "category": "hoat-dong" },
  { "word_vi": "Trồng cây", "word_bru": "", "word_vi_slug": "trong-cay", "category": "hoat-dong" },
  { "word_vi": "Tưới cây", "word_bru": "", "word_vi_slug": "tuoi-cay", "category": "hoat-dong" },
  { "word_vi": "Thu hoạch", "word_bru": "", "word_vi_slug": "thu-hoach", "category": "hoat-dong" },

  // --- GIAO TIẾP HẰNG NGÀY ---
  { "word_vi": "Bạn khỏe không?", "word_bru": "", "word_vi_slug": "ban-khoe-khong", "category": "giao-tiep" },
  { "word_vi": "Tôi khỏe", "word_bru": "", "word_vi_slug": "toi-khoe", "category": "giao-tiep" },
  { "word_vi": "Cảm ơn nhiều", "word_bru": "", "word_vi_slug": "cam-on-nhieu", "category": "giao-tiep" },
  { "word_vi": "Không có gì", "word_bru": "", "word_vi_slug": "khong-co-gi", "category": "giao-tiep" },
  { "word_vi": "Xin mời vào", "word_bru": "", "word_vi_slug": "xin-moi-vao", "category": "giao-tiep" },
  { "word_vi": "Mời ngồi", "word_bru": "", "word_vi_slug": "moi-ngoi", "category": "giao-tiep" },
  { "word_vi": "Đi cẩn thận", "word_bru": "", "word_vi_slug": "di-can-than", "category": "giao-tiep" },
  { "word_vi": "Chúc may mắn", "word_bru": "", "word_vi_slug": "chuc-may-man", "category": "giao-tiep" },
  { "word_vi": "Chúc ngủ ngon", "word_bru": "", "word_vi_slug": "chuc-ngu-ngon", "category": "giao-tiep" },
  { "word_vi": "Hẹn gặp lại", "word_bru": "", "word_vi_slug": "hen-gap-lai", "category": "giao-tiep" },
  { "word_vi": "Bạn tên gì?", "word_bru": "", "word_vi_slug": "ban-ten-gi", "category": "giao-tiep" },
  { "word_vi": "Tôi tên là", "word_bru": "", "word_vi_slug": "toi-ten-la", "category": "giao-tiep" },
  { "word_vi": "Bạn bao nhiêu tuổi?", "word_bru": "", "word_vi_slug": "ban-bao-nhieu-tuoi", "category": "giao-tiep" },
  { "word_vi": "Tôi hiểu", "word_bru": "", "word_vi_slug": "toi-hieu", "category": "giao-tiep" },
  { "word_vi": "Tôi không hiểu", "word_bru": "", "word_vi_slug": "toi-khong-hieu", "category": "giao-tiep" },

  // --- DỤNG CỤ HỌC TẬP ---
  { "word_vi": "Bảng đen", "word_bru": "", "word_vi_slug": "bang-den", "category": "hoc-tap" },
  { "word_vi": "Bảng trắng", "word_bru": "", "word_vi_slug": "bang-trang", "category": "hoc-tap" },
  { "word_vi": "Bút màu", "word_bru": "", "word_vi_slug": "but-mau", "category": "hoc-tap" },
  { "word_vi": "Bút dạ", "word_bru": "", "word_vi_slug": "but-da", "category": "hoc-tap" },
  { "word_vi": "Giấy màu", "word_bru": "", "word_vi_slug": "giay-mau", "category": "hoc-tap" },
  { "word_vi": "Kéo cắt giấy", "word_bru": "", "word_vi_slug": "keo-cat-giay", "category": "hoc-tap" },
  { "word_vi": "Hồ dán", "word_bru": "", "word_vi_slug": "ho-dan", "category": "hoc-tap" },
  { "word_vi": "Băng keo", "word_bru": "", "word_vi_slug": "bang-keo", "category": "hoc-tap" },
  { "word_vi": "Máy in", "word_bru": "", "word_vi_slug": "may-in", "category": "hoc-tap" },
  { "word_vi": "Máy photocopy", "word_bru": "", "word_vi_slug": "may-photocopy", "category": "hoc-tap" },

  // --- DỤNG CỤ LÀM VIỆC ---
  { "word_vi": "Máy tính xách tay", "word_bru": "", "word_vi_slug": "may-tinh-xach-tay", "category": "lam-viec" },
  { "word_vi": "Máy tính để bàn", "word_bru": "", "word_vi_slug": "may-tinh-de-ban", "category": "lam-viec" },
  { "word_vi": "Chuột máy tính", "word_bru": "", "word_vi_slug": "chuot-may-tinh", "category": "lam-viec" },
  { "word_vi": "Bàn phím", "word_bru": "", "word_vi_slug": "ban-phim", "category": "lam-viec" },
  { "word_vi": "Màn hình", "word_bru": "", "word_vi_slug": "man-hinh", "category": "lam-viec" },
  { "word_vi": "Điện thoại", "word_bru": "", "word_vi_slug": "dien-thoai", "category": "lam-viec" },
  { "word_vi": "Máy ảnh", "word_bru": "", "word_vi_slug": "may-anh", "category": "lam-viec" },
  { "word_vi": "Máy chiếu", "word_bru": "", "word_vi_slug": "may-chieu", "category": "lam-viec" },
  { "word_vi": "Ổ cắm điện", "word_bru": "", "word_vi_slug": "o-cam-dien", "category": "lam-viec" },
  { "word_vi": "Dây sạc", "word_bru": "", "word_vi_slug": "day-sac", "category": "lam-viec" }

];
const coversation = [
   {
    category: "chao-hoi",
    messages: [
      { role: "user", vi: "Xin chào!" },
      { role: "assistant", vi: "Xin chào! Rất vui được gặp bạn." }
    ]
  },

  {
    category: "gioi-thieu",
    messages: [
      { role: "user", vi: "Bạn tên là gì?" },
      { role: "assistant", vi: "Tôi là trợ lý tiếng Bru." },
      { role: "user", vi: "Tôi tên là Nam." },
      { role: "assistant", vi: "Rất vui được làm quen với bạn." }
    ]
  },

  {
    category: "suc-khoe",
    messages: [
      { role: "user", vi: "Bạn khỏe không?" },
      { role: "assistant", vi: "Tôi khỏe, cảm ơn bạn." },
      { role: "user", vi: "Tôi hơi mệt." },
      { role: "assistant", vi: "Bạn nên nghỉ ngơi và uống nhiều nước." }
    ]
  },

  {
    category: "mua-ban",
    messages: [
      { role: "user", vi: "Cái này bao nhiêu tiền?" },
      { role: "assistant", vi: "50 nghìn đồng." },
      { role: "user", vi: "Đắt quá." },
      { role: "assistant", vi: "Tôi có thể giảm giá cho bạn." }
    ]
  },

  {
    category: "di-cho",
    messages: [
      { role: "user", vi: "Tôi muốn mua chuối." },
      { role: "assistant", vi: "Bạn muốn mua bao nhiêu?" },
      { role: "user", vi: "Cho tôi 2 kg." },
      { role: "assistant", vi: "Được, xin chờ một chút." }
    ]
  },

  {
    category: "an-uong",
    messages: [
      { role: "user", vi: "Tôi đói." },
      { role: "assistant", vi: "Bạn muốn ăn gì?" },
      { role: "user", vi: "Tôi muốn ăn cơm." },
      { role: "assistant", vi: "Được, tôi sẽ chuẩn bị." }
    ]
  },

  {
    category: "uong-nuoc",
    messages: [
      { role: "user", vi: "Cho tôi xin nước." },
      { role: "assistant", vi: "Đây là nước của bạn." },
      { role: "user", vi: "Cảm ơn." },
      { role: "assistant", vi: "Không có gì." }
    ]
  },

  {
    category: "duong-di",
    messages: [
      { role: "user", vi: "Trường học ở đâu?" },
      { role: "assistant", vi: "Đi thẳng khoảng 200 mét." },
      { role: "user", vi: "Sau đó thì sao?" },
      { role: "assistant", vi: "Rẽ trái, bạn sẽ thấy trường." }
    ]
  },

  {
    category: "benh-vien",
    messages: [
      { role: "user", vi: "Tôi bị đau bụng." },
      { role: "assistant", vi: "Bạn nên đến bệnh viện." },
      { role: "user", vi: "Bệnh viện ở đâu?" },
      { role: "assistant", vi: "Ở gần chợ." }
    ]
  },

  {
    category: "gia-dinh",
    messages: [
      { role: "user", vi: "Nhà bạn có mấy người?" },
      { role: "assistant", vi: "Nhà tôi có 5 người." },
      { role: "user", vi: "Có những ai?" },
      { role: "assistant", vi: "Bố, mẹ, anh trai, em gái và tôi." }
    ]
  }
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