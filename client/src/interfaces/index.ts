export interface Board {
  id: string;
  name: string;
  height: number;
  width: number;
  options: BoardOptions;
  pixels: string[];
}

export interface BoardOptions {
  border: number;
  spacing: number;
}

export interface BoardState {
  board: Board;
}
