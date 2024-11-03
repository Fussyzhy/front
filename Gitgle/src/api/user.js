import request from '@/utils/request'

export const getUserdetail = (githubId) => {
  return request.post('/user/detail', null, {
    params: {
      githubId: githubId
    }
  })
}

export const changegitlogin = (login, username, email) => {
  return request.post('/user/change', {
    login: login,
    username: username,
    email: email
  })
}
