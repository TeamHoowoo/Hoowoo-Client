import { configureStore, createSlice } from '@reduxjs/toolkit';

let image = createSlice({
  name: 'image',
  initialState: {
    image_id: 1,
    regDate: '2020.05.06',
    imageSrc: '/public/images/cake1',
  },
  reducers: {
    imageUpload(state, action) {
      state.image = {
        image_id: action.payload.image_id,
        regDate: action.payload.regDate,
        imageSrc: action.payload.imageSrc,
      };
    },
  },
});

export let { imageUpdate } = image.actions;

export default configureStore({
  reducer: {
    image: image.reducer,
  },
});
