import { createSlice } from "@reduxjs/toolkit";

export type colorSliceType = {
  mainColor: string;
  backgroundColor: string;
  panelColor: string;
  utilColor: string;
  warningColor: string;
  shadowColor: string;
};

const colorSlice = createSlice({
  name: "theme",
  initialState: {
    mainColor: "blue",
    backgroundColor: "violet",
    panelColor: "pink",
    utilColor: "white",
    warningColor: "brown",
    shadowColor: "orange",
  } as colorSliceType,
  reducers: {
    handleColorChange: (state, action) => {},
  },
});

export const { handleColorChange } = colorSlice.actions;
export default colorSlice.reducer;
