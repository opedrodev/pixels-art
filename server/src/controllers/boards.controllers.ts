import { Request, Response } from 'express';
import BoardsService from '../services/boards.services';

async function saveBoard(req: Request, res: Response) {
  try {
    const { userId, board } = req.body;
    await BoardsService.saveBoard(userId, board);
    res.status(200).json({ message: 'Board Saved' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
}

async function getBoards(req: Request, res: Response) {
  try {
    const { userId } = req.body;
    const boards = await BoardsService.getBoards(userId);
    res.status(200).json(boards);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
}

const BoardsController = {
  saveBoard,
  getBoards,
};

export default BoardsController;