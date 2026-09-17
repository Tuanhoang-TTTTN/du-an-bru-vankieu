import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import UserModel from '/du-an-bru-vankieu/backend/models/Uers';

// Lấy danh sách giảng viên
export async function GET() {
  await connectDB();
  const teachers = await UserModel.find({ role: 'teacher' }).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: teachers });
}

// Cập nhật trạng thái duyệt (Approve / Reject)
export async function PATCH(request: Request) {
  try {
    await connectDB();
    const { userId, status } = await request.json(); // status = 'active' hoặc 'blocked'

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { status },
      { new: true }
    );

    return NextResponse.json({ 
      success: true, 
      message: status === 'active' ? 'Đã phê duyệt tài khoản!' : 'Đã từ chối tài khoản!',
      data: updatedUser 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}