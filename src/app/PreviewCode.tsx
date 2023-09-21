import { CopyToClipboardButton } from "./CopyToClipboardButton"
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(previewCSSBlock)
  }

  return (
    <>
      <h2>Generated Code</h2>
      <pre className="previewCode">
        <CopyToClipboardButton onClick={copyToClipboard} />
        <code>
          { previewCSSBlock }
        </code>
      </pre>
    </>
  )
}