import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthDataService from "../services/auth.service";

const initialState = {
  isLoggedIn: false,
  message: "",
  userId: "",
  username: "",
};

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
        return res.data;
      }
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk("auth/deleteUser", async (token) => {
  try {
    const res = await AuthDataService.deleteUser(token);
    if (res.status === 200) localStorage.removeItem("accessToken");
  } catch (e) {
    console.log(e.message);
  }
});

export const verifyToken = createAsyncThunk("auth/verify", async (token) => {
  try {
    const res = await AuthDataService.verifyToken(token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAction('auth/logout')

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      return { ...state, message: payload };
    },
    [registerUser.rejected]: (state, { payload }) => {
      return { ...state, message: payload.msg };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        username: payload.username,
        isLoggedIn: payload.loggedIn,
      };
    },
    [loginUser.rejected]: (state, { payload }) => {
      return { ...state, message: payload.msg };
    },
    [verifyToken.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload.loggedIn,
        username: payload.username,
      };
    },
    [deleteUser.fulfilled]: (state, action) => {
      return (state = initialState);
    },
  },
});

const { reducer } = authSlice;
export default reducer;
