import request from '@/utils/request'

export function hitokoto() {
  return request({
    url: 'https://v1.hitokoto.cn/',
    method: 'get'
  })
}

export function login(data) {
  return request({
    url: '/login_check',
    method: 'post',
    data,
    headers: {
      'X-Requested-With':'XMLHttpRequest'
    }
  })
}
