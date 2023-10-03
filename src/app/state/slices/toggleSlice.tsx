'use client';
import { createSlice } from '@reduxjs/toolkit';

interface ToggleSlice {
  show: boolean;
}

const initialState: ToggleSlice = {
  show: false,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});
export const { setShow } = toggleSlice.actions;

export default toggleSlice.reducer;
