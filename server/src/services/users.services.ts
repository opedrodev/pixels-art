import { compareSync, hashSync } from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ILogin, IUser } from '../interfaces';
import UserModel from '../models/users.models';

dotenv.config();

async function register(user: IUser) {
  const emailExists = await UserModel.findOne({ email: user.email });
  if (emailExists) throw new Error('Email already exists');

  const hashedPassword = hashSync(user.password, 10);
  await UserModel.create({ ...user, password: hashedPassword });
}

async function login({ email, password, rememberMe }: ILogin) {
  const emailExists = await UserModel.findOne({ email: email });
  if (!emailExists) throw new Error('Email does not exists');

  const { password: hashedPassword, ...userInfo } = emailExists.toObject();

  const validPassword = compareSync(password, hashedPassword);
  if (!validPassword) throw new Error('Invalid email or password');

  const token = jwt.sign(userInfo, process.env.JWT_SECRET || 'z.25-ab', { expiresIn: rememberMe ? '7d' : '4h'});
  return token;
}

const UserService = {
  register,
  login,
}

export default UserService;