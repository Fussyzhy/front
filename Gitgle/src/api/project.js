import request from '@/utils/request'

export const getProject = (page) => {
  return request.get('/data/repo/list', {
    params: {
      page: page,
      size: 10
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
