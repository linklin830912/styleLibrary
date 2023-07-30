import React, { useState } from "react";
import borderButtonStyle from "./styles/borderButtonStyle.module.css";
import buttonProps from "./props/buttonProps";
import Button from "./Button";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type borderButtonProps = Omit<buttonProps, "className" | "isOffset">;

function BorderButton(props: borderButtonProps) {
  const addonStyle = props.status
    ? `${convertStatusToStyle(borderButtonStyle, props.status)} 
    ${borderButtonStyle.border}`
    : borderButtonStyle.border;
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>();
  return (
    <Button
      title={props.title}
      onClick={props.onClick}
      onMouseDown={handleMouseDown}
      size={props.size}
      status={props.status}
      isRoundCornered={props.isRoundCornered}
      isStretch={props.isStretch}
      isSub={props.isSub}
      addonStyle={addonStyle}
      maskDivX={mousePosition?.x}
      maskDivY={mousePosition?.y}
    />
  );

  function handleMouseDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }
}

export default BorderButton;
