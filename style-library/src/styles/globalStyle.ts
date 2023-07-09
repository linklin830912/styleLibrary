import { css } from "@emotion/react";
import { colorSliceType } from "../feature/colorSlice";

function globalStyle(color: colorSliceType) {
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
      font: "2.5rem Fira Sans sans-serif",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1rem",
      margin: "0px",
    },
    h5: {
      fontSize: "0.8rem",
    },
    h6: {
      fontSize: "0.5rem",
    },
    "input[type=text]": {
      outline: "none",
    },
  });
}

export default globalStyle;
