<template>
  <div class="info">
    <div class="cov">
      <div class="title">病毒信息</div>
      <!-- <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p> -->
      <p v-for="item in covDesc" :key="item">
        {{ item }}
      </p>
    </div>
    <div class="hot">
      <div class="title">
        <img src="../../../assets/images/yiqingredian.png" width=80px alt="">
        <a href="#">查看更多<img src="../../../assets/images/向右.png" width="14px" alt=""></a>
      </div>
      <ul class="list">
        <li v-for="item in news" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covDesc: {
      type: Object,
      default: function () {
        return {}
      },
    },
    news: {
      type: Array,
      defalut: function() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.info {
  padding: 0.2rem 16px;
}
.info .title {
  border-left: 0.1rem solid #4654ff;
  padding-left: 0.1rem;
  margin-bottom: 0.2rem;
  height: .4rem;
}
.info .cov p {
  line-height: 0.4rem;
  color: #666;
  margin-bottom: .1rem;
}
.info .hot .title {
  height: .45rem;
  margin-top: .2rem;
}
.info .hot .title img:nth-child(1) {
  transform: translateY(-10%);
}
.info .hot .title a {
  display: block;
  float: right;
  color: #3343FF;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.info .hot .title a img {
  transform: translateY(12%) !important;
}

.info .list::after{
  content: '';
  display: block;
  position: relative;
  left: 50%;
  top: .1rem;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 7rem;
  height: .01rem;
  background: #999;
  opacity: .2;
}

.info .list li {
  letter-spacing: 1px; /*字体间距*/
  line-height: 24px;
  margin-bottom: 10px;
}
.info .list li::before {
  content: "最新";
  display: inline-block;
  color: white;
  font-size: 12px;
  font-weight: 600;
  width: .6rem;
  height: 18px;
  line-height: 18px;
  letter-spacing: normal;
  text-align: center;
  border-radius: 3px;
  background-color: #F74C31;
}
.info .list li::after {
  content: '';
  display: block;
  width: .3rem;
  height: .3rem;
  /* border: 1px solid black; */
  background: url('../../../assets/images/bai向右.png') no-repeat 1px 0px;
  background-size: 14px;
  float: right;
  transform: translateY(40%);
}
</style>
