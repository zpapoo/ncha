import { AxiosResponse } from 'axios'

import { playerCommentsMockData } from '__tests__/mockData/comment'

const mockData: Promise<any> = new Promise(resolve =>
  resolve(playerCommentsMockData),
)

export const getComments = (id: number): Promise<AxiosResponse> => {
  // return axiosInstance.get(`/api/movie/${id}`)
  return mockData
}
