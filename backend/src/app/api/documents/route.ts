import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Document from '@/models/Document';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

// 1. GET: Lấy danh sách tài liệu
export async function GET() {
  try {
    await connectToDatabase();
    const documents = await Document.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: documents }, { status: 200 });
  } catch (error: any) {
    console.error('Lỗi GET /api/documents:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi kết nối Server', data: [] },
      { status: 500 }
    );
  }
}

// 2. POST: Upload file và lưu DB
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const formData = await request.formData();

    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ success: false, message: 'Chưa chọn file tải lên' }, { status: 400 });
    }

    const title = (formData.get('title') as string) || file.name;
    const description = (formData.get('description') as string) || '';
    const subject = (formData.get('subject') as string) || 'Chung';
    const teacherId = (formData.get('teacherId') as string) || '66a4f1008b912c4180d23a01';

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    await mkdir(uploadDir, { recursive: true });

    const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const uniqueFileName = `${Date.now()}-${safeFileName}`;
    const filePath = path.join(uploadDir, uniqueFileName);
    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/${uniqueFileName}`;

    const newDocument = await Document.create({
      title,
      description,
      fileUrl,
      fileName: file.name,
      fileType: file.type || 'application/octet-stream',
      fileSize: file.size,
      subject,
      uploadedBy: teacherId,
    });

    return NextResponse.json({ success: true, data: newDocument }, { status: 201 });
  } catch (error: any) {
    console.error('Lỗi POST /api/documents:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi lưu tài liệu' },
      { status: 500 }
    );
  }
}

// 3. DELETE: Xóa tài liệu
export async function DELETE(request: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Thiếu ID tài liệu' }, { status: 400 });
    }

    const docToDelete = await Document.findById(id);
    if (!docToDelete) {
      return NextResponse.json({ success: false, message: 'Không tìm thấy tài liệu' }, { status: 404 });
    }

    if (docToDelete.fileUrl) {
      try {
        const relativePath = docToDelete.fileUrl.startsWith('/')
          ? docToDelete.fileUrl.substring(1)
          : docToDelete.fileUrl;
        const physicalPath = path.join(process.cwd(), 'public', relativePath);
        await unlink(physicalPath);
      } catch (fileErr) {
        console.warn('File vật lý không tồn tại hoặc đã bị xóa:', fileErr);
      }
    }

    await Document.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Xóa tài liệu thành công' }, { status: 200 });
  } catch (error: any) {
    console.error('Lỗi DELETE /api/documents:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Lỗi khi xóa tài liệu' },
      { status: 500 }
    );
  }
}