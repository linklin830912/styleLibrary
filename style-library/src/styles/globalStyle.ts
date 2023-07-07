import { css } from "@emotion/react";
import { themeSpliceType } from "../feature/themeSlice";

function globalStyle(theme: themeSpliceType) {
  return css({
    body: {
      padding: 0,
      margin: 0,
      "--main-color": theme.mainColor,
      "--background-color": theme.backgroundColor,
      "--util-color": theme.utilColor,
      "--warning-color": theme.warningColor,
    },
  });
}

export default globalStyle;
