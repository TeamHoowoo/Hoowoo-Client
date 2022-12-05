import { configureStore, createSlice } from '@reduxjs/toolkit';

let review = createSlice({
  name: 'review',
  initialState: [
    {
    review_id: 'thals0',
    regDate: '2022-11-23',
    title: 'hihihihihihi',
    content: 'fdkljajlafsd',
    star: 3,
    image_id: 'aaa',
    user_id: 'thals0',
    item_id: 'custom',
    totalPrice: 30000,
    review_status: 0,
    }
  ],
  reducers: {
    reviewUpdate(state, action) {
      state.review = {
        review_id: action.payload.review_id,
        regDate: action.payload.regDate,
        title: action.payload.title,
        content: action.payload.content,
        star: action.payload.star,
        image_id: '',
        user_id: action.payload.user_id,
        item_id: action.payload.item_id,
        totalPrice: action.payload.totalPrice,
        review_status: action.payload.review_status,
      };
    },
  },
});

export let { reviewUpdate } = review.actions;

export default configureStore({
  reducer: {
    review: review.reducer,
  },
});
