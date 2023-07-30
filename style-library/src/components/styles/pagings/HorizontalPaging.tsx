import React, { useState, useRef } from "react";
import style from "./styles/horizontalPagingStyle.module.css";
import HorizontalPagingButton from "./HorizontalPagingButton";
import StatusType from "../generals/enums/StatusType";

type horizontalPagingProps = {
  defaultLeft?: number;
  defaultRight?: number;
  status?: StatusType;
  left?: JSX.Element;
  mid: JSX.Element;
  right?: JSX.Element;
};

function HorizontalPaging(props: horizontalPagingProps) {
  const [draggingIndex, setDraggingIndex] = useState<number>();

  const [leftWidth, setLeftWidth] = useState<number | undefined>(
    props.defaultLeft
  ); //index = 0
  const [rightWidth, setRightWidth] = useState<number | undefined>(
    props.defaultRight
  ); //index = 1

  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const contianerDivRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={style.container_div}
      ref={contianerDivRef}
      onMouseUp={() => {
        clearDragging();
      }}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      {props.left && (
        <>
          <div
            className={style.left_div}
            ref={leftDivRef}
            style={{ width: leftWidth }}
          >
            {props.left}
          </div>

          <div className={style.left_button_div}>
            <HorizontalPagingButton
              status={props.status}
              onMouseDown={() => {
                handleMouseDown(0);
              }}
            />
          </div>
        </>
      )}

      <div className={style.mid_div}>{props.mid}</div>
      {props.right && (
        <>
          <div className={style.right_button_div}>
            <HorizontalPagingButton
              status={props.status}
              onMouseDown={() => {
                handleMouseDown(1);
              }}
            />
          </div>

          <div
            className={style.right_div}
            ref={rightDivRef}
            style={{ width: rightWidth }}
          >
            {props.right}
          </div>
        </>
      )}
    </div>
  );

  function handleMouseDown(index: number): void {
    setDraggingIndex(index);
  }

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    if (draggingIndex === undefined || contianerDivRef.current === undefined) {
      return;
    } else if (draggingIndex === 0) {
      setLeftWidth(e.pageX);
    } else if (draggingIndex === 1) {
      setRightWidth(calcRightWidth(e.pageX));
    }
  }

  function clearDragging() {
    setDraggingIndex(undefined);
  }

  function calcRightWidth(x: number) {
    if (contianerDivRef.current?.offsetWidth === undefined) return;
    return contianerDivRef.current?.offsetWidth - x;
  }
}

export default HorizontalPaging;
