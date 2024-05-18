import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './comments/commentSlice';
import postReducer from './posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
});

// Typescript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
