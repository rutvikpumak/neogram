import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostService,
  getUserPostService,
  addPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
} from "../../services";

const initialState = {
  allPosts: [],
  userPosts: [],
};

export const getAllPost = createAsyncThunk("post/getAllPosts", async (_, thunkAPI) => {
  try {
    const response = await getAllPostService();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getUserPost = createAsyncThunk("post/getUserPosts", async (username, thunkAPI) => {
  try {
    const response = await getUserPostService(username);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addUserPost = createAsyncThunk("post/addUserPost", async (postData, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await addPostService(postData, token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const editUserPost = createAsyncThunk("post/editUserPost", async (postData, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await editPostService(postData, token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteUserPost = createAsyncThunk("post/deleteUserPost", async (postId, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await deletePostService(postId, token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const likeAndDislikePost = createAsyncThunk(
  "post/likeAndDislikePost",
  async ({ postId, isLike }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = isLike
        ? await likePostService(postId, token)
        : await dislikePostService(postId, token);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [getAllPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [getUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.userPosts = action.payload.posts.reverse();
    },
    [getUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [addUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [addUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [editUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [editUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [editUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [deleteUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [deleteUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [deleteUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [likeAndDislikePost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [likeAndDislikePost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [likeAndDislikePost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
  },
});

export default postSlice.reducer;
