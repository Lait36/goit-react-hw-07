import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filter.name;

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter : (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {changeFilter } = slice.actions;
export default slice.reducer;
