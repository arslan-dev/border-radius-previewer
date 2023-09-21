import { describe, it, assert } from "vitest"
import TBorderRadiusData from "../app/TBorderRadius"
import { borderRadius2CSSPropVal } from "../app/utilities"


describe('Convert Border Radius to String', () => {
  it('should convert correct TBorderRadius object to a border-radius property value', () => {
    const borderRadiusData: TBorderRadiusData = {
      x: 1,
      y: 2
    }
    const expectedString = "1px / 2px"
    assert.equal(borderRadius2CSSPropVal(borderRadiusData), expectedString)
  })
})