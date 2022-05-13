import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  loader: false,
};

const profileModalSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    openLoader: (state) => {
      state.loader = true;
    },
    closeLoader: (state) => {
      state.loader = false;
    },
  },
});

export const { openModal, closeModal, openLoader, closeLoader } = profileModalSlice.actions;
export default profileModalSlice.reducer;
