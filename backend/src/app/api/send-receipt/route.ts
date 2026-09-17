import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, amount, courseName, transactionCode, transactionDate } = body;

    // TODO: Bạn có thể dùng Resend hoặc Nodemailer tại đây để gửi Email HTML thực tế.
    // VD với Resend:
    // await resend.emails.send({
    //   from: 'Khóa Học Bru-Vân Kiều <no-reply@yourdomain.com>',
    //   to: [email],
    //   subject: `[BIÊN LAI THANH TOÁN] - ${transactionCode}`,
    //   html: `<h1>Xác nhận thanh toán thành công</h1>...`
    // });

    console.log(`[EMAIL DISPATCHED] Gửi biên lai ${transactionCode} thành công tới ${email}`);

    return NextResponse.json({ success: true, message: 'Đã gửi email biên lai' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Lỗi gửi email' }, { status: 500 });
  }
}