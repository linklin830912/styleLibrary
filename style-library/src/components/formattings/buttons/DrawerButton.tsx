import React from "react";
import style from "./drawerButtonStyle.module.css";
import isTrue from "../../../untils/generals/isTrue";

type drawerButtonProps = {
  onMouseDown: () => void;
  isFlipped?: boolean;
};

function DrawerButton(props: drawerButtonProps) {
  return (
    <>
      <button
        className={style.container_button}
        onMouseDown={props.onMouseDown}
      >
        <div
          className={
            isTrue(props.isFlipped) ? style.flipped_div : style.notFlipped_div
          }
        >
          <div className={style.filled_div}></div>
          <div>
            <div className={style.filled_div}></div>
            <div className={style.filled_div}></div>
            <div className={style.filled_div}></div>
          </div>
        </div>
      </button>
    </>
  );
}
export default DrawerButton;
