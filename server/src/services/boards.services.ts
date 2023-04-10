import { isValidObjectId } from 'mongoose';
import { IBoard } from '../interfaces';
import UserModel from '../models/users.models';

async function saveBoard(userId: string, board: IBoard) {
  if (!isValidObjectId(userId)) throw new Error('Invalid user id');

  const user = await UserModel.findById(userId);
  if (!user) throw new Error('User not found');

  const filteredBoards = user.boards.filter((b) => b.id !== board.id);
  user.boards = [...filteredBoards, board];
  
  await user.save();
}

async function getBoards(userId: string) {
  if (!isValidObjectId(userId)) throw new Error('Invalid user id');

  const user = await UserModel.findById(userId);
  if (!user) throw new Error('User not found');

  return user.boards;
}

async function getBoardById(userId: string, boardId: string) {
  if (!isValidObjectId(userId)) throw new Error('Invalid user id');
  
  const user = await UserModel.findById(userId);
  if (!user) throw new Error('User not found');

  const board = user.boards.find((b) => b.id === boardId);
  if (!board) throw new Error('Board not found');

  return board;
}

const BoardsService = {
  saveBoard,
  getBoards,
  getBoardById,
};

export default BoardsService;