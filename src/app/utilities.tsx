import TBorderRadiusData from "./TBorderRadius";

export function borderRadius2CSSPropVal(borderRadiusData: TBorderRadiusData) {
  const d = borderRadiusData
  return `${d.topLeft_x}px ${d.topRight_x}px ${d.bottomRight_x}px ${d.bottomLeft_x}px / ${d.topLeft_y}px ${d.topRight_y}px ${d.bottomRight_y}px ${d.bottomLeft_y}px`
}

export function borderRadiusDataZero(): TBorderRadiusData {
  return {
    topLeft_x: 0, 
    topLeft_y: 0, 
    topRight_x: 0, 
    topRight_y: 0, 
    bottomRight_x: 0, 
    bottomRight_y: 0, 
    bottomLeft_x: 0, 
    bottomLeft_y: 0 
  }
}

export function parseNumber(v: string): number {
  const res = parseInt(v)
  if (isNaN(res)) {
    return 0
  } else {
    return res
  }
}