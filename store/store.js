import { configureStore } from "@reduxjs/toolkit";

import genericReducer from "@/slices/GenericSlice";

export const store = configureStore({
  reducer: { generic: genericReducer },
});

