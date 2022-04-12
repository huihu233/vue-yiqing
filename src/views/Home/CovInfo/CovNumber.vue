<template>
  <div class="num">
    <div class="content">
      <div class="title">
        截止截至北京时间 {{ covDate.modifyTime | Time}}
      </div>
      <ul class="wrap">
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.currentConfirmedIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.currentConfirmedCount | buwei}}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.suspectedIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.suspectedCount | buwei}}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.seriousIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.seriousCount | buwei}}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.currentConfirmedIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.confirmedCount | buwei}}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.deadIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.deadCount | buwei}}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>
            较昨日
            <span class="ico">
              {{covDate.curedIncr | addjia}}
            </span>
          </span>
          <div class="bold">{{covDate.curedCount | buwei}}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covDate: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      modifyTime: new Date(this.covDate.modifyTime)
    }
  },
  created() {
    // console.log(this.modifyTime);
  },
  methods: {
    tools(val) {
      return val < 10 ? '0' + val : val;
    }
  },
  filters: {
    Time(str) {
      let date = new Date(str),
          Y = date.getFullYear(),
          M = date.getMonth() + 1,
          D = date.getDate(),
          hh = date.getHours(),
          mm = date.getMinutes(),
          ss = date.getSeconds();

      return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
    },
    addjia(str) {
      if(str > 0) {
        return '+' + str;
      }
      return str;
    },
    buwei(str) {
      return Number(str).toLocaleString();
    }
  }
}
</script>

<style scoped>
  .num {
    background-color: #f5f5f5;
    padding-top: .3rem;
  }
  .num .content {
    background-color: #ffffff;
    padding: .2rem;
    min-height: 2rem;
    border-radius: .2rem .2rem 0 0;
  }
  .num .content .title {
    color: #666;
    margin-bottom: .2rem;
  }
  .num .content .wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: .2rem;
    border-radius: .1rem;
    box-shadow: 0 0 3px 2px rgba(192, 192, 192, .2);
  }
  .num .content .wrap li {
    width: 33.33%;
    text-align: center;
    margin-bottom: -.2rem;
    color: #666;
  }
  /* right边框 */
  .num .content .wrap li::after {
    content: '';
    display: block;
    float: right;
    width: .04rem;
    height: .8rem;
    opacity: .5;
    background-image: linear-gradient(180deg, #eee, #e1e1e1 51%, #fff);
    transform: translateY(-50%);
  }
  .num .content .wrap li:nth-child(3n)::after{
    display: none;
  }
  .num .content .wrap li:nth-child(1) .bold,
  .num .content .wrap li:nth-child(1) .ico{
    color: #F74C31;
  }
  .num .content .wrap li:nth-child(2) .bold,
  .num .content .wrap li:nth-child(2) .ico{
    color: #F78207;
  }
  .num .content .wrap li:nth-child(3) .bold,
  .num .content .wrap li:nth-child(3) .ico{
    color: #A25A4E;
  }
  .num .content .wrap li:nth-child(4) .bold,
  .num .content .wrap li:nth-child(4) .ico{
    color: #AE212C;
  }
  .num .content .wrap li:nth-child(5) .bold,
  .num .content .wrap li:nth-child(5) .ico{
    color: #5D7092;
  }
  .num .content .wrap li:nth-child(6) .bold,
  .num .content .wrap li:nth-child(6) .ico{
    color: #28B7A3;
  }
  .num .content .wrap li strong {
    font-size: 12px;
    font-weight: 600;
    color: #333;

  }
   .num .content .wrap .bold {
     font-size: 20px;
    font-weight: bold;
  }
</style>