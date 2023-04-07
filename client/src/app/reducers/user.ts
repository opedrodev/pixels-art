import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthed: false,
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.isAuthed = true;
      state.user = payload;
    }
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
