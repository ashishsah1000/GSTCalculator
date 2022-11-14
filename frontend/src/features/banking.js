import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  finalScore: 0,
  bankingData:{
    icbr:undefined,
    ocbr:undefined,
    cds:undefined,
    es:undefined,
    clur:undefined
  }
};


export const bankingSlice = createSlice({
  name: "banking",
  initialState,
  reducers: {
    changeValuesBanking: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
   if (action.payload.type == "icbr") {
     state.bankingData = { ...state.bankingData, icbr: action.payload.value };
   } else if (action.payload.type == "ocbr") {
     state.bankingData = { ...state.bankingData, ocbr: action.payload.value };
   } else if (action.payload.type == "cds") {
     state.bankingData = { ...state.bankingData, cds: action.payload.value };
   } else if (action.payload.type == "es") {
     state.bankingData = { ...state.bankingData, es: action.payload.value };
   } else if (action.payload.type == "clur") {
     state.bankingData = { ...state.bankingData, clur: action.payload.value };
   }else{
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
export const { changeValuesBanking, decrement, incrementByAmount } =
  bankingSlice.actions;

export default bankingSlice.reducer;
