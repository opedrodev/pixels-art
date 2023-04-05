import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

export default async function connectDatabase() {
  try {
    await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster.kwnvofy.mongodb.net/pixels-art?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
