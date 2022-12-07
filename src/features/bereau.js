import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  finalScore: 0,
  bereauData: {
    als: undefined,
    ce: undefined,
    cibsrc: undefined,
    es: undefined,
    rhs: undefined,
    tus: undefined,
    wso: undefined,
  },
};

export const bereauSlice = createSlice({
  name: "bereau",
  initialState,
  reducers: {
    changeValueBereau: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload.type == "als") {
        state.bereauData = {
          ...state.bereauData,
          als: action.payload.value,
        };
      } else if (action.payload.type == "ce") {
        state.bereauData = {
          ...state.bereauData,
          ce: action.payload.value,
        };
      } else if (action.payload.type == "cibsrc") {
        state.bereauData = {
          ...state.bereauData,
          cibsrc: action.payload.value,
        };
      } else if (action.payload.type == "es") {
        state.bereauData = { ...state.bereauData, es: action.payload.value };
      } else if (action.payload.type == "rhs") {
        state.bereauData = {
          ...state.bereauData,
          rhs: action.payload.value,
        };
      } else if (action.payload.type == "tus") {
        state.bereauData = {
          ...state.bereauData,
          tus: action.payload.value,
        };
      } else if (action.payload.type == "wso") {
        state.bereauData = {
          ...state.bereauData,
          wso: action.payload.value,
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
export const { changeValueBereau, decrement, incrementByAmount } =
  bereauSlice.actions;

export default bereauSlice.reducer;
