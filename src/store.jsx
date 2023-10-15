import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/UserSlice";
import LikesReducer from "./features/LikesSlice";

export const store = configureStore({
    reducer: {
      user : UserReducer,
      like : LikesReducer
    },
  });