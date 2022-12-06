import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedComponent: "",
  errors: [{ type: "blank", text: "" }],
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});