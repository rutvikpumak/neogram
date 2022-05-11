import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService, followUserService, unFollowUserService } from "../../services";
import { updateUser } from "../Auth/authSlice";

const initialState = {
  allUsers: [],
  userStatus: "",
  notFollowing: [],
};

export const getAllUser = createAsyncThunk("post/getAllUSers", async (_, thunkAPI) => {
  try {
    const response = await getAllUserService();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const followUnFollowUser = createAsyncThunk(
  "post/followUnFollowUser",
  async ({ userId, dispatch, isFollow }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = !isFollow
        ? await unFollowUserService(token, userId)
        : await followUserService(token, userId);
      dispatch(updateUser(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
    [followUnFollowUser.pending]: (state) => {
      state.userStatus = "pending";
    },
    [followUnFollowUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = [...state.allUsers].map((user) => {
        if (action.payload.followUser.username === user.username) {
          return action.payload.followUser;
        }
        return user;
      });
    },
    [followUnFollowUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload;
    },
  },
});

export default userSlice.reducer;
