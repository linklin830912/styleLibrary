import StatusType from "../../components/generals/enums/StatusType";

export function convertStatusToStyle(
  style: {
    [key: string]: string;
  },
  status: StatusType
): string {
  return style[status];
}
