import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from 'interfaces';

const initialState = {
  id: '',
  name: '',
  height: 0,
  width: 0,
  pixels: [],
  options: {
    spacing: 0,
    border: 0,
  },
  createdAt: '',
} as IBoard;

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, { payload: { id, name, height, width, pixels, options, createdAt } }) {
      state.id = id;
      state.name = name;
      state.height = height;
      state.width = width;
      state.pixels = pixels;
      state.options = options;
      state.createdAt = createdAt;
    },

    savePixels(state, action) {
      state.pixels = action.payload;
    }
  }
});

export const { setBoard, savePixels } = boardSlice.actions;
export default boardSlice.reducer;
