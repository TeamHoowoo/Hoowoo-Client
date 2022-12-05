import { configureStore, createSlice } from '@reduxjs/toolkit';

let like = createSlice({
  name: 'like',
  initialState: {
    likeUpdate: false,
  },
  reducers: {
    likeUpdate(state, action) {
      state.like = {
        likeUpdate: !state.likeUpdate,
      };
    },
  },
});

export let { likeUpdate } = like.actions;

export default configureStore({
  reducer: {
    like: like.reducer,
  },
});
