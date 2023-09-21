import type TBorderRadiusData from "./app/TBorderRadius"

import { PreviewBox } from "./app/PreviewBox"
import { PreviewCode } from "./app/PreviewCode"

function App() {
  const radiusData: TBorderRadiusData = {
    x: 20,
    y: 20
  }
  return (
    <div className="container">
      <PreviewBox data={radiusData} /> 
      <PreviewCode data={radiusData} />
    </div>
  )
}

export default App
