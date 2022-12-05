import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [
    {
    cart_id: '',
    count: 2,
    delivery: 'pickup',
    pickupHour: '13:00',
    letteringColor: {
      color: 'red', 
      extraCost: 3000
    }, 
    creamColor: {
      color: 'yellow', 
      extraCost: 1000
    }, 
    flavor: {
      flavor: 'choco', 
      extraCost: 1000
    }, 
    size: {
      size: 3, 
      extraCost: 1000
    }, 
    price: 30000,
    lettering: 'hello world wrold',
    item_id: 'special',
    user_id: 'wan',
    store_id: 2,
    }
  ],
  reducers: {
    cartUpdate(state, action) {
      state.cart = {
        cart_id: action.payload.cart_id,
        count: action.payload.count,
        delivery: action.payload.delivery,
        pickupHour: action.payload.pickupHour,
        letteringColor: action.payload.letteringColor,
        creamColor: action.payload.creamColor,
        flavor: action.payload.flavor,
        size: action.payload.size,
        price: action.payload.price,
        lettering: action.payload.lettering,
        item_id: action.payload.item_id,
        user_id: action.payload.user_id,
        store_id: action.payload.store_id,
      };
    },
  },
});

export let { cartUpdate } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
