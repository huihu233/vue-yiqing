import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1、安装 echarts 2.导入echarts
import echarts from "echarts"

// 引入css初始化
import './assets/css/base.css'
// 引入适配移动端
import './assets/js/iphone'
// 引入vant库
import './plugins/vant'

// 挂载到Vue prototype上
Vue.prototype.$echarts = echarts;

// 使用开发插件
// import echarts from './plugins/echarts'
// Vue.use(echarts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
