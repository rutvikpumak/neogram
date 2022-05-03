import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
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
  },
});

export const { openModal, closeModal } = profileModalSlice.actions;
export default profileModalSlice.reducer;
