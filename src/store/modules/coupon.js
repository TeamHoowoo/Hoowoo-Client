import { configureStore, createSlice } from '@reduxjs/toolkit';

let coupon = createSlice({
  name: 'coupon',
  initialState: [
    {
    coupon_id: 1,
    regDate: '2022.08.10',
    expDate: '2022.08.13',
    DCPrice: 0,
    couponName: '가입 축하 3000 할인 쿠폰',
    couponDetail: '기한내 무제한 사용가능',
    user_id: 'ebulsok',
  }
  ],
  reducers: {
    couponUpdate(state, action) {
      state.coupon = {
        coupon_id: action.payload.coupon_id,
        regDate: '',
        expDate: '',
        DCPrice: 0,
        couponName: '',
        couponDetail: '',
        user_id: action.payload.user_id,
      };
    },
  },
});

export let { couponUpdate } = coupon.actions;

export default configureStore({
  reducer: {
    coupon: coupon.reducer,
  },
});
