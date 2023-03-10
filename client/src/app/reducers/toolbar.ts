import { createSlice } from '@reduxjs/toolkit';

export interface ToolbarState {
  toolbar: {
    activeColor: string;
  };
}

const initialState = {
  activeColor: '#000000'
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    }
  },
});

export const { setActiveColor } = toolbarSlice.actions;
export default toolbarSlice.reducer;
