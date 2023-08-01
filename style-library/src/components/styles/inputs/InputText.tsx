import React, { useRef, useEffect } from "react";
import HeaderType from "../../enums/HeaderType";
import style from "./styles/inputTextStyle.module.css";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";
import StatusType from "../../enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type inputTextProps = {
  status?: StatusType;
  size?: HeaderType;
  value?: string;
  onLoad?: () => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
};

function InputText(props: inputTextProps) {
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const status = convertStatusToStyle(style, props.status || StatusType.basic);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!props.onLoad) return;
    props.onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [textareaRef]);

  return (
    <textarea
      className={`${style.textarea} ${size} ${status}`}
      onChange={props.onChange}
      onBlur={props.onBlur}
      defaultValue={props.value}
      ref={textareaRef}
    />
  );
}

export default InputText;
