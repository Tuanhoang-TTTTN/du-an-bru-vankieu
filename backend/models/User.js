// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },         // Điểm kinh nghiệm
  streak: { type: Number, default: 0 },     // Số ngày học liên tiếp
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }] // Các bài đã hoàn thành
});

module.exports = mongoose.model('User', userSchema);