import { configureStore, createSlice } from '@reduxjs/toolkit';

import mydata from './pages/Mypage/Mydata.js'

let user = createSlice({
  name: 'user',
  initialState: mydata[0]
});

let order = createSlice({
  name: 'order',
  initialState: mydata[1]
});

let review = createSlice({
  name: 'review',
  initialState: mydata[2]
});

let coupon = createSlice({
  name: 'coupon',
  initialState: mydata[3]
});

export default configureStore({
  reducer: {
    user: user.reducer,
    order: order.reducer,
    review: review.reducer,
    coupon: coupon.reducer
  }
});
