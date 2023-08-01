import React, { useState, useRef } from "react";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import EditIcon from "../icons/EditIcon";
import StatusType from "../../enums/StatusType";
import style from "./styles/editableTextStyle.module.css";
import InputText from "../inputs/InputText";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import DuplicateIcon from "../icons/DuplicateIcon";
import CheckedIcon from "../icons/CheckedIcon";

type editableTextProps = {
  size?: HeaderType;
  status?: StatusType;
  defaultValue: string;
  limitTextCount?: number;
};

function EditableText(props: editableTextProps) {
  const [value, setValue] = useState<string>(props.defaultValue);
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [textCount, setTextCount] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDanger, setIsDanger] = useState<boolean>(false);

  const defaultStatus = StatusType.basic;

  const status = isDanger ? StatusType.danger : props.status || defaultStatus;

  const statusStyle = convertStatusToStyle(style, status);

  const outputDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${style.container_div} ${statusStyle}`}>
      <div
        className={style.output_div}
        ref={outputDivRef}
        style={{ opacity: isEditing ? 0 : 1 }}
      >
        <Header
          isSub={true}
          isOffsets={false}
          size={props.size || HeaderType.h4}
          value0={value}
          status={status}
        >
          <button className={style.container_button} onClick={handleOnClick}>
            <EditIcon size={props.size} status={status} />
          </button>
        </Header>
      </div>

      <div
        className={style.input_div}
        style={{
          width: width,
          height: height,
          opacity: isEditing ? 1 : 0,
          zIndex: isEditing ? 1 : -1,
        }}
      >
        <InputText
          value={value}
          status={status}
          size={props.size || HeaderType.h4}
          onLoad={handleInputTextOnLoad}
          onChange={(e) => handleValueChange(e)}
          onBlur={handleOnBlur}
        />
        {props.limitTextCount && (
          <div className={style.limit_div}>
            <Header
              isSub={true}
              size={HeaderType.h6}
              status={status}
              value0={`${textCount}/${props.limitTextCount}`}
            />
          </div>
        )}
      </div>
    </div>
  );

  function handleInputTextOnLoad() {
    checkInputText(props.defaultValue);
    resize();
  }
  function handleOnClick() {
    setIsEditing(!isEditing);
  }
  function handleValueChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    checkInputText(e.currentTarget.value);
    resize();
  }
  function handleOnBlur() {
    setIsEditing(!isDanger ? false : true);
  }

  function checkInputText(text: string) {
    if (!props.limitTextCount) return;

    const val = text.split(" ");
    if (val.length > props.limitTextCount) {
      setIsDanger(true);
      setValue(val.slice(0, props.limitTextCount).join(" "));
      setTextCount(props.limitTextCount);
    } else {
      setIsDanger(false);
      setValue(text);
      setTextCount(val.length);
    }
  }
  function resize() {
    if (!outputDivRef.current?.offsetHeight) return;

    setWidth(outputDivRef.current?.offsetWidth);
    setHeight(outputDivRef.current?.offsetHeight);
  }
}

export default EditableText;
