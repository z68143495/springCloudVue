import request from '@/utils/request'

export function findList(params) {
  return request({
    url: '/a/base/sys/menu/list',
    method: 'get',
    params
  })
}

export function save(params) {
  return request({
    url: '/a/base/sys/menu/save',
    method: 'post',
    params
  })
}

export function del(params) {
  return request({
    url: 'http://localhost/apis/a/base/api/sys/menu/delete',
    method: 'post',
    params
  })
}

export function exportExcel(params) {
  return request({
    url: 'http://localhost/apis/a/base/api/sys/menu/delete',
    method: 'post',
    params
  })
}
