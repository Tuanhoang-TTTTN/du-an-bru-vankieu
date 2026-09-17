import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// BẮT BUỘC: Ép Next.js dùng Node.js Runtime (Nodemailer không chạy được trên Edge Runtime)
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { orderId, userEmail, userName, courseName } = await req.json();

    // Kiểm tra dữ liệu đầu vào
    if (!userEmail) {
      return NextResponse.json(
        { success: false, message: 'Email người nhận không hợp lệ!' },
        { status: 400 }
      );
    }

    // 1. Cấu hình Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 2. Nội dung Email
    const mailOptions = {
      from: `"Khóa Học Tiếng Bru" <${process.env.GMAIL_USER}>`,
      to: userEmail,
      subject: `[Xác Nhận Thanh Toán] Đăng ký thành công khóa học: ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
          <h2 style="color: #135A50; text-align: center;">Thanh Toán Khóa Học Thành Công!</h2>
          <p>Xin chào <strong>${userName}</strong>,</p>
          <p>Hệ thống đã xác nhận khoản thanh toán cho mã đơn hàng: <strong style="color: #d97706;">#${orderId}</strong>.</p>
          <p>Khóa học của bạn: <strong>${courseName}</strong> đã được kích hoạt.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://yourwebsite.com/dashboard" style="background-color: #135A50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Vào Học Ngay
            </a>
          </div>
        </div>
      `,
    };

    // 3. Gửi Mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Xác nhận đơn hàng và gửi Email thành công!',
    });
  } catch (error: any) {
    console.error('Lỗi khi gửi email:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi hệ thống khi gửi email' },
      { status: 500 }
    );
  }
}