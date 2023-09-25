import { describe, it, assert } from "vitest"
import TBorderRadiusData from "../app/TBorderRadius"
import { borderRadius2CSSPropVal, parseNumber } from "../app/utilities"

describe('Convert Border Radius to String', () => {
  it('should convert correct TBorderRadius object to a border-radius property value', () => {
    const mockBorderRadiusData: TBorderRadiusData = {
      topLeft_x: 1, 
      topLeft_y: 2, 
      topRight_x: 3, 
      topRight_y: 4, 
      bottomRight_x: 5, 
      bottomRight_y: 6, 
      bottomLeft_x: 7, 
      bottomLeft_y: 8 
    }
    const expectedString = "1px 3px 5px 7px / 2px 4px 6px 8px"
    assert.equal(borderRadius2CSSPropVal(mockBorderRadiusData), expectedString)
  })
})

describe('Number parsing utility', () => {
  it('should parse any string to number', () => {
    assert.equal(parseNumber('5'), 5)
  })
  it('should parse return 0 if NaN', () => {
    assert.equal(parseNumber('not a number'), 0)
  })
})