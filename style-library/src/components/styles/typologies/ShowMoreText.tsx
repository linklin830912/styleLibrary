import React, { useMemo, useState } from "react";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import StatusType from "../../enums/StatusType";
import style from "./styles/showMoreTextStyle.module.css";
import ArrowIcon from "../icons/ArrowIcon";

type showMoreTextProps = {
  value: string;
  limitTextCount: number;
  size?: HeaderType;
  status?: StatusType;
};

function ShowMoreText(props: showMoreTextProps) {
  const [isMore, setIsMore] = useState<boolean>(false);
  const defaultSize = HeaderType.h4;
  const defaultStatus = StatusType.basic;

  const value = useMemo<string>(() => {
    return isMore ? props.value : props.value.slice(0, props.limitTextCount);
  }, [isMore, props.limitTextCount, props.value]);

  return (
    <div className={style.container_div}>
      <Header size={props.size || defaultSize} value0={value} isInline />
      <button className={style.container_button} onClick={handleOnClick}>
        <ArrowIcon
          size={props.size || defaultSize}
          status={props.status || defaultStatus}
          rotate={isMore ? 180 : 0}
        />
      </button>
    </div>
  );
  function handleOnClick() {
    setIsMore(!isMore);
  }
}

export default ShowMoreText;
