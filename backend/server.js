require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Sử dụng biến môi trường hoặc chuỗi uri đã sửa ở trên
const uri = process.env.MONGODB_URI || "mongodb+srv://Bru-van-kieu:CUgxXyWNb4CVG9Xr@cluster0.dypbiba.mongodb.net/?appName=Cluster0";
// 1. Cấu hình đường dẫn model
const modelPath = path.join(__dirname, 'models', 'Dictionary.js');

// Kiểm tra file tồn tại trước khi load
if (!fs.existsSync(modelPath)) {
    console.error("❌ LỖI: Không tìm thấy file model tại:", modelPath);
    process.exit(1);
}

// 2. Load model (CHỈ KHAI BÁO 1 LẦN DUY NHẤT Ở ĐÂY)
const Dictionary = require(modelPath);
console.log("✅ Load Dictionary model thành công!");

// 3. Kết nối MongoDB
mongoose.connect(uri)
  .then(() => console.log("🟢 Kết nối MongoDB thành công tới database: bru_vankieu"))
  .catch((err) => console.error("🔴 Lỗi kết nối MongoDB:", err));

// 4. API Routes
app.get('/', (req, res) => {
    res.send('API Bru-Vankieu is running!');
});

app.get('/api/words', async (req, res) => {
  try {
    const words = await Dictionary.find({});
    res.json({ success: true, data: words });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/words', async (req, res) => {
  try {
    const newWord = new Dictionary(req.body);
    await newWord.save();
    res.json({ success: true, data: newWord });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server Backend chạy tại: http://localhost:${PORT}`);
});