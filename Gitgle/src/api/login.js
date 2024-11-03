import request from '@/utils/request'

export const sendEmail = (email) => {
  return request.get('/user/sendEmail', {
    params: {
      email: email
    }
  })
}

export const getReg = (obj) => {
  return request.post('/user/register', {

    username: obj.email,
    password: obj.password,
    email: obj.email,
    code: obj.code

  })
}

export const getlogin = (obj) => {
  return request.post('/user/login', {

    email: obj.email,
    password: obj.password

  })
}

export const getUserinfomation = () => {
  return request.post('/user/getUserInfo')
}

export const changePassword = (oldPassword, newPassword) => {
  return request.post('/user/changePassword', {
    oldPassword: oldPassword,
    newPassword: newPassword
  })
}

export const userexit = () => {
  return request.post('/user/logout')
}
