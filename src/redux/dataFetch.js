import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
  search: null,
};

export const Data = createAsyncThunk("DataRetrive", async () => {
  const responce = await axios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=49f094204a52eadc5e4928ca558eceeb"
  );
  return responce;
});
export const fetchOne = createAsyncThunk("fetchOneData", async (input) => {
  const responce = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=49f094204a52eadc5e4928ca558eceeb`
  );
  return responce;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(Data.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(Data.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = false;
    })
    .addCase(Data.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchOne.fulfilled, (state, action) => {
      state.isLoading = false;
      state.search = action.payload;
    })
   
  },
});
// Action creators are generated for each case reducer function

export default dataSlice.reducer;
