import { configureStore, createSlice } from '@reduxjs/toolkit';

let owner = createSlice({
  name: 'owner',
  initialState: [
    {
    store_id: 2,
    email: '222@gmail.com',
    storeName: 'haily',
    storeAddress: '서울시 강서구',
    phone: '010-3333-3333',
    storeIntro: 'adsfkfajdsljaffdsaf',
    pickupDate: '2022-08-23',
  }
  ],
  reducers: {
    ownerUpdate(state, action) {
      state.owner = {
        store_id: action.payload.store_id,
        email: action.payload.email,
        storeName: action.payload.storeName,
        storeAddress: action.payload.storeAddress,
        phone: action.payload.phone,
        storeIntro: action.payload.storeIntro,
        pickupDate: action.payload.pickupDate,
      };
    },
  },
});

export let { ownerUpdate } = owner.actions;

export default configureStore({
  reducer: {
    store: owner.reducer,
  },
});
