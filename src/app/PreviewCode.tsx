import { useSpring, animated } from "@react-spring/web"

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

  const [springs, api] = useSpring(() => ({
    from: {opacity: 0}
  }))

  const copyToClipboard = () => {
    navigator.clipboard.writeText(previewCSSBlock)
    api.start({
      from: {opacity: 1},
      to: {opacity: 0},
      config: {duration: 1000}
    })
  }

  return (
    <>
      <h2>Generated Code</h2>
      <pre className="previewCode position-relative">
        <code>
          { previewCSSBlock }
        </code>

        <CopyToClipboardButton onClick={copyToClipboard} />

        <animated.div className="alert alert-primary infoAlert" role="alert" style={{...springs}}>
          Copied to clipboard!
        </animated.div>
      </pre>
    </>
  )
}