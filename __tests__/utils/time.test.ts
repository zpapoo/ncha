import { formatTime } from 'utils/time'

describe('[Utils] formatTime', () => {
  it('formatTime - less than 1 minutes', () => {
    // Given
    const expected = '00:00:59'
    // When
    const result = formatTime(59)
    // Then
    expect(result).toEqual(expected)
  })

  it('formatTime - 59s < seconds < 1h', () => {
    // Given
    const expected = '00:10:59'
    // When
    const result = formatTime(659)
    // Then
    expect(result).toEqual(expected)
  })

  it('formatTime - 1h =< seconds', () => {
    // Given
    const expected = '33:12:00'
    // When
    const result = formatTime(119520)
    // Then
    expect(result).toEqual(expected)
  })
})
