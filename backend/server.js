require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const axios = require('axios');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

// Route bên ngoài
const homeworkRoutes = require('./routes/homeworkRoutes');

// Middleware phân quyền
const { verifyToken, requireAdmin, requireInstructor } = require('./middleware/auth');

// Import Models
const User = require('./models/User');
const Dictionary = require('./models/Dictionary');
const OnlineClass = require('./models/OnlineClass');
const Homework = require('./models/Homework');

const app = express();

// ==========================================
// 1. CẤU HÌNH MIDDLEWARE (ĐẶT Ở ĐẦU TRƯỚC CÁC API)
// ==========================================

// 🟢 Cấu hình CORS cho phép Frontend kết nối
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// 🟢 Đọc dữ liệu JSON & Form Data từ Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static Files & Passport
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(passport.initialize());

// 🟢 Giới hạn số lượng request API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 200,
  message: { success: false, message: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 15 phút!" }
});
app.use('/api/', apiLimiter);

// Giới hạn riêng cho API gửi OTP
const otpLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 phút
  max: 100,
  message: { success: false, message: "Vui lòng đợi 1 phút trước khi yêu cầu mã OTP mới!" }
});
app.use('/api/auth/send-otp', otpLimiter);

// ==========================================
// 2. KẾT NỐI MONGODB
// ==========================================
const uri = process.env.MONGODB_URI || "mongodb+srv://Bru-van-kieu:CUgxXyWNb4CVG9Xr@cluster0.dypbiba.mongodb.net/?appName=Cluster0";

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log("🟢 Kết nối MongoDB thành công!"))
  .catch((err) => {
    console.error("🔴 Lỗi kết nối MongoDB:", err);
    process.exit(1);
  });

// ==========================================
// 3. SCHEMA & MODEL BÌNH LUẬN
// ==========================================
const CommentSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userAvatar: { type: String, default: '' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true },
    status: { type: String, enum: ['APPROVED', 'PENDING'], default: 'APPROVED' },
  },
  { timestamps: true }
);

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);

// ==========================================
// 4. CẤU HÌNH NODEMAILER
// ==========================================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ==========================================
// 5. CÁC ROUTE API HỆ THỐNG
// ==========================================

app.get('/', (req, res) => {
  res.send('🚀 Hệ thống API Tiếng Bru - Vân Kiều đang hoạt động!');
});

// ------------------------------------------
// 5.1. API ĐÁNH GIÁ & BÌNH LUẬN (REVIEWS)
// ------------------------------------------

// Lấy danh sách bình luận đã duyệt
app.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ status: 'APPROVED' }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: comments });
  } catch (error) {
    console.error('Lỗi tải bình luận từ MongoDB:', error);
    return res.status(500).json({ success: false, message: 'Không thể lấy dữ liệu.' });
  }
});

// Lưu nhận xét mới vào MongoDB
app.post('/api/comments', async (req, res) => {
  try {
    const { userName, userAvatar, rating, content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập nội dung!' });
    }

    const newComment = new Comment({
      userName: userName || 'Học viên ẩn danh',
      userAvatar: userAvatar || '',
      rating: Number(rating) || 5,
      content: content.trim(),
      status: 'APPROVED',
    });

    await newComment.save();

    return res.status(201).json({
      success: true,
      message: 'Đã lưu nhận xét vào MongoDB thành công!',
      data: newComment,
    });
  } catch (error) {
    console.error('Lỗi lưu bình luận:', error);
    return res.status(500).json({ success: false, message: 'Lỗi server khi lưu nhận xét.' });
  }
});

// Admin lấy tất cả bình luận
app.get('/api/admin/comments', async (req, res) => {
  try {
    const allComments = await Comment.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: allComments });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi Admin.' });
  }
});

// Admin xóa bình luận
app.delete('/api/admin/comments/:id', async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, message: 'Đã xóa bình luận!' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Lỗi khi xóa.' });
  }
});

// ------------------------------------------
// 5.2. AUTHENTICATION & TÀI KHOẢN
// ------------------------------------------

// Đăng ký
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, birthYear, role, email, phone } = req.body;

    if (!fullName || !birthYear || !role || (!email && !phone)) {
      return res.status(400).json({ success: false, message: "Vui lòng điền đầy đủ thông tin bắt buộc!" });
    }

    const query = email ? { email } : { phone };
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email hoặc Số điện thoại này đã được đăng ký!" });
    }

    const isStudent = role === 'student';
    const initialStatus = isStudent ? 'active' : 'pending';

    const newUser = new User({ 
      fullName, 
      birthYear: parseInt(birthYear), 
      role, 
      email,
      phone,
      status: initialStatus
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: isStudent 
        ? "Đăng ký tài khoản Học viên thành công!" 
        : "Đăng ký thành công! Tài khoản Giảng viên của bạn đang chờ Admin phê duyệt.",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        status: newUser.status
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Lỗi Server: " + error.message });
  }
});

