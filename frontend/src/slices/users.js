import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthDataService from "../services/auth.service";

const initialState = { message: "" };

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    console.log(username, email, password);
    try {
      const res = await AuthDataService.register({ username, email, password });
      return res.data;
    } catch (error) {
      console.log(error);
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
  },
});

const { reducer } = authSlice;
export default reducer;
