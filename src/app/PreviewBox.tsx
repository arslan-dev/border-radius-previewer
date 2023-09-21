import TBorderRadiusData from "./TBorderRadius"
import { borderRadius2CSSPropVal } from "./utilities"

export interface TPreviewBoxProps {
  data: TBorderRadiusData
}

export const PreviewBox = (props: TPreviewBoxProps) => {
  const borderRadiusCSSPropVal = borderRadius2CSSPropVal(props.data)
  const styles = {
    borderRadius: borderRadiusCSSPropVal
  }

  return <div className="previewBox" style={styles}>PREVIEW BOX</div>
}