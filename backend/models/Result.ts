import mongoose from 'mongoose';
const ResultSchema = new mongoose.Schema({
  fullName: String,
  score: Number,
  answers: Object,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.models.Result || mongoose.model('Result', ResultSchema);