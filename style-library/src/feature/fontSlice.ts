import { createSlice } from "@reduxjs/toolkit";

export type fontSliceType = {
  mainFont: string;
  untilFont: string;
};

const fontSlice = createSlice({
  name: "font",
  initialState: {
    mainFont: `"Fira Sans", sans-serif`,
    untilFont: `italic small-caps normal 16px/2 cursive`,
  } as fontSliceType,
  reducers: {
    handleFontChange: (state, action) => {},
  },
});

export const { handleFontChange } = fontSlice.actions;
export default fontSlice.reducer;
