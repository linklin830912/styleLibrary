import React from "react";
import borderButtonStyle from "./styles/borderButtonStyle.module.css";
import buttonProps from "./props/buttonProps";
import Button from "./Button";

type borderButtonProps = Omit<buttonProps, "className">;

function BorderButton(props: borderButtonProps) {
  return (
    <Button
      title={props.title}
      onClick={props.onClick}
      size={props.size}
      status={props.status}
      isRoundCornered={props.isRoundCornered}
      isStretch={props.isStretch}
      addonStyle={borderButtonStyle.press}
    />
  );
}

export default BorderButton;
