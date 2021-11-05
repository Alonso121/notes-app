import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "../services/note.service";

export const getNotes = createAsyncThunk("notes/getNotes", async (token) => {
  try {
    const res = await noteService.getNotes(token);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
});

export const createNote = createAsyncThunk(
  "notes/createNote/",
  async ({ date, time, token, title }, { rejectWithValue }) => {
    try {
      const { data } = await noteService.createNote({
        date,
        time,
        token,
        title,
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const starNote = createAsyncThunk(
  "notes/starNote",
  async ({ id, token, starred }) => {
    try {
      const { data } = await noteService.starNote({ id, token, starred });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const toggleCompleteNote = createAsyncThunk(
  "notes/toggleCompleteNote",
  async ({ id, token, complete }) => {
    try {
      const { data } = await noteService.completeNote({ id, token, complete });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async ({ id, token }) => {
    try {
      const { data } = await noteService.deleteNote({ id, token });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},
  extraReducers: {
    [createNote.fulfilled]: (state, { payload }) => {
      state.push(payload);
    },

    [getNotes.fulfilled]: (state, { payload }) => {
      return [...payload];
    },

    [starNote.fulfilled]: (state, { payload }) => {
      const index = state.findIndex((note) => note._id === payload._id);
      state[index] = {
        ...state[index],
        starred: payload.starred,
      };
    },
    [toggleCompleteNote.fulfilled]: (state, { payload }) => {
      const index = state.findIndex((note) => note._id === payload._id);
      state[index] = {
        ...state[index],
        complete: payload.complete,
      };
    },
    [deleteNote.fulfilled]: (state, { payload }) => {
      return state.filter((note) => note._id !== payload._id);
    },
  },
});

const { reducer } = noteSlice;
export default reducer;