// Gửi OTP
app.post('/api/auth/send-otp', async (req, res) => {
  try {
    const { phone, email } = req.body;
    const query = phone ? { phone } : { email };

    if (!phone && !email) {
      return res.status(400).json({ success: false, message: "Vui lòng cung cấp số điện thoại hoặc email!" });
    }

    let user = await User.findOne(query);
    if (!user) {
      return res.status(404).json({ success: false, message: "Tài khoản không tồn tại trên hệ thống!" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otpCode = otp;
    user.otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 phút
    await user.save();

    if (email) {
      try {
        await transporter.sendMail({
          from: `"Học Tiếng Bru-Vân Kiều" <${process.env.EMAIL_USER}>`,
          to: email, 
          subject: 'Mã OTP Đăng nhập',
          text: `Mã OTP của bạn là: ${otp}. Mã có hiệu lực trong 5 phút.`
        });
      } catch (err) {
        console.log(`🔑 [MÃ OTP DỰ PHÒNG - EMAIL ${email}]: ${otp}`);
      }
    } else if (phone) {
      try {
        await axios.get('http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get', {
          params: { 
            Phone: phone, 
            Content: `Ma OTP cua ban la: ${otp}`, 
            ApiKey: process.env.ESMS_API_KEY, 
            SecretKey: process.env.ESMS_SECRET_KEY, 
            SmsType: 2, 
            Brandname: process.env.ESMS_BRANDNAME || "Baotrixemay" 
          }
        });
      } catch (err) {
        console.log(`🔑 [MÃ OTP DỰ PHÒNG - PHONE ${phone}]: ${otp}`);
      }
    }

    return res.status(200).json({ success: true, message: "Đã gửi mã OTP thành công!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Lỗi gửi OTP: " + error.message });
  }
});

// Xác thực OTP
app.post('/api/auth/verify-otp', async (req, res) => {
  try {
    const { phone, email, otp } = req.body;
    const query = phone ? { phone } : { email };

    const user = await User.findOne(query);
    if (!user) return res.status(404).json({ success: false, message: "Không tìm thấy tài khoản!" });
    if (user.otpCode !== otp) return res.status(400).json({ success: false, message: "Mã OTP không chính xác!" });
    if (user.otpExpires && new Date() > user.otpExpires) return res.status(400).json({ success: false, message: "Mã OTP đã hết hạn!" });

    if (user.status === 'pending') {
      return res.status(403).json({ success: false, message: "Tài khoản Giảng viên đang chờ Admin duyệt." });
    }
    if (user.status === 'locked') {
      return res.status(403).json({ success: false, message: "Tài khoản đã bị khóa!" });
    }

    user.otpCode = undefined;
    user.otpExpires = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công!",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status
      },
      token: "mock-jwt-token-" + Math.random().toString(36).substring(7)
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Lỗi đăng nhập: " + error.message });
  }
});

// ------------------------------------------
// 5.3. QUẢN LÝ TÀI KHOẢN (ADMIN)
// ------------------------------------------
app.get('/api/admin/pending-users', verifyToken, requireAdmin, async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json({ success: true, data: pendingUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.put('/api/admin/update-status/:userId', verifyToken, requireAdmin, async (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.body;

    if (!['active', 'locked', 'pending'].includes(status)) {
      return res.status(400).json({ success: false, message: "Trạng thái không hợp lệ!" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, { status }, { new: true });
    res.json({ success: true, message: `Đã đổi trạng thái thành ${status}`, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ------------------------------------------
// 5.4. QUẢN LÝ TỪ ĐIỂN
// ------------------------------------------
const getWordsHandler = async (req, res) => {
  try {
    const words = await Dictionary.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: words });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createWordHandler = async (req, res) => {
  try {
    const newWord = new Dictionary(req.body);
    await newWord.save();
    res.status(201).json({ success: true, message: "Thêm từ vựng thành công!", data: newWord });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

app.get(['/api/words', '/api/word'], getWordsHandler);
app.post(['/api/words', '/api/word'], verifyToken, requireInstructor, createWordHandler);

app.put(['/api/words/:id', '/api/word/:id'], verifyToken, requireInstructor, async (req, res) => {
  try {
    const updatedWord = await Dictionary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: "Cập nhật từ vựng thành công!", data: updatedWord });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete(['/api/words/:id', '/api/word/:id'], verifyToken, requireInstructor, async (req, res) => {
  try {
    await Dictionary.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Xóa từ vựng thành công!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ------------------------------------------
// 5.5. QUẢN LÝ LỚP HỌC ONLINE
// ------------------------------------------
app.get('/api/online-classes', async (req, res) => {
  try {
    const classes = await OnlineClass.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: classes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/online-classes', verifyToken, requireInstructor, async (req, res) => {
  try {
    const newClass = new OnlineClass(req.body);
    await newClass.save();
    res.json({ success: true, message: "Tạo lớp học mới thành công!", data: newClass });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.put('/api/online-classes/:id', verifyToken, requireInstructor, async (req, res) => {
  try {
    const updatedClass = await OnlineClass.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: "Cập nhật thông tin lớp học thành công!", data: updatedClass });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete('/api/online-classes/:id', verifyToken, requireInstructor, async (req, res) => {
  try {
    await OnlineClass.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Xóa lớp học thành công!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ------------------------------------------
// 5.6. QUẢN LÝ BÀI TẬP VỀ NHÀ & ROUTES PHỤ
// ------------------------------------------
app.use(homeworkRoutes);

app.get('/api/homework', async (req, res) => {
  try {
    const homeworks = await Homework.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: homeworks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/homework', verifyToken, requireInstructor, async (req, res) => {
  try {
    const newHomework = new Homework(req.body);
    await newHomework.save();
    res.json({ success: true, message: "Giao bài tập mới thành công!", data: newHomework });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.put('/api/homework/:id', verifyToken, requireInstructor, async (req, res) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, message: "Cập nhật bài tập thành công!", data: updatedHomework });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete('/api/homework/:id', verifyToken, requireInstructor, async (req, res) => {
  try {
    await Homework.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Xóa bài tập thành công!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Các Route Chat & Admin Phụ
try {
  app.use('/api/chat', require('./routes/chat'));
  app.use('/api/admin', require('./routes/admin'));
  app.use('/', require('./routes/Contact'));
} catch (e) {
  console.log("ℹ️ Đang tải các module route phụ...");
}

// ==========================================
// 6. KHỞI CHẠY SERVER
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server Backend chạy chính thức tại: http://localhost:${PORT}`);
});