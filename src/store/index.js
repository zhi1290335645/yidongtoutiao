/**
 * Vuex 容器
 *    获取方便
 *    响应式的
 * 本地存储
 *    持久化
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

const USER_KEY = 'user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // null、{ token, refresh_token }
    user: getItem(USER_KEY) // 当前登录用户状态（token）
    // user: JSON.parse(window.localStorage.getItem('user')) // 当前登录用户状态（token）
    // user: null // 当前登录用户状态（token）
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了避免页面刷新数据丢失，我们这里使用本地存储进行 **持久化**
      setItem(USER_KEY, state.user)
      // window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
