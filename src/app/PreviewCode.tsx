import TBorderRadiusData from "./TBorderRadius"
import { borderRadius2CSSPropVal } from "./utilities"

export interface TPreviewCodeProps {
  data: TBorderRadiusData
}

export const PreviewCode = (props: TPreviewCodeProps) => {
  const borderRadiusCSSPropVal = borderRadius2CSSPropVal(props.data)
  const previewCSSBlock = `{
  border-radius: ${borderRadiusCSSPropVal};
}`

  return (
    <pre>
      { previewCSSBlock }
    </pre>
  )
}