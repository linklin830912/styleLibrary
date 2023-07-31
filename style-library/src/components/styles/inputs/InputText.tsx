import React, { useRef, useState, useEffect } from "react";
import HeaderType from "../../enums/HeaderType";
import style from "./styles/inputTextStyle.module.css";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";
import StatusType from "../../enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type inputTextProps = {
  status?: StatusType;
  size?: HeaderType;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  autoFocus?: boolean;
};

function InputText(props: inputTextProps) {
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const status = convertStatusToStyle(style, props.status || StatusType.basic);
  const [height, setHeight] = useState<number>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    resize();
  }, []);
  return (
    <textarea
      style={{ height: height }}
      className={`${style.textarea} ${size} ${status}`}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onChangeCapture={() => {
        resize();
      }}
      ref={textareaRef}
      defaultValue={props.value}
    />
  );

  function resize() {
    setHeight(textareaRef.current?.scrollHeight);
  }
}

export default InputText;
