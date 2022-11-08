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
export function logout() { // 退出登录
    return request({
      url: '/apiuser/logout',
      method: 'get',
      headers: {
        'X-Requested-With':'XMLHttpRequest'
      }
    })
  }