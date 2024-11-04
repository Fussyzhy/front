import request from '@/utils/request'

export const getDomain = () => {
  return request.get('/data/hot/domain')
}
