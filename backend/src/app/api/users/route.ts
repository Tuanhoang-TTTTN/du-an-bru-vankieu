import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import UserModel from '/du-an-bru-vankieu/backend/models/Uers';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectDB();

    // 🔍 IN THÔNG TIN KẾT NỐI MONGODB RA TERMINAL VS CODE
    console.log('------------------------------------');
    console.log('👉 DB Name đang kết nối:', mongoose.connection.name);
    console.log('👉 Các Collections có trong DB:', Object.keys(mongoose.connection.collections));
    
    const users = await UserModel.find({}).sort({ createdAt: -1 });
    console.log('👉 Số lượng User tìm được:', users.length);
    console.log('------------------------------------');

    return NextResponse.json({ success: true, count: users.length, data: users });
  } catch (error: any) {
    console.error('Lỗi GET Users:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}