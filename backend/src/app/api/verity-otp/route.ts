import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import UserModel from '/du-an-bru-vankieu/backend/models/User';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email, otp } = await request.json();

    // 1. Kiểm tra OTP (giả định OTP hợp lệ)
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: 'Tài khoản không tồn tại' }, { status: 404 });
    }

    // 2. KIỂM TRA TRẠNG THÁI GIẢNG VIÊN
    if (user.role === 'teacher' && user.status === 'pending') {
      return NextResponse.json(
        { 
          success: false, 
          isPendingTeacher: true,
          message: 'Tài khoản Giảng viên đang chờ Admin duyệt.' 
        }, 
        { status: 403 }
      );
    }

    if (user.status === 'blocked') {
      return NextResponse.json({ success: false, message: 'Tài khoản đã bị khóa.' }, { status: 403 });
    }

    // 3. Đăng nhập thành công (Tạo Session / JWT Token tại đây)
    return NextResponse.json({
      success: true,
      message: 'Đăng nhập thành công!',
      user: { id: user._id, name: user.name, role: user.role }
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}