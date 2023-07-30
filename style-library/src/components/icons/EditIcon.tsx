import React from "react";
import StatusType from "../generals/enums/StatusType";
import style from "./styles/editIconStyle.module.css";
import { convertStatusToStyle } from "../../untils/styles/convertStatusToStyle";

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
      <rect x="0px" y="0px" width="10" height="10" className={style.rect} />
      <mask>
        <polygon
          points="4.17,7.38 3.03,7.9 3.26,6.67 7.44,1.31 8.35,2.02 "
          stroke="black"
          strokeWidth="0.5px"
        />
        <line
          x1="0.78"
          y1="8.64"
          x2="9.28"
          y2="8.64"
          stroke="black"
          strokeWidth="1px"
        />
      </mask>
    </svg>
  );
}

export default EditIcon;
