export function convertToRgba(
  r: number,
  g: number,
  b: number,
  a?: number
): string {
  return `rgba(${r},${g},${b},${a ? a : 1})`;
}
function convertStringToRgbaNumberArray(rgba: string): number[] {
  const cleanData = rgba
    .replace("rgba(", "")
    .replace(")", "")
    .split(",") as unknown[] as number[];
  return cleanData;
}

export function convertRgbTransparency(rgba: string, a: number): string {
  const data = convertStringToRgbaNumberArray(rgba);

  return `rgba(${data[0]},${data[1]},${data[2]},${a})`;
}
