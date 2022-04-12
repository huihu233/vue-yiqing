/**
 * 请求的接口的方法
 */
//请求的axios
import axios from 'axios'
// 接口地址
import bash from './bash'

// 请求方法
const api = {
  /**
   * 病毒信息获取
   */
  getCovInfo() {
    return axios.get(bash.host + bash.covInfo);
  },
  /**
   * 国内疫情数据接口
   */
  getchinaData() {
    return axios.get(bash.baseUrl + bash.chinaData);
  },
  /**
   * 世界疫情
   */
  getworldData() {
    return axios.get(bash.baseUrl + bash.worldData);
  }
}

export default api

