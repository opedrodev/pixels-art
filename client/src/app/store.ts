import { configureStore } from '@reduxjs/toolkit';

import board from './reducers/board';
import toolbar from './reducers/toolbar';
import user from './reducers/user';

const store = configureStore({
  reducer: {
    toolbar,
    board,
    user,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
