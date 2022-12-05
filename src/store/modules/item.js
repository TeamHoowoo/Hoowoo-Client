import { configureStore, createSlice } from '@reduxjs/toolkit';

let item = createSlice({
  name: 'item',
  initialState: [
    {
      item_id: 1,
      name: '딸기 케이크',
      detail: '달콤한 딸기가 가득한 케이크',
      delivery: null,
      pickup: 'pickup',
      pickupDate: '2022.12.24',
      pickupHour: '17.30',
      letteringColors: {
        color: 'red',
        extraCost: 3000,
      },
      creamColors: {
        color: 'yellow',
        extraCost: 4000,
      },
      flavors: {
        flavor: '딸기',
        extraCost: 0,
      },
      sizes: {
        size: 2,
        extraCost: 15000,
      },
      price: 50000,
      letteringNotice: '생일축하해',
      store_id: 2,
      image_id: 1,
    },
  ],
  reducers: {
    itemUpdate(state, action) {
      state.item = {
        item_id: action.payload.item_id,
        name: '',
        detail: '',
        delivery: action.payload.delivery,
        pickup: action.payload.pickup,
        pickupDate: '',
        pickupHour: '',
        letteringColors: {
          color: '',
          extraCost: action.payload.extraCost,
        },
        creamColors: {
          color: '',
          extraCost: action.payload.extraCost,
        },
        flavors: {
          flavor: '',
          extraCost: action.payload.extraCost,
        },
        sizes: {
          size: 0,
          extraCost: action.payload.extraCost,
        },
        price: 0,
        letteringNotice: '',
        store_id: 0,
        image_id: 0,
      };
    },
  },
});

export let { itemUpdate } = item.actions;

export default configureStore({
  reducer: {
    item: item.reducer,
  },
});
