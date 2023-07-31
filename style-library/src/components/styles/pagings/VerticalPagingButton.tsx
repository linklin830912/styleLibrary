import React, { useRef } from "react";
import style from "./styles/verticalPagingButtonStyle.module.css";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import StatusType from "../../enums/StatusType";

type verticalPagingButtonProps = {
  onLoad?: (x: number) => void;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  status?: StatusType;
};
function VerticalPagingButton(props: verticalPagingButtonProps) {
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
        <div className={style.top_svg}>
          <svg viewBox="0 0 35 10">
            <circle cx="5" cy="5" r="5" />
            <circle cx="17.5" cy="5" r="5" />
            <circle cx="30" cy="5" r="5" />
          </svg>
        </div>
        <div className={style.bottom_svg}>
          <svg viewBox="0 0 35 10">
            <circle cx="5" cy="5" r="5" />
            <circle cx="17.5" cy="5" r="5" />
            <circle cx="30" cy="5" r="5" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default VerticalPagingButton;
