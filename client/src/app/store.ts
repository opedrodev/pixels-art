import { configureStore } from '@reduxjs/toolkit';

import toolbar from './reducers/toolbar';

const store = configureStore({
  reducer: {
    toolbar
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;
