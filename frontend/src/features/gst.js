import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  finalScore: 0,
  gstData: {
    aos: undefined,
    as: undefined,
    bcs: undefined,
    mgs: undefined,
    pis: undefined,
    sis: undefined,
    ssc: undefined,
    vsc: undefined,
    vs: undefined,
  },
};

export const gstSlice = createSlice({
  name: "gst",
  initialState,
  reducers: {
    changeValueGst: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.type == "aos") {
        state.gstData = {
          ...state.gstData,
          aos: action.payload.value,
        };
      } else if (action.payload.type == "as") {
        state.gstData = {
          ...state.gstData,
          as: action.payload.value,
        };
      } else if (action.payload.type == "bcs") {
        state.gstData = { ...state.gstData, bcs: action.payload.value };
      } else if (action.payload.type == "mgs") {
        state.gstData = { ...state.gstData, mgs: action.payload.value };
      } else if (action.payload.type == "pis") {
        state.gstData = {
          ...state.gstData,
          pis: action.payload.value,
        };
      } else if (action.payload.type == "sis") {
        state.gstData = {
          ...state.gstData,
          sis: action.payload.value,
        };
      } else if (action.payload.type == "ssc") {
        state.gstData = {
          ...state.gstData,
          ssc: action.payload.value,
        };
      } else if (action.payload.type == "vsc") {
        state.gstData = {
          ...state.gstData,
          vsc: action.payload.value,
        };
      } else if (action.payload.type == "vs") {
        state.gstData = {
          ...state.gstData,
          vs: action.payload.value,
        };
      } else {
      }
    },
    decrement: (state) => {
      state.finalScore -= 1;
    },
    incrementByAmount: (state, action) => {
      state.finalScore += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeValueGst, decrement, incrementByAmount } =
  gstSlice.actions;

export default gstSlice.reducer;
