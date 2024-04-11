import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { popUpSlice } from "./popUp/popUpSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    popUp: popUpSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
