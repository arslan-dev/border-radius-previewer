import { parseNumber } from "./utilities"

export interface TCornerValueInputProps {
  label: string
  value: number
  setValue: (a: number) => void
}

export const CornerValueInput = (props: TCornerValueInputProps) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">{props.label}</span>
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="0"
        aria-label={props.label}
        value={props.value}
        onChange={ e => props.setValue(parseNumber(e.target.value)) }
      />
    </div>
  )
}