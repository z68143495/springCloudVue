import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/a/base/sys/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/a/base/sys/user/getByToken',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
