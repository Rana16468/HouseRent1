import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import postReducer from "./postSlice";
import uiReducer from "./uiSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      filters: filterReducer,
      posts: postReducer,
      ui: uiReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
