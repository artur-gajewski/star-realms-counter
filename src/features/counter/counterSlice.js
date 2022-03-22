import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  currentValue: 50,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCurrentValue: (state, value) => {
      state.currentValue += value.payload;
      state.value = 0;
    },
  },
});

export const selectCount = (state) => state.counter.value;
export const selectCurrentValue = (state) => state.counter.currentValue;

export default counterSlice.reducer;
