import request from '@/utils/request'

export const getUserdetail = (githubId) => {
  return request.post('/user/detail', null, {
    params: {
      githubId: githubId
    }
  })
}
