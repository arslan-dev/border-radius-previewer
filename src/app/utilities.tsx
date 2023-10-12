import TBorderRadiusData from "./TBorderRadius";

export function borderRadius2CSSPropVal(borderRadiusData: TBorderRadiusData) {
  const d = borderRadiusData
  return `${d.topLeft_x}px ${d.topRight_x}px ${d.bottomRight_x}px ${d.bottomLeft_x}px / ${d.topLeft_y}px ${d.topRight_y}px ${d.bottomRight_y}px ${d.bottomLeft_y}px`
}

export function borderRadiusDataZero(): TBorderRadiusData {
  return {
    topLeft_x: 50, 
    topLeft_y: 80, 
    topRight_x: 80, 
    topRight_y: 50, 
    bottomRight_x: 50, 
    bottomRight_y: 80, 
    bottomLeft_x: 80, 
    bottomLeft_y: 50 
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