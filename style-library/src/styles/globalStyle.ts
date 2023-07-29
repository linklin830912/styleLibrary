import { css } from "@emotion/react";
import { colorSliceType } from "../feature/colorSlice";
import { fontSliceType } from "../feature/fontSlice";

function globalStyle(color: colorSliceType, font: fontSliceType) {
  return css({
    html: {
      fontSize: "12px",
      borderWidth: "1px",
    },
    body: {
      padding: 0,
      margin: 0,

      "--main-color": color.mainColor,
      "--background-color": color.backgroundColor,
      "--panel-color": color.panelColor,
      "--util-color": color.utilColor,
      "--warning-color": color.warningColor,
      "--shadow-color": color.shadowColor,
      "--border-color": color.mainColor,
      "--font-main-color": color.mainColor,

      "--main-font": font.mainFont,
      "--util-font": font.untilFont,

      "--input-text-margin-bottom": "5px",
      "--input-text-margin-right": "10px",
      "--input-text-shadow-box":
        "var(--input-text-margin-right) var(--input-text-margin-bottom) 10px 1px",

      "--panel-border-radius": "5px",
      "--panel-border": "solid 5px var(--panel-color)",
      "--panel-header-divide-line": "solid 1px var(--main-color)",

      "--input-text-border": `2px solid var(--border-color)`,
      "--input-text-border-focus": `2.5px solid var(--border-color)`,
      "--input-text-border-radius": "8px",
    },
    h1: {
      font: font.mainFont,
      margin: "0px",
    },
    h2: {
      font: font.mainFont,
      fontSize: "2rem",
      margin: "0px",
    },
    h3: {
      font: font.mainFont,
      fontSize: "1.5rem",
    },
    h4: {
      font: font.mainFont,
      fontSize: "1rem",
      margin: "0px",
    },
    h5: {
      font: font.mainFont,
      fontSize: "0.8rem",
    },
    h6: {
      font: font.mainFont,
      fontSize: "0.5rem",
    },
    "input[type=text]": {
      outline: "none",
    },
  });
}

export default globalStyle;
