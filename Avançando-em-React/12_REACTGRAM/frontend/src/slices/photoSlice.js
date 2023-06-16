import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";

const initialState = {
  photos: [],
  photo: [],
  error: false,
  success: false,
  loading: false,
  message: null,
};

// funções

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reduces: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
});

export const { resetMessage } = photoSlice.actions;
export default photoSlice.reducer;
