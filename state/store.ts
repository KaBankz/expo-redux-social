import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

// Typescript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
