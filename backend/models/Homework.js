// models/Homework.js
const mongoose = require('mongoose');

const HomeworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    deadline: { type: String, default: 'Không giới hạn' },
    instructor: { type: String, default: 'Giảng viên' },
    description: { type: String },
    
    // Trạng thái bài làm
    status: {
      type: String,
      enum: ['CHUA_NOP', 'CHO_DUYET', 'DA_DUYET', 'CAN_SUA'],
      default: 'CHUA_NOP',
    },
    
    // Thông tin file học viên gửi
    submittedFile: { type: String },            // Tên file lưu trên server
    submittedFileOriginalName: { type: String },// Tên file gốc ban đầu
    submittedFilePath: { type: String },        // Đường dẫn tải file
    submittedAt: { type: Date },                // Thời gian nộp
    studentNote: { type: String },              // Lời nhắn của học viên
    
    // Nhận xét & Điểm số từ Giảng viên
    teacherFeedback: { type: String },
    grade: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Homework', HomeworkSchema);