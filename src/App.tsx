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
      <div className="row">
        <div className="col">
          <h1 className="display-1">Border-radius Previewer</h1>
          <p>A solution to <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md">this problem.</a></p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <PreviewBox data={radiusData} /> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          <PreviewCode data={radiusData} />
        </div>
      </div>
    </div>
  )
}

export default App
