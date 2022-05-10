import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService } from "../../services";

const initialState = {
  allUsers: [],
  userStatus: "",
};

export const getAllUser = createAsyncThunk("post/getAllUSers", async (_, thunkAPI) => {
  try {
    const response = await getAllUserService();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.pending]: (state) => {
      state.userStatus = "pending";
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = action.payload.users;
    },
    [getAllUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload;
    },
  },
});

export default userSlice.reducer;
