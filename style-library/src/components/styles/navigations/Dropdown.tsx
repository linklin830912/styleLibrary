import React, { useState } from "react";
import style from "./styles/dropdownStyle.module.css";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import StatusType from "../../enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";

type dropdownProps = {
  defaultOption: string;
  options: string[];
  size?: HeaderType;
  status?: StatusType;
  onValueChange: (value: string) => void;
};

function Dropdowm(props: dropdownProps) {
  const defaultSize = HeaderType.h4;
  const defaultStatus = StatusType.basic;

  const status = convertStatusToStyle(style, props.status || defaultStatus);
  const size = convertHeaderToStyle(style, props.size || defaultSize);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.defaultOption);
  return (
    <div className={`${style.container_div} ${status} ${size}`}>
      <div className={style.select_div}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div>
            <Header
              size={props.size || defaultSize}
              status={props.status || defaultStatus}
              value0={value}
            />
          </div>
        </button>
      </div>
      <div className={style.options_div} style={{ opacity: isOpen ? 1 : 0 }}>
        <button
          disabled={isOpen ? false : true}
          onClick={() => {
            handleOptionClick(props.defaultOption);
          }}
        >
          <div>
            <Header
              size={props.size || defaultSize}
              status={props.status || defaultStatus}
              value0={props.defaultOption}
            />
          </div>
        </button>

        {props.options.map((option) => (
          <button
            disabled={isOpen ? false : true}
            onClick={() => {
              handleOptionClick(option);
            }}
          >
            <div>
              <Header
                size={props.size || defaultSize}
                status={props.status || defaultStatus}
                value0={option}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  function handleOptionClick(value: string) {
    setIsOpen(false);
    setValue(value);
    props.onValueChange(value);
  }
}

export default Dropdowm;
