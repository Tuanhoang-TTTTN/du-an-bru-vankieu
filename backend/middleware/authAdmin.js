// middleware/checkAdmin.js
const checkAdmin = (req, res, next) => {
    // 1. Kiểm tra xem người dùng đã đăng nhập chưa (req.user được gán bởi middleware xác thực token trước đó)
    // 2. Kiểm tra xem vai trò (role) của người dùng có phải là 'admin' không
    if (req.user && req.user.role === 'admin') {
        return next(); // Nếu đúng, cho phép đi tiếp vào API
    }
    
    // Nếu không phải admin, chặn lại ngay
    return res.status(403).json({ 
        success: false, 
        message: "Truy cập bị từ chối! Bạn không có quyền Admin." 
    });
};

module.exports = checkAdmin;