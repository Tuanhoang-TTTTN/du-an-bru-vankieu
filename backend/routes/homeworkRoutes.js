const express = require('express');
const router = express.Router();
const Homework = require('../models/Homework'); // Chú ý: dùng ../models/Homework
const upload = require('../middleware/upload'); // Chú ý: dùng ../middleware/upload

// API Nộp bài tập & Lưu dữ liệu vào MongoDB
router.post('/api/homework/:id/submit', upload.single('file'), async (req, res) => {
  try {
    const { id } = req.params;
    const { studentNote } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng tải lên một tệp bài làm!',
      });
    }

    let updatedHomework;

    // TH 1: Nộp bài tập cụ thể
    if (id !== 'general' && id !== 'undefined') {
      updatedHomework = await Homework.findByIdAndUpdate(
        id,
        {
          submittedFile: file.filename,
          submittedFileOriginalName: file.originalname,
          submittedFilePath: `/uploads/${file.filename}`,
          submittedAt: new Date(),
          studentNote: studentNote || '',
          status: 'CHO_DUYET',
        },
        { new: true }
      );
    } 

    // TH 2: Nộp bài tự do
    if (!updatedHomework) {
      updatedHomework = new Homework({
        title: `Bài làm nộp tự do (${file.originalname})`,
        deadline: 'Không giới hạn',
        instructor: 'Giảng viên quản lý',
        description: 'Tệp bài làm do học viên chủ động tải lên hệ thống.',
        status: 'CHO_DUYET',
        submittedFile: file.filename,
        submittedFileOriginalName: file.originalname,
        submittedFilePath: `/uploads/${file.filename}`,
        submittedAt: new Date(),
        studentNote: studentNote || '',
      });

      await updatedHomework.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Lưu bài nộp vào MongoDB thành công!',
      data: updatedHomework,
    });
  } catch (error) {
    console.error('Lỗi khi lưu bài nộp:', error);
    return res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra phía máy chủ khi lưu dữ liệu.',
    });
  }
});

module.exports = router;