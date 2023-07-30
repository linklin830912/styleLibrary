import React from "react";
import pressButtonStyle from "./styles/pressButtonStyle.module.css";
import buttonProps from "./props/buttonProps";
import Button from "./Button";

type pressButtonProps = Omit<buttonProps, "addonStyle">;

function PressButton(props: pressButtonProps) {
  return (
    <Button
      title={props.title}
      onClick={props.onClick}
      size={props.size}
      status={props.status}
      isRoundCornered={props.isRoundCornered}
      isSub={props.isSub}
      isOffset={props.isOffset}
      isStretch={props.isStretch}
      addonStyle={pressButtonStyle.press}
    />
  );
}

export default PressButton;
