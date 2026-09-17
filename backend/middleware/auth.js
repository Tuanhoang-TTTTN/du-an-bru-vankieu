const jwt = require('jsonwebtoken');

// 1. Middleware Xác thực Token (Kiểm tra xem đã đăng nhập chưa)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Dạng "Bearer <TOKEN>"

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: "Bạn chưa đăng nhập hoặc thiếu Token xác thực!" 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key_tam_thoi_123');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ 
      success: false, 
      message: "Token không hợp lệ hoặc đã hết hạn!" 
    });
  }
};

// 2. Middleware Kiểm tra vai trò Admin (Chạy sau verifyToken)
const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ 
      success: false, 
      message: "Bạn không có quyền Admin để thực hiện thao tác này!" 
    });
  }
};

// 3. Middleware Kiểm tra vai trò Giảng viên (Chấp nhận cả Instructor & Admin)
const requireInstructor = (req, res, next) => {
  if (req.user && (req.user.role === 'instructor' || req.user.role === 'admin')) {
    next();
  } else {
    return res.status(403).json({ 
      success: false, 
      message: "Bạn không có quyền Giảng viên để thực hiện thao tác này!" 
    });
  }
};

// 4. Middleware Gộp (Xác thực Token + Kiểm tra Admin)
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    requireAdmin(req, res, next);
  });
};

// 5. Middleware Gộp (Xác thực Token + Kiểm tra Giảng viên)
const verifyInstructor = (req, res, next) => {
  verifyToken(req, res, () => {
    requireInstructor(req, res, next);
  });
};

// Export đầy đủ các hàm dưới dạng Object
module.exports = {
  verifyToken,
  requireAdmin,
  requireInstructor,
  verifyAdmin,
  verifyInstructor
};