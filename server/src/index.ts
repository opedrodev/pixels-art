import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/health', async (req: Request, res: Response) => {
  res.send('OK');
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
})