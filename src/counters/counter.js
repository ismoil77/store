import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const counterSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      console.log(1);
    }),
      builder.addCase(getTodos.fulfilled, (state, action) => {
        console.log(2);
        state.data = action.payload;
      }),
      builder.addCase(getTodos.rejected, (state, action) => {
        console.log(3);
      });
  },
});

export default counterSlice.reducer;
