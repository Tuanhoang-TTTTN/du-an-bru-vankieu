// backend/models/Lesson.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Vd: Bài 1: Chào hỏi cơ bản
  description: String,
  level: { type: Number, default: 1 },     // Cấp độ 1, 2, 3...
  order: Number,                           // Thứ tự bài học
  
  // Danh sách từ vựng trong bài
  vocabulary: [{
    word_vi: String,
    word_bru: String,
    audio_url: String
  }],

  // Bài tập trắc nghiệm
  quizzes: [{
    type: { type: String, enum: ['multiple_choice', 'translation', 'listening'] },
    question: String,       // Vd: "Xin chào" trong tiếng Bru là gì?
    options: [String],      // Vd: ["Ngai chào", "Chơn ơn", "Xa adai"]
    correctAnswer: String   // Vd: "Ngai chào"
  }]
});

module.exports = mongoose.model('Lesson', lessonSchema);