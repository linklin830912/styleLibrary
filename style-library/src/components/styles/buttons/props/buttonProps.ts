import HeaderType from "../../../enums/HeaderType";
import StatusType from "../../../enums/StatusType";

type buttonProps = {
  title: string;
  onClick: () => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  status?: StatusType;
  size?: HeaderType;
  isRoundCornered?: boolean;
  isStretch?: boolean;
  isOffset?: boolean;
  addonStyle?: string;
  maskDivX?: number;
  maskDivY?: number;
  isSub?: boolean;
};

export const defaultButtonProps = {
  title: "title",
  status: StatusType.main,
  size: HeaderType.h4,
  isRoundCornered: true,
  isStretch: false,
};

export default buttonProps;
