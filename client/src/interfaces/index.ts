export interface IBoard {
  id: string;
  name: string;
  height: number;
  width: number;
  options: IBoardOptions;
  pixels: string[];
}

export interface IBoardOptions {
  border: number;
  spacing: number;
}

export interface IBoardState {
  board: {
    board: IBoard;
  }
}

export interface IPixel {
  color: string;
}

export interface ILogin {
  email: string;
  password: string;
  rememberMe: boolean;
}
