import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: {

  }
})

export const {} = authSlice.actions

export default authSlice.reducer