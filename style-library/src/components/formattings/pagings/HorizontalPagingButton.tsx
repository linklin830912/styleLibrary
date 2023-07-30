import React, { useRef } from "react";
import style from "./styles/horizontalPagingButtonStyle.module.css";
import StatusType from "../../generals/enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type horizontalPagingButtonProps = {
  onLoad?: (x: number) => void;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  status?: StatusType;
};

function HorizontalPagingButton(props: horizontalPagingButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.container_button} ${statusStyle}`;
  return (
    <button
      className={className}
      ref={buttonRef}
      onMouseDown={props.onMouseDown}
    >
      <div className={style.button_div}>
        <div className={style.left_svg}>
          <svg viewBox="0 0 10 35">
            <circle cx="5" cy="5" r="5" />
            <circle cx="5" cy="17.5" r="5" />
            <circle cx="5" cy="30" r="5" />
          </svg>
        </div>
        <div className={style.right_svg}>
          <svg viewBox="0 0 10 35">
            <circle cx="5" cy="5" r="5" />
            <circle cx="5" cy="17.5" r="5" />
            <circle cx="5" cy="30" r="5" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default HorizontalPagingButton;
