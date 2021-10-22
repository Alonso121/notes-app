import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "../services/note.service";

const initialState = [];

export const getNotes = createAsyncThunk(
  "notes/getNotes",
  async (token, { rejectWithValue }) => {
    try {
      const res = await noteService.getNotes(token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotes.fulfilled]: (state, action) => {
      return [action.payload];
    },
  },
});

const { reducer } = noteSlice;
export default reducer;
