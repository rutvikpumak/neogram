import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import profileModalReducer from "../features/Profile/profileModalSlice";
import postReducer from "../features/Home/postSlice";
import userReducer from "../features/Profile/userSlice";
import postModalReducer from "../features/Home/Modal/postModalSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profileModal: profileModalReducer,
    postModal: postModalReducer,
    post: postReducer,
    user: userReducer,
  },
});
