import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./users";
import notesReducer from "./notes";

const reducer = {
  user: authReducer,
  notes: notesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
