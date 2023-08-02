export function convertLevelToStyle(
  style: { [key: string]: string },
  level: number
): string {
  return style[`level_${level}`];
}
