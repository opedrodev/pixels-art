import { Router } from 'express';
import UserController from '../controllers/users.controllers';

const UserRouter = Router();

UserRouter.post('/register', UserController.register);

export default UserRouter;