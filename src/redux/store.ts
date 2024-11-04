import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Use the authReducer in the store
  },
});

// Optional: Define types for RootState and AppDispatch for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
