const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/api/contact', async (req, res) => {
    console.log("Đã nhận được request:", req.body);
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ success: true, message: "Tin nhắn đã được gửi!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi lưu dữ liệu!" });
    }
});

module.exports = router;