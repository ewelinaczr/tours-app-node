import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./state/checkoutSlice.ts";

const rootReducer = combineReducers({
  checkout: checkoutReducer,
});

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
