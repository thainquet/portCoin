import { configureStore } from "@reduxjs/toolkit";
import { collectionSlice } from "./collectionSlice";

export const store = configureStore({
  reducer: {
    collection: collectionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
