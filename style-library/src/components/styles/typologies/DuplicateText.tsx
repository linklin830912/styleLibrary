import React, { useState } from "react";
import style from "./styles/duplicateTextStyle.module.css";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import DuplicateIcon from "../icons/DuplicateIcon";
import CheckedIcon from "../icons/CheckedIcon";
import StatusType from "../../enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type duplicateTextProps = {
  value: string;
  size?: HeaderType;
  status?: StatusType;
};
function DuplicateText(props: duplicateTextProps) {
  const defaultSize = HeaderType.h4;
  const defaultStatus = StatusType.basic;
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const status = convertStatusToStyle(style, props.status || defaultStatus);
  return (
    <div className={`${style.container_div} ${status}`}>
      <Header
        size={props.size || defaultSize}
        status={props.status}
        value0={props.value}
        isInline
      />
      <button className={style.container_button} onClick={handleOnClick}>
        {isCopied ? (
          <CheckedIcon size={props.size} status={props.status} />
        ) : (
          <DuplicateIcon size={props.size} status={props.status} />
        )}
      </button>
    </div>
  );

  function handleOnClick() {
    navigator.clipboard.writeText(props.value);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }
}

export default DuplicateText;
