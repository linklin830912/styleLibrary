import StatusType from "../../components/enums/StatusType";

export function convertStatusToStyle(
  style: {
    [key: string]: string;
  },
  status: StatusType
): string {
  return style[status];
}
