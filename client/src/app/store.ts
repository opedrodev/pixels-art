import { configureStore } from '@reduxjs/toolkit';

import board from './reducers/board';
import toolbar from './reducers/toolbar';

const store = configureStore({
  reducer: {
    toolbar,
    board,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
