import React from "react";
import { Global, css } from "@emotion/react";
import {
  convertRgbTransparency,
  convertToRgba,
} from "../src/untils/styles/convertToRgba";

function GlobalStorybookStyle() {
  const maskFloat = convertToRgba(255, 255, 255, 0.3);
  const maskSink = convertToRgba(0, 0, 0, 0.3);

  const textShadow = `1px 1px 0.3em ${convertRgbTransparency(
    maskSink,
    0.8
  )}, 0px 0px 0.1em ${convertRgbTransparency(maskSink, 1)}`;

  const mainColor = convertToRgba(16, 115, 58);
  const backgroundColor = convertToRgba(66, 112, 183);
  const disabledColor = convertToRgba(220, 220, 220);
  const dangerColor = convertToRgba(237, 24, 73);
  const ghostedColor = convertToRgba(183, 168, 210);
  const specialColor = convertToRgba(254, 227, 54);
  const basicColor = convertToRgba(225, 225, 225);

  const mainColorShade = convertRgbTransparency(mainColor, 0.55);
  const mainColorFont = convertToRgba(225, 225, 225);

  const backgroundColorShade = convertRgbTransparency(backgroundColor, 0.55);
  const backgroundColorFont = convertToRgba(225, 225, 225);

  const disabledColorShade = convertRgbTransparency(disabledColor, 0.55);
  const disabledColorFont = convertToRgba(225, 225, 225);

  const dangerColorShade = convertRgbTransparency(dangerColor, 0.55);
  const dangerColorFont = convertToRgba(225, 225, 225);

  const ghostedColorShade = convertRgbTransparency(ghostedColor, 0.55);
  const ghostedColorFont = convertToRgba(225, 225, 225);

  const specialColorShade = convertRgbTransparency(specialColor, 0.55);
  const specialColorFont = convertToRgba(225, 225, 225);

  const basicColorShade = convertRgbTransparency(basicColor, 0.55);
  const basicColorFont = convertToRgba(150, 150, 150);

  const buttonBorderWidth = "3px";

  const headerFontFamily = `Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`;
  const subHeaderFontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;

  const boxShadow = "2px 2px 8px 1px";
  const boxShadowFloat = "0px 0px 10px 0px";
  const boxShadowSink = "0px 2px 10px 0px";

  const animationTransform = "translate(0px, -1px)";
  const animationTransformFloat = "translate(0px, -1px)";
  const animationTransformSink = "translate(0px, 1px)";

  const cornerFillet = "3px";

  const fontSizeHeader1 = "36px";
  const fontSizeHeader2 = "28px";
  const fontSizeHeader3 = "24px";
  const fontSizeHeader4 = "18px";
  const fontSizeHeader5 = "16px";
  const fontSizeHeader6 = "12px";

  return (
    <Global
      styles={css({
        body: {
          "h1, h2, h3, h4, h5, h6": { margin: 0, padding: 0 },

          h1: { fontSize: fontSizeHeader1, fontWeight: "bolder" },
          h2: { fontSize: fontSizeHeader2, fontWeight: "bolder" },
          h3: { fontSize: fontSizeHeader3, fontWeight: "bold" },
          h4: { fontSize: fontSizeHeader4, fontWeight: "light" },
          h5: { fontSize: fontSizeHeader5, fontWeight: "lighter" },
          h6: { fontSize: fontSizeHeader6, fontWeight: "lighter" },

          "--font-size-h1": fontSizeHeader1,
          "--font-size-h2": fontSizeHeader2,
          "--font-size-h3": fontSizeHeader3,
          "--font-size-h4": fontSizeHeader4,
          "--font-size-h5": fontSizeHeader5,
          "--font-size-h6": fontSizeHeader6,

          "--text-shadow": textShadow,

          "--header-font-family": headerFontFamily,
          "--sub-header-font-family": subHeaderFontFamily,

          "--box-shadow": boxShadow,
          "--box-shadow-float": boxShadowFloat,
          "--box-shadow-sink": boxShadowSink,

          "--button-border-width": buttonBorderWidth,

          "--mask-float": maskFloat,
          "--mask-sink": maskSink,

          "--animation-transform": animationTransform,
          "--animation-transform-float": animationTransformFloat,
          "--animation-transform-sink": animationTransformSink,

          "--corner-fillet": cornerFillet,

          "--main-color": mainColor,
          "--main-color-shade": mainColorShade,
          "--main-color-font": mainColorFont,

          "--background-color": backgroundColor,
          "--background-color-shade": backgroundColorShade,
          "--background-color-font": backgroundColorFont,

          "--disabled-color": disabledColor,
          "--disabled-color-shade": disabledColorShade,
          "--disabled-color-font": disabledColorFont,

          "--danger-color": dangerColor,
          "--danger-color-shade": dangerColorShade,
          "--danger-color-font": dangerColorFont,

          "--ghosted-color": ghostedColor,
          "--ghosted-color-shade": ghostedColorShade,
          "--ghosted-color-font": ghostedColorFont,

          "--special-color": specialColor,
          "--special-color-shade": specialColorShade,
          "--special-color-font": specialColorFont,

          "--basic-color": basicColor,
          "--basic-color-shade": basicColorShade,
          "--basic-color-font": basicColorFont,
        },
      })}
    />
  );
}

export default GlobalStorybookStyle;
