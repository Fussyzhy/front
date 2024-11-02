import request from '@/utils/request'

export const getProject = (page) => {
  return request.get('/data/repo/list', {
    params: {
      page: page,
      size: 10
    }
  })
}
