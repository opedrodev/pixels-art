import { hashSync } from 'bcryptjs';
import { IUser } from '../interfaces';
import UserModel from '../models/users.models';

async function register(user: IUser) {
  const emailExists = await UserModel.findOne({ email: user.email });
  if (emailExists) throw new Error('Email already exists');

  const hashedPassword = hashSync(user.password, 10);
  await UserModel.create({ ...user, password: hashedPassword });
}

const UserService = {
  register,
}

export default UserService;