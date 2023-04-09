import { Router } from 'express';
import BoardsController from '../controllers/boards.controllers';

const BoardsRouter = Router();

BoardsRouter.post('/save', BoardsController.saveBoard);

export default BoardsRouter;