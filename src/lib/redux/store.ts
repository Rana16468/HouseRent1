import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import postReducer from "./postSlice";
import uiReducer from "./uiSlice";
import { baseApi } from "./api/baseApi";

export function makeStore() {
  return configureStore({
    reducer: {
      filters: filterReducer,
      posts: postReducer,
      ui: uiReducer,
      [baseApi.reducerPath]: baseApi.reducer, // ✅ added
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // ✅ added
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
