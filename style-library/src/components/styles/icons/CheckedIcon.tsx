import React from "react";
import style from "./styles/iconStyle.module.css";
import StatusType from "../../enums/StatusType";
import HeaderType from "../../enums/HeaderType";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type checkedIconProps = {
  size?: HeaderType;
  status?: StatusType;
};

function CheckedIcon(props: checkedIconProps) {
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.fill} ${statusStyle} ${size}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="ckeckedIcon-mask0">
        <rect x="0" y="0" width="10" height="10" className={style.white_fill} />
        <rect
          className={`${style.black_fill} ${style.black_stroke}`}
          x="2.55"
          y="1.7"
          width="4.9"
          height="6.59"
          strokeWidth={"0.3px"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          className={`${style.white_stroke}`}
          points="3.81,5.32 4.7,6.19 6.19,4.1 "
          strokeWidth={"1px"}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
        />
      </mask>
      <path
        mask="url(#ckeckedIcon-mask0)"
        strokeWidth={"0.3px"}
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default CheckedIcon;
