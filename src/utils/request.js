import axios from 'axios'
import jsonBig from 'json-bigint'

// axios.create 方法创建一个个axios 本身功能一样的一个对象
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

// axios 开放了自定义转换后端返回数据的 api
request.defaults.transfromResponse = [function (data) {
  try {
    // 现在我们定制使用的 json-bigint 来帮助我们处理转换原始的JSON 格式字符串
    // 这个方法类似于 JSON.parse 只不过他能把数据中的超出JS 安全整数范围的数字给处理成正确的
    // 它内部有自己的宣发 他会把大数字转成一个对象 我们在使用的时候把对象.toString()
    // 就得到字符串的形式
    // 如果转失败就会进入catch 返回一个新对象
    return jsonBig.parse(data)
  } catch (err) {
    console.log('转换失败', err)
    return {}
  }
}]
// 请求拦截器
// 相应拦截器
//  导出
export default request
