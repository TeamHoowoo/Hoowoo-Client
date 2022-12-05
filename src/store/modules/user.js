import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: [
    {
    user_id: '1',
    type: 'local',
    email: 'aa@gmail.com',
    userName: '후우',
    address: '서울시 서초구',
    phone: '010-0000-0000',
    isLogin: true,
    }
    ],
  reducers: {
    login(state, action) {
      state.user = {
        user_id: action.payload.user_id,
        type: action.payload.type,
        email: action.payload.email,
        userName: action.payload.userName,
        address: action.payload.phone,
        phone: action.payload.phone,
        isLogin: true,
      };
    },
    logout(state, action) {
      state.user = {
        user_id: '',
        type: '',
        email: '',
        userName: '',
        address: '',
        phone: '',
        isLogin: false,
      };
    },
  },
});

export let { login, logout } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
