import cors from 'cors';
import express, { Request, Response } from 'express';
import BoardsRouter from './routes/boards.routes';
import UserRouter from './routes/users.routes';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
  res.send('OK');
});

app.use('/users', UserRouter);
app.use('/boards', BoardsRouter);

export default app;