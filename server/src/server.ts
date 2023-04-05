/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './app';
import connectDatabase from './models/connection';

dotenv.config();

const PORT = process.env.PORT || 3001;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});