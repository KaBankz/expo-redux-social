import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const initialState = {
  data: [] as Comment[],
  loading: false,
  error: null,
};

// async thunk for fetching data
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data: Comment[] = await response.json();
    return data;
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentSlice.reducer;
