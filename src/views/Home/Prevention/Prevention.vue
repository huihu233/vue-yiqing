<template>
  <div class="wuzi">
    <!-- 顶部logo -->
    <img src="../../../assets/images/fy-logo.png" alt="">
    <div class="wrapper">
      <van-tabs v-model="active" swipeable animated>
        <van-tab v-for="index in arr" :title="index.title" :key="index.title">
          
          <img alt="" :src="index.img">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// 导入图片
import img1 from '../../../assets/images/fy-xdy.png'
import img2 from '../../../assets/images/fy-kz.png'
import img3 from '../../../assets/images/fy-xsy.png'
import img4 from '../../../assets/images/fy-wdj.png'
export default {
  name: 'Prevention',
  data() {
    return {
      active: 0,
      arr: [
        {
          title: '消毒液',
          img: img1
        },
        {
          title: '口罩',
          img: img2
        },
        {
          title: '洗手液',
          img: img3
        },
        {
          title: '温度计',
          img: img4
        }
      ]
    }
  }
}
</script>

<style scoped>
  .wuzi {
    background-color: #3343FF;
  }
  .wuzi img{
    width: 100%;
  }
  .wuzi .wrapper {
    padding: .2rem;
  }
  .van-tabs__line {
    background-color: #3343FF;
  }
  .van-tabs__content.van-tabs__content--animated {
    margin: 0.2rem 0;
    border-radius: 0.08rem;
  }
</style>
