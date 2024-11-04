import request from '@/utils/request'

export const getSearch = (obj) => {
  return request.post('/user/search', {
    domain: obj.domain,
    nation: obj.nation,
    login: obj.login
  }, {
    params: {
      page: obj.page,
      size: obj.size
    }
  })
}

export const getNation = () => {
  return request.post('/user/nation')
}

export const getRealms = () => {
  return request.get('/data/hot/domain')
}

export const gethomedata = () => {
  return request.get('/data/all')
}
