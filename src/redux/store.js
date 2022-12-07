import { configureStore } from "@reduxjs/toolkit";
// import componentReducer from "../features/component/components";
// import previewReducer from "../features/preview/preview";
import bankingReducer from "../features/banking";
import gstReducer from "../features/gst";
import bereauReducer from "../features/bereau";

export const store = configureStore({
  reducer: {
    banking: bankingReducer,
    gst: gstReducer,
    bereau: bereauReducer,
    // preview: previewReducer,
  },
});
