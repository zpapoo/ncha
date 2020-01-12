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
})
