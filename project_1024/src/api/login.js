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
