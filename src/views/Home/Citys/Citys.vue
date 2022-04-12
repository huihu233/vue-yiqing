<template>
  <div>
    <h2>{{cityname}}--城市界面</h2>
    <div id="chity" style="wdith: 6rem; height: 7rem"></div>
  </div>
</template>

<script>
import 'echarts/map/js/province/neimenggu'
import '../../../utils/map'
export default {
  props: ['cityname'],

  mounted() {
    this.chityMap('chity', this.cityname, [])
  },
  methods: {
     chityMap(id,cityname,data) {
      var myChart = this.$echarts.init(document.getElementById(id));
      // console.log(myChart);
      var options = {
        tooltip: {
          triggerOn: 'click',
          enterable: true,
          formatter(item) {
            return item.name + ': 确诊人数:' + item.value
          }
        },
        visualMap: [{ // 映射高亮颜色
          orient: "horizontal",
          type: "piecewise",  // 离散
          bottom: 0,
          itemGap: 5,
          itemWidth: 16,
          itemHeight: 10,
          padding: 2,
          textStyle: {
            fontSize: 10
          },
          pieces: [
            {
              min: 0,
              max: 10,
              color: "#ffffff"
            },
            {
              min: 10,
              max: 1000,
              color: "#fdfdcf"
            },
            {
              min: 100,
              max: 1000,
              color: "#fe9e83"
            },
            {
              min: 1000,
              max: 5000,
              color: "#e55a4e"
            },
            {
              min: 5000,
              color: "#4f070d"
            }
          ]
        }],
        series: [{
          name: "市",
          type: "map",
          map: cityname,
          // nameMap: country,
          roam: false,
          zoom: 1.2,
          aspectScale: 0.75,
          top: 40,
          layoutCenter: ['5%', '5%'],
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 8
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(0, 255, 236, 0)',
              borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            emphasis: {
              areaColor: 'rgba(255, 180, 0, 0.8)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shdowBlur: 20,
              borderWidth: 0
            }
          },
          // data 地图数据
          // data: [
          //   {name: '内蒙古', value: 200},
          //   {name: '北京', value: 800},
          // ]
          data: data
        }]
      }

      myChart.setOption(options);
    }
  }
}
</script>

<style scoped>

</style>