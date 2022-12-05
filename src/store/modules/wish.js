import { configureStore, createSlice } from '@reduxjs/toolkit';

let wish = createSlice({
    name: "wish",
    initialState: {
      wish_id : 4, 
      type: 'item',
      user_id: 2,
      wishList: [{}],
    },
    reducers: {
      wishUpdate(state, action) {
            state.wish = {
              wish_id : action.payload.wish_id, 
              type: action.payload.type,
              user_id: action.payload.user_id,
              wishList: [{}],
            }
        },
        
    }
  });

export let { wishUpdate } = wish.actions

export default configureStore({
    reducer: {
      wish: wish.reducer,
    }
  });