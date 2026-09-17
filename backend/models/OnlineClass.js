const mongoose = require('mongoose');

const onlineClassSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
  link: { type: String, required: true },
  instructor: { type: String, default: 'Giảng viên chuyên môn' },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.models.OnlineClass || mongoose.model('OnlineClass', onlineClassSchema);