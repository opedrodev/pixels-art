import { Router } from 'express';
import BoardsController from '../controllers/boards.controllers';

const BoardsRouter = Router();

BoardsRouter.post('/', BoardsController.getBoards);
BoardsRouter.get('/:userId/:boardId', BoardsController.getBoardById);
BoardsRouter.post('/save', BoardsController.saveBoard);

export default BoardsRouter;