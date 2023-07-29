import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import { defaultButtonProps } from "../../formattings/buttons/props/buttonProps";
import HeaderType from "../enums/HeaderType";
import StatusType from "../enums/StatusType";
import noOffsetStyle from "./styles/headerNoOffsetStyle.module.css";
import offsetStyle from "./styles/headerOffsetStyle.module.css";
import style from "./styles/headerStyle.module.css";
import isTrue from "../../../untils/generals/isTrue";

type headerProps = {
  headerType: HeaderType;
  status?: StatusType;
  value: string;
  isOffsets?: boolean;
  isWhiteSpace?: boolean;
};

function Header(props: headerProps) {
  const statusStyle = convertStatusToStyle(
    isTrue(props.isOffsets) ? noOffsetStyle : offsetStyle,
    props.status || defaultButtonProps.status
  );
  const className = `${statusStyle} ${props.isWhiteSpace ? style.inline : ""} 
  ${style.header}`;

  switch (props.headerType) {
    case HeaderType.h1:
      return <h1 className={className}>{props.value}</h1>;
    case HeaderType.h2:
      return <h2 className={className}>{props.value}</h2>;
    case HeaderType.h3:
      return <h3 className={className}>{props.value}</h3>;
    case HeaderType.h4:
      return <h4 className={className}>{props.value}</h4>;
    case HeaderType.h5:
      return <h5 className={className}>{props.value}</h5>;
    case HeaderType.h6:
      return <h6 className={className}>{props.value}</h6>;
  }
}

export default Header;
