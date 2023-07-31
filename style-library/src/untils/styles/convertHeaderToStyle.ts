import HeaderType from "../../components/enums/HeaderType";

export function convertHeaderToStyle(
  style: {
    [key: string]: string;
  },
  size: HeaderType
) {
  return style[size];
}
