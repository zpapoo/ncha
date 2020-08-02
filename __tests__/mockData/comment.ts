import { COMMENT_TYPE } from 'constants/playerConstants'

interface MockDataCommentType {
  id: string
  kind: COMMENT_TYPE
  contents: string[]
  time: number
}
export interface MockDataType {
  data: {
    id: string
    running_time: number
    title: string
    comments: MockDataCommentType[]
  },
}
/* eslint-disable max-len */
export const playerCommentsMockData: MockDataType = {
  data: {
    id: 'id-unique',
    running_time: 11952,
    title: 'The Dark Night',
    comments: [
      {
        id: 'test1',
        kind: COMMENT_TYPE.MUSIC_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 1,
      },
      {
        id: 'test2',
        kind: COMMENT_TYPE.SPOILER,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 3,
      },
      {
        id: 'test3',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 7,
      },
      {
        id: 'test4',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 9,
      },
      {
        id: 'test5',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 11,
      },
      {
        id: 'test6',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 12,
      },
      {
        id: 'test7',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 13,
      },
      {
        id: 'test8',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 14,
      },
      {
        id: 'test9',
        kind: COMMENT_TYPE.ACTION_DIRECTOR,
        contents: [
          '방황하였으며, 우리의 얼마나 심장은 불어 청춘의 이상의 투명하되 것이다. 가슴이 따뜻한 작고 힘있다. 얼음이 무엇을 천고에 쓸쓸하랴? 같으며,설레는 거친 새 장식하는 희망의 얼음과 것 같으며, 설레는 거친 새장식하는 희망의 얼음과 것 같으며, 설레는 거친 새 장식하는 희망의',
          '가슴이 따뜻한 작고 힘있다.',
        ],
        time: 15,
      },
    ],
  },
}
