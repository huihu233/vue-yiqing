<template>
  <div>
    <div class="title">世界地图</div>
    <!-- 地图容器 -->
    <div id="world" style="wdith: 6rem; height: 7rem"></div>
  </div>
</template>

<script>
// 导入世界地图
import '../../../utils/map'
// 导入名称映射
import country from '../../../utils/country'
// api数据
// import api from '../../../api/index'
export default {
  data() {
    return {
      data: {
  "codeid": 10000,
  "message": "操作成功!",
  "retdata": [
    {
      "confirm": "10",
      "died": "0",
      "heal": "3",
      "xArea": "库克群岛",
      "curConfirm": "7",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "30.0%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "2904",
      "died": "11",
      "heal": "1962",
      "xArea": "基里巴斯",
      "curConfirm": "931",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "67.6%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "355",
      "died": "0",
      "heal": "177",
      "xArea": "汤加王国",
      "curConfirm": "178",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "49.9%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "2994841",
      "died": "7944",
      "heal": "969524",
      "relativeTime": "1645804800",
      "curConfirm": "2017373",
      "xArea": "韩国",
      "subList": [
        {
          "city": "首尔",
          "confirm": "119594",
          "died": "796",
          "heal": "107550",
          "curConfirm": "11248",
          "curedPercent": "89.9%",
          "diedPercent": "0.7%"
        },
        {
          "city": "京畿道",
          "confirm": "108463",
          "died": "931",
          "heal": "99489",
          "curConfirm": "8043",
          "curedPercent": "91.7%",
          "diedPercent": "0.9%"
        },
        {
          "city": "仁川",
          "confirm": "19373",
          "died": "108",
          "heal": "17506",
          "curConfirm": "1759",
          "curedPercent": "90.4%",
          "diedPercent": "0.6%"
        },
        {
          "city": "忠清南道",
          "confirm": "10600",
          "died": "59",
          "heal": "9835",
          "curConfirm": "706",
          "curedPercent": "92.8%",
          "diedPercent": "0.6%"
        },
        {
          "city": "忠清北道",
          "confirm": "7900",
          "died": "83",
          "heal": "7364",
          "curConfirm": "453",
          "curedPercent": "93.2%",
          "diedPercent": "1.1%"
        },
        {
          "city": "庆尚北道",
          "confirm": "9709",
          "died": "95",
          "heal": "9224",
          "curConfirm": "390",
          "curedPercent": "95.0%",
          "diedPercent": "1.0%"
        },
        {
          "city": "釜山",
          "confirm": "13911",
          "died": "161",
          "heal": "13301",
          "curConfirm": "449",
          "curedPercent": "95.6%",
          "diedPercent": "1.2%"
        },
        {
          "city": "大邱",
          "confirm": "17142",
          "died": "261",
          "heal": "16278",
          "curConfirm": "603",
          "curedPercent": "95.0%",
          "diedPercent": "1.5%"
        },
        {
          "city": "庆尚南道",
          "confirm": "13008",
          "died": "41",
          "heal": "12427",
          "curConfirm": "540",
          "curedPercent": "95.5%",
          "diedPercent": "0.3%"
        },
        {
          "city": "江原道",
          "confirm": "7199",
          "died": "67",
          "heal": "6907",
          "curConfirm": "225",
          "curedPercent": "95.9%",
          "diedPercent": "0.9%"
        },
        {
          "city": "大田",
          "confirm": "7532",
          "died": "54",
          "heal": "7360",
          "curConfirm": "118",
          "curedPercent": "97.7%",
          "diedPercent": "0.7%"
        },
        {
          "city": "全罗北道",
          "confirm": "5187",
          "died": "66",
          "heal": "4824",
          "curConfirm": "297",
          "curedPercent": "93.0%",
          "diedPercent": "1.3%"
        },
        {
          "city": "全罗南道",
          "confirm": "3543",
          "died": "22",
          "heal": "3382",
          "curConfirm": "139",
          "curedPercent": "95.5%",
          "diedPercent": "0.6%"
        },
        {
          "city": "检疫",
          "confirm": "6282",
          "died": "16",
          "heal": "6147",
          "curConfirm": "119",
          "curedPercent": "97.9%",
          "diedPercent": "0.3%"
        },
        {
          "city": "光州市",
          "confirm": "5371",
          "died": "29",
          "heal": "5261",
          "curConfirm": "81",
          "curedPercent": "98.0%",
          "diedPercent": "0.5%"
        },
        {
          "city": "济州岛",
          "confirm": "3100",
          "died": "2",
          "heal": "3037",
          "curConfirm": "61",
          "curedPercent": "98.0%",
          "diedPercent": "0.1%"
        },
        {
          "city": "蔚山",
          "confirm": "5421",
          "died": "56",
          "heal": "5316",
          "curConfirm": "49",
          "curedPercent": "98.1%",
          "diedPercent": "1.0%"
        },
        {
          "city": "世宗",
          "confirm": "1365",
          "died": "2",
          "heal": "1340",
          "curConfirm": "23",
          "curedPercent": "98.2%",
          "diedPercent": "0.1%"
        },
        {
          "city": "待确认",
          "confirm": "2630141",
          "died": "5095",
          "heal": "632976",
          "curConfirm": "1992070",
          "curedPercent": "24.1%",
          "diedPercent": "0.2%"
        }
      ],
      "curedPercent": "32.4%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "3726",
      "died": "6",
      "heal": "2942",
      "xArea": "帕劳共和国",
      "curConfirm": "778",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "79.0%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "2",
      "died": "0",
      "heal": "2",
      "xArea": "圣赫勒拿",
      "curConfirm": "0",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "100.0%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "1",
      "died": "0",
      "heal": "1",
      "xArea": "密克罗尼西亚",
      "curConfirm": "0",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "100.0%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "33",
      "died": "0",
      "heal": "3",
      "xArea": "萨摩亚独立国",
      "curConfirm": "30",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "9.1%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "18",
      "died": "1",
      "heal": "6",
      "xArea": "瓦努阿图共和国",
      "curConfirm": "11",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "33.3%",
      "diedPercent": "5.6%"
    },
    {
      "confirm": "89",
      "died": "0",
      "heal": "68",
      "xArea": "马尔维纳斯群岛",
      "curConfirm": "21",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "76.4%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "7",
      "died": "0",
      "heal": "7",
      "xArea": "马绍尔群岛",
      "curConfirm": "0",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "100.0%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "454",
      "died": "7",
      "heal": "438",
      "xArea": "瓦利斯和富图纳群岛",
      "curConfirm": "9",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.5%",
      "diedPercent": "1.5%"
    },
    {
      "confirm": "6813",
      "died": "93",
      "heal": "1732",
      "xArea": "所罗门群岛",
      "curConfirm": "4988",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "25.4%",
      "diedPercent": "1.4%"
    },
    {
      "confirm": "32612",
      "died": "696",
      "heal": "23343",
      "xArea": "莱索托",
      "curConfirm": "8573",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "71.6%",
      "diedPercent": "2.1%"
    },
    {
      "confirm": "8032",
      "died": "160",
      "heal": "7853",
      "xArea": "科摩罗",
      "curConfirm": "19",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.8%",
      "diedPercent": "2.0%"
    },
    {
      "confirm": "17388",
      "died": "124",
      "heal": "17263",
      "xArea": "塔吉克斯坦",
      "curConfirm": "1",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.3%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "50384",
      "died": "143",
      "heal": "47633",
      "xArea": "海峡群岛",
      "curConfirm": "2608",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.5%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "878746",
      "died": "2301",
      "heal": "830805",
      "xArea": "阿拉伯联合酋长国",
      "curConfirm": "45640",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.5%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "11760",
      "died": "2133",
      "heal": "8688",
      "xArea": "也门",
      "curConfirm": "939",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "73.9%",
      "diedPercent": "18.1%"
    },
    {
      "confirm": "1070",
      "died": "1",
      "heal": "1049",
      "xArea": "圣皮埃尔",
      "curConfirm": "20",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.0%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "5933",
      "died": "72",
      "heal": "5851",
      "xArea": "圣多美和普林西比",
      "curConfirm": "10",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.6%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "16955",
      "died": "137",
      "heal": "13250",
      "xArea": "南苏丹",
      "curConfirm": "3568",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "78.1%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "85314",
      "died": "2613",
      "heal": "75514",
      "xArea": "马拉维",
      "curConfirm": "7187",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "88.5%",
      "diedPercent": "3.1%"
    },
    {
      "confirm": "38063",
      "died": "38",
      "heal": "773",
      "xArea": "布隆迪",
      "curConfirm": "37252",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "2.0%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "7665",
      "died": "125",
      "heal": "4393",
      "xArea": "塞拉利昂",
      "curConfirm": "3147",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "57.3%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "263950",
      "died": "2619",
      "heal": "259434",
      "xArea": "博茨瓦纳",
      "curConfirm": "1897",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.3%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "11490",
      "died": "123",
      "heal": "11150",
      "xArea": "百慕大",
      "curConfirm": "217",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "6074",
      "died": "62",
      "heal": "2649",
      "xArea": "英属维尔京群岛",
      "curConfirm": "3363",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "43.6%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "2528",
      "died": "9",
      "heal": "2506",
      "xArea": "安圭拉",
      "curConfirm": "13",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.1%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "13696",
      "died": "214",
      "heal": "13229",
      "xArea": "格林纳达",
      "curConfirm": "253",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.6%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "5530",
      "died": "42",
      "heal": "5473",
      "xArea": "圣基茨和尼维斯",
      "curConfirm": "15",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.0%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "5860",
      "died": "36",
      "heal": "5787",
      "xArea": "特克斯和凯科斯群岛",
      "curConfirm": "37",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.8%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "7985",
      "died": "166",
      "heal": "6977",
      "xArea": "几内亚比绍",
      "curConfirm": "842",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "87.4%",
      "diedPercent": "2.1%"
    },
    {
      "confirm": "30371",
      "died": "722",
      "heal": "29451",
      "xArea": "马里",
      "curConfirm": "198",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "2.4%"
    },
    {
      "confirm": "492154",
      "died": "6241",
      "heal": "457636",
      "xArea": "利比亚",
      "curConfirm": "28277",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "93.0%",
      "diedPercent": "1.3%"
    },
    {
      "confirm": "142474",
      "died": "621",
      "heal": "7660",
      "xArea": "老挝",
      "curConfirm": "134193",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "5.4%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "56597",
      "died": "650",
      "heal": "54453",
      "xArea": "伯利兹",
      "curConfirm": "1494",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.2%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "584239",
      "died": "19360",
      "heal": "532202",
      "xArea": "缅甸",
      "curConfirm": "32677",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "91.1%",
      "diedPercent": "3.3%"
    },
    {
      "confirm": "11016",
      "died": "57",
      "heal": "10563",
      "xArea": "多米尼克",
      "curConfirm": "396",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.9%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "225036",
      "died": "2192",
      "heal": "219320",
      "xArea": "莫桑比克",
      "curConfirm": "3524",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.5%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "54380",
      "died": "3068",
      "heal": "46728",
      "xArea": "叙利亚",
      "curConfirm": "4584",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "85.9%",
      "diedPercent": "5.6%"
    },
    {
      "confirm": "22660",
      "died": "79",
      "heal": "22227",
      "xArea": "马恩岛",
      "curConfirm": "354",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.1%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "41038",
      "died": "638",
      "heal": "38856",
      "xArea": "巴布亚新几内亚",
      "curConfirm": "1544",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.7%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "9700",
      "died": "103",
      "heal": "9593",
      "xArea": "厄立特里亚",
      "curConfirm": "4",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.9%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "163216",
      "died": "3585",
      "heal": "99979",
      "xArea": "乌干达",
      "curConfirm": "59652",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "61.3%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "98701",
      "died": "1899",
      "heal": "96622",
      "xArea": "安哥拉",
      "curConfirm": "180",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.9%",
      "diedPercent": "1.9%"
    },
    {
      "confirm": "22649",
      "died": "128",
      "heal": "21942",
      "xArea": "东帝汶",
      "curConfirm": "579",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.9%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "53007",
      "died": "299",
      "heal": "42318",
      "xArea": "新喀里多尼亚",
      "curConfirm": "10390",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "79.8%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "63659",
      "died": "1366",
      "heal": "58677",
      "xArea": "马达加斯加",
      "curConfirm": "3616",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.2%",
      "diedPercent": "2.1%"
    },
    {
      "confirm": "235803",
      "died": "5393",
      "heal": "225873",
      "xArea": "津巴布韦",
      "curConfirm": "4537",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.8%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "55881",
      "died": "401",
      "heal": "55407",
      "xArea": "佛得角",
      "curConfirm": "73",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.2%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "163",
      "died": "2",
      "heal": "161",
      "xArea": "蒙特塞拉特",
      "curConfirm": "0",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "30340",
      "died": "820",
      "heal": "25208",
      "xArea": "海地",
      "curConfirm": "4312",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "83.1%",
      "diedPercent": "2.7%"
    },
    {
      "confirm": "8746",
      "died": "306",
      "heal": "8419",
      "xArea": "尼日尔",
      "curConfirm": "21",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.3%",
      "diedPercent": "3.5%"
    },
    {
      "confirm": "7246",
      "died": "190",
      "heal": "4874",
      "xArea": "乍得",
      "curConfirm": "2182",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "67.3%",
      "diedPercent": "2.6%"
    },
    {
      "confirm": "147786",
      "died": "4062",
      "heal": "123870",
      "xArea": "萨尔瓦多",
      "curConfirm": "19854",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "83.8%",
      "diedPercent": "2.7%"
    },
    {
      "confirm": "18004",
      "died": "220",
      "heal": "4225",
      "xArea": "尼加拉瓜",
      "curConfirm": "13559",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "23.5%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "63756",
      "died": "833",
      "heal": "61890",
      "xArea": "斐济",
      "curConfirm": "1033",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.1%",
      "diedPercent": "1.3%"
    },
    {
      "confirm": "30858",
      "died": "786",
      "heal": "27008",
      "xArea": "毛里求斯",
      "curConfirm": "3064",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "87.5%",
      "diedPercent": "2.5%"
    },
    {
      "confirm": "312611",
      "died": "3951",
      "heal": "306572",
      "xArea": "赞比亚",
      "curConfirm": "2088",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.1%",
      "diedPercent": "1.3%"
    },
    {
      "confirm": "15547",
      "died": "189",
      "heal": "15352",
      "xArea": "吉布提",
      "curConfirm": "6",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.7%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "200478",
      "died": "2956",
      "heal": "195056",
      "xArea": "吉尔吉斯斯坦",
      "curConfirm": "2466",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.3%",
      "diedPercent": "1.5%"
    },
    {
      "confirm": "54902",
      "died": "313",
      "heal": "52253",
      "xArea": "巴巴多斯",
      "curConfirm": "2336",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.2%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "230011",
      "died": "2674",
      "heal": "225637",
      "xArea": "黑山",
      "curConfirm": "1700",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.1%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "11924",
      "died": "365",
      "heal": "11461",
      "xArea": "冈比亚",
      "curConfirm": "98",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.1%",
      "diedPercent": "3.1%"
    },
    {
      "confirm": "11715",
      "died": "16",
      "heal": "2761",
      "xArea": "格陵兰岛",
      "curConfirm": "8938",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "23.6%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "26567",
      "died": "163",
      "heal": "25506",
      "xArea": "贝宁",
      "curConfirm": "898",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.0%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "26313",
      "died": "1348",
      "heal": "13182",
      "xArea": "索马里",
      "curConfirm": "11783",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "50.1%",
      "diedPercent": "5.1%"
    },
    {
      "confirm": "33620",
      "died": "798",
      "heal": "183",
      "xArea": "坦桑尼亚",
      "curConfirm": "32639",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "0.5%",
      "diedPercent": "2.4%"
    },
    {
      "confirm": "7360",
      "died": "290",
      "heal": "5747",
      "xArea": "利比里亚",
      "curConfirm": "1323",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "78.1%",
      "diedPercent": "3.9%"
    },
    {
      "confirm": "62891",
      "died": "1220",
      "heal": "60929",
      "xArea": "圭亚那合作共和国",
      "curConfirm": "742",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.9%",
      "diedPercent": "1.9%"
    },
    {
      "confirm": "36662",
      "died": "187",
      "heal": "2964",
      "xArea": "马约特",
      "curConfirm": "33511",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "8.1%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "33108",
      "died": "771",
      "heal": "26197",
      "xArea": "巴哈马",
      "curConfirm": "6140",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "79.1%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "236299",
      "died": "1633",
      "heal": "232597",
      "xArea": "乌兹别克斯坦",
      "curConfirm": "2069",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.4%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "126642",
      "died": "837",
      "heal": "2250",
      "xArea": "瓜德罗普",
      "curConfirm": "123555",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "1.8%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "19373",
      "died": "17",
      "heal": "8553",
      "xArea": "开曼群岛",
      "curConfirm": "10803",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "44.1%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "23967",
      "died": "378",
      "heal": "20178",
      "xArea": "刚果（布）",
      "curConfirm": "3411",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "84.2%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "14187",
      "died": "113",
      "heal": "6859",
      "xArea": "中非共和国",
      "curConfirm": "7215",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "48.3%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "39181",
      "died": "160",
      "heal": "38481",
      "xArea": "塞舌尔",
      "curConfirm": "540",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.2%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "15877",
      "died": "182",
      "heal": "15653",
      "xArea": "赤道几内亚",
      "curConfirm": "42",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.6%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "157193",
      "died": "4007",
      "heal": "152680",
      "xArea": "纳米比亚",
      "curConfirm": "506",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.1%",
      "diedPercent": "2.5%"
    },
    {
      "confirm": "129485",
      "died": "1457",
      "heal": "45522",
      "xArea": "卢旺达",
      "curConfirm": "82506",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "35.2%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "69125",
      "died": "1390",
      "heal": "67618",
      "xArea": "斯威士兰",
      "curConfirm": "117",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.8%",
      "diedPercent": "2.0%"
    },
    {
      "confirm": "58629",
      "died": "979",
      "heal": "57597",
      "xArea": "毛里塔尼亚",
      "curConfirm": "53",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.2%",
      "diedPercent": "1.7%"
    },
    {
      "confirm": "33676",
      "died": "211",
      "heal": "33406",
      "xArea": "阿鲁巴",
      "curConfirm": "59",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.2%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "712",
      "died": "13",
      "heal": "699",
      "xArea": "钻石公主号邮轮",
      "curConfirm": "0",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.2%",
      "diedPercent": "1.8%"
    },
    {
      "confirm": "78092",
      "died": "1316",
      "heal": "49354",
      "xArea": "苏里南",
      "curConfirm": "27422",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "63.2%",
      "diedPercent": "1.7%"
    },
    {
      "confirm": "38915",
      "died": "261",
      "heal": "38306",
      "xArea": "库拉索",
      "curConfirm": "348",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.4%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "22649",
      "died": "358",
      "heal": "21980",
      "xArea": "圣卢西亚",
      "curConfirm": "311",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "6739",
      "died": "106",
      "heal": "6591",
      "xArea": "圣文森特和格林纳丁斯",
      "curConfirm": "42",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.8%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "7437",
      "died": "135",
      "heal": "7253",
      "xArea": "安提瓜和巴布达",
      "curConfirm": "49",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.5%",
      "diedPercent": "1.8%"
    },
    {
      "confirm": "776262",
      "died": "16961",
      "heal": "714146",
      "xArea": "危地马拉",
      "curConfirm": "45155",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.0%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "838341",
      "died": "6961",
      "heal": "806174",
      "xArea": "乌拉圭",
      "curConfirm": "25206",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.2%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "514315",
      "died": "5631",
      "heal": "501306",
      "xArea": "委内瑞拉",
      "curConfirm": "7378",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.5%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "61376",
      "died": "3901",
      "heal": "40329",
      "xArea": "苏丹",
      "curConfirm": "17146",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "65.7%",
      "diedPercent": "6.4%"
    },
    {
      "confirm": "36393",
      "died": "440",
      "heal": "32939",
      "xArea": "几内亚",
      "curConfirm": "3014",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.5%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "468625",
      "died": "7458",
      "heal": "416643",
      "xArea": "埃塞俄比亚",
      "curConfirm": "44524",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "88.9%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "1302059",
      "died": "13592",
      "heal": "1266669",
      "xArea": "哈萨克斯坦",
      "curConfirm": "21798",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.3%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "322906",
      "died": "5639",
      "heal": "303208",
      "xArea": "肯尼亚",
      "curConfirm": "14059",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "93.9%",
      "diedPercent": "1.7%"
    },
    {
      "confirm": "126934",
      "died": "3617",
      "heal": "100076",
      "xArea": "特立尼达和多巴哥",
      "curConfirm": "23241",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "78.8%",
      "diedPercent": "2.8%"
    },
    {
      "confirm": "47520",
      "died": "303",
      "heal": "45743",
      "xArea": "加蓬",
      "curConfirm": "1474",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.3%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "159124",
      "died": "1442",
      "heal": "157133",
      "xArea": "加纳",
      "curConfirm": "549",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.7%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "65583",
      "died": "638",
      "heal": "33500",
      "xArea": "法属波利尼西亚",
      "curConfirm": "31445",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "51.1%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "1068757",
      "died": "8494",
      "heal": "1057636",
      "xArea": "古巴",
      "curConfirm": "2627",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "99.0%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "292126",
      "died": "640",
      "heal": "274185",
      "xArea": "留尼汪岛",
      "curConfirm": "17301",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "93.9%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "81467",
      "died": "792",
      "heal": "79816",
      "xArea": "科特迪瓦",
      "curConfirm": "859",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.0%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "411212",
      "died": "10720",
      "heal": "127663",
      "xArea": "洪都拉斯",
      "curConfirm": "272829",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "31.0%",
      "diedPercent": "2.6%"
    },
    {
      "confirm": "893048",
      "died": "21419",
      "heal": "786112",
      "xArea": "玻利维亚",
      "curConfirm": "85517",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "88.0%",
      "diedPercent": "2.4%"
    },
    {
      "confirm": "9548",
      "died": "85",
      "heal": "9420",
      "xArea": "圣马丁岛",
      "curConfirm": "43",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.7%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "3758",
      "died": "6",
      "heal": "462",
      "xArea": "圣巴泰勒米岛",
      "curConfirm": "3290",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "12.3%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "127916",
      "died": "2811",
      "heal": "76422",
      "xArea": "牙买加",
      "curConfirm": "48683",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "59.7%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "13975389",
      "died": "94026",
      "heal": "13219507",
      "xArea": "土耳其",
      "curConfirm": "661856",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.6%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "85999",
      "died": "1335",
      "heal": "50930",
      "xArea": "刚果（金）",
      "curConfirm": "33734",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "59.2%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "754905",
      "died": "8073",
      "heal": "739724",
      "xArea": "巴拿马",
      "curConfirm": "7108",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.0%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "464045",
      "died": "2168",
      "heal": "313256",
      "xArea": "蒙古国",
      "curConfirm": "148621",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "67.5%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "20751",
      "died": "375",
      "heal": "20309",
      "xArea": "布基纳法索",
      "curConfirm": "67",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.9%",
      "diedPercent": "1.8%"
    },
    {
      "confirm": "318773",
      "died": "852",
      "heal": "124370",
      "xArea": "塞浦路斯",
      "curConfirm": "193551",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "39.0%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "55485",
      "died": "115",
      "heal": "27527",
      "xArea": "文莱",
      "curConfirm": "27843",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "49.6%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "112901",
      "died": "876",
      "heal": "104",
      "xArea": "马提尼克",
      "curConfirm": "111921",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "0.1%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "77652",
      "died": "391",
      "heal": "11254",
      "xArea": "法属圭亚那",
      "curConfirm": "66007",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "14.5%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "32044",
      "died": "24",
      "heal": "7693",
      "xArea": "法罗群岛",
      "curConfirm": "24327",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "24.0%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "271141",
      "died": "3458",
      "heal": "264287",
      "xArea": "阿尔巴尼亚",
      "curConfirm": "3396",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.5%",
      "diedPercent": "1.3%"
    },
    {
      "confirm": "1941816",
      "died": "29024",
      "heal": "1800425",
      "xArea": "孟加拉国",
      "curConfirm": "112367",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.7%",
      "diedPercent": "1.5%"
    },
    {
      "confirm": "1087796",
      "died": "35458",
      "heal": "831886",
      "xArea": "保加利亚",
      "curConfirm": "220452",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "76.5%",
      "diedPercent": "3.3%"
    },
    {
      "confirm": "500812",
      "died": "11201",
      "heal": "474487",
      "xArea": "摩尔多瓦",
      "curConfirm": "15124",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.7%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "169148",
      "died": "296",
      "heal": "153628",
      "xArea": "马尔代夫",
      "curConfirm": "15224",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.8%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "640552",
      "died": "18346",
      "heal": "607271",
      "xArea": "巴拉圭",
      "curConfirm": "14935",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.8%",
      "diedPercent": "2.9%"
    },
    {
      "confirm": "71179",
      "died": "602",
      "heal": "69440",
      "xArea": "马耳他",
      "curConfirm": "1137",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.6%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "802472",
      "died": "7999",
      "heal": "659607",
      "xArea": "哥斯达黎加",
      "curConfirm": "134866",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "82.2%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "6060793",
      "died": "138598",
      "heal": "5886065",
      "xArea": "哥伦比亚",
      "curConfirm": "36130",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.1%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "36798",
      "died": "272",
      "heal": "36410",
      "xArea": "多哥",
      "curConfirm": "116",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.9%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "3512404",
      "died": "210407",
      "heal": "1720665",
      "xArea": "秘鲁",
      "curConfirm": "1581332",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "49.0%",
      "diedPercent": "6.0%"
    },
    {
      "confirm": "1433930",
      "died": "18413",
      "heal": "1208512",
      "xArea": "斯洛伐克",
      "curConfirm": "207005",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "84.3%",
      "diedPercent": "1.3%"
    },
    {
      "confirm": "119240",
      "died": "1923",
      "heal": "117089",
      "xArea": "喀麦隆",
      "curConfirm": "228",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.2%",
      "diedPercent": "1.6%"
    },
    {
      "confirm": "29",
      "died": "0",
      "heal": "28",
      "xArea": "梵蒂冈",
      "curConfirm": "1",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.6%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "1906142",
      "died": "15155",
      "heal": "1778444",
      "xArea": "塞尔维亚",
      "curConfirm": "112543",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "93.3%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "15313",
      "died": "101",
      "heal": "14599",
      "xArea": "直布罗陀",
      "curConfirm": "613",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.3%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "11820",
      "died": "6",
      "heal": "7660",
      "xArea": "不丹",
      "curConfirm": "4154",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "64.8%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "11752",
      "died": "78",
      "heal": "11187",
      "xArea": "列支敦士登",
      "curConfirm": "487",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.2%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "574782",
      "died": "5212",
      "heal": "550377",
      "xArea": "巴勒斯坦",
      "curConfirm": "19193",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.8%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "3671991",
      "died": "99191",
      "heal": "3539782",
      "xArea": "南非",
      "curConfirm": "33018",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.4%",
      "diedPercent": "2.7%"
    },
    {
      "confirm": "370652",
      "died": "15411",
      "heal": "192218",
      "xArea": "波黑",
      "curConfirm": "163023",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "51.9%",
      "diedPercent": "4.2%"
    },
    {
      "confirm": "1779174",
      "died": "43752",
      "heal": "1566509",
      "xArea": "匈牙利",
      "curConfirm": "168913",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "88.0%",
      "diedPercent": "2.5%"
    },
    {
      "confirm": "891041",
      "died": "6276",
      "heal": "843933",
      "xArea": "斯洛文尼亚",
      "curConfirm": "40832",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.7%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "5651596",
      "died": "111277",
      "heal": "5031537",
      "xArea": "波兰",
      "curConfirm": "508782",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "89.0%",
      "diedPercent": "2.0%"
    },
    {
      "confirm": "8893568",
      "died": "126048",
      "heal": "8658068",
      "xArea": "阿根廷",
      "curConfirm": "109452",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.4%",
      "diedPercent": "1.4%"
    },
    {
      "confirm": "3015630",
      "died": "42070",
      "heal": "2006906",
      "xArea": "智利",
      "curConfirm": "966654",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "66.6%",
      "diedPercent": "1.4%"
    },
    {
      "confirm": "4809624",
      "died": "105505",
      "heal": "4058020",
      "xArea": "乌克兰",
      "curConfirm": "646099",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "84.4%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "743742",
      "died": "8994",
      "heal": "721473",
      "xArea": "沙特阿拉伯",
      "curConfirm": "13275",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "995713",
      "died": "27702",
      "heal": "944452",
      "xArea": "突尼斯",
      "curConfirm": "23559",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.9%",
      "diedPercent": "2.8%"
    },
    {
      "confirm": "85666",
      "died": "1960",
      "heal": "83610",
      "xArea": "塞内加尔",
      "curConfirm": "96",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.6%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "644077",
      "died": "5223",
      "heal": "505813",
      "xArea": "拉脱维亚",
      "curConfirm": "133041",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "78.5%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "1160750",
      "died": "15970",
      "heal": "1139693",
      "xArea": "摩洛哥",
      "curConfirm": "5087",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.2%",
      "diedPercent": "1.4%"
    },
    {
      "confirm": "1617178",
      "died": "13798",
      "heal": "1497632",
      "xArea": "约旦",
      "curConfirm": "105748",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.6%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "3251302",
      "died": "21001",
      "heal": "2784000",
      "xArea": "葡萄牙",
      "curConfirm": "446301",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "85.6%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "37999",
      "died": "151",
      "heal": "37135",
      "xArea": "安道尔",
      "curConfirm": "713",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.7%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "5504418",
      "died": "147844",
      "heal": "4778039",
      "xArea": "印度尼西亚",
      "curConfirm": "578535",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "86.8%",
      "diedPercent": "2.7%"
    },
    {
      "confirm": "3568717",
      "died": "38558",
      "heal": "3419965",
      "xArea": "捷克",
      "curConfirm": "110194",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.8%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "574071",
      "died": "4368",
      "heal": "568031",
      "xArea": "多米尼加",
      "curConfirm": "1672",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.9%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "419423",
      "died": "8433",
      "heal": "399704",
      "xArea": "亚美尼亚",
      "curConfirm": "11286",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.3%",
      "diedPercent": "2.0%"
    },
    {
      "confirm": "1292212",
      "died": "6475",
      "heal": "1158061",
      "xArea": "爱尔兰",
      "curConfirm": "127676",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "89.6%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "181903",
      "died": "988",
      "heal": "171378",
      "xArea": "卢森堡",
      "curConfirm": "9537",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.2%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "827760",
      "died": "35223",
      "heal": "443880",
      "xArea": "厄瓜多尔",
      "curConfirm": "348657",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "53.6%",
      "diedPercent": "4.3%"
    },
    {
      "confirm": "356363",
      "died": "667",
      "heal": "351746",
      "xArea": "卡塔尔",
      "curConfirm": "3950",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.7%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "14207",
      "died": "112",
      "heal": "13703",
      "xArea": "圣马力诺",
      "curConfirm": "392",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.5%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "9375",
      "died": "51",
      "heal": "9120",
      "xArea": "摩纳哥",
      "curConfirm": "204",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.3%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "123373",
      "died": "61",
      "heal": "75685",
      "xArea": "冰岛",
      "curConfirm": "47627",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "61.3%",
      "diedPercent": "0.0%"
    },
    {
      "confirm": "5502586",
      "died": "318014",
      "heal": "4764651",
      "xArea": "墨西哥",
      "curConfirm": "419921",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "86.6%",
      "diedPercent": "5.8%"
    },
    {
      "confirm": "782748",
      "died": "9358",
      "heal": "757892",
      "xArea": "阿塞拜疆",
      "curConfirm": "15498",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "913333",
      "died": "6454",
      "heal": "901068",
      "xArea": "白俄罗斯",
      "curConfirm": "5811",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.7%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "86138",
      "died": "56",
      "heal": "18114",
      "xArea": "新西兰",
      "curConfirm": "67968",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "21.0%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "896910",
      "died": "8387",
      "heal": "804752",
      "xArea": "立陶宛",
      "curConfirm": "83771",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "89.7%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "254501",
      "died": "3142",
      "heal": "248993",
      "xArea": "尼日利亚",
      "curConfirm": "2366",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "480727",
      "died": "23992",
      "heal": "410948",
      "xArea": "埃及",
      "curConfirm": "45787",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "85.5%",
      "diedPercent": "5.0%"
    },
    {
      "confirm": "6305389",
      "died": "21545",
      "heal": "4201035",
      "xArea": "荷兰",
      "curConfirm": "2082809",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "66.6%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "487955",
      "died": "2213",
      "heal": "364133",
      "xArea": "爱沙尼亚",
      "curConfirm": "121609",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "74.6%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "2602437",
      "died": "4538",
      "heal": "2179015",
      "xArea": "丹麦",
      "curConfirm": "418884",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "83.7%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "2724480",
      "died": "63294",
      "heal": "2453349",
      "xArea": "罗马尼亚",
      "curConfirm": "207837",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.0%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "296703",
      "died": "8994",
      "heal": "283411",
      "xArea": "北马其顿",
      "curConfirm": "4298",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.5%",
      "diedPercent": "3.0%"
    },
    {
      "confirm": "1225866",
      "died": "1598",
      "heal": "88952",
      "xArea": "挪威",
      "curConfirm": "1135316",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "7.3%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "1598172",
      "died": "16097",
      "heal": "1477481",
      "xArea": "格鲁吉亚",
      "curConfirm": "104594",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.4%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "1508504",
      "died": "30173",
      "heal": "1441528",
      "xArea": "巴基斯坦",
      "curConfirm": "36803",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.6%",
      "diedPercent": "2.0%"
    },
    {
      "confirm": "2397187",
      "died": "25719",
      "heal": "2169331",
      "xArea": "希腊",
      "curConfirm": "202137",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.5%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "264778",
      "died": "6828",
      "heal": "177366",
      "xArea": "阿尔及利亚",
      "curConfirm": "80584",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "67.0%",
      "diedPercent": "2.6%"
    },
    {
      "confirm": "2753342",
      "died": "13208",
      "heal": "2097844",
      "xArea": "瑞士",
      "curConfirm": "642290",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "76.2%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "1053568",
      "died": "15012",
      "heal": "1021946",
      "xArea": "克罗地亚",
      "curConfirm": "16610",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "1.4%"
    },
    {
      "confirm": "2636258",
      "died": "14762",
      "heal": "2345622",
      "xArea": "奥地利",
      "curConfirm": "275874",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "89.0%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "379618",
      "died": "4238",
      "heal": "362800",
      "xArea": "阿曼",
      "curConfirm": "12580",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.6%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "173146",
      "died": "7585",
      "heal": "155026",
      "xArea": "阿富汗",
      "curConfirm": "10535",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "89.5%",
      "diedPercent": "4.4%"
    },
    {
      "confirm": "509390",
      "died": "1450",
      "heal": "481914",
      "xArea": "巴林",
      "curConfirm": "26026",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.6%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "618703",
      "died": "2536",
      "heal": "604869",
      "xArea": "科威特",
      "curConfirm": "11298",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.8%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "2300645",
      "died": "24960",
      "heal": "2238457",
      "xArea": "伊拉克",
      "curConfirm": "37228",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.3%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "1065307",
      "died": "10069",
      "heal": "682977",
      "xArea": "黎巴嫩",
      "curConfirm": "372261",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "64.1%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "3613765",
      "died": "10118",
      "heal": "3502941",
      "xArea": "以色列",
      "curConfirm": "100706",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "96.9%",
      "diedPercent": "0.3%"
    },
    {
      "confirm": "7030943",
      "died": "136390",
      "heal": "6616633",
      "xArea": "伊朗",
      "curConfirm": "277920",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.1%",
      "diedPercent": "1.9%"
    },
    {
      "confirm": "28744050",
      "died": "648989",
      "heal": "26082511",
      "xArea": "巴西",
      "curConfirm": "2012550",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.7%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "3544034",
      "died": "30121",
      "heal": "2909318",
      "xArea": "比利时",
      "curConfirm": "604595",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "82.1%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "10977524",
      "died": "99410",
      "heal": "9181728",
      "xArea": "西班牙",
      "curConfirm": "1696386",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "83.6%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "2441142",
      "died": "17107",
      "heal": "2053042",
      "xArea": "瑞典",
      "curConfirm": "370993",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "84.1%",
      "diedPercent": "0.7%"
    },
    {
      "confirm": "16175023",
      "died": "350158",
      "heal": "13321314",
      "xArea": "俄罗斯",
      "curConfirm": "2503551",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "82.4%",
      "diedPercent": "2.2%"
    },
    {
      "confirm": "18804765",
      "died": "161224",
      "heal": "17153253",
      "xArea": "英国",
      "curConfirm": "1490288",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "91.2%",
      "diedPercent": "0.9%"
    },
    {
      "confirm": "12732680",
      "died": "154416",
      "heal": "11437706",
      "relativeTime": "1645804800",
      "curConfirm": "1140558",
      "xArea": "意大利",
      "subList": [
        {
          "city": "伦巴第",
          "confirm": "2327840",
          "died": "38537",
          "heal": "2167370",
          "curConfirm": "121933",
          "curedPercent": "93.1%",
          "diedPercent": "1.7%"
        },
        {
          "city": "艾米利亚-罗马涅",
          "confirm": "1182462",
          "died": "15874",
          "heal": "1128205",
          "curConfirm": "38383",
          "curedPercent": "95.4%",
          "diedPercent": "1.3%"
        },
        {
          "city": "皮埃蒙特",
          "confirm": "975614",
          "died": "13023",
          "heal": "915410",
          "curConfirm": "47181",
          "curedPercent": "93.8%",
          "diedPercent": "1.3%"
        },
        {
          "city": "威尼托",
          "confirm": "1325721",
          "died": "13814",
          "heal": "1253017",
          "curConfirm": "58890",
          "curedPercent": "94.5%",
          "diedPercent": "1.0%"
        },
        {
          "city": "托斯卡纳",
          "confirm": "852932",
          "died": "8980",
          "heal": "809804",
          "curConfirm": "34148",
          "curedPercent": "94.9%",
          "diedPercent": "1.1%"
        },
        {
          "city": "利古里亚",
          "confirm": "343761",
          "died": "5090",
          "heal": "323538",
          "curConfirm": "15133",
          "curedPercent": "94.1%",
          "diedPercent": "1.5%"
        },
        {
          "city": "马尔凯",
          "confirm": "325225",
          "died": "3580",
          "heal": "301519",
          "curConfirm": "20126",
          "curedPercent": "92.7%",
          "diedPercent": "1.1%"
        },
        {
          "city": "拉齐奥",
          "confirm": "1068456",
          "died": "10407",
          "heal": "908356",
          "curConfirm": "149693",
          "curedPercent": "85.0%",
          "diedPercent": "1.0%"
        },
        {
          "city": "坎帕尼亚",
          "confirm": "1201866",
          "died": "9725",
          "heal": "1054338",
          "curConfirm": "137803",
          "curedPercent": "87.7%",
          "diedPercent": "0.8%"
        },
        {
          "city": "弗留利-威尼斯朱利亚",
          "confirm": "307621",
          "died": "4771",
          "heal": "282745",
          "curConfirm": "20105",
          "curedPercent": "91.9%",
          "diedPercent": "1.6%"
        },
        {
          "city": "西西里",
          "confirm": "779780",
          "died": "9424",
          "heal": "540517",
          "curConfirm": "229839",
          "curedPercent": "69.3%",
          "diedPercent": "1.2%"
        },
        {
          "city": "普利亚",
          "confirm": "730126",
          "died": "7636",
          "heal": "641582",
          "curConfirm": "80908",
          "curedPercent": "87.9%",
          "diedPercent": "1.0%"
        },
        {
          "city": "翁布里亚",
          "confirm": "183194",
          "died": "1729",
          "heal": "171434",
          "curConfirm": "10031",
          "curedPercent": "93.6%",
          "diedPercent": "0.9%"
        },
        {
          "city": "阿布鲁佐",
          "confirm": "262131",
          "died": "2950",
          "heal": "197691",
          "curConfirm": "61490",
          "curedPercent": "75.4%",
          "diedPercent": "1.1%"
        },
        {
          "city": "莫利塞",
          "confirm": "38578",
          "died": "567",
          "heal": "31870",
          "curConfirm": "6141",
          "curedPercent": "82.6%",
          "diedPercent": "1.5%"
        },
        {
          "city": "撒丁",
          "confirm": "174527",
          "died": "2032",
          "heal": "140815",
          "curConfirm": "31680",
          "curedPercent": "80.7%",
          "diedPercent": "1.2%"
        },
        {
          "city": "巴斯利卡塔",
          "confirm": "82496",
          "died": "752",
          "heal": "62130",
          "curConfirm": "19614",
          "curedPercent": "75.3%",
          "diedPercent": "0.9%"
        },
        {
          "city": "卡拉布里亚",
          "confirm": "212804",
          "died": "2079",
          "heal": "164615",
          "curConfirm": "46110",
          "curedPercent": "77.4%",
          "diedPercent": "1.0%"
        },
        {
          "city": "瓦莱达奥斯塔",
          "confirm": "31370",
          "died": "519",
          "heal": "29472",
          "curConfirm": "1379",
          "curedPercent": "93.9%",
          "diedPercent": "1.7%"
        },
        {
          "city": "特伦托",
          "confirm": "138648",
          "died": "1514",
          "heal": "133200",
          "curConfirm": "3934",
          "curedPercent": "96.1%",
          "diedPercent": "1.1%"
        },
        {
          "city": "博尔扎诺",
          "confirm": "187528",
          "died": "1413",
          "heal": "180078",
          "curConfirm": "6037",
          "curedPercent": "96.0%",
          "diedPercent": "0.8%"
        }
      ],
      "curedPercent": "89.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "42916117",
      "died": "513756",
      "heal": "42290921",
      "xArea": "印度",
      "curConfirm": "111440",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "98.5%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "3660020",
      "died": "56351",
      "heal": "3549735",
      "xArea": "菲律宾",
      "curConfirm": "53934",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.0%",
      "diedPercent": "1.5%"
    },
    {
      "confirm": "637729",
      "died": "2364",
      "heal": "46000",
      "xArea": "芬兰",
      "curConfirm": "589365",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "7.2%",
      "diedPercent": "0.4%"
    },
    {
      "confirm": "644060",
      "died": "16166",
      "heal": "608475",
      "xArea": "斯里兰卡",
      "curConfirm": "19419",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.5%",
      "diedPercent": "2.5%"
    },
    {
      "confirm": "129920",
      "died": "3032",
      "heal": "123353",
      "xArea": "柬埔寨",
      "curConfirm": "3535",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "94.9%",
      "diedPercent": "2.3%"
    },
    {
      "confirm": "976771",
      "died": "11934",
      "heal": "955998",
      "xArea": "尼泊尔",
      "curConfirm": "8839",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "97.9%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "3280695",
      "died": "36522",
      "heal": "3129279",
      "xArea": "加拿大",
      "curConfirm": "114894",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "95.4%",
      "diedPercent": "1.1%"
    },
    {
      "confirm": "14633511",
      "died": "123283",
      "heal": "10842300",
      "xArea": "德国",
      "curConfirm": "3667928",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "74.1%",
      "diedPercent": "0.8%"
    },
    {
      "confirm": "3219177",
      "died": "40050",
      "heal": "2376046",
      "xArea": "越南",
      "curConfirm": "803081",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "73.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "22646732",
      "died": "138059",
      "heal": "20620312",
      "xArea": "法国",
      "curConfirm": "1888361",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "91.1%",
      "diedPercent": "0.6%"
    },
    {
      "confirm": "80560293",
      "died": "972930",
      "heal": "53037045",
      "xArea": "美国",
      "curConfirm": "26550318",
      "relativeTime": "1645804800",
      "subList": [
        {
          "city": "纽约州",
          "confirm": "5069752",
          "heal": "2838828",
          "died": "67759",
          "curConfirm": "2163165",
          "relativeTime": "1645804800",
          "curedPercent": "56.0%",
          "diedPercent": "1.3%"
        },
        {
          "city": "新泽西州",
          "confirm": "2165484",
          "heal": "1591539",
          "died": "32888",
          "curConfirm": "541057",
          "relativeTime": "1645804800",
          "curedPercent": "73.5%",
          "diedPercent": "1.5%"
        },
        {
          "city": "马萨诸塞州",
          "confirm": "1669594",
          "heal": "706952",
          "died": "23370",
          "curConfirm": "939272",
          "relativeTime": "1645804800",
          "curedPercent": "42.3%",
          "diedPercent": "1.4%"
        },
        {
          "city": "伊利诺伊州",
          "confirm": "3026737",
          "heal": "2793067",
          "died": "36792",
          "curConfirm": "196878",
          "relativeTime": "1645804800",
          "curedPercent": "92.3%",
          "diedPercent": "1.2%"
        },
        {
          "city": "加利福尼亚州",
          "confirm": "8959354",
          "heal": "2569477",
          "died": "85202",
          "curConfirm": "6304675",
          "relativeTime": "1645804800",
          "curedPercent": "28.7%",
          "diedPercent": "1.0%"
        },
        {
          "city": "宾夕法尼亚州",
          "confirm": "2755525",
          "heal": "1619027",
          "died": "43203",
          "curConfirm": "1093295",
          "relativeTime": "1645804800",
          "curedPercent": "58.8%",
          "diedPercent": "1.6%"
        },
        {
          "city": "密歇根州",
          "confirm": "2357955",
          "heal": "1421905",
          "died": "34477",
          "curConfirm": "901573",
          "relativeTime": "1645804800",
          "curedPercent": "60.3%",
          "diedPercent": "1.5%"
        },
        {
          "city": "佛罗里达州",
          "confirm": "5847261",
          "heal": "4035738",
          "died": "69556",
          "curConfirm": "1741967",
          "relativeTime": "1645804800",
          "curedPercent": "69.0%",
          "diedPercent": "1.2%"
        },
        {
          "city": "得克萨斯州",
          "confirm": "6624359",
          "heal": "4485775",
          "died": "85123",
          "curConfirm": "2053461",
          "relativeTime": "1645804800",
          "curedPercent": "67.7%",
          "diedPercent": "1.3%"
        },
        {
          "city": "康涅狄格州",
          "confirm": "722377",
          "heal": "661350",
          "died": "10443",
          "curConfirm": "50584",
          "relativeTime": "1645804800",
          "curedPercent": "91.6%",
          "diedPercent": "1.4%"
        },
        {
          "city": "佐治亚州",
          "confirm": "2462663",
          "heal": "1623125",
          "died": "35316",
          "curConfirm": "804222",
          "relativeTime": "1645804800",
          "curedPercent": "65.9%",
          "diedPercent": "1.4%"
        },
        {
          "city": "路易斯安那州",
          "confirm": "1225637",
          "heal": "429935",
          "died": "16606",
          "curConfirm": "779096",
          "relativeTime": "1645804800",
          "curedPercent": "35.1%",
          "diedPercent": "1.4%"
        },
        {
          "city": "马里兰州",
          "confirm": "1001509",
          "heal": "11175",
          "died": "14105",
          "curConfirm": "976229",
          "relativeTime": "1645804800",
          "curedPercent": "1.1%",
          "diedPercent": "1.4%"
        },
        {
          "city": "印第安纳州",
          "confirm": "1680331",
          "heal": "1481539",
          "died": "22800",
          "curConfirm": "175992",
          "relativeTime": "1645804800",
          "curedPercent": "88.2%",
          "diedPercent": "1.4%"
        },
        {
          "city": "俄亥俄州",
          "confirm": "2652634",
          "heal": "2574947",
          "died": "36580",
          "curConfirm": "41107",
          "relativeTime": "1645804800",
          "curedPercent": "97.1%",
          "diedPercent": "1.4%"
        },
        {
          "city": "弗吉尼亚州",
          "confirm": "1638464",
          "heal": "58464",
          "died": "18684",
          "curConfirm": "1561316",
          "relativeTime": "1645804800",
          "curedPercent": "3.6%",
          "diedPercent": "1.1%"
        },
        {
          "city": "科罗拉多州",
          "confirm": "1311061",
          "heal": "815449",
          "died": "12439",
          "curConfirm": "483173",
          "relativeTime": "1645804800",
          "curedPercent": "62.2%",
          "diedPercent": "0.9%"
        },
        {
          "city": "华盛顿州",
          "confirm": "1417498",
          "heal": "377753",
          "died": "11831",
          "curConfirm": "1027914",
          "relativeTime": "1645804800",
          "curedPercent": "26.6%",
          "diedPercent": "0.8%"
        },
        {
          "city": "田纳西州",
          "confirm": "2004182",
          "heal": "1317690",
          "died": "24469",
          "curConfirm": "662023",
          "relativeTime": "1645804800",
          "curedPercent": "65.7%",
          "diedPercent": "1.2%"
        },
        {
          "city": "北卡罗来纳州",
          "confirm": "2583404",
          "heal": "2490831",
          "died": "22500",
          "curConfirm": "70073",
          "relativeTime": "1645804800",
          "curedPercent": "96.4%",
          "diedPercent": "0.9%"
        },
        {
          "city": "爱荷华州",
          "confirm": "838723",
          "heal": "616291",
          "died": "9085",
          "curConfirm": "213347",
          "relativeTime": "1645804800",
          "curedPercent": "73.5%",
          "diedPercent": "1.1%"
        },
        {
          "city": "罗得岛州",
          "confirm": "355509",
          "heal": "314144",
          "died": "3406",
          "curConfirm": "37959",
          "relativeTime": "1645804800",
          "curedPercent": "88.4%",
          "diedPercent": "1.0%"
        },
        {
          "city": "亚利桑那州",
          "confirm": "1976890",
          "heal": "1816981",
          "died": "27946",
          "curConfirm": "131963",
          "relativeTime": "1645804800",
          "curedPercent": "91.9%",
          "diedPercent": "1.4%"
        },
        {
          "city": "明尼苏达州",
          "confirm": "1412497",
          "heal": "1390540",
          "died": "12261",
          "curConfirm": "9696",
          "relativeTime": "1645804800",
          "curedPercent": "98.4%",
          "diedPercent": "0.9%"
        },
        {
          "city": "密苏里州",
          "confirm": "1395127",
          "heal": "882597",
          "died": "18846",
          "curConfirm": "493684",
          "relativeTime": "1645804800",
          "curedPercent": "63.3%",
          "diedPercent": "1.4%"
        },
        {
          "city": "威斯康星州",
          "confirm": "1570459",
          "heal": "598952",
          "died": "13256",
          "curConfirm": "958251",
          "relativeTime": "1645804800",
          "curedPercent": "38.1%",
          "diedPercent": "0.8%"
        },
        {
          "city": "亚拉巴马州",
          "confirm": "1279006",
          "heal": "509800",
          "died": "18225",
          "curConfirm": "750981",
          "relativeTime": "1645804800",
          "curedPercent": "39.9%",
          "diedPercent": "1.4%"
        },
        {
          "city": "密西西比州",
          "confirm": "789056",
          "heal": "752267",
          "died": "12008",
          "curConfirm": "24781",
          "relativeTime": "1645804800",
          "curedPercent": "95.3%",
          "diedPercent": "1.5%"
        },
        {
          "city": "内布拉斯加州",
          "confirm": "453569",
          "heal": "170931",
          "died": "3956",
          "curConfirm": "278682",
          "relativeTime": "1645804800",
          "curedPercent": "37.7%",
          "diedPercent": "0.9%"
        },
        {
          "city": "南卡罗来纳州",
          "confirm": "1459070",
          "heal": "941799",
          "died": "16790",
          "curConfirm": "500481",
          "relativeTime": "1645804800",
          "curedPercent": "64.5%",
          "diedPercent": "1.2%"
        },
        {
          "city": "堪萨斯州",
          "confirm": "765566",
          "heal": "678254",
          "died": "7937",
          "curConfirm": "79375",
          "relativeTime": "1645804800",
          "curedPercent": "88.6%",
          "diedPercent": "1.0%"
        },
        {
          "city": "肯塔基州",
          "confirm": "1274681",
          "heal": "53643",
          "died": "13758",
          "curConfirm": "1207280",
          "relativeTime": "1645804800",
          "curedPercent": "4.2%",
          "diedPercent": "1.1%"
        },
        {
          "city": "特拉华州",
          "confirm": "256447",
          "heal": "244932",
          "died": "2709",
          "curConfirm": "8806",
          "relativeTime": "1645804800",
          "curedPercent": "95.5%",
          "diedPercent": "1.1%"
        },
        {
          "city": "犹他州",
          "confirm": "921956",
          "heal": "892973",
          "died": "4408",
          "curConfirm": "24575",
          "relativeTime": "1645804800",
          "curedPercent": "96.9%",
          "diedPercent": "0.5%"
        },
        {
          "city": "华盛顿哥伦比亚特区",
          "confirm": "134326",
          "heal": "124447",
          "died": "1317",
          "curConfirm": "8562",
          "relativeTime": "1645804800",
          "curedPercent": "92.6%",
          "diedPercent": "1.0%"
        },
        {
          "city": "内华达州",
          "confirm": "681387",
          "heal": "514646",
          "died": "9664",
          "curConfirm": "157077",
          "relativeTime": "1645804800",
          "curedPercent": "75.5%",
          "diedPercent": "1.4%"
        },
        {
          "city": "新墨西哥州",
          "confirm": "510783",
          "heal": "448320",
          "died": "6903",
          "curConfirm": "55560",
          "relativeTime": "1645804800",
          "curedPercent": "87.8%",
          "diedPercent": "1.4%"
        },
        {
          "city": "俄克拉何马州",
          "confirm": "1020367",
          "heal": "662637",
          "died": "12990",
          "curConfirm": "344740",
          "relativeTime": "1645804800",
          "curedPercent": "64.9%",
          "diedPercent": "1.3%"
        },
        {
          "city": "阿肯色州",
          "confirm": "818931",
          "heal": "801839",
          "died": "10465",
          "curConfirm": "6627",
          "relativeTime": "1645804800",
          "curedPercent": "97.9%",
          "diedPercent": "1.3%"
        },
        {
          "city": "南达科他州",
          "confirm": "235787",
          "heal": "227637",
          "died": "2802",
          "curConfirm": "5348",
          "relativeTime": "1645804800",
          "curedPercent": "96.5%",
          "diedPercent": "1.2%"
        },
        {
          "city": "俄勒冈州",
          "confirm": "692261",
          "heal": "488590",
          "died": "6582",
          "curConfirm": "197089",
          "relativeTime": "1645804800",
          "curedPercent": "70.6%",
          "diedPercent": "1.0%"
        },
        {
          "city": "新罕布什尔州",
          "confirm": "297729",
          "heal": "293226",
          "died": "2373",
          "curConfirm": "2130",
          "relativeTime": "1645804800",
          "curedPercent": "98.5%",
          "diedPercent": "0.8%"
        },
        {
          "city": "爱达荷州",
          "confirm": "423638",
          "heal": "150897",
          "died": "4730",
          "curConfirm": "268011",
          "relativeTime": "1645804800",
          "curedPercent": "35.6%",
          "diedPercent": "1.1%"
        },
        {
          "city": "北达科他州",
          "confirm": "237935",
          "heal": "234477",
          "died": "2192",
          "curConfirm": "1266",
          "relativeTime": "1645804800",
          "curedPercent": "98.5%",
          "diedPercent": "0.9%"
        },
        {
          "city": "缅因州",
          "confirm": "226120",
          "heal": "12963",
          "died": "2064",
          "curConfirm": "211093",
          "relativeTime": "1645804800",
          "curedPercent": "5.7%",
          "diedPercent": "0.9%"
        },
        {
          "city": "西弗吉尼亚州",
          "confirm": "488359",
          "heal": "478712",
          "died": "6308",
          "curConfirm": "3339",
          "relativeTime": "1645804800",
          "curedPercent": "98.0%",
          "diedPercent": "1.3%"
        },
        {
          "city": "佛蒙特州",
          "confirm": "112023",
          "heal": "100164",
          "died": "595",
          "curConfirm": "11264",
          "relativeTime": "1645804800",
          "curedPercent": "89.4%",
          "diedPercent": "0.5%"
        },
        {
          "city": "怀俄明州",
          "confirm": "154909",
          "heal": "152693",
          "died": "1718",
          "curConfirm": "498",
          "relativeTime": "1645804800",
          "curedPercent": "98.6%",
          "diedPercent": "1.1%"
        },
        {
          "city": "夏威夷州",
          "confirm": "235780",
          "heal": "13182",
          "died": "1330",
          "curConfirm": "221268",
          "relativeTime": "1645804800",
          "curedPercent": "5.6%",
          "diedPercent": "0.6%"
        },
        {
          "city": "蒙大拿州",
          "confirm": "265797",
          "heal": "260525",
          "died": "3172",
          "curConfirm": "2100",
          "relativeTime": "1645804800",
          "curedPercent": "98.0%",
          "diedPercent": "1.2%"
        },
        {
          "city": "阿拉斯加州",
          "confirm": "230848",
          "heal": "151976",
          "died": "1130",
          "curConfirm": "77742",
          "relativeTime": "1645804800",
          "curedPercent": "65.8%",
          "diedPercent": "0.5%"
        },
        {
          "city": "关岛",
          "confirm": "44238",
          "heal": "40143",
          "died": "322",
          "curConfirm": "3773",
          "relativeTime": "1645804800",
          "curedPercent": "90.7%",
          "diedPercent": "0.7%"
        },
        {
          "city": "北马里亚纳群岛",
          "confirm": "9534",
          "heal": "8638",
          "died": "29",
          "curConfirm": "867",
          "relativeTime": "1645804800",
          "curedPercent": "90.6%",
          "diedPercent": "0.3%"
        },
        {
          "city": "波多黎各",
          "confirm": "473124",
          "heal": "258901",
          "died": "4104",
          "curConfirm": "210119",
          "relativeTime": "1645804800",
          "curedPercent": "54.7%",
          "diedPercent": "0.9%"
        },
        {
          "city": "美属维尔京群岛",
          "confirm": "15395",
          "heal": "15160",
          "died": "109",
          "curConfirm": "126",
          "relativeTime": "1645804800",
          "curedPercent": "98.5%",
          "diedPercent": "0.7%"
        },
        {
          "city": "退伍军人事务",
          "confirm": "606304",
          "heal": "577455",
          "died": "20674",
          "curConfirm": "8175",
          "relativeTime": "1645804800",
          "curedPercent": "95.2%",
          "diedPercent": "3.4%"
        },
        {
          "city": "美国国防部报告",
          "confirm": "599043",
          "heal": "531445",
          "died": "678",
          "curConfirm": "66920",
          "relativeTime": "1645804800",
          "curedPercent": "88.7%",
          "diedPercent": "0.1%"
        },
        {
          "city": "联邦监狱",
          "confirm": "68865",
          "heal": "60923",
          "died": "292",
          "curConfirm": "7650",
          "relativeTime": "1645804800",
          "curedPercent": "88.5%",
          "diedPercent": "0.4%"
        },
        {
          "city": "纳瓦霍族",
          "confirm": "52218",
          "heal": "50191",
          "died": "1646",
          "curConfirm": "381",
          "relativeTime": "1645804800",
          "curedPercent": "96.1%",
          "diedPercent": "3.2%"
        },
        {
          "city": "大公主船",
          "confirm": "122",
          "heal": "115",
          "died": "7",
          "curConfirm": "0",
          "relativeTime": "1645804800",
          "curedPercent": "94.3%",
          "diedPercent": "5.7%"
        },
        {
          "city": "撤侨人员",
          "confirm": "3",
          "heal": "3",
          "died": "0",
          "curConfirm": "0",
          "relativeTime": "1645804800",
          "curedPercent": "100.0%",
          "diedPercent": "0.0%"
        },
        {
          "city": "钻石公主船",
          "confirm": "46",
          "heal": "46",
          "died": "0",
          "curConfirm": "0",
          "relativeTime": "1645804800",
          "curedPercent": "100.0%",
          "diedPercent": "0.0%"
        },
        {
          "city": "美属萨摩亚群岛",
          "confirm": "84",
          "heal": "4",
          "died": "0",
          "curConfirm": "80",
          "relativeTime": "1645804800",
          "curedPercent": "4.8%",
          "diedPercent": "0.0%"
        }
      ],
      "curedPercent": "65.8%",
      "diedPercent": "1.2%"
    },
    {
      "confirm": "3191986",
      "died": "5159",
      "heal": "2962924",
      "xArea": "澳大利亚",
      "curConfirm": "223903",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "92.8%",
      "diedPercent": "0.2%"
    },
    {
      "confirm": "3395170",
      "died": "32634",
      "heal": "3063560",
      "xArea": "马来西亚",
      "curConfirm": "298976",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.2%",
      "diedPercent": "1.0%"
    },
    {
      "confirm": "4898285",
      "died": "23328",
      "heal": "4027243",
      "relativeTime": "1645804800",
      "curConfirm": "847714",
      "xArea": "日本",
      "subList": [
        {
          "city": "东京都",
          "confirm": "974235",
          "died": "3564",
          "heal": "775025",
          "curConfirm": "195646",
          "curedPercent": "79.6%",
          "diedPercent": "0.4%"
        },
        {
          "city": "神奈川",
          "confirm": "439451",
          "died": "1620",
          "heal": "372126",
          "curConfirm": "65705",
          "curedPercent": "84.7%",
          "diedPercent": "0.4%"
        },
        {
          "city": "北海道",
          "confirm": "168465",
          "died": "1734",
          "heal": "135405",
          "curConfirm": "31326",
          "curedPercent": "80.4%",
          "diedPercent": "1.0%"
        },
        {
          "city": "和歌山",
          "confirm": "22043",
          "died": "100",
          "heal": "18801",
          "curConfirm": "3142",
          "curedPercent": "85.3%",
          "diedPercent": "0.5%"
        },
        {
          "city": "千叶",
          "confirm": "261896",
          "died": "1293",
          "heal": "215272",
          "curConfirm": "45331",
          "curedPercent": "82.2%",
          "diedPercent": "0.5%"
        },
        {
          "city": "熊本",
          "confirm": "47720",
          "died": "215",
          "heal": "38160",
          "curConfirm": "9345",
          "curedPercent": "80.0%",
          "diedPercent": "0.5%"
        },
        {
          "city": "石川",
          "confirm": "23750",
          "died": "161",
          "heal": "19029",
          "curConfirm": "4560",
          "curedPercent": "80.1%",
          "diedPercent": "0.7%"
        },
        {
          "city": "冲绳",
          "confirm": "98652",
          "died": "426",
          "heal": "91414",
          "curConfirm": "6812",
          "curedPercent": "92.7%",
          "diedPercent": "0.4%"
        },
        {
          "city": "福冈",
          "confirm": "227764",
          "died": "898",
          "heal": "174047",
          "curConfirm": "52819",
          "curedPercent": "76.4%",
          "diedPercent": "0.4%"
        },
        {
          "city": "三重",
          "confirm": "39936",
          "died": "235",
          "heal": "34152",
          "curConfirm": "5549",
          "curedPercent": "85.5%",
          "diedPercent": "0.6%"
        },
        {
          "city": "埼玉",
          "confirm": "304787",
          "died": "1161",
          "heal": "259430",
          "curConfirm": "44196",
          "curedPercent": "85.1%",
          "diedPercent": "0.4%"
        },
        {
          "city": "爱知",
          "confirm": "313038",
          "died": "1553",
          "heal": "255570",
          "curConfirm": "55915",
          "curedPercent": "81.6%",
          "diedPercent": "0.5%"
        },
        {
          "city": "大阪府",
          "confirm": "635852",
          "died": "3814",
          "heal": "494702",
          "curConfirm": "137336",
          "curedPercent": "77.8%",
          "diedPercent": "0.6%"
        },
        {
          "city": "京都府",
          "confirm": "121252",
          "died": "406",
          "heal": "96047",
          "curConfirm": "24799",
          "curedPercent": "79.2%",
          "diedPercent": "0.3%"
        },
        {
          "city": "长野",
          "confirm": "30393",
          "died": "142",
          "heal": "24699",
          "curConfirm": "5552",
          "curedPercent": "81.3%",
          "diedPercent": "0.5%"
        },
        {
          "city": "岐阜",
          "confirm": "51317",
          "died": "267",
          "heal": "42462",
          "curConfirm": "8588",
          "curedPercent": "82.7%",
          "diedPercent": "0.5%"
        },
        {
          "city": "新泻",
          "confirm": "28724",
          "died": "68",
          "heal": "23852",
          "curConfirm": "4804",
          "curedPercent": "83.0%",
          "diedPercent": "0.2%"
        },
        {
          "city": "爱媛",
          "confirm": "16416",
          "died": "112",
          "heal": "13857",
          "curConfirm": "2447",
          "curedPercent": "84.4%",
          "diedPercent": "0.7%"
        },
        {
          "city": "高知",
          "confirm": "11670",
          "died": "75",
          "heal": "9299",
          "curConfirm": "2296",
          "curedPercent": "79.7%",
          "diedPercent": "0.6%"
        },
        {
          "city": "栃木",
          "confirm": "44406",
          "died": "176",
          "heal": "35466",
          "curConfirm": "8764",
          "curedPercent": "79.9%",
          "diedPercent": "0.4%"
        },
        {
          "city": "德岛",
          "confirm": "10300",
          "died": "73",
          "heal": "7668",
          "curConfirm": "2559",
          "curedPercent": "74.4%",
          "diedPercent": "0.7%"
        },
        {
          "city": "宫城",
          "confirm": "39360",
          "died": "136",
          "heal": "30260",
          "curConfirm": "8964",
          "curedPercent": "76.9%",
          "diedPercent": "0.3%"
        },
        {
          "city": "静冈",
          "confirm": "86628",
          "died": "322",
          "heal": "69375",
          "curConfirm": "16931",
          "curedPercent": "80.1%",
          "diedPercent": "0.4%"
        },
        {
          "city": "兵库",
          "confirm": "255025",
          "died": "1764",
          "heal": "199498",
          "curConfirm": "53763",
          "curedPercent": "78.2%",
          "diedPercent": "0.7%"
        },
        {
          "city": "奈良",
          "confirm": "53210",
          "died": "255",
          "heal": "37321",
          "curConfirm": "15634",
          "curedPercent": "70.1%",
          "diedPercent": "0.5%"
        },
        {
          "city": "包机回国及检疫等相关人员",
          "confirm": "11514",
          "died": "8",
          "heal": "10251",
          "curConfirm": "1255",
          "curedPercent": "89.0%",
          "diedPercent": "0.1%"
        },
        {
          "city": "大分",
          "confirm": "23157",
          "died": "98",
          "heal": "19939",
          "curConfirm": "3120",
          "curedPercent": "86.1%",
          "diedPercent": "0.4%"
        },
        {
          "city": "山口",
          "confirm": "20588",
          "died": "123",
          "heal": "17503",
          "curConfirm": "2962",
          "curedPercent": "85.0%",
          "diedPercent": "0.6%"
        },
        {
          "city": "滋贺",
          "confirm": "47495",
          "died": "133",
          "heal": "36450",
          "curConfirm": "10912",
          "curedPercent": "76.7%",
          "diedPercent": "0.3%"
        },
        {
          "city": "宫崎",
          "confirm": "18134",
          "died": "85",
          "heal": "15721",
          "curConfirm": "2328",
          "curedPercent": "86.7%",
          "diedPercent": "0.5%"
        },
        {
          "city": "秋田",
          "confirm": "9237",
          "died": "32",
          "heal": "7014",
          "curConfirm": "2191",
          "curedPercent": "75.9%",
          "diedPercent": "0.3%"
        },
        {
          "city": "山梨",
          "confirm": "16543",
          "died": "42",
          "heal": "13355",
          "curConfirm": "3146",
          "curedPercent": "80.7%",
          "diedPercent": "0.3%"
        },
        {
          "city": "广岛",
          "confirm": "73057",
          "died": "375",
          "heal": "58542",
          "curConfirm": "14140",
          "curedPercent": "80.1%",
          "diedPercent": "0.5%"
        },
        {
          "city": "群马",
          "confirm": "50718",
          "died": "244",
          "heal": "41943",
          "curConfirm": "8531",
          "curedPercent": "82.7%",
          "diedPercent": "0.5%"
        },
        {
          "city": "福岛",
          "confirm": "23657",
          "died": "184",
          "heal": "19872",
          "curConfirm": "3601",
          "curedPercent": "84.0%",
          "diedPercent": "0.8%"
        },
        {
          "city": "佐贺",
          "confirm": "22587",
          "died": "60",
          "heal": "16614",
          "curConfirm": "5913",
          "curedPercent": "73.6%",
          "diedPercent": "0.3%"
        },
        {
          "city": "长崎",
          "confirm": "25405",
          "died": "107",
          "heal": "20581",
          "curConfirm": "4717",
          "curedPercent": "81.0%",
          "diedPercent": "0.4%"
        },
        {
          "city": "茨城",
          "confirm": "70508",
          "died": "278",
          "heal": "59311",
          "curConfirm": "10919",
          "curedPercent": "84.1%",
          "diedPercent": "0.4%"
        },
        {
          "city": "香川",
          "confirm": "17897",
          "died": "71",
          "heal": "13614",
          "curConfirm": "4212",
          "curedPercent": "76.1%",
          "diedPercent": "0.4%"
        },
        {
          "city": "福井",
          "confirm": "12006",
          "died": "39",
          "heal": "9738",
          "curConfirm": "2229",
          "curedPercent": "81.1%",
          "diedPercent": "0.3%"
        },
        {
          "city": "冈山",
          "confirm": "47611",
          "died": "186",
          "heal": "34676",
          "curConfirm": "12749",
          "curedPercent": "72.8%",
          "diedPercent": "0.4%"
        },
        {
          "city": "青森",
          "confirm": "20519",
          "died": "58",
          "heal": "16124",
          "curConfirm": "4337",
          "curedPercent": "78.6%",
          "diedPercent": "0.3%"
        },
        {
          "city": "鹿儿岛",
          "confirm": "30352",
          "died": "119",
          "heal": "25255",
          "curConfirm": "4978",
          "curedPercent": "83.2%",
          "diedPercent": "0.4%"
        },
        {
          "city": "富山",
          "confirm": "16918",
          "died": "60",
          "heal": "10804",
          "curConfirm": "6054",
          "curedPercent": "63.9%",
          "diedPercent": "0.4%"
        },
        {
          "city": "山形",
          "confirm": "11280",
          "died": "64",
          "heal": "8692",
          "curConfirm": "2524",
          "curedPercent": "77.1%",
          "diedPercent": "0.6%"
        },
        {
          "city": "岛根",
          "confirm": "6179",
          "died": "8",
          "heal": "5359",
          "curConfirm": "812",
          "curedPercent": "86.7%",
          "diedPercent": "0.1%"
        },
        {
          "city": "鸟取",
          "confirm": "6477",
          "died": "9",
          "heal": "4783",
          "curConfirm": "1685",
          "curedPercent": "73.8%",
          "diedPercent": "0.1%"
        },
        {
          "city": "岩手县",
          "confirm": "10156",
          "died": "58",
          "heal": "6798",
          "curConfirm": "3300",
          "curedPercent": "66.9%",
          "diedPercent": "0.6%"
        },
        {
          "city": "待确认",
          "confirm": "0",
          "died": "317",
          "heal": "81367",
          "curConfirm": "-81684",
          "curedPercent": "INF%",
          "diedPercent": "INF%"
        }
      ],
      "curedPercent": "82.2%",
      "diedPercent": "0.5%"
    },
    {
      "confirm": "696652",
      "died": "999",
      "heal": "631318",
      "xArea": "新加坡",
      "curConfirm": "64335",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "90.6%",
      "diedPercent": "0.1%"
    },
    {
      "confirm": "2869616",
      "died": "22894",
      "heal": "2637879",
      "xArea": "泰国",
      "curConfirm": "208843",
      "relativeTime": "1645804800",
      "subList": [
        
      ],
      "curedPercent": "91.9%",
      "diedPercent": "0.8%"
    }
  ],
  "curtime": 1645948726
      },
      // 疫情数据列表 累计人数
      list: [],
      // 现存人数
      arr: []
    }
  },
  mounted() {
    // 获取世界数据
    // api.then(res => {
    //   console.log(res);
    // })
    this.handle();
    console.log('世界数据',this.list);

    this.worldMap('world', this.list);
    
  },
  methods: {
    // 世界地图
    worldMap(id, data) {
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
              max: 1000,
              color: "#ffffff"
            },
            {
              min: 1000,
              max: 100000,
              color: "#fdfdcf"
            },
            {
              min: 1000000,
              max: 10000000,
              color: "#fe9e83"
            },
            {
              min: 10000000,
              max: 50000000,
              color: "#e55a4e"
            },
            {
              min: 500000000,
              color: "#4f070d"
            }
          ]
        }],
        series: [{
          name: "国",
          type: "map",
          map: "world",
          nameMap: country,
          roam: false,
          zoom: 1.2,
          aspectScale: 0.75,
          top: 40,
          layoutCenter: ['5%', '5%'],
          label: {
            normal: {
              show: false,
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
    // 处理数据
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
  #world{
    background-color: #f2f2f2;
  }
</style>