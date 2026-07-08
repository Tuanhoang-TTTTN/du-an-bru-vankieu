require('dotenv').config();
const mongoose = require('mongoose');
const Dictionary = require('./models/Dictionary');
const fs = require('fs');

const seedData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

async function runSeed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🟢 Đang xóa dữ liệu cũ...");
    await Dictionary.deleteMany({});
    
    console.log("🟢 Đang thêm dữ liệu mới...");
    await Dictionary.insertMany(seedData);
    
    console.log("✅ Đã hoàn tất thêm câu hỏi!");
    process.exit();
  } catch (err) {
    console.error("🔴 Lỗi:", err);
    process.exit(1);
  }
}

runSeed();