import request from '@/utils/request'

export const getSearch = (domain, nationId, login) => {
  return request.post('/user/search', {
    domain: domain,
    nationId: nationId,
    login: login
  })
}

export const getNation = () => {
  return request.post('/user/nation')
}

export const getRealms = () => {
  return request.get('/data/hot/domain')
}
