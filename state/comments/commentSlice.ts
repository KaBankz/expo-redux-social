import { createSlice } from '@reduxjs/toolkit';

interface Comment {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: Comment[] = [];

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
});

export default commentSlice.reducer;
