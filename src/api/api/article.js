// **
//  * 文章接口模块
//  */
import request from '@/utils/request'

/**
 * 获取指定用户的文章列表
 */
export const getArticlesByUser = (userId, params) => {
  return request({
    method: 'GET',
    url: `/app/v1_0/users/${userId}/articles`,
    params
  })
}
/**
 * 获取频道的文章列表
 */
export const getArticlesByChannel = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
