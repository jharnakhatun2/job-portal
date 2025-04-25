import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("posts/fetchData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

export const PostSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});
export default PostSlice.reducer;
