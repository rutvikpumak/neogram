import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserService, signUpService, updateUserService } from "../../services";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUserService(email, password);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await signUpService(email, password, firstName, lastName);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk("auth/updateUser", async (userData, thunkAPI) => {
  try {
    const response = await updateUserService(initialState.token, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        user: null,
        token: null,
      };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [loginUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.error = action.payload;
    },
    [signUpUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [signUpUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [updateUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.error = action.payload;
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
