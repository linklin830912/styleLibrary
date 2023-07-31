import React, { useState, useRef } from "react";
import style from "./styles/verticalPagingStyle.module.css";
import StatusType from "../../enums/StatusType";
import throttle from "lodash/throttle";
import VerticalPagingButton from "./VerticalPagingButton";

type verticalPagingProps = {
  defaultTop?: number;
  defaultBottom?: number;
  status?: StatusType;
  top?: JSX.Element;
  mid: JSX.Element;
  bottom?: JSX.Element;
};

function VerticalPaging(props: verticalPagingProps) {
  const [draggingIndex, setDraggingIndex] = useState<number>();

  const [topHeight, setTopHeighth] = useState<number | undefined>(
    props.defaultTop
  ); //index = 0
  const [midHeight, setMidHeight] = useState<number | undefined>(
    props.defaultBottom
  ); //index = 1

  const topDivRef = useRef<HTMLDivElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const contianerDivRef = useRef<HTMLDivElement>(null);
  const throttledHandleMouseMove = throttle(handleMouseMove, 500);
  return (
    <div
      className={style.container_div}
      ref={contianerDivRef}
      onMouseUp={() => {
        clearDragging();
      }}
      onMouseMove={(e) => {
        throttledHandleMouseMove(e);
      }}
    >
      {props.top && (
        <>
          <div
            className={style.top_div}
            ref={topDivRef}
            style={{ height: topHeight }}
          >
            {props.top}
          </div>

          <div className={style.top_button_div}>
            <VerticalPagingButton
              status={props.status}
              onMouseDown={() => {
                handleMouseDown(0);
              }}
            />
          </div>
        </>
      )}

      <div className={style.mid_div} style={{ height: midHeight }}>
        {props.mid}
      </div>
      {props.bottom && (
        <>
          <div className={style.bottom_button_div}>
            <VerticalPagingButton
              status={props.status}
              onMouseDown={() => {
                handleMouseDown(1);
              }}
            />
          </div>

          <div className={style.bottom_div} ref={bottomDivRef}>
            {props.bottom}
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
      setTopHeighth(e.pageY);
    } else if (draggingIndex === 1) {
      setMidHeight(calcMidHeight(e.pageY));
    }
  }

  function clearDragging() {
    setDraggingIndex(undefined);
  }

  function calcMidHeight(y: number) {
    if (!topHeight) return;
    return y - topHeight;
  }
}

export default VerticalPaging;
