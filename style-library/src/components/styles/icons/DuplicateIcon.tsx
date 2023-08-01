import React from "react";
import style from "./styles/iconStyle.module.css";
import StatusType from "../../enums/StatusType";
import HeaderType from "../../enums/HeaderType";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type duplicateIconProps = {
  size?: HeaderType;
  status?: StatusType;
};

function DuplicateIcon(props: duplicateIconProps) {
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.fill} ${statusStyle} ${size}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="duplicateIcon-mask0">
        <rect x="0" y="0" width="10" height="10" className={style.white_fill} />
        <path
          className={`${style.white_fill} ${style.black_stroke}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1.8,6.88"
        />
        <polygon
          className={`${style.white_fill} ${style.black_stroke}`}
          strokeWidth={"0.3px"}
          strokeLinecap="round"
          strokeLinejoin="round"
          points="3.21,6.12 3.21,1.82 7.74,1.82 7.74,7.92 5.42,7.92 "
        />
        <polygon
          className={`${style.white_fill} ${style.black_stroke}`}
          strokeWidth={"0.3px"}
          strokeLinecap="round"
          strokeLinejoin="round"
          points="2.26,6.77 2.26,2.46 6.79,2.46 6.79,8.56 4.48,8.56 "
        />
        <polygon
          className={`${style.white_fill} ${style.black_stroke}`}
          strokeWidth={"0.3px"}
          strokeLinecap="round"
          strokeLinejoin="round"
          points="2.26,6.77 3.87,6.31 4.48,8.56 "
        />
      </mask>
      <path
        mask="url(#duplicateIcon-mask0)"
        strokeWidth={"0.3px"}
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default DuplicateIcon;
