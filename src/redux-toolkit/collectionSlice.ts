import { createSlice } from "@reduxjs/toolkit";

interface CollectionState {
  list: any[];
}

const initialState: CollectionState = {
  list: [],
};

export const collectionSlice = createSlice({
  name: "Collection",
  initialState,
  reducers: {
    setCollection: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
