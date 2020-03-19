import { getRangeNumber } from 'utils/number'

describe('[Utils] getRangeNumber', () => {
  it('should return 10', () => {
    // Given
    // When
    const result = getRangeNumber({
      range: {
        max: 10,
        min: 0,
      },
      target: 11,
    })
    // Then
    expect(result).toEqual(10)
  })

  it('should return 0', () => {
    // Given
    // When
    const result = getRangeNumber({
      range: {
        max: 10,
        min: 0,
      },
      target: -1,
    })
    // Then
    expect(result).toEqual(0)
  })

  it('should return 5', () => {
    // Given
    // When
    const result = getRangeNumber({
      range: {
        max: 10,
        min: 0,
      },
      target: 5,
    })
    // Then
    expect(result).toEqual(5)
  })
})
