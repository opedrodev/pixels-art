import { createSlice } from '@reduxjs/toolkit';

export interface ToolbarState {
  toolbar: {
    activeColor: string;
    activeTool: string;
  };
}

const initialState = {
  activeColor: '#000000',
  activeTool: '',
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },

    setActiveTool: (state, action) => {
      state.activeTool = action.payload;
    }
  },
});

export const { setActiveColor, setActiveTool } = toolbarSlice.actions;
export default toolbarSlice.reducer;
