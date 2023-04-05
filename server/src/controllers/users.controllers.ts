import { Request, Response } from 'express';
import UserService from '../services/users.services';

async function register(req: Request, res: Response) {
  try {
    await UserService.register(req.body);
    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    if (error instanceof Error) {
      res.status(409).json({ message: error.message });
    }
  }
}

async function login(req: Request, res: Response) {
  try {
    const token = await UserService.login(req.body);
    res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    }
  }
}

const UserController = {
  register,
  login,
}

export default UserController;