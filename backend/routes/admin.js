const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Xóa chữ /api ở đây, vì nó đã được server.js thêm tự động
router.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
if (loginSuccess) {
        const token = jwt.sign({ role: 'admin' }, 'SECRET_KEY', { expiresIn: '1h' });
        
        // Gắn vào cookie
        res.cookie('adminToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true khi chạy thật
            sameSite: 'strict',
            maxAge: 3600000 // 1 giờ
        });
        return res.status(200).json({ success: true, message: 'Đăng nhập thành công!' });
    }
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, 'SECRET_KEY', { expiresIn: '1h' });
        return res.status(200).json({ success: true, token });
    }

    return res.status(401).json({ success: false, message: 'Sai thông tin đăng nhập' });
});

module.exports = router;