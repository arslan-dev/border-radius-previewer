import TBorderRadiusData from "./TBorderRadius"
import type { Dispatch, SetStateAction } from "react"

export interface TBorderRadiusEnterFormProps {
  radiusData: TBorderRadiusData
  setRadiusData: Dispatch<SetStateAction<TBorderRadiusData>>
}

export const BorderRadiusEnterForm = (props: TBorderRadiusEnterFormProps) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="0"
        aria-label="Border Top Left X"
        value={props.radiusData.topLeft_x}
        onChange={e => {
          props.setRadiusData({...props.radiusData, topLeft_x: parseInt(e.target.value)})
        }}
      />
    </div>
  )
}