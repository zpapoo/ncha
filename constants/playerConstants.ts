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

export enum COMMENT_COLOR {
  music_director = 'rgba(182, 104, 209, 0.5)',
  spoiler = 'rgba(255, 255, 255, 0.2)',
  action_director = 'rgba(182, 104, 209, 0.5)',
}
