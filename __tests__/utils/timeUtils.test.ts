import { formatTime } from 'utils/timeUtils'

describe('[Utils] formatTime', () => {
  it('59s는 00:00:59', () => {
    // When
    const result = formatTime(59)
    // Then
    expect(result).toBe('00:00:59')
  })

  it('659s는 00:10:59', () => {
    // When
    const result = formatTime(659)
    // Then
    expect(result).toBe('00:10:59')
  })

  it('119520s는 33:12:00', () => {
    // When
    const result = formatTime(119520)
    // Then
    expect(result).toBe('33:12:00')
  })
})
