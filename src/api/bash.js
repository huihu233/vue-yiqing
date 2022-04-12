/**
 *  公共的请求的接口
 * http://api.tianapi.com/ncov/index?key=c7f81396b4f948250d38eb2da6680167 
 */ 

const bash = {
  host: 'http://api.tianapi.com', // 天行数据 -- 疫情病毒
  baseUrl: 'https://uaqy.api.storeapi.net', // 挖数据-- 国内疫情接口
  covInfo: '/ncov/index?key=c7f81396b4f948250d38eb2da6680167',  // 疫情信息
  login: '',
  chinaData: '/api/94/219?appid=14439&sign=717638a393a150506b95fa01bc2033b2', // 国内疫情接口
  worldData: '/api/94/220?format=json&appid=14439&sign=8a112b5753c92f3aaf12839bf4880f9a', // 全国疫情接口
  city: '/api/94/221' // 城市疫情数据
}

export default bash;


