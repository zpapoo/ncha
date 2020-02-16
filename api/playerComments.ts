import { AxiosResponse } from 'axios'
import { from, Observable } from 'rxjs'

import { playerCommentsMockData } from '__tests__/mockData/comment'

const mockData: Promise<any> = new Promise(resolve =>
  resolve(playerCommentsMockData),
)

export const getComments = (id: number): Observable<AxiosResponse> => {
  // return requestGET(`/api/movie/${id}`)
  return from(mockData)
}
