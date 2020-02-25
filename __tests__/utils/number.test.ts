import { rangeNumber } from 'utils/number'

describe('[Utils] rangeNumber', () => {
  it('rangeNumber(-5, {min: 0, max: 10})은 0을 반환한다.', () => {
    // Given
    const target = -5
    const min = 0
    const max = 10
    // When
    const result = rangeNumber(target, { min, max })
    // Then
    expect(result).toBe(0)
  })

  it('rangeNumber(5, {min: 0, max: 10 })은 5를 반환한다.', () => {
    // Given
    const target = 5
    const min = 0
    const max = 10
    // When
    const result = rangeNumber(target, { min, max })
    // Then
    expect(result).toBe(5)
  })

  it('rangeNumber(15, {min: 0, max: 10 })은 10 반환한다.', () => {
    // Given
    const target = 15
    const min = 0
    const max = 10
    // When
    const result = rangeNumber(target, { min, max })
    // Then
    expect(result).toBe(10)
  })

  it('rangeNumber(15, { max: 10 })은 10 반환한다.', () => {
    // Given
    const target = 15
    const max = 10
    // When
    const result = rangeNumber(target, { max })
    // Then
    expect(result).toBe(10)
  })

  it('rangeNumber(-1, { max: 10 })은 10 반환한다.', () => {
    // Given
    const target = -1
    const max = 10
    // When
    const result = rangeNumber(target, { max })
    // Then
    expect(result).toBe(0)
  })

  it('rangeNumber(-1, { min: -10 })은 -1 반환한다.', () => {
    // Given
    const target = -1
    const min = -10
    // When
    const result = rangeNumber(target, { min })
    // Then
    expect(result).toBe(-1)
  })
})
