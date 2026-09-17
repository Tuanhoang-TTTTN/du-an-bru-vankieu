// middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Tự động tạo thư mục uploads nếu chưa tồn tại
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Đặt tên file duy nhất tránh trùng lặp: timestamp-filename
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 }, // Giới hạn tối đa 25MB
});

module.exports = upload;