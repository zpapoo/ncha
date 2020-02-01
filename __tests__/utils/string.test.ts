import { padZero } from 'utils/string'

describe('[Utils] padZero', () => {
  it('padZero(2,2)는 02가 되어야 한다.', () => {
    // When
    const result = padZero(2, 2)
    // Then
    expect(result).toBe('02')
  })

  it('padZero(2,4)는 0002가 되어야 한다.', () => {
    // When
    const result = padZero(2, 4)
    // Then
    expect(result).toBe('0002')
  })

  it('padZero(value,-minus)는 value를 return한다.', () => {
    // When
    const result = padZero(200, -1)
    // Then
    expect(result).toBe('200')
  })
})
