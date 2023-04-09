export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IBoardOptions {
  border: number;
  spacing: number;
}

export interface IBoard {
  id: string;
  name: string;
  height: number;
  width: number;
  options: IBoardOptions;
  pixels: string[];
}