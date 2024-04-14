import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialProfileState } from "./initializes";

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setBirthDay: (state, action: PayloadAction<string>) => {
      state.birth__day = action.payload;
    },
    setTellNumber: (state, action: PayloadAction<string>) => {
      state.tellNumber = action.payload;
    },
    setImageData: (state, action: PayloadAction<string>) => {
      state.imageData = action.payload;
    },
  },
});

// actionをエクスポート
export const { setName, setBirthDay, setTellNumber, setImageData } =
  profileSlice.actions;

// reducerをエクスポート
export const profileReducer = profileSlice.reducer;
