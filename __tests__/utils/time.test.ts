import { formatTime } from 'utils/time'

describe('[Utils] formatTime', () => {
  it('formatTime - less than 1 minutes', () => {
    // Given
    const expected = '00:59'
    // When
    const result = formatTime(59)
    // Then
    expect(result).toEqual(expected)
  })

  it('formatTime - 59s < seconds < 99m', () => {
    // Given
    const expected = '10:59'
    // When
    const result = formatTime(659)
    // Then
    expect(result).toEqual(expected)
  })

  it('formatTime - 99m =< seconds', () => {
    // Given
    const expected = '100:00'
    // When
    const result = formatTime(6000)
    // Then
    expect(result).toEqual(expected)
  })
})
