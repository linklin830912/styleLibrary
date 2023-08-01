import React from "react";
import style from "./styles/iconStyle.module.css";
import StatusType from "../../enums/StatusType";
import HeaderType from "../../enums/HeaderType";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type arrowIconProps = {
  size?: HeaderType;
  status?: StatusType;
  rotate?: number;
};

function ArrowIcon(props: arrowIconProps) {
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.fill} ${statusStyle} ${size}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="arrowIcon-mask0">
        <rect x="0" y="0" width="10" height="10" className={style.white_fill} />
        <g transform={`rotate(${props.rotate || 0}, 5, 5)`}>
          <line
            className={`${style.black_stroke}`}
            strokeWidth={"1px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1="2.15"
            y1="5"
            x2="8.26"
            y2="5"
          />
          <path
            className={`${style.black_stroke}`}
            strokeWidth={"1px"}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            d="M5.26,1.99C5.3,2.04,8.39,5,8.39,5L5.26,8.01"
          />
        </g>
      </mask>
      <path
        mask="url(#arrowIcon-mask0)"
        strokeWidth={"0.3px"}
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default ArrowIcon;
