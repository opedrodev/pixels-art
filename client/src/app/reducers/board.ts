import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: {}
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      state.board = action.payload;
    }
  }
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
