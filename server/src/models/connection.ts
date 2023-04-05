import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

export default async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
