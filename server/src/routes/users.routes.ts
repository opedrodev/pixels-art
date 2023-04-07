import { Router } from 'express';
import UserController from '../controllers/users.controllers';

const UserRouter = Router();

UserRouter.post('/login', UserController.login);
UserRouter.post('/register', UserController.register);
UserRouter.get('/verify-token', UserController.verifyToken);

export default UserRouter;