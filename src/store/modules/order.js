import { configureStore, createSlice } from '@reduxjs/toolkit';

let order = createSlice({
  name: 'order',
  initialState: [
    {
    order_id: 'wan',
    regDate: '2022-03-23',
    count: 2,
    delivery: 'delivery',
    pickupHour: '14:00',
    letteringColor: {
      color: 'black', 
      extraCost: 1000
    }, 
    creamColor: {
      color: 'black', 
      extraCost: 1000
    }, 
    flavor: {
      flavor: 'plain', 
      extraCost: 1000
    }, 
    size: {
      size: 3, 
      extraCost: 1000
    }, 
    price: 20000,
    lettering: 'sdfdafsdasd',
    item_id: 'special',
    user_id: 'ddingyull',
    store_id: 1,
    status: 'confirm',
    totalPrice: 30000,
    image_id: 'kkkk',
    }
  ],
  reducers: {
    orderUpdate(state, action) {
      state.order = {
        order_id: action.payload.order_id,
        regDate: action.payload.regDate,
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
        status: action.payload.status,
        totalPrice: action.payload.totalPrice,
        image_id: action.payload.image_id,
      };
    },
  },
});

export let { orderUpdate } = order.actions;

export default configureStore({
  reducer: {
    order: order.reducer,
  },
});
