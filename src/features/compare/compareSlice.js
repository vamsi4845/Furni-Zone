import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareItems: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.compareItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.compareItems.push(newItem);
      }
    },
    removeFromCompare: (state, action) => {
      state.compareItems = state.compareItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCompare: (state) => {
      state.compareItems = [];
    },
  },
});

export const { addToCompare, removeFromCompare,clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
