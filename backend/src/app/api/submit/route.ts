import { NextResponse } from 'next/server';

import connectDB from '../../../lib/mongodb'; 
import Result from '../../../models/Result';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newResult = await Result.create(body);
    return NextResponse.json({ success: true, data: newResult });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Lỗi kết nối DB" }, { status: 500 });
  }
}