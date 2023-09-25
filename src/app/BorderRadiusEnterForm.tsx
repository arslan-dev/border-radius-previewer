import TBorderRadiusData from "./TBorderRadius"
import type { Dispatch, SetStateAction } from "react"
import { CornerValueInput } from "./CornerValueInput"

export interface TBorderRadiusEnterFormProps {
  radiusData: TBorderRadiusData
  setRadiusData: Dispatch<SetStateAction<TBorderRadiusData>>
}

export const BorderRadiusEnterForm = (props: TBorderRadiusEnterFormProps) => {

  const setCornerValue = (key: string) => (value: number) => {
    props.setRadiusData({...props.radiusData, [key]: value})
  }
  
  return (
    <>
      <div className="row">
        <div className="col-6">
          <CornerValueInput label="Border Top Left X" value={props.radiusData.topLeft_x} setValue={setCornerValue("topLeft_x")} />
          <CornerValueInput label="Border Top Left Y" value={props.radiusData.topLeft_y} setValue={setCornerValue("topLeft_y")} />
        </div>
        <div className="col-6">
          <CornerValueInput label="Border Top Right X" value={props.radiusData.topRight_x} setValue={setCornerValue("topRight_x")} />
          <CornerValueInput label="Border Top Right Y" value={props.radiusData.topRight_y} setValue={setCornerValue("topRight_y")} />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <CornerValueInput label="Border Bottom Left X" value={props.radiusData.bottomLeft_x} setValue={setCornerValue("bottomLeft_x")} />
          <CornerValueInput label="Border Bottom Left Y" value={props.radiusData.bottomLeft_y} setValue={setCornerValue("bottomLeft_y")} />
        </div>
        <div className="col-6">
          <CornerValueInput label="Border Bottom Right X" value={props.radiusData.bottomRight_x} setValue={setCornerValue("bottomRight_x")} />
          <CornerValueInput label="Border Bottom Right Y" value={props.radiusData.bottomRight_y} setValue={setCornerValue("bottomRight_y")} />
        </div>
      </div>
    </>
  )
}