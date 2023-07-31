import React, { useState } from "react";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import EditIcon from "../icons/EditIcon";
import StatusType from "../../enums/StatusType";
import style from "./styles/editableTextStyle.module.css";
import InputText from "../inputs/InputText";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type editableTextProps = {
  size?: HeaderType;
  status?: StatusType;
  defaultValue: string;
};

function EditableText(props: editableTextProps) {
  const [value, setValue] = useState<string>(props.defaultValue);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const status = convertStatusToStyle(style, props.status || StatusType.basic);
  return (
    <div className={`${style.container_div} ${status}`}>
      {isEditing && (
        <InputText
          value={value}
          status={props.status}
          size={props.size || HeaderType.h4}
          onChange={(e) => handleValueChange(e)}
          onBlur={handleOnBlur}
          autoFocus
        />
      )}

      {!isEditing && (
        <>
          <Header
            isOffsets={false}
            headerType={props.size || HeaderType.h4}
            value0={value}
            status={props.status || StatusType.basic}
          >
            <button className={style.container_button} onClick={handleOnClick}>
              <EditIcon status={props.status || StatusType.main} />
            </button>
          </Header>
        </>
      )}
    </div>
  );

  function handleOnClick() {
    setIsEditing(!isEditing);
  }
  function handleValueChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.currentTarget.innerHTML);
  }
  function handleOnBlur() {
    setIsEditing(false);
  }
}

export default EditableText;
