import React from "react";
import StatusType from "../../enums/StatusType";
import style from "./styles/iconStyle.module.css";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import HeaderType from "../../enums/HeaderType";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";

type moreIconProps = {
  status?: StatusType;
  size?: HeaderType;
};

function MoreIcon(props: moreIconProps) {
  const status = convertStatusToStyle(style, props.status || StatusType.basic);
  const size = convertHeaderToStyle(style, props.size || HeaderType.h4);
  const className = `${style.fill} ${status} ${size}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="moreIcon-mask0">
        <rect
          x="0"
          y="0"
          width="10"
          height="10"
          fill="white"
          className={style.white_fill}
        />
        <circle cx="1.91" cy="4.69" r="0.83" className={style.black_fill} />
        <circle cx="5" cy="4.69" r="0.83" className={style.black_fill} />
        <circle cx="8.08" cy="4.69" r="0.83" className={style.black_fill} />
      </mask>
      <path
        mask="url(#moreIcon-mask0)"
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default MoreIcon;
