import request from '@/utils/request'

export const getProject = (page, size) => {
  return request.get('/data/repo/list', {
    params: {
      page: page,
      size: size
    }
  })
}

export const getProdeltail = (repoOwner, repoName) => {
  return request.get('/data/repo', {
    params: {
      repoOwner: repoOwner,
      repoName: repoName
    }
  })
}

export const gethostPro = () => {
  return request.get('/data/hot/repo')
}
