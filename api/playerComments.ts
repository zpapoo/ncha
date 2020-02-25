import { MockDataType, playerCommentsMockData } from '__tests__/mockData/comment'

export const getComments = (id: number): Promise<MockDataType> => {
  // return axiosInstance.get(`/api/movie/${id}`)
  return Promise.resolve(playerCommentsMockData)
}
