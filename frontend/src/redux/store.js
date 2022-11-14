import { configureStore } from "@reduxjs/toolkit";
// import componentReducer from "../features/component/components";
// import previewReducer from "../features/preview/preview";
import bankingReducer from "../features/banking";

export const store = configureStore({
  reducer: {
    banking: bankingReducer,
    // preview: previewReducer,
  },
});
