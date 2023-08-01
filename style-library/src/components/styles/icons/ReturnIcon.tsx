import React from "react";
import StatusType from "../../enums/StatusType";
import style from "./styles/iconStyle.module.css";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type returnIconProps = {
  status?: StatusType;
};

function ReturnIcon(props: returnIconProps) {
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.fill} ${statusStyle}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="returnIcon-mask0">
        <rect
          x="0"
          y="0"
          width="10"
          height="10"
          fill="white"
          className={style.white_fill}
        />
        <path
          d="M2.16,5.37c0,1.68,1.37,3.05,3.05,3.05s3.05-1.37,3.05-3.05S6.9,2.32,5.21,2.32l1.16-0.73"
          stroke="black"
          className={style.black_stroke}
          fill="transparent"
          strokeWidth="0.3px"
        />
      </mask>
      <path
        mask="url(#returnIcon-mask0)"
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default ReturnIcon;
