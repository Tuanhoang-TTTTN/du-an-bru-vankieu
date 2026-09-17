const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const twilio = require('twilio');
const db = require('../models');
const OTP = require('../models/OTP');

// API GỬI MÃ OTP QUA SMS THỰC TẾ
router.post('/send-otp', async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ success: false, message: "Thiếu số điện thoại!" });

        // 1. Tạo mã OTP ngẫu nhiên 6 chữ số
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        // 2. Khởi tạo client Twilio bằng biến môi trường
        const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        // 3. Chuẩn hóa số điện thoại sang định dạng quốc tế (E.164)
        // Ví dụ: chuyển từ 0989143074 thành +84989143074
        let formattedPhone = phone.replace(/^0/, '+84');

        // 4. Gửi tin nhắn SMS thực tế
        await client.messages.create({
            body: `Ma xac thuc OTP cua ban la: ${otpCode}. Ma nay co hieu luc trong thoi gian ngan.`,
            to: formattedPhone,
            from: process.env.TWILIO_PHONE_NUMBER
        });

        // 5. Xóa OTP cũ (nếu có) và lưu OTP mới vào MongoDB
        await OTP.deleteMany({ phone: phone });
        const newOTP = new OTP({ phone, otp: otpCode });
        await newOTP.save();

        return res.json({ success: true, message: "Mã OTP đã được gửi thành công về điện thoại!" });
    } catch (error) {
        console.error("Lỗi gửi SMS:", error);
        return res.status(500).json({ success: false, message: "Không thể gửi SMS, vui lòng kiểm tra lại cấu hình hệ thống!" });
    }
});
// ==========================================
// 1. CẤU HÌNH PASSPORT GOOGLE
// ==========================================
passport.use(new GoogleStrategy({
   const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        if (!email) return done(new Error("Không thể lấy email từ Google!"), null);

        let user = await db.User.findOne({ email: email });
        if (!user) {
            user = new db.User({
                fullName: profile.displayName,
                email: email,
                provider: 'google',
                createdAt: new Date()
            });
            await user.save();
        }
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
  }
));

// ==========================================
// 2. CÁC API AUTH
// ==========================================

// A. Gửi mã OTP
router.post('/send-otp', async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ success: false, message: "Thiếu số điện thoại!" });

        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        await OTP.deleteMany({ phone: phone }); // Xóa OTP cũ nếu có
        
        const newOTP = new OTP({ phone, otp: otpCode });
        await newOTP.save();

        console.log(`[OTP] Mã gửi tới ${phone}: ${otpCode}`);
        return res.json({ success: true, message: "Mã OTP đã được gửi." });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Lỗi hệ thống!" });
    }
});

// B. Xác thực OTP và Đăng ký tài khoản (Luồng chuẩn)
router.post('/verify-and-register', async (req, res) => {
    try {
        const { name, dob, email, phone, password, otp } = req.body;

        // 1. Kiểm tra OTP
        const record = await OTP.findOne({ phone: phone });
        if (!record || record.otp !== otp) {
            return res.status(400).json({ success: false, message: "Mã OTP không đúng hoặc hết hạn!" });
        }

        // 2. Kiểm tra User trùng
        const userExists = await db.User.findOne({ $or: [{ phone: phone }, { email: email }] });
        if (userExists) {
            return res.status(400).json({ success: false, message: "Số điện thoại hoặc Email đã tồn tại!" });
        }

        // 3. Đăng ký
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new db.User({
            fullName: name,
            dateOfBirth: dob,
            email: email,
            phone: phone,
            password: hashedPassword,
            provider: 'local',
            createdAt: new Date()
        });
        await newUser.save();

        // 4. Dọn dẹp OTP
        await OTP.deleteOne({ _id: record._id });

        return res.status(201).json({ success: true, message: "Đăng ký thành công!" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Lỗi hệ thống!" });
    }
});

// C. Đăng nhập
router.post('/login', async (req, res) => {
    try {
        const { identifier, password } = req.body; // identifier là email hoặc phone
        const user = await db.User.findOne({ $or: [{ phone: identifier }, { email: identifier }] });
        
        if (!user) return res.status(401).json({ success: false, message: "Thông tin không đúng!" });
        if (user.provider === 'google' && !user.password) return res.status(400).json({ success: false, message: "Hãy đăng nhập bằng Google!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ success: false, message: "Mật khẩu không đúng!" });

        return res.status(200).json({ success: true, user: { id: user._id, name: user.fullName } });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Lỗi hệ thống!" });
    }
});

// D. Google Auth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: 'http://127.0.0.1:3000/login?error=failed' }),
  (req, res) => {
    res.redirect(`http://127.0.0.1:3000?loginSuccess=true&userId=${req.user._id}`);
  }
);

module.exports = router;