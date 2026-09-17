const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, sparse: true, unique: true },
  email: { type: String, sparse: true, unique: true },
  fullName: { type: String, required: true },
  birthYear: { type: Number },
  role: { 
    type: String, 
    enum: ['student', 'instructor', 'admin', 'giang-vien'], 
    required: true 
  },
  // Thêm trường status để chờ Admin phê duyệt
  status: { 
    type: String, 
    enum: ['pending', 'active', 'locked'], 
    default: 'pending' // Mặc định tạo ra sẽ là pending (chờ duyệt)
  },
  otpCode: { type: String },
  otpExpires: { type: Date }
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);