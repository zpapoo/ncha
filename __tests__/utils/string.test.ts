import { padZero } from 'utils/string'

describe('[Utils] padZero', () => {
  it('padZero - 2', () => {
    // Given
    const expected = '02'
    // When
    const result = padZero(2, 2)
    // Then
    expect(result).toEqual(expected)
  })

  it('padZero - 4', () => {
    // Given
    const expected = '0002'
    // When
    const result = padZero(2, 4)
    // Then
    expect(result).toEqual(expected)
  })

  it('padZero - minus width', () => {
    // Given
    const expected = '200'
    // When
    const result = padZero(200, -1)
    // Then
    expect(result).toEqual(expected)
  })
})
