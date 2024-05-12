import { createSlice } from "@reduxjs/toolkit";

export interface CheckoutState {
  tourId: string;
  totalPrice: number;
  turists: number;
  rooms: number[];
}

const initialState: CheckoutState = {
  tourId: "",
  totalPrice: 0,
  turists: 1,
  rooms: [0],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateTotalPrice(state, action) {
      state.totalPrice = state.totalPrice + action.payload;
    },
    updateTuristsCount(state, action) {
      state.turists = state.turists + action.payload;
    },
    updateSelectedTour(state, action) {
      state.tourId = action.payload;
    },
    updateSelectedRooms(state, action) {
      let foundId = state.rooms.indexOf(action.payload);
      if (foundId === -1) {
        state.rooms.push(action.payload);
      } else {
        state.rooms.splice(foundId, 1);
      }
    },
  },
});

export const {
  updateTotalPrice,
  updateTuristsCount,
  updateSelectedTour,
  updateSelectedRooms,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
