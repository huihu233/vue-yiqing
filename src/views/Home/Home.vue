<template>
  <div class="home">
    <!-- 1、疫情图片 -->
    <img src="../../assets/images/bg.png" alt="" width="100%">
    <!-- 病毒信息 -->
    <CovInfo :covDesc="covdesc"
             :news="news">
    </CovInfo>
    <!-- 3.疫情-小导航 -->
    <div class="list-nav">
      <div>
        <router-link to="/area">
          <img src="../../assets/images/wenzheng.png" alt="">
          <p>风险地区</p>
        </router-link>
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="../../assets/images/jiance.png" alt="">
          <p>核酸检测</p>
        </router-link>
      </div>
      <div>
        <router-link to="/Prevention">
          <img src="../../assets/images/wuzi.png" alt="">
          <p>防疫物资</p>
        </router-link>
      </div>
      <div>
        <img src="../../assets/images/zhengche.png" alt="">
        <p>出行政策</p>
      </div>
    </div>
    <!-- 疫情数据 -->
    <CovNumber :covDate="covDate">
    </CovNumber>
    <!-- 中国地图 -->
    <ChinaMap>
      
    </ChinaMap>
    <!-- 世界地图 -->
    <WorldMap/>
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import CovNumber from './CovInfo/CovNumber.vue'
import ChinaMap from './Vueechrat/ChinaMap.vue'
import WorldMap from './VueEcharts/WorldMap.vue'
import api from '../../api/index'
export default {
  name: 'Home',
  data(){
    return {
      // 热情信息
      covdesc: {},
      // 疫情热点
      news: [],
      // 全国数据统计
      covDate: {}
    }
  },
  components: {
    CovInfo,
    CovNumber,
    ChinaMap,
    WorldMap
  },
  created() {
    //1.请求病毒接口
    api.getCovInfo().then( (res)=> {
      let data = res.data.newslist[0].desc;
      // console.log(data);
      this.covdesc = {
        note1: data.note1,
        note2: data.note2,
        note3: data.note3,
        remark1: data.remark1,
        remark2: data.remark2,
        remark3: data.remark3
      }
      //2.疫情热点
      this.news = res.data.newslist[0].news

      //3 全国疫情的数据统计信息
      this.covDate = {
        currentConfirmedCount: data.currentConfirmedCount,
        confirmedCount: data.confirmedCount,
        suspectedCount: data.suspectedCount,
        curedCount: data.curedCount,
        deadCount: data.deadCount,
        seriousCount: data.seriousCount,
        suspectedIncr: data.suspectedIncr,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedIncr: data.confirmedIncr,
        curedIncr: data.curedIncr,
        deadIncr: data.deadIncr,
        seriousIncr: data.seriousIncr,
        modifyTime: data.modifyTime
      }
    });
    /**
     * currentconfirmedcount 现存确诊
      confirmedCount        累计确诊
      suspectedCount        累计境外输入人数
      curedcount            累计治愈人数
      deadcount             累计死亡人数
      seriousCount          现存无症状人数
      suspectedIncr         新增境外输入人数
      currentConfirmedIncr  相比昨日现存确诊人数
      confirmedIncr         相比昨日累计确诊人数
      curedIncr             相比昨日新增治愈人数
      deadIncr              相比昨日新增死亡人数
      seriousIncr           相比昨日现存无症状人数

      confirmedIncr
      deadCount
     */
  }
}


// var normalize = (str) => {
//   var arr = str.split(/[\[\]]/g).filter((v => v));
//   let result = {},
//       obj = result;
//   while(key = arr.shift()){
//     obj.value = key;
//     if(!arr.length) break;
//     obj.children = {};
//     obj = obj.children;
//   }
//   return result;
// }

</script>

<style scoped>
  /* 小导航 */
  .list-nav{
    display: flex;
    align-content: center;
    justify-content: space-around;
    padding-bottom: .4rem;
  }
  .list-nav div {
    width: 93px;
    height: 57px;
    text-align: center;
    font-size: 13px;
    line-height: 13px;
  }
  .list-nav div img {
    width: 40px;
  }
</style>

