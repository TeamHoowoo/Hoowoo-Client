import { configureStore, createSlice } from '@reduxjs/toolkit';

let delivery = createSlice({
    name: "delivery",
    initialState: {
      del_status: '', 
    },
    reducers: {
      deliveryStatus(state, action) {
            state.delivery = {
              del_status: '',
            }
        },
        
    }
  });

export let { deliveryStatus } = delivery.actions

export default configureStore({
    reducer: {
      delivery: delivery.reducer,
    }
  });