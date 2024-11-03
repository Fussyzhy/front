import request from '@/utils/request'

export const getSearch = (obj) => {
  return request.post('/user/search', {
    domain: obj.domain,
    nationId: obj.nationId,
    login: obj.login
  }, {
    params: {
      page: obj.page,
      size: 20
    }
  })
}

export const getNation = () => {
  return request.post('/user/nation')
}

export const getRealms = () => {
  return request.get('/data/hot/domain')
}
