import TBorderRadiusData from "./TBorderRadius";

export function borderRadius2CSSPropVal(borderRadiusData: TBorderRadiusData) {
  const d = borderRadiusData
  return `${d.topLeft_x}px ${d.topRight_x}px ${d.bottomRight_x}px ${d.bottomLeft_x}px / ${d.topLeft_y}px ${d.topRight_y}px ${d.bottomRight_y}px ${d.bottomLeft_y}px`
}