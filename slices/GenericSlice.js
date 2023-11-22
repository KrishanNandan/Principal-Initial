import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { genric: {} };

export const getData = createAsyncThunk("data", async () => {
  const response = await axios("api/hello");
  return response.data;
});

export const genericSlice = createSlice({
  name: "generic",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.genric = {};
    }),
      builder.addCase(getData.fulfilled, (state, action) => {
        state.genric = action.payload;
      }),
      builder.addCase(getData.rejected, (state, action) => {});
  },
});
export const getGenericDataState = (state) => state.generic;
export default genericSlice.reducer;
