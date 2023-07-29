import React, { useMemo } from "react";
import Header from "../../generals/Headers/Header";
import buttonProps, { defaultButtonProps } from "./props/buttonProps";
import style from "./styles/buttonStyle.module.css";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

/**link's note: remeber addon styles also have to be import here */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import pressButtonStyle from "./styles/pressButtonStyle.module.css";

function Button(props: buttonProps) {
  const className = useMemo<string>(() => {
    const statusStyle = convertStatusToStyle(
      style,
      props.status || defaultButtonProps.status
    );
    return `${statusStyle} 
        ${props.addonStyle}
        ${props.isRoundCornered ? style.round : style.square}
        ${props.isStretch ? style.fit : style.stretch} 
        ${style.container_button} `;
  }, [props.addonStyle, props.isRoundCornered, props.isStretch, props.status]);

  return (
    <button className={className} type="button" onClick={props.onClick}>
      <div>
        <Header
          status={props.status}
          headerType={props.size || defaultButtonProps.size}
          value={props.title}
          isOffsets={props.isOffset}
          isWhiteSpace
        />
        <div></div>
      </div>
    </button>
  );
}

export default Button;
