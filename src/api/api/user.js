//  用户请求相关模块
import request from '@/utils/request'

export const login = (data) => {
  // 具体请求代码
  return request({
    method: 'POST',
    url: 'app/v1_0/authorizations',
    headers: {
      // 有特殊符号的请求头名字 需要加上单引号
      // 'Content-Type': 'application/json'
    }, // 请求头
    // params: {}, // 查询参数
    data
  })
}

export const getSmsCode = (mobile) => {
  // 具体请求代码
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取当前登录的信息
export const getUserInfo = () => {
  // 具体请求代码
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
