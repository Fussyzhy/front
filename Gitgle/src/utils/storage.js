const INFO_KEY = 'Gitgle_UserInfo'

export const getInfo = () => {
  const defaultInfo = {
    token: '',
    userId: '',
    userName: ''
  }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultInfo
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
