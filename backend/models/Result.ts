// src/models/Result.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IResult extends Document {
  fullName: string;
  score: number;
  answers?: Record<string, any>;
  submittedAt: Date;
}

const ResultSchema = new Schema<IResult>(
  {
    fullName: { type: String, required: true },
    score: { type: Number, required: true },
    answers: { type: Object },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Chỉ định rõ collection 'results' làm tham số thứ 3
const ResultModel: Model<IResult> =
  mongoose.models.Result || mongoose.model<IResult>('Result', ResultSchema, 'results');

export default ResultModel;