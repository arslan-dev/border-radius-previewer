import TBorderRadiusData from "./TBorderRadius";

export function borderRadius2CSSPropVal(borderRadiusData: TBorderRadiusData) {
  const d = borderRadiusData
  return `${d.x}px / ${d.y}px`
}