import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载验证插件的初始配置
import './utils/validation'
// 加载注册 Vant 组件模块
// 引入  配置rem适配 动态设置HTML 标签字体大小
import 'amfe-flexible'
import './utils/register-vant'
// 加载全局样式
// 一定要把自己的样式 放在第三方插件后面引入
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
