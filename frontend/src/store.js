import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/users";

const reducer = {
  users: authReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
