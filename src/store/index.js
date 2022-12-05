import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import user from './modules/user';
import owner from './modules/owner';
import item from './modules/item';
import order from './modules/order';
import cart from './modules/cart';
import review from './modules/review';
import coupon from './modules/coupon';
import wish from './modules/wish';
import delivery from './modules/delivery';
import like from './modules/like';
import image from './modules/image';

// const rootReducer = combineReducers({
//     user,
//     store,
//     item,
//     order,
//     cart,
//     review,
//     coupon,
//     wish,
//     delivery,
//     like,
//     image,
// });

// export default persistReducer(rootReducer);

// toolkit ver.
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: user.reducer,
    owner: owner.reducer,
    item: item.reducer,
    order: order.reducer,
    cart: cart.reducer,
    review: review.reducer,
    coupon: coupon.reducer,
    wish: wish.reducer,
    delivery: delivery.reducer,
    like: like.reducer,
    image: image.reducer,
  },
});
