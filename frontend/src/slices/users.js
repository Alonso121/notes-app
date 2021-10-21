import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthDataService from "../services/auth.service";

const initialState = { message: "" };

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const res = await AuthDataService.register({ username, email, password });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await AuthDataService.login({ email, password });
      if (res.data) {
        localStorage.setItem("accessToken", res.data.token);
        localStorage.setItem("user", res.data.username);
        return res.data;
      }
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      return { ...state, message: action.payload };
    },
    [registerUser.rejected]: (state, action) => {
      return { ...state, message: action.payload.msg };
    },
    [loginUser.fulfilled]: (state, action) => {
      return { ...state, username: action.payload.username };
    },
    [loginUser.rejected]: (state, action) => {
      return { ...state, message: action.payload.msg };
    },
  },
});

const { reducer } = authSlice;
export default reducer;
