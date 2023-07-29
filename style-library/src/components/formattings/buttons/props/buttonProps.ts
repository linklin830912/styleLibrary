import HeaderType from "../../../generals/enums/HeaderType";
import StatusType from "../../../generals/enums/StatusType";

type buttonProps = {
  title: string;
  onClick: () => void;
  status?: StatusType;
  size?: HeaderType;
  isRoundCornered?: boolean;
  isStretch?: boolean;
  isOffset?: boolean;
  addonStyle?: string;
};

export const defaultButtonProps = {
  title: "title",
  status: StatusType.main,
  size: HeaderType.h4,
  isRoundCornered: true,
  isStretch: false,
};

export default buttonProps;
