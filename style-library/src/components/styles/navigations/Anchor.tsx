import React, { useRef } from "react";
import style from "./styles/anchorStyle.module.css";
import Header from "../Headers/Header";
import HeaderType from "../../enums/HeaderType";
import StatusType from "../../enums/StatusType";
import { convertLevelToStyle } from "../../../untils/styles/convertLevelToStyle";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";

type anchorProps = {
  title: string;
  href: string;
  isSelected: boolean;
  size: HeaderType;
  status: StatusType;
  level: number;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

function Anchor(props: anchorProps) {
  const level = convertLevelToStyle(style, props.level);
  const status = convertStatusToStyle(style, props.status);
  const size = convertHeaderToStyle(style, props.size);
  console.log(props.href);
  return (
    <a
      href={`#${props.href}`}
      onClick={props.onClick}
      className={`${style.container_button} 
        ${size} 
        ${status} 
        ${props.isSelected ? style.isSelected : ""}`}
    >
      <div className={`${style.button_div} ${level}`}>
        <Header size={props.size} status={props.status} value0={props.title} />
      </div>
    </a>
  );
}
export default Anchor;
