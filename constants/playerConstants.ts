export enum COMMENT_TYPE {
  MUSIC_DIRECTOR = 'music_director',
  SPOILER = 'spoiler',
  ACTION_DIRECTOR = 'action_director'
}

export const COMMENT_KIND = {
  [COMMENT_TYPE.MUSIC_DIRECTOR]: '음악감독',
  [COMMENT_TYPE.SPOILER]: '스포일러 방지 봇',
  [COMMENT_TYPE.ACTION_DIRECTOR]: '액션감독',
}

export const COMMENT_COLOR = {
  [COMMENT_TYPE.MUSIC_DIRECTOR]: 'rgba(182, 104, 209, 0.5)',
  [COMMENT_TYPE.SPOILER]: 'rgba(255, 255, 255, 0.2)',
  [COMMENT_TYPE.ACTION_DIRECTOR]: 'rgba(182, 104, 209, 0.5)',
}
