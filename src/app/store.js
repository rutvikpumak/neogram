import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import profileModalReducer from "../features/Profile/profileModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profileModal: profileModalReducer,
  },
});
