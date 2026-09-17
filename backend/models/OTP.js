const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phone: { 
        type: String, 
        required: true 
    },
    otp: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 180 // TÍNH NĂNG ĐỈNH CỦA MONGO: Dòng này sẽ TỰ ĐỘNG BỊ XÓA sau 180 giây (3 phút)
    }
});

module.exports = mongoose.model('OTP', otpSchema);