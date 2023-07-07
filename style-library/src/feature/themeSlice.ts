import { createSlice } from "@reduxjs/toolkit";

export type themeSpliceType = {
  mainColor: string;
  backgroundColor: string;
  utilColor: string;
  warningColor: string;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mainColor: "blue",
    backgroundColor: "violet",
    utilColor: "white",
    warningColor: "brown",
  } as themeSpliceType,
  reducers: {
    handleColorChange: (state, action) => {},
  },
});

export const { handleColorChange } = themeSlice.actions;
export default themeSlice.reducer;
