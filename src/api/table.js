import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/a/base/sys/menu/findList',
    method: 'get',
    params
  })
}
