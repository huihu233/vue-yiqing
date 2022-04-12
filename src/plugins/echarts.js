/**
 * 开发成vue插件使用echarts
 * 
 */
import echarts from 'echarts'

const install = function(Vue, options) {
  // 添加实例方法
  // Vue.prorotype.demo = function() {
  //   // console.log(options)
  // }

  Object.defineProperties(Vue.prorotype, {
    $myChart: {
      get() {
        return {
          line() {
            echarts,
            options
          },
          fun() {

          }
        }
      }
    }
  })
}


export default install