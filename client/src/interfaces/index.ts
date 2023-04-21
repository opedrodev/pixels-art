export interface IBoard {
  id: string;
  name: string;
  height: number;
  width: number;
  options: IBoardOptions;
  pixels: string[];
  createdAt: string;
}

export interface IBoardOptions {
  border: number;
  spacing: number;
}

export interface IBoardState {
  board: IBoard;
}

export interface IPixel {
  color: string;
}

export interface ILogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  username: string;
  _id: string;
  boards?: IBoard[];
}

export interface IUserState {
  user: {
    isAuthed: boolean;
    user: IUser;
  }
}
