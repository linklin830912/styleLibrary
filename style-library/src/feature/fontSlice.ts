import { createSlice } from "@reduxjs/toolkit";

type fontSliceType = {
  mainFont: string;
  untilFont: string;
};

const fontSlice = createSlice({
  name: "font",
  initialState: {
    mainFont: `1.2em "Fira Sans", sans-serif`,
    untilFont: "",
  } as fontSliceType,
  reducers: {
    handleFontChange: (state, action) => {},
  },
});

export const { handleFontChange } = fontSlice.actions;
export default fontSlice.reducer;
