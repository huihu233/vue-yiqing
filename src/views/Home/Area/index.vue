<template>
  <div class="area">
    <div class="head">
      <img src="../../../assets/images/Areahead.png" alt="">
    </div>
    <div class="content">
      <div class="content-head">
        <div class="dingwei">
          <img src="../../../assets/images/dingwe.png" alt="">
          请选择地区
        </div>
        <div class="input">
          广东 广州
        </div>
        <div class="fengxian">
          <img src="../../../assets/images/wufengxian.png" alt="">
          全部低风险
        </div>
      </div>
      <div class="body">
        <h5>全国风险地区汇总</h5>
        <!-- 高风险地区 -->
        <template v-if="high.length>0">
          <div class="title">
            <img src="../../../assets/images/redyujing.png" alt="">
            高风险区{{high.length}}个
            <span class="time">截止北京时间 {{time | getTime}}</span>
          </div>
          <ul>
            <li v-for="item in high" :key="item" class="gao">{{item}}</li>
          </ul>
        </template>
        <!-- 中风险地区 -->
        <template v-if="mid.length>0">
          <div class="title">
            <img src="../../../assets/images/yellowyujing.png" alt="">
            中风险区{{mid.length}}个
            <span class="time">截止北京时间 {{time | getTime}}</span>
          </div>
          <ul>
            <li v-for="item in mid" :key="item" class="zhong">{{item}}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../api/index'
export default {
  name: 'Area',
  data() {
    return {
      // 高风险
      high: [],
      // 中风险
      mid: [],
      // 截止时间
      time: 0
    }
  },
  created() {
    api.getCovInfo().then((res) => {
      let data = res.data.newslist[0].riskarea;
      let time = res.data.newslist[0].desc.modifyTime;
      console.log(data, time);
      // 高风险数据获取
      this.high = data.high;
      // 中风险数据获取
      this.mid = data.mid;
      this.time = time;
    })
  },
  filters: {
    getTime(val) {
      let date = new Date(val),
          Y = date.getFullYear(),
          M = date.getMonth() + 1,
          D = date.getDate(),
          hh = date.getHours(),
          mm = date.getMinutes(),
          ss = date.getSeconds();
      
      return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
    }
  } 
}
</script>

<style scoped>
  .area {
    background-color: #f7f7f7;
  }
  .head img{
    width: 100%;
  }
  /* 主体 */
  .content {
    padding: 10px 16px;
    transform: translateY(-3.6rem);
  }
  .content .content-head {
    padding: 15px 16px 16px;
    background-color: #fff;
    border-radius: 0.12rem;
    color: #333;
    margin-bottom: .2rem;
  }
  .content .content-head .dingwei {
    display: flex;
    font-size: 16px;
    margin-bottom: .3rem;
  }
  .content .content-head .dingwei img {
    width: 20px;
    margin-right: .1rem;
  }
  .content .content-head .input {
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: .12rem;
    user-select: none;
  }
  .content .content-head .fengxian {
    height: 158px;
    text-align: center;
    font-size: .26rem;
    padding-top: .4rem;
    box-sizing: border-box;
  }
  .content .content-head .fengxian img {
    display: block;
    width: 76px;
    margin: .32rem auto;
    margin-bottom: .3rem;
  }

  /* 全国风险地区汇总 */
  .content .body {
    background-color: #fff;
    border-radius: .12rem;
    padding: .32rem;
  }
  .content .body h5 {
    font-size: .32rem;
    font-weight: normal;
    margin-bottom: .52rem;
  }
  .content .body h5::before {
    content: ' ';
    display: inline-block;
    width: .08rem;
    height: .32rem;
    background-color: #4169e2;
    margin-right: .192rem;
    position: relative;
    top: .05rem;
  }
  .content .body .title {
    display: flex;
    font-size: .28rem;
    margin-bottom: .4rem;
  }
  .content .body .title img {
    width: .4rem;
    height: .4rem;
    margin-right: .128rem;
  }
  .content .body .title .time {
    color: #999;
    width: 3.9rem;
    font-size: .12rem;
    /* margin-left: .4rem; */
    text-align: right;
  }
  .content .body .gao,
  .content .body .zhong {
    background-color: #f7f7f7;
    padding: .3rem .24rem;
    margin-bottom: .2rem;
    border-radius: .12rem;
    font-size: .3rem;
  }
  .content .body .gao {
    background-color: rgba(255,91,77,.1);
  }
  .content .body .zhong {
    background-color: rgba(255,170,0,.1);
  }

</style>
