<template>
  <div>
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- <div id="main" style="wdith: 6rem; height: 8rem;"></div> -->
    <van-tabs v-model="active" animated>
      <van-tab title="累计人数">
        <!-- 累计人数 -->
        <!-- <div id="chian" style="wdith: 7.5rem; height: 7rem"></div> -->
      </van-tab>
      <van-tab title="现存人数">
        <!-- 现存人数 -->
        <!-- <div id="nochian" style="wdith: 7.5rem; height: 7rem"></div> -->
      </van-tab>
    </van-tabs>

    <div class="map">
      <h4>累计人数</h4>
      <!-- 累计人数 -->
      <div id="chian" style="wdith: 6rem; height: 7rem"></div>
      <h4>现存人数</h4>
      <!-- 现存人数 -->
      <div id="nochian" style="wdith: 6rem; height: 7rem"></div>
    </div>
    
    
  </div>
</template>

<script>
// 1、安装 echarts 2.导入echarts
// import echarts from "echarts"

// 导入中国地图
import '../../../utils/map'
// import api from '../../../api/index'
export default {
  data() {
    return {
      data: {
      "codeid": 10000,
      "message": "操作成功!",
      "retdata": [
        {
          "confirm": "1",
          "died": "0",
          "heal": "1",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "",
          "xArea": "西藏",
          "subList": [
            {
              "city": "拉萨",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "80",
          "died": "0",
          "heal": "79",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "1",
          "overseasInputRelative": "",
          "xArea": "澳门",
          "subList": [

          ]
        },
        {
          "confirm": "30",
          "died": "0",
          "heal": "30",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "",
          "xArea": "青海",
          "subList": [
            {
              "city": "西宁",
              "confirm": "26",
              "died": "0",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "海北州",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "海东",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "20373",
          "died": "853",
          "heal": "13742",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "5778",
          "overseasInputRelative": "",
          "xArea": "台湾",
          "subList": [

          ]
        },
        {
          "confirm": "44392",
          "died": "577",
          "heal": "17562",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "26253",
          "overseasInputRelative": "",
          "xArea": "香港",
          "subList": [

          ]
        },
        {
          "confirm": "162",
          "died": "2",
          "heal": "160",
          "relativeTime": "1645718400",
          "asymptomatic": "1",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "贵州",
          "subList": [
            {
              "city": "六盘水",
              "confirm": "10",
              "died": "1",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "毕节",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黔西南州",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黔南州",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黔东南州",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "贵阳",
              "confirm": "36",
              "died": "1",
              "heal": "35",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "铜仁",
              "confirm": "12",
              "died": "0",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "遵义",
              "confirm": "44",
              "died": "0",
              "heal": "44",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "安顺",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "贵安新区",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "603",
          "died": "3",
          "heal": "588",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "12",
          "overseasInputRelative": "0",
          "xArea": "吉林",
          "subList": [
            {
              "city": "延边",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "四平",
              "confirm": "17",
              "died": "1",
              "heal": "16",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "通化",
              "confirm": "313",
              "died": "1",
              "heal": "312",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "吉林市",
              "confirm": "50",
              "died": "1",
              "heal": "49",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "公主岭",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "松原",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "长春",
              "confirm": "150",
              "died": "0",
              "heal": "150",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "辽源",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "白城",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "梅河口",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "白山",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "47",
              "died": "0",
              "heal": "35",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "12"
            }
          ]
        },
        {
          "confirm": "996",
          "died": "3",
          "heal": "993",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "",
          "xArea": "新疆",
          "subList": [
            {
              "city": "乌鲁木齐",
              "confirm": "845",
              "died": "0",
              "heal": "845",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第七师",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第八师",
              "confirm": "4",
              "died": "1",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "吐鲁番地区",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "伊犁州",
              "confirm": "31",
              "died": "0",
              "heal": "31",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阿克苏地区",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第九师",
              "confirm": "4",
              "died": "1",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "昌吉州",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第六师",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巴音郭楞蒙古自治州",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第十二师",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "第四师",
              "confirm": "13",
              "died": "1",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "喀什地区",
              "confirm": "80",
              "died": "0",
              "heal": "80",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "待确认",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "博州",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "122",
          "died": "0",
          "heal": "122",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "宁夏",
          "subList": [
            {
              "city": "中卫",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "吴忠",
              "confirm": "39",
              "died": "0",
              "heal": "39",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "银川",
              "confirm": "68",
              "died": "0",
              "heal": "68",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宁东管委会",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "固原",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "石嘴山",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1557",
          "died": "1",
          "heal": "1207",
          "relativeTime": "1645718400",
          "asymptomatic": "2",
          "nativeRelative": "54",
          "curConfirm": "349",
          "overseasInputRelative": "0",
          "xArea": "内蒙古",
          "subList": [
            {
              "city": "锡林郭勒盟",
              "confirm": "29",
              "died": "0",
              "heal": "29",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "包头",
              "confirm": "32",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "21"
            },
            {
              "city": "呼伦贝尔",
              "confirm": "603",
              "died": "0",
              "heal": "597",
              "asymptomatic": "0",
              "nativeRelative": "2",
              "curConfirm": "6"
            },
            {
              "city": "呼和浩特",
              "confirm": "345",
              "died": "0",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "52",
              "curConfirm": "319"
            },
            {
              "city": "兴安盟",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巴彦淖尔",
              "confirm": "11",
              "died": "1",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "赤峰",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "通辽",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "鄂尔多斯",
              "confirm": "12",
              "died": "0",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "乌兰察布",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "乌海",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阿拉善盟",
              "confirm": "165",
              "died": "0",
              "heal": "165",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "336",
              "died": "0",
              "heal": "336",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "368",
          "died": "2",
          "heal": "354",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "12",
          "overseasInputRelative": "1",
          "xArea": "甘肃",
          "subList": [
            {
              "city": "平凉",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "金昌",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "天水",
              "confirm": "51",
              "died": "0",
              "heal": "51",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "张掖",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "陇南",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "白银",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "临夏州",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "兰州",
              "confirm": "119",
              "died": "2",
              "heal": "117",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "定西",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "甘南州",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "庆阳",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "武威",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "酒泉",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "132",
              "died": "0",
              "heal": "120",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "12"
            },
            {
              "city": "外来人员",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "嘉峪关",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1106",
          "died": "3",
          "heal": "1087",
          "relativeTime": "1645718400",
          "asymptomatic": "6",
          "nativeRelative": "1",
          "curConfirm": "16",
          "overseasInputRelative": "6",
          "xArea": "天津",
          "subList": [
            {
              "city": "红桥区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "和平区",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "滨海新区",
              "confirm": "22",
              "died": "0",
              "heal": "22",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "西青区",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南开区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "河东区",
              "confirm": "19",
              "died": "1",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "河北区",
              "confirm": "56",
              "died": "0",
              "heal": "56",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "河西区",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "外地来津人员",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宁河区",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宝坻区",
              "confirm": "60",
              "died": "2",
              "heal": "58",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "东丽区",
              "confirm": "7",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "2"
            },
            {
              "city": "津南区",
              "confirm": "344",
              "died": "0",
              "heal": "344",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "北辰区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "武清区",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "静海区",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "蓟州区",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "531",
              "died": "0",
              "heal": "517",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "14"
            }
          ]
        },
        {
          "confirm": "279",
          "died": "0",
          "heal": "268",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "1",
          "curConfirm": "11",
          "overseasInputRelative": "0",
          "xArea": "山西",
          "subList": [
            {
              "city": "朔州",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "晋中",
              "confirm": "49",
              "died": "0",
              "heal": "41",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "8"
            },
            {
              "city": "运城",
              "confirm": "20",
              "died": "0",
              "heal": "20",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阳泉",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "吕梁",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大同",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "长治",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "临汾",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "太原",
              "confirm": "23",
              "died": "0",
              "heal": "21",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "2"
            },
            {
              "city": "晋城",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "忻州",
              "confirm": "8",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "境外输入",
              "confirm": "127",
              "died": "0",
              "heal": "127",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1018",
          "died": "2",
          "heal": "815",
          "relativeTime": "1645718400",
          "asymptomatic": "17",
          "nativeRelative": "10",
          "curConfirm": "201",
          "overseasInputRelative": "0",
          "xArea": "辽宁",
          "subList": [
            {
              "city": "朝阳",
              "confirm": "6",
              "died": "1",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "铁岭",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "葫芦岛",
              "confirm": "207",
              "died": "1",
              "heal": "15",
              "asymptomatic": "0",
              "nativeRelative": "10",
              "curConfirm": "191"
            },
            {
              "city": "锦州",
              "confirm": "12",
              "died": "0",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大连",
              "confirm": "470",
              "died": "0",
              "heal": "470",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "营口",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "丹东",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "沈阳",
              "confirm": "81",
              "died": "0",
              "heal": "80",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "辽阳",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "盘锦",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "本溪",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "鞍山",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阜新",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "抚顺",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "182",
              "died": "0",
              "heal": "173",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "9"
            }
          ]
        },
        {
          "confirm": "2072",
          "died": "13",
          "heal": "2046",
          "relativeTime": "1645718400",
          "asymptomatic": "24",
          "nativeRelative": "1",
          "curConfirm": "13",
          "overseasInputRelative": "0",
          "xArea": "黑龙江",
          "subList": [
            {
              "city": "鹤岗",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "七台河",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大兴安岭地区",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "佳木斯",
              "confirm": "15",
              "died": "0",
              "heal": "15",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "牡丹江",
              "confirm": "65",
              "died": "0",
              "heal": "60",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "5"
            },
            {
              "city": "鸡西",
              "confirm": "51",
              "died": "0",
              "heal": "46",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "5"
            },
            {
              "city": "绥化",
              "confirm": "537",
              "died": "4",
              "heal": "533",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "齐齐哈尔",
              "confirm": "45",
              "died": "1",
              "heal": "44",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "双鸭山",
              "confirm": "52",
              "died": "3",
              "heal": "49",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "哈尔滨",
              "confirm": "546",
              "died": "4",
              "heal": "542",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大庆",
              "confirm": "29",
              "died": "1",
              "heal": "28",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黑河",
              "confirm": "295",
              "died": "0",
              "heal": "295",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "伊春",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "409",
              "died": "0",
              "heal": "406",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "待确认",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "190",
          "died": "6",
          "heal": "184",
          "relativeTime": "1645718400",
          "asymptomatic": "1",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "海南",
          "subList": [
            {
              "city": "陵水黎族自治县",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "琼中黎族苗族自治县",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "琼海",
              "confirm": "6",
              "died": "1",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "儋州",
              "confirm": "15",
              "died": "1",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "万宁",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "东方",
              "confirm": "3",
              "died": "1",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "临高",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "海口",
              "confirm": "41",
              "died": "0",
              "heal": "41",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "澄迈",
              "confirm": "9",
              "died": "1",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "三亚",
              "confirm": "55",
              "died": "1",
              "heal": "54",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "昌江黎族自治县",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "定安",
              "confirm": "3",
              "died": "1",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "乐东黎族自治县",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "文昌",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "保亭黎族苗族自治县",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "屯昌",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "三沙",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "19",
              "died": "0",
              "heal": "19",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1476",
          "died": "7",
          "heal": "1469",
          "relativeTime": "1645718400",
          "asymptomatic": "1",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "河北",
          "subList": [
            {
              "city": "张家口",
              "confirm": "43",
              "died": "0",
              "heal": "43",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "保定",
              "confirm": "38",
              "died": "0",
              "heal": "38",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "邢台",
              "confirm": "96",
              "died": "1",
              "heal": "95",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "沧州",
              "confirm": "49",
              "died": "3",
              "heal": "46",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "石家庄",
              "confirm": "963",
              "died": "1",
              "heal": "962",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "承德",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "廊坊",
              "confirm": "39",
              "died": "0",
              "heal": "39",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "邯郸",
              "confirm": "32",
              "died": "0",
              "heal": "32",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "衡水",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "唐山",
              "confirm": "58",
              "died": "1",
              "heal": "57",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "秦皇岛",
              "confirm": "10",
              "died": "1",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "37",
              "died": "0",
              "heal": "37",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "定州",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "雄安新区",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "辛集市",
              "confirm": "71",
              "died": "0",
              "heal": "71",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "2826",
          "died": "3",
          "heal": "2823",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "陕西",
          "subList": [
            {
              "city": "榆林",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "西安",
              "confirm": "2188",
              "died": "3",
              "heal": "2185",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "咸阳",
              "confirm": "31",
              "died": "0",
              "heal": "31",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "商洛",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "安康",
              "confirm": "26",
              "died": "0",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "延安",
              "confirm": "21",
              "died": "0",
              "heal": "21",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "韩城",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "汉中",
              "confirm": "26",
              "died": "0",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宝鸡",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "渭南",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "铜川",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "杨凌示范区",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "483",
              "died": "0",
              "heal": "483",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1937",
          "died": "2",
          "heal": "1872",
          "relativeTime": "1645718400",
          "asymptomatic": "91",
          "nativeRelative": "3",
          "curConfirm": "63",
          "overseasInputRelative": "6",
          "xArea": "云南",
          "subList": [
            {
              "city": "丽江",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "红河州",
              "confirm": "24",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "15"
            },
            {
              "city": "大理州",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "保山",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "昭通",
              "confirm": "25",
              "died": "0",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "德宏州",
              "confirm": "304",
              "died": "0",
              "heal": "294",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "10"
            },
            {
              "city": "曲靖",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "西双版纳傣族自治州",
              "confirm": "20",
              "died": "1",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "5"
            },
            {
              "city": "玉溪",
              "confirm": "14",
              "died": "1",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "普洱",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "昆明",
              "confirm": "58",
              "died": "0",
              "heal": "53",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "5"
            },
            {
              "city": "临沧",
              "confirm": "6",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "2",
              "curConfirm": "5"
            },
            {
              "city": "楚雄州",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "文山",
              "confirm": "5",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "怒江州",
              "confirm": "0",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "1431",
              "died": "0",
              "heal": "1404",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "27"
            },
            {
              "city": "待确认",
              "confirm": "",
              "died": "",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1062",
          "died": "2",
          "heal": "757",
          "relativeTime": "1645718400",
          "asymptomatic": "138",
          "nativeRelative": "9",
          "curConfirm": "303",
          "overseasInputRelative": "7",
          "xArea": "广西",
          "subList": [
            {
              "city": "桂林",
              "confirm": "32",
              "died": "0",
              "heal": "32",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "河池",
              "confirm": "28",
              "died": "1",
              "heal": "27",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南宁",
              "confirm": "57",
              "died": "0",
              "heal": "56",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "防城港",
              "confirm": "55",
              "died": "0",
              "heal": "39",
              "asymptomatic": "0",
              "nativeRelative": "9",
              "curConfirm": "16"
            },
            {
              "city": "贺州",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "柳州",
              "confirm": "24",
              "died": "0",
              "heal": "24",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "玉林",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "北海",
              "confirm": "44",
              "died": "1",
              "heal": "43",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "钦州",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "梧州",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "百色",
              "confirm": "274",
              "died": "0",
              "heal": "84",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "190"
            },
            {
              "city": "贵港",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "来宾",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "500",
              "died": "0",
              "heal": "404",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "96"
            },
            {
              "city": "崇左",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1549",
          "died": "1",
          "heal": "1463",
          "relativeTime": "1645718400",
          "asymptomatic": "37",
          "nativeRelative": "1",
          "curConfirm": "85",
          "overseasInputRelative": "6",
          "xArea": "福建",
          "subList": [
            {
              "city": "厦门",
              "confirm": "277",
              "died": "0",
              "heal": "276",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "1"
            },
            {
              "city": "南平",
              "confirm": "20",
              "died": "0",
              "heal": "20",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "莆田",
              "confirm": "261",
              "died": "0",
              "heal": "261",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "泉州",
              "confirm": "71",
              "died": "0",
              "heal": "71",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "漳州",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "三明",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宁德",
              "confirm": "26",
              "died": "0",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "龙岩",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "福州",
              "confirm": "72",
              "died": "1",
              "heal": "71",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "779",
              "died": "0",
              "heal": "695",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "84"
            }
          ]
        },
        {
          "confirm": "4222",
          "died": "7",
          "heal": "3830",
          "relativeTime": "1645718400",
          "asymptomatic": "70",
          "nativeRelative": "0",
          "curConfirm": "385",
          "overseasInputRelative": "55",
          "xArea": "上海",
          "subList": [
            {
              "city": "嘉定区",
              "confirm": "9",
              "died": "2",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "外地来沪人员",
              "confirm": "113",
              "died": "1",
              "heal": "112",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "松江区",
              "confirm": "16",
              "died": "0",
              "heal": "16",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黄浦区",
              "confirm": "22",
              "died": "0",
              "heal": "22",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "长宁区",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "青浦区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "闵行区",
              "confirm": "19",
              "died": "0",
              "heal": "19",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "静安区",
              "confirm": "19",
              "died": "1",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "虹口区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宝山区",
              "confirm": "26",
              "died": "1",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "浦东新区",
              "confirm": "82",
              "died": "1",
              "heal": "81",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "杨浦区",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "徐汇区",
              "confirm": "18",
              "died": "1",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "奉贤区",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "金山区",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "普陀区",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "崇明区",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "3830",
              "died": "0",
              "heal": "3445",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "385"
            },
            {
              "city": "境外来沪人员",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "1437",
          "died": "9",
          "heal": "1353",
          "relativeTime": "1645718400",
          "confirmInter": "1",
          "asymptomatic": "115",
          "nativeRelative": "1",
          "curConfirm": "75",
          "overseasInputRelative": "4",
          "xArea": "北京",
          "subList": [
            {
              "city": "东城区",
              "confirm": "19",
              "died": "",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "海淀区",
              "confirm": "97",
              "died": "",
              "heal": "26",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            },
            {
              "city": "大兴区",
              "confirm": "143",
              "died": "",
              "heal": "111",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "9"
            },
            {
              "city": "朝阳区",
              "confirm": "99",
              "died": "",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "1",
              "curConfirm": "14"
            },
            {
              "city": "丰台区",
              "confirm": "349",
              "died": "",
              "heal": "286",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "23"
            },
            {
              "city": "门头沟区",
              "confirm": "5",
              "died": "",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "通州区",
              "confirm": "24",
              "died": "",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "顺义区",
              "confirm": "46",
              "died": "",
              "heal": "45",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "石景山区",
              "confirm": "15",
              "died": "",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "西城区",
              "confirm": "66",
              "died": "",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            },
            {
              "city": "怀柔区",
              "confirm": "8",
              "died": "",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "昌平区",
              "confirm": "69",
              "died": "",
              "heal": "50",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "外地来京人员",
              "confirm": "25",
              "died": "",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "房山区",
              "confirm": "31",
              "died": "",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "6"
            },
            {
              "city": "延庆区",
              "confirm": "1",
              "died": "",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "密云区",
              "confirm": "7",
              "died": "",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "待确认",
              "confirm": "2",
              "died": "9",
              "heal": "424",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "424",
              "died": "",
              "heal": "353",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "71"
            },
            {
              "city": "涉冬（残）奥闭环人员",
              "confirm": "4",
              "died": "",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "4"
            },
            {
              "city": "经济开发区",
              "confirm": "3",
              "died": "",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            }
          ]
        },
        {
          "confirm": "1767",
          "died": "0",
          "heal": "1636",
          "relativeTime": "1645718400",
          "asymptomatic": "50",
          "nativeRelative": "4",
          "curConfirm": "131",
          "overseasInputRelative": "2",
          "xArea": "江苏",
          "subList": [
            {
              "city": "徐州",
              "confirm": "79",
              "died": "0",
              "heal": "79",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "扬州",
              "confirm": "593",
              "died": "0",
              "heal": "593",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宿迁",
              "confirm": "16",
              "died": "0",
              "heal": "16",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "镇江",
              "confirm": "12",
              "died": "0",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "连云港",
              "confirm": "48",
              "died": "0",
              "heal": "48",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "无锡",
              "confirm": "58",
              "died": "0",
              "heal": "55",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "泰州",
              "confirm": "37",
              "died": "0",
              "heal": "37",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "盐城",
              "confirm": "27",
              "died": "0",
              "heal": "27",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "淮安",
              "confirm": "78",
              "died": "0",
              "heal": "78",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南通",
              "confirm": "41",
              "died": "0",
              "heal": "40",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "南京",
              "confirm": "331",
              "died": "0",
              "heal": "331",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "常州",
              "confirm": "54",
              "died": "0",
              "heal": "54",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "苏州",
              "confirm": "199",
              "died": "0",
              "heal": "93",
              "asymptomatic": "0",
              "nativeRelative": "4",
              "curConfirm": "106"
            },
            {
              "city": "境外输入",
              "confirm": "194",
              "died": "0",
              "heal": "173",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "21"
            }
          ]
        },
        {
          "confirm": "1447",
          "died": "3",
          "heal": "1375",
          "relativeTime": "1645718400",
          "asymptomatic": "54",
          "nativeRelative": "2",
          "curConfirm": "69",
          "overseasInputRelative": "0",
          "xArea": "四川",
          "subList": [
            {
              "city": "遂宁",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "达州",
              "confirm": "42",
              "died": "0",
              "heal": "42",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "内江",
              "confirm": "22",
              "died": "0",
              "heal": "22",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "广安",
              "confirm": "30",
              "died": "0",
              "heal": "30",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宜宾",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "凉山州",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "乐山",
              "confirm": "3",
              "died": "0",
              "heal": "3",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "眉山",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "德阳",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巴中",
              "confirm": "24",
              "died": "0",
              "heal": "24",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "成都",
              "confirm": "219",
              "died": "3",
              "heal": "188",
              "asymptomatic": "0",
              "nativeRelative": "2",
              "curConfirm": "28"
            },
            {
              "city": "南充",
              "confirm": "39",
              "died": "0",
              "heal": "39",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "泸州",
              "confirm": "25",
              "died": "0",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "绵阳",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "甘孜州",
              "confirm": "78",
              "died": "0",
              "heal": "78",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "广元",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "资阳",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "自贡",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "雅安",
              "confirm": "8",
              "died": "0",
              "heal": "8",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "攀枝花",
              "confirm": "16",
              "died": "0",
              "heal": "16",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阿坝州",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "828",
              "died": "0",
              "heal": "787",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "41"
            }
          ]
        },
        {
          "confirm": "1123",
          "died": "7",
          "heal": "1073",
          "relativeTime": "1645718400",
          "asymptomatic": "32",
          "nativeRelative": "0",
          "curConfirm": "43",
          "overseasInputRelative": "4",
          "xArea": "山东",
          "subList": [
            {
              "city": "威海",
              "confirm": "38",
              "died": "1",
              "heal": "37",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "泰安",
              "confirm": "35",
              "died": "2",
              "heal": "33",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "济南",
              "confirm": "49",
              "died": "0",
              "heal": "48",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "枣庄",
              "confirm": "24",
              "died": "0",
              "heal": "24",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "济宁",
              "confirm": "260",
              "died": "0",
              "heal": "260",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "临沂",
              "confirm": "49",
              "died": "0",
              "heal": "49",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "青岛",
              "confirm": "82",
              "died": "1",
              "heal": "79",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "2"
            },
            {
              "city": "日照",
              "confirm": "30",
              "died": "0",
              "heal": "30",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "菏泽",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "聊城",
              "confirm": "38",
              "died": "0",
              "heal": "38",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "滨州",
              "confirm": "15",
              "died": "0",
              "heal": "15",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "潍坊",
              "confirm": "44",
              "died": "0",
              "heal": "44",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "德州",
              "confirm": "37",
              "died": "2",
              "heal": "35",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "烟台",
              "confirm": "58",
              "died": "0",
              "heal": "58",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "淄博",
              "confirm": "30",
              "died": "1",
              "heal": "29",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "316",
              "died": "0",
              "heal": "276",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "40"
            }
          ]
        },
        {
          "confirm": "959",
          "died": "1",
          "heal": "958",
          "relativeTime": "1645718400",
          "asymptomatic": "0",
          "nativeRelative": "0",
          "curConfirm": "0",
          "overseasInputRelative": "0",
          "xArea": "江西",
          "subList": [
            {
              "city": "吉安",
              "confirm": "22",
              "died": "0",
              "heal": "22",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "上饶",
              "confirm": "144",
              "died": "0",
              "heal": "144",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "九江",
              "confirm": "117",
              "died": "0",
              "heal": "117",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "新余",
              "confirm": "129",
              "died": "0",
              "heal": "129",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "抚州",
              "confirm": "72",
              "died": "0",
              "heal": "72",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "鹰潭",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宜春",
              "confirm": "106",
              "died": "0",
              "heal": "106",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "景德镇",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "萍乡",
              "confirm": "33",
              "died": "0",
              "heal": "33",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "赣州",
              "confirm": "74",
              "died": "1",
              "heal": "73",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南昌",
              "confirm": "231",
              "died": "0",
              "heal": "231",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "赣江新区",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "616",
          "died": "6",
          "heal": "607",
          "relativeTime": "1645718400",
          "asymptomatic": "4",
          "nativeRelative": "0",
          "curConfirm": "3",
          "overseasInputRelative": "2",
          "xArea": "重庆",
          "subList": [
            {
              "city": "奉节县",
              "confirm": "22",
              "died": "0",
              "heal": "22",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "武隆区",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "永川区",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "两江新区",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "渝北区",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "开州区",
              "confirm": "21",
              "died": "1",
              "heal": "20",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "丰都县",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巫山县",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大足区",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "忠县",
              "confirm": "21",
              "died": "0",
              "heal": "21",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "云阳县",
              "confirm": "25",
              "died": "0",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "璧山区",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "九龙坡区",
              "confirm": "22",
              "died": "1",
              "heal": "21",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "潼南区",
              "confirm": "18",
              "died": "0",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "大渡口区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "梁平区",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "秀山县",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "万州区",
              "confirm": "118",
              "died": "4",
              "heal": "114",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南岸区",
              "confirm": "15",
              "died": "0",
              "heal": "15",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "石柱县",
              "confirm": "15",
              "died": "0",
              "heal": "15",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "涪陵区",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "江北区",
              "confirm": "28",
              "died": "0",
              "heal": "28",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "綦江区",
              "confirm": "24",
              "died": "0",
              "heal": "24",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巫溪县",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "长寿区",
              "confirm": "24",
              "died": "0",
              "heal": "24",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "城口县",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "合川区",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "垫江县",
              "confirm": "20",
              "died": "0",
              "heal": "20",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "江津区",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黔江区",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "渝中区",
              "confirm": "20",
              "died": "0",
              "heal": "20",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "巴南区",
              "confirm": "7",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "铜梁区",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "荣昌区",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "沙坪坝区",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "高新区",
              "confirm": "4",
              "died": "0",
              "heal": "4",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "彭水县",
              "confirm": "2",
              "died": "0",
              "heal": "2",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "酉阳县",
              "confirm": "1",
              "died": "0",
              "heal": "1",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "32",
              "died": "0",
              "heal": "29",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            }
          ]
        },
        {
          "confirm": "1011",
          "died": "6",
          "heal": "1003",
          "relativeTime": "1645718400",
          "asymptomatic": "1",
          "nativeRelative": "0",
          "curConfirm": "2",
          "overseasInputRelative": "0",
          "xArea": "安徽",
          "subList": [
            {
              "city": "安庆",
              "confirm": "83",
              "died": "0",
              "heal": "83",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "芜湖",
              "confirm": "34",
              "died": "0",
              "heal": "34",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "亳州",
              "confirm": "108",
              "died": "0",
              "heal": "108",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黄山",
              "confirm": "9",
              "died": "0",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "淮北",
              "confirm": "27",
              "died": "0",
              "heal": "27",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "蚌埠",
              "confirm": "160",
              "died": "5",
              "heal": "155",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "马鞍山",
              "confirm": "38",
              "died": "0",
              "heal": "38",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "铜陵",
              "confirm": "29",
              "died": "0",
              "heal": "29",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "池州",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宿州",
              "confirm": "42",
              "died": "0",
              "heal": "42",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "合肥",
              "confirm": "176",
              "died": "1",
              "heal": "175",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宣城",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "滁州",
              "confirm": "13",
              "died": "0",
              "heal": "13",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阜阳",
              "confirm": "156",
              "died": "0",
              "heal": "156",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "淮南",
              "confirm": "27",
              "died": "0",
              "heal": "27",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "六安",
              "confirm": "77",
              "died": "0",
              "heal": "77",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "9",
              "died": "0",
              "heal": "7",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "2"
            }
          ]
        },
        {
          "confirm": "1233",
          "died": "4",
          "heal": "1223",
          "relativeTime": "1645718400",
          "asymptomatic": "1",
          "nativeRelative": "0",
          "curConfirm": "6",
          "overseasInputRelative": "0",
          "xArea": "湖南",
          "subList": [
            {
              "city": "衡阳",
              "confirm": "48",
              "died": "0",
              "heal": "48",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "娄底",
              "confirm": "76",
              "died": "0",
              "heal": "76",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "湘潭",
              "confirm": "38",
              "died": "0",
              "heal": "38",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "永州",
              "confirm": "44",
              "died": "0",
              "heal": "44",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "常德",
              "confirm": "82",
              "died": "0",
              "heal": "82",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "张家界",
              "confirm": "77",
              "died": "0",
              "heal": "77",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "岳阳",
              "confirm": "156",
              "died": "1",
              "heal": "155",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "株洲",
              "confirm": "110",
              "died": "0",
              "heal": "110",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "长沙",
              "confirm": "247",
              "died": "2",
              "heal": "245",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "邵阳",
              "confirm": "103",
              "died": "1",
              "heal": "101",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "湘西州",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "郴州",
              "confirm": "39",
              "died": "0",
              "heal": "39",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "怀化",
              "confirm": "40",
              "died": "0",
              "heal": "40",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "益阳",
              "confirm": "63",
              "died": "0",
              "heal": "63",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "100",
              "died": "0",
              "heal": "95",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "5"
            }
          ]
        },
        {
          "confirm": "2664",
          "died": "22",
          "heal": "2624",
          "relativeTime": "1645718400",
          "asymptomatic": "10",
          "nativeRelative": "0",
          "curConfirm": "18",
          "overseasInputRelative": "0",
          "xArea": "河南",
          "subList": [
            {
              "city": "安阳",
              "confirm": "522",
              "died": "0",
              "heal": "518",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "4"
            },
            {
              "city": "信阳",
              "confirm": "277",
              "died": "2",
              "heal": "272",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "周口",
              "confirm": "101",
              "died": "1",
              "heal": "93",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            },
            {
              "city": "开封",
              "confirm": "33",
              "died": "0",
              "heal": "33",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "许昌",
              "confirm": "405",
              "died": "1",
              "heal": "397",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            },
            {
              "city": "濮阳",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "漯河",
              "confirm": "36",
              "died": "0",
              "heal": "36",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "郑州",
              "confirm": "488",
              "died": "5",
              "heal": "476",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            },
            {
              "city": "三门峡",
              "confirm": "8",
              "died": "1",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "驻马店",
              "confirm": "143",
              "died": "0",
              "heal": "143",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "南阳",
              "confirm": "156",
              "died": "3",
              "heal": "153",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "鹤壁",
              "confirm": "19",
              "died": "0",
              "heal": "19",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "商丘",
              "confirm": "109",
              "died": "3",
              "heal": "104",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "2"
            },
            {
              "city": "洛阳",
              "confirm": "41",
              "died": "1",
              "heal": "40",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "新乡",
              "confirm": "57",
              "died": "3",
              "heal": "54",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "焦作",
              "confirm": "32",
              "died": "1",
              "heal": "31",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "平顶山",
              "confirm": "59",
              "died": "1",
              "heal": "57",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "济源",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "156",
              "died": "0",
              "heal": "145",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "11"
            },
            {
              "city": "待确认",
              "confirm": "",
              "died": "",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            }
          ]
        },
        {
          "confirm": "4449",
          "died": "8",
          "heal": "3854",
          "relativeTime": "1645718400",
          "asymptomatic": "269",
          "nativeRelative": "45",
          "curConfirm": "587",
          "overseasInputRelative": "59",
          "xArea": "广东",
          "subList": [
            {
              "city": "肇庆",
              "confirm": "19",
              "died": "1",
              "heal": "18",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "珠海",
              "confirm": "136",
              "died": "1",
              "heal": "98",
              "asymptomatic": "0",
              "nativeRelative": "2",
              "curConfirm": "37"
            },
            {
              "city": "河源",
              "confirm": "6",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "佛山",
              "confirm": "101",
              "died": "0",
              "heal": "101",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "清远",
              "confirm": "12",
              "died": "0",
              "heal": "12",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "汕尾",
              "confirm": "6",
              "died": "0",
              "heal": "6",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "茂名",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "阳江",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "湛江",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "中山",
              "confirm": "71",
              "died": "0",
              "heal": "68",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "3"
            },
            {
              "city": "惠州",
              "confirm": "68",
              "died": "0",
              "heal": "62",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "6"
            },
            {
              "city": "揭阳",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "梅州",
              "confirm": "18",
              "died": "0",
              "heal": "16",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "2"
            },
            {
              "city": "深圳",
              "confirm": "538",
              "died": "3",
              "heal": "428",
              "asymptomatic": "0",
              "nativeRelative": "15",
              "curConfirm": "107"
            },
            {
              "city": "汕头",
              "confirm": "25",
              "died": "0",
              "heal": "25",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "江门",
              "confirm": "23",
              "died": "0",
              "heal": "23",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "韶关",
              "confirm": "10",
              "died": "1",
              "heal": "9",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "东莞",
              "confirm": "157",
              "died": "1",
              "heal": "101",
              "asymptomatic": "0",
              "nativeRelative": "28",
              "curConfirm": "55"
            },
            {
              "city": "广州",
              "confirm": "528",
              "died": "1",
              "heal": "522",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "5"
            },
            {
              "city": "潮州",
              "confirm": "5",
              "died": "0",
              "heal": "5",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "2658",
              "died": "0",
              "heal": "2209",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "449"
            },
            {
              "city": "待确认",
              "confirm": "",
              "died": "",
              "heal": "85",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "云浮",
              "confirm": "7",
              "died": "0",
              "heal": "0",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "7"
            }
          ]
        },
        {
          "confirm": "2263",
          "died": "1",
          "heal": "1981",
          "relativeTime": "1645718400",
          "asymptomatic": "117",
          "nativeRelative": "0",
          "curConfirm": "281",
          "overseasInputRelative": "4",
          "xArea": "浙江",
          "subList": [
            {
              "city": "台州",
              "confirm": "147",
              "died": "0",
              "heal": "147",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "嘉兴",
              "confirm": "46",
              "died": "0",
              "heal": "46",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "湖州",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "舟山",
              "confirm": "10",
              "died": "0",
              "heal": "10",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "绍兴",
              "confirm": "430",
              "died": "0",
              "heal": "429",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "1"
            },
            {
              "city": "宁波",
              "confirm": "269",
              "died": "0",
              "heal": "231",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "38"
            },
            {
              "city": "杭州",
              "confirm": "328",
              "died": "0",
              "heal": "215",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "113"
            },
            {
              "city": "金华",
              "confirm": "57",
              "died": "0",
              "heal": "55",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "2"
            },
            {
              "city": "丽水",
              "confirm": "17",
              "died": "0",
              "heal": "17",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "温州",
              "confirm": "504",
              "died": "1",
              "heal": "503",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "衢州",
              "confirm": "14",
              "died": "0",
              "heal": "14",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "省十里丰监狱",
              "confirm": "36",
              "died": "0",
              "heal": "36",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "395",
              "died": "0",
              "heal": "268",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "127"
            }
          ]
        },
        {
          "confirm": "68347",
          "died": "4512",
          "heal": "63808",
          "relativeTime": "1645718400",
          "asymptomatic": "23",
          "nativeRelative": "0",
          "curConfirm": "27",
          "overseasInputRelative": "0",
          "xArea": "湖北",
          "subList": [
            {
              "city": "仙桃",
              "confirm": "575",
              "died": "22",
              "heal": "553",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "天门",
              "confirm": "498",
              "died": "15",
              "heal": "483",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "随州",
              "confirm": "1307",
              "died": "45",
              "heal": "1262",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "咸宁",
              "confirm": "836",
              "died": "15",
              "heal": "821",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "十堰",
              "confirm": "672",
              "died": "8",
              "heal": "664",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "恩施",
              "confirm": "252",
              "died": "7",
              "heal": "245",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "襄阳",
              "confirm": "1175",
              "died": "40",
              "heal": "1135",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "荆州",
              "confirm": "1582",
              "died": "52",
              "heal": "1530",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "神农架林区",
              "confirm": "11",
              "died": "0",
              "heal": "11",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "宜昌",
              "confirm": "931",
              "died": "37",
              "heal": "894",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "潜江",
              "confirm": "198",
              "died": "9",
              "heal": "189",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "武汉",
              "confirm": "50401",
              "died": "3869",
              "heal": "46511",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "21"
            },
            {
              "city": "黄冈",
              "confirm": "2912",
              "died": "125",
              "heal": "2787",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "孝感",
              "confirm": "3518",
              "died": "129",
              "heal": "3389",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "黄石",
              "confirm": "1015",
              "died": "39",
              "heal": "976",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "荆门",
              "confirm": "971",
              "died": "41",
              "heal": "930",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "鄂州",
              "confirm": "1395",
              "died": "59",
              "heal": "1336",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "0"
            },
            {
              "city": "境外输入",
              "confirm": "98",
              "died": "0",
              "heal": "92",
              "asymptomatic": "0",
              "nativeRelative": "0",
              "curConfirm": "6"
            }
          ]
        }
  ],
  "curtime": 1645890352
      },
      title: [
        {
          name: '累计人数'
        },
        {
          name: "现存人数"
        }
      ],
      active: 0,
      // 疫情数据列表 累计人数
      list: [],
      // 现存人数
      arr: []
    }
  },
  // echarts 实例
  mounted() {
    /**
     * 国内疫情数据接口
     */
    // api.getchinaData().then((res) => {
    //   console.log(res.data);
    // }).catch( err => {
    //   console.log(err)
    // })
    // console.log(this.data.retdata);
    this.handle()
    // console.log(this.arr);
    // 渲染中国地图 累计人数
    this.chinaMap("chian", this.list);
    // 现存人数
    this.chinaMap("nochian", this.arr);
    
  },
  beforeDestroy() {
    // 渲染中国地图 累计人数
    this.chinaMap("chian", this.list);
    // 现存人数
    this.chinaMap("nochian", this.arr);
  },
  methods: {
    getBar() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 中国地图
    chinaMap(id, data) {
      var myChart = this.$echarts.init(document.getElementById(id));
      // console.log(myChart);
      var options = {
        tooltip: {
          triggerOn: 'click',
          enterable: true,
          formatter(item) {
            // return "<a style='color: #fff; href='#/city/>"+ item.name +"''>"
            // return '<a href="/Citys/"'+ item.name + 'style="color: white">'+'省份:' + item.name + ' 确诊人数:' + item.value + '--详情></a>';

            return `<a href="/Citys/${item.name}" style="color: white">省份: ${item.name} 确诊人数: ${item.value}--详情></a>`;
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
              max: 0,
              color: "#ffffff"
            },
            {
              min: 1,
              max: 100,
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
          name: "省",
          type: "map",
          map: "china",
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
    },
    // 处理疫情数据
    handle() {
      var retdata = this.data.retdata
      for( var i in retdata){
        var obj = {};   // 累计人数
        obj.name = retdata[i].xArea;
        obj.value = retdata[i].confirm;
        var onarr = {}; // 现存人数
        onarr.name = retdata[i].xArea;
        onarr.value = retdata[i].curConfirm;
        this.list.push(obj);
        this.arr.push(onarr);
      }
    }
  }
}
</script>

<style scoped>
  .title {
    border-left: 0.1rem solid #4654ff;
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;
    height: .4rem;
    margin: .2rem 0 .2rem .2rem;
  }
  .map h4 {
    margin-left: .2rem;
  }
  #chian,#nochian{
    background-color: #f2f2f2;
    
  }
</style>
