import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  score: { type: Number, required: true },
  answers: { type: Object }, // Lưu { câuId: đápÁnNgườiDùng }
  submittedAt: { type: Date, default: Date.now }
});

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://ASMF1:<db_password>@cluster0.ilpik4s.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export default mongoose.models.Result || mongoose.model('Result', ResultSchema);