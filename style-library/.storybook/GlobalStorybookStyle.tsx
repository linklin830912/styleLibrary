import React from "react";
import { Global, css } from "@emotion/react";
import {
  convertRgbTransparency,
  convertToRgba,
} from "../src/untils/styles/convertToRgba";

function GlobalStorybookStyle() {
  const maskFloat = convertToRgba(255, 255, 255, 0.3);
  const maskSink = convertToRgba(0, 0, 0, 0.3);

  const mainColor = convertToRgba(16, 115, 58);
  const backgroundColor = convertToRgba(66, 112, 183);
  const disabledColor = convertToRgba(220, 220, 220);
  const dangerColor = convertToRgba(237, 24, 73);
  const ghostedColor = convertToRgba(183, 168, 210);
  const specialColor = convertToRgba(254, 227, 54);

  const mainColorShade = convertRgbTransparency(mainColor, 0.95);
  const mainColorFont = convertToRgba(225, 225, 225);

  const backgroundColorShade = convertRgbTransparency(backgroundColor, 0.95);
  const backgroundColorFont = convertToRgba(225, 225, 225);

  const disabledColorShade = convertRgbTransparency(disabledColor, 0.95);
  const disabledColorFont = convertToRgba(225, 225, 225);

  const dangerColorShade = convertRgbTransparency(dangerColor, 0.95);
  const dangerColorFont = convertToRgba(225, 225, 225);

  const ghostedColorShade = convertRgbTransparency(ghostedColor, 0.95);
  const ghostedColorFont = convertToRgba(225, 225, 225);

  const specialColorShade = convertRgbTransparency(specialColor, 0.95);
  const specialColorFont = convertToRgba(225, 225, 225);

  const boxShadow = "5px 2px 8px 1px";
  const boxShadowFloat = "0px 0px 10px 0px";
  const boxShadowSink = "0px 2px 10px 0px";

  const animationTransform = "translate(0px, -1px)";
  const animationTransformFloat = "translate(0px, -1px)";
  const animationTransformSink = "translate(0px, 1px)";

  const cornerFillet = "3px";

  return (
    <Global
      styles={css({
        body: {
          "h1, h2, h3, h4, h5, h6": { margin: 0, padding: 0 },
          "--box-shadow": boxShadow,
          "--box-shadow-float": boxShadowFloat,
          "--box-shadow-sink": boxShadowSink,

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
        },
      })}
    />
  );
}

export default GlobalStorybookStyle;
