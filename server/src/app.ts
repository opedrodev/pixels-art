import express, { Request, Response } from 'express';
import UserRouter from './routes/users.routes';

const app = express();
app.use(express.json());

app.get('/health', async (req: Request, res: Response) => {
  res.send('OK');
});

app.use('/users', UserRouter);

export default app;