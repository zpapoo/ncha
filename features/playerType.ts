import { HttpStatusCode } from 'api'

import { Comment } from './player'

export interface CommentPayload {
  title: string
  comments: Comment[]
  running_time: number
}

export interface StatusPayload {
  statusCode: HttpStatusCode
}
