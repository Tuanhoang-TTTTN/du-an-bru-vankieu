const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const OpenAI = require('openai');

// Khởi tạo OpenAI client với API Key từ biến môi trường
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// 1. API gửi tin nhắn, nhận phản hồi từ AI và lưu MongoDB
router.post('/chat', async (req, res) => {
    try {
        const { userId, message } = req.body;

        if (!userId || !message) {
            return res.status(400).json({ success: false, message: "Thiếu mã người dùng hoặc nội dung tin nhắn!" });
        }

        // Gọi API OpenAI để sinh câu trả lời thông minh
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Hoặc gpt-4o-mini tùy theo nhu cầu
            messages: [
                { role: "system", content: "Bạn là một trợ lý giáo dục thông minh, hỗ trợ học viên giải đáp kiến thức qua hội thoại một cách ngắn gọn, súc tích và dễ hiểu." },
                { role: "user", content: message }
            ],
        });

        const botReply = completion.choices[0].message.content;

        // Lưu lịch sử hội thoại vào MongoDB
        const newChat = new Chat({
            userId,
            message,
            reply: botReply
        });
        await newChat.save();

        return res.status(200).json({
            success: true,
            reply: botReply
        });
    } catch (error) {
        console.error("Lỗi AI chat:", error);
        return res.status(500).json({ success: false, message: "Lỗi hệ thống khi kết nối AI!" });
    }
});

// 2. API lấy lịch sử chat của người dùng
router.get('/chat/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const chats = await Chat.find({ userId }).sort({ createdAt: 1 });

        return res.status(200).json({
            success: true,
            chats
        });
    } catch (error) {
        console.error("Lỗi lấy lịch sử chat:", error);
        return res.status(500).json({ success: false, message: "Lỗi hệ thống khi tải lịch sử!" });
    }
});

module.exports = router;