import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./users";
import notesReducer from "./notes";



const combinedReducer = combineReducers({
  user: authReducer,
  notes: notesReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
