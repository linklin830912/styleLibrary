import React from "react";
import StatusType from "../../enums/StatusType";
import style from "./styles/editIconStyle.module.css";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";

type editIconProps = {
  status?: StatusType;
};

function EditIcon(props: editIconProps) {
  const statusStyle = convertStatusToStyle(
    style,
    props.status || StatusType.basic
  );
  const className = `${style.fill} ${statusStyle}`;
  return (
    <svg x="0px" y="0px" viewBox="0 0 10 10" className={className}>
      <mask id="editIcon-mask0">
        <rect
          x="0"
          y="0"
          width="10"
          height="10"
          fill="white"
          className={style.white_fill}
        />
        <polygon
          points="4.17,7.38 3.03,7.9 3.26,6.67 7.44,1.31 8.35,2.02 "
          stroke="black"
          className={style.black_stroke}
          fill="transparent"
          strokeWidth="0.3px"
        />
        <line
          x1="1.18"
          y1="8.64"
          x2="8.79"
          y2="8.64"
          className={style.black_stroke}
          stroke="black"
          strokeWidth="0.8px"
        />
      </mask>
      <path
        mask="url(#editIcon-mask0)"
        d="M7.67,10H2.33C1.04,10,0,8.96,0,7.67V2.33C0,1.04,1.04,0,2.33,0h5.35C8.96,0,10,1.04,10,2.33v5.35C10,8.96,8.96,10,7.67,10z"
        className={style.path}
      />
    </svg>
  );
}

export default EditIcon;
