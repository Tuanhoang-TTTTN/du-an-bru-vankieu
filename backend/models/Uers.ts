// src/models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  role: 'student' | 'teacher' | 'instructor' | 'admin';
  status: 'active' | 'pending' | 'blocked';
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: {
      type: String,
      enum: ['student', 'teacher', 'instructor', 'admin'],
      default: 'student',
      lowercase: true,
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'blocked'],
      default: 'active',
      lowercase: true,
    },
  },
  { timestamps: true }
);

// 💡 THÊM 'users' LÀM THAM SỐ THỨ 3:
// Đảm bảo Mongoose truy vấn chính xác collection 'users' trong MongoDB của bạn
const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema, 'users');

export default UserModel;