<template>
  <div id="echartDemo3">
    <div class="main-content">
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">公司组织架构</div>
          </div>
          <div class="lineChart" ref="treeChart1"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">百度地图</div>
          </div>
        </div>

      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">中国地图-山东省</div>
          </div>
          <div class="lineChart" ref="baiduMap10"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">百度地图-青岛市</div>
          </div>
          <div class="lineChart" ref="baiduMap11"></div>
        </div>

      </div>
      <div class="charts clearfix">
        <div class="chart chart1" style="position: relative">
          <div class="block-title">
            <div class="title-name">echart和百度地图-小飞机</div>
          </div>
          <div class="lineChart" ref="baiduMap8"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">echart和百度地图-折线图</div>
          </div>
          <div class="lineChart" ref="baiduMap9"></div>
        </div>
      </div>
      <div class="charts clearfix">
        <div class="chart chart1" style="position: relative">
          <div class="block-title">
            <div class="title-name">echart和百度地图-散点图</div>
          </div>
          <div class="lineChart" ref="baiduMap6"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">echart和百度地图-散点图</div>
          </div>
          <div class="lineChart" ref="baiduMap7"></div>
        </div>
      </div>
      <div class="charts clearfix">
        <div class="chart chart1" style="position: relative">
          <div class="block-title">
            <div class="title-name">百度地图-检索</div>
          </div>
          <div class="lineChart" ref="baiduMap4"></div>
          <div id="r-result"
               style="position: absolute; bottom: 0;left: 0; width: 100%;height: 100px;overflow-y: auto"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">百度地图-步行检索</div>
          </div>
          <div class="lineChart" ref="baiduMap5"></div>
        </div>
      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">百度地图-个性化地图</div>
          </div>
          <div class="lineChart" ref="baiduMap3"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">百度地图-全景图-但是没有flash</div>
          </div>
          <div class="lineChart" ref="baiduMap2"></div>
        </div>
      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">百度地图
            </div>

          </div>
          <div class="lineChart" ref="baiduMap1"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">世界地图</div>
          </div>
          <div class="lineChart" ref="worldMap"></div>
        </div>
      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">盒须图</div>
          </div>
          <div class="lineChart" ref="barChartRef2"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">直方图</div>
          </div>
          <div class="lineChart" ref="barChartRef1"></div>
        </div>

      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">盒须图</div>
          </div>
          <div class="lineChart" ref="lineChartRef"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">直方图</div>
          </div>
          <div class="lineChart" ref="barChartRef"></div>
        </div>

      </div>
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">line Demo</div>
          </div>
          <div class="lineChart" ref="line1"></div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">关注企业</div>
          </div>
          <div class="lineChart" id="lineChart2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  //echart 3.0需要引入bmap.js显示地图
  import bmap from 'echarts/extension/bmap/bmap.js'
  import ecStat from 'echarts-stat'
  import dataTool from 'echarts/dist/extension/dataTool.js'

  export default {
    data() {
      return {
        //line demo
        lineChart1: '',
        lineChart2: '',
        lineChart3: '',
        lineChart4: '',
        lineChart5: '',
        lineChart6: '',
        pieData: '',
        //箱线图 数据
        boxplotData: {},
      }
    },
    mounted() {
      this.esTest();
      //echart-tree
      this.treeChart1();
      //中国地图-省市
      this.baiduMap10();
      this.baiduMap11();
      //百度地图和echart结合--折线图
      this.baiduMap8();
      this.baiduMap9();
      //百度地图和echart结合--散点图
      this.baiduMap6();
      this.baiduMap7();
      //百度地图
      this.baiduMap1();
      this.baiduMap2();
      this.baiduMap3();
      this.baiduMap4();
      //this.baiduMap5();

      //世界地图
      this.worldMap();
      //极坐标
//            this.polarline1();
//            this.polarline();
      this.renderLine1();
      this.renderLine2();
      this.renderLine3();
      this.renderLine4();
      this.renderLine5();
      this.renderLine6();
      //添加屏幕大小变化监听自适应
      window.addEventListener('resize', this.resize, false);

    },
    beforeDestory() {
      //屏幕监听去掉
      window.removeEventListener('resize', this.resize, false);
    },
    methods: {
      esTest() {
//               this.drawES2015Chart({
//                    cords: { x: 18, y: 30 },
//                    radius: 30
//                });
        this.drawES2015Chart();

      },
      drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
        console.log("解构");
        console.log(size, cords, radius);
      },
      //treechart
      treeChart1() {
        var data = {
          "name": "flare",
          "children": [
            {
              "name": "data",
              "children": [
                {
                  "name": "converters",
                  "children": [
                    {"name": "Converters", "value": 721},
                    {"name": "DelimitedTextConverter", "value": 4294}
                  ]
                },
                {
                  "name": "DataUtil",
                  "value": 3322
                }
              ]
            },
            {
              "name": "display",
              "children": [
                {"name": "DirtySprite", "value": 8833},
                {"name": "LineSprite", "value": 1732},
                {"name": "RectSprite", "value": 3623}
              ]
            },
            {
              "name": "flex",
              "children": [
                {"name": "FlareVis", "value": 4116}
              ]
            },
            {
              "name": "query",
              "children": [
                {"name": "AggregateExpression", "value": 1616},
                {"name": "And", "value": 1027},
                {"name": "Arithmetic", "value": 3891},
                {"name": "Average", "value": 891},
                {"name": "BinaryExpression", "value": 2893},
                {"name": "Comparison", "value": 5103},
                {"name": "CompositeExpression", "value": 3677},
                {"name": "Count", "value": 781},
                {"name": "DateUtil", "value": 4141},
                {"name": "Distinct", "value": 933},
                {"name": "Expression", "value": 5130},
                {"name": "ExpressionIterator", "value": 3617},
                {"name": "Fn", "value": 3240},
                {"name": "If", "value": 2732},
                {"name": "IsA", "value": 2039},
                {"name": "Literal", "value": 1214},
                {"name": "Match", "value": 3748},
                {"name": "Maximum", "value": 843},
                {
                  "name": "methods",
                  "children": [
                    {"name": "add", "value": 593},
                    {"name": "and", "value": 330},
                    {"name": "average", "value": 287},
                    {"name": "count", "value": 277},
                    {"name": "distinct", "value": 292},
                    {"name": "div", "value": 595},
                    {"name": "eq", "value": 594},
                    {"name": "fn", "value": 460},
                    {"name": "gt", "value": 603},
                    {"name": "gte", "value": 625},
                    {"name": "iff", "value": 748},
                    {"name": "isa", "value": 461},
                    {"name": "lt", "value": 597},
                    {"name": "lte", "value": 619},
                    {"name": "max", "value": 283},
                    {"name": "min", "value": 283},
                    {"name": "mod", "value": 591},
                    {"name": "mul", "value": 603},
                    {"name": "neq", "value": 599},
                    {"name": "not", "value": 386},
                    {"name": "or", "value": 323},
                    {"name": "orderby", "value": 307},
                    {"name": "range", "value": 772},
                    {"name": "select", "value": 296},
                    {"name": "stddev", "value": 363},
                    {"name": "sub", "value": 600},
                    {"name": "sum", "value": 280},
                    {"name": "update", "value": 307},
                    {"name": "variance", "value": 335},
                    {"name": "where", "value": 299},
                    {"name": "xor", "value": 354},
                    {"name": "_", "value": 264}
                  ]
                },
                {"name": "Minimum", "value": 843},
                {"name": "Not", "value": 1554},
                {"name": "Or", "value": 970},
                {"name": "Query", "value": 13896},
                {"name": "Range", "value": 1594},
                {"name": "StringUtil", "value": 4130},
                {"name": "Sum", "value": 791},
                {"name": "Variable", "value": 1124},
                {"name": "Variance", "value": 1876},
                {"name": "Xor", "value": 1101}
              ]
            },
            {
              "name": "scale",
              "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
              ]
            }
          ]
        };

        let treeChart1 = echarts.init(this.$refs.treeChart1);
        if (treeChart1) {
          let option = {
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove'
            },
            series: [
              {
                type: 'tree',
                name: 'tree1',
                data: [data],

                top: '5%',
                left: '7%',
                bottom: '2%',
                right: '60%',
                symbolSize: 7,
                label: {
                  normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                  }
                },

                leaves: {
                  label: {
                    normal: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left'
                    }
                  }
                },

                expandAndCollapse: true,

                animationDuration: 550,
                animationDurationUpdate: 750

              },
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          treeChart1.setOption(option, true);
        }
      },
      //百度地图和echart结合-山东省
      baiduMap10() {
        var data = [
          {name: '威海', value: 9},
          {name: '烟台', value: 12},
          {name: '莱州', value: 20},
          {name: '潍坊', value: 12},
          {name: '东营', value: 14},
          {name: '滨州', value: 15},
          {name: '淄博', value: 16},
          {name: '青岛', value: 18},
          {name: '乳山', value: 18},
          {name: '德州', value: 19},
          {name: '济南', value: 22},
        ];
        var geoCoordMap = {
          '威海': [120.421321, 36.718861],
          '烟台': [121.469967, 37.47049],
          '莱州': [119.942992, 37.187671],
          '潍坊': [119.174904, 36.707752],
          '东营': [118.682777, 37.441156],
          '滨州': [117.983679, 37.389794],
          '淄博': [118.066467, 36.818773],
          '青岛': [120.398325, 36.064375],
          '乳山': [121.575752, 36.925939],
          '德州': [116.369317, 37.444823],
          '济南': [117.128205, 36.655887],
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };

        let baiduMap10 = echarts.init(this.$refs.baiduMap10);
        if (baiduMap10) {
          let option = {
            title: {
              text: '山东省内点击量',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            bmap: {
              //潍坊
              center: [119.170305, 36.733671],
              zoom: 7,
              roam: true,
            },
            series: [
              {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                  return val[2];
                },
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(59,131,253)'
                  }
                }
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data.sort(function (a, b) {
                  return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                  return val[2] * 1.5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(47,207,244)',
                    shadowBlur: 10,
                    shadowColor: '#333'
                  }
                },
                zlevel: 1
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          baiduMap10.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = baiduMap10.getModel().getComponent('bmap').getBMap();
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
          //样式
          //normal light  dark redalert googlelite  grassgreen midnight pink darkgreen  bluish grayscale hardedge
          bmap.setMapStyle({style: "midnight"});
          //添加边框
          bmap.enableScrollWheelZoom();
          let that = this;
          //描边不好使
//                    setTimeout(function () {
//                        that.getBoundaryBorder('山东',bmap);
//                    }, 1500);
        }
      },
      //描边
      getBoundaryBorder(city, bmap) {
        var bdary = new window.BMap.Boundary();
        bdary.get(city, function (rs) { //获取行政区域
          bmap.clearOverlays(); //清除地图覆盖物
          var count = rs.boundaries.length; //行政区域的点有多少个
          for (var i = 0; i < count; i++) {
            var ply = BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#ff0000"}); //建立多边形覆盖物
            bmap.addOverlay(ply); //添加覆盖物
            bmap.setViewport(ply.getPath());
          }
        });
      },
      baiduMap11() {
        var data = [
          {name: '莱州', value: 20},
          {name: '潍坊', value: 12},
          {name: '青岛', value: 18},
          {name: '济南', value: 22},
        ];
        var geoCoordMap = {
          '莱州': [119.942992, 37.187671],
          '潍坊': [119.174904, 36.707752],
          '青岛': [120.398325, 36.064375],
          '济南': [117.128205, 36.655887],
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        var busLines = [
          {
            coords: [
              [117.128205, 36.655887],
              [119.942992, 37.187671],
            ],
            fromName: '济南',
            toName: '莱州'
          },
          {
            coords: [
              [117.128205, 36.655887],
              [120.398325, 36.064375],
            ],
            fromName: '济南',
            toName: '青岛'
          },
          {
            coords: [
              [117.128205, 36.655887],
              [119.174904, 36.707752],
            ],
            fromName: '济南',
            toName: '潍坊'
          }
        ]
        //plan
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        let baiduMap11 = echarts.init(this.$refs.baiduMap11);
        if (baiduMap11) {
          let option = {
            title: {
              text: '模拟迁徙',
              subtext: '数据纯属虚构',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            bmap: {
              //潍坊
              center: [119.170305, 36.733671],
              zoom: 7,
              roam: true,
            },
            series: [
              {
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                coordinateSystem: 'bmap',
                data: busLines,
                effect: {
                  show: true,
                  period: 6,
                  trailLength: 0,
                  symbol: planePath,
                  symbolSize: 15,

                },
                lineStyle: {
                  normal: {
                    color: color[0],
                    opacity: 0.6,
                    width: 1,
                    curveness: 0.2
                  }
                },
              },
              {
                type: 'lines',
                zlevel: 1,
                coordinateSystem: 'bmap',
                data: busLines,
                lineStyle: {
                  normal: {
                    color: color[0],
                    width: 0,
                    curveness: 0.2
                  }
                },
                effect: {
                  show: true,
                  period: 6,
                  trailLength: 0.7,
                  color: '#fff',
                  curveness: 0.2
                },
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                  return val[2];
                },
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: color[1],
                    shadowBlur: 1,
                    shadowColor: '#fffs'
                  }
                },
                zlevel: 1
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          baiduMap11.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = baiduMap11.getModel().getComponent('bmap').getBMap();
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
          //normal light  dark redalert googlelite  grassgreen midnight pink darkgreen  bluish grayscale hardedge
          bmap.setMapStyle({style: "light"});
        }
      },
      //百度地图和echart结合-折线图
      baiduMap8() {
        var busLines = [
          {
            coords: [
              [116.4551, 40.2539],
              [121.4648, 31.2891],
            ],
            fromName: '北京',
            toName: '上海'
          },
          {
            coords: [
              [116.4551, 40.2539],
              [113.5107, 23.2196],
            ],
            fromName: '北京',
            toName: '广州'
          },
          {
            coords: [
              [116.4551, 40.2539],
              [122.2229, 39.4409],
            ],
            fromName: '北京',
            toName: '大连'
          }
        ]
        //plan
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        let chinaMap8 = echarts.init(this.$refs.baiduMap8);
        if (chinaMap8) {
          let option = {
            title: {
              text: '模拟迁徙',
              subtext: '数据纯属虚构',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              top: 'bottom',
              left: 'right',
              data: ['北京 Top10', '上海 Top10', '广州 Top10'],
              textStyle: {
                color: '#fff'
              },
              selectedMode: 'single'
            },
            bmap: {
              center: [104.114129, 37.550339],
              zoom: 5,
              roam: true,
              mapStyle: {
                'styleJson': [
                  {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#031628'
                    }
                  },
                  {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000102'
                    }
                  },
                  {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#0b3d51'
                    }
                  },
                  {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#08304b'
                    }
                  },
                  {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                      'lightness': -70
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                      'color': '#857f7f'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#062032'
                    }
                  },
                  {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#465b6c'
                    }
                  },
                  {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  }
                ]
              }
            },
            series: [
              {
                name: '北京 Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                coordinateSystem: 'bmap',
                data: busLines,
                effect: {
                  show: true,
                  period: 6,
                  trailLength: 0,
                  symbol: planePath,
                  symbolSize: 15,

                },
                lineStyle: {
                  normal: {
                    color: color[0],
                    opacity: 0.6,
                    width: 1,
                    curveness: 0.2
                  }
                },
              },
              {
                name: '北京 Top10',
                type: 'lines',
                zlevel: 1,
                coordinateSystem: 'bmap',
                data: busLines,
                lineStyle: {
                  normal: {
                    color: color[0],
                    width: 0,
                    curveness: 0.2
                  }
                },
                effect: {
                  show: true,
                  period: 6,
                  trailLength: 0.7,
                  color: '#fff',
                  curveness: 0.2
                },
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          chinaMap8.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = chinaMap8.getModel().getComponent('bmap').getBMap();
//                    bmap.addControl(new BMap.MapTypeControl());
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
        }
      },
      baiduMap9() {
        var busLines = [
          {
            coords: [
              [116.4383, 40.1471],
              [116.4372, 40.1458],
              [116.4373, 40.1409]
            ],
            lineStyle: {
              normal: {
                color: "red"
              }
            }
          }
        ]
        let chinaMap9 = echarts.init(this.$refs.baiduMap9);
        if (chinaMap9) {
          let option = {
            title: {
              text: '全国主要城市空气质量 - 百度地图',
              subtext: 'data from PM25.in',
              sublink: 'http://www.pm25.in',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            bmap: {
              center: [116.46, 39.92],
              zoom: 10,
              roam: true,
              mapStyle: {
                'styleJson': [
                  {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#031628'
                    }
                  },
                  {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000102'
                    }
                  },
                  {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#0b3d51'
                    }
                  },
                  {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#08304b'
                    }
                  },
                  {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                      'lightness': -70
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                      'color': '#857f7f'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#062032'
                    }
                  },
                  {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#465b6c'
                    }
                  },
                  {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  }
                ]
              }
            },
            series: [
              {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                silent: true,
                lineStyle: {
                  normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 20
                  }
                },
              },
              {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                lineStyle: {
                  normal: {
                    width: 0,
                  }
                },
                effect: {
                  constantSpeed: 20,
                  show: true,
                  trailLength: 0.1,
                  symbolSize: 1.5
                },
                zlevel: 1
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          chinaMap9.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = chinaMap9.getModel().getComponent('bmap').getBMap();
//                    bmap.addControl(new BMap.MapTypeControl());
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
        }
      },
      //百度地图和echart结合-散点图
      baiduMap6() {
        //20190128 百度地图和echart结合--人口迁移--BMapExtension为echart2。0
//                var BMapExt=new BMapExtension(this.$refs.baiduMap6,BMap,echaers,{
//                    enableMapClick:false
//                });
//                var map=BMapExt.getMap();
//                var container=BMapExt.getEchartsContainer();
//                var startPoint={
//                    x:104.114129,
//                    y:37.550339
//                }
//                var point=new BMap.Point(startPoint.x,startPoint.y);
//                map.centerAndZoom(point,5);
//                map.enableScrollWheelZoom(true);
        var data = [
          {name: '海门', value: 9},
          {name: '鄂尔多斯', value: 12},
          {name: '招远', value: 12},
          {name: '舟山', value: 12},
          {name: '齐齐哈尔', value: 14},
          {name: '盐城', value: 15},
          {name: '赤峰', value: 16},
          {name: '青岛', value: 18},
          {name: '乳山', value: 18},
          {name: '金昌', value: 19},
          {name: '泉州', value: 21},
          {name: '莱西', value: 21},
          {name: '日照', value: 21},
          {name: '胶南', value: 22},
          {name: '南通', value: 23},
          {name: '拉萨', value: 24},
          {name: '云浮', value: 24},
          {name: '梅州', value: 25},
          {name: '文登', value: 25},
          {name: '上海', value: 25},
          {name: '攀枝花', value: 25},
          {name: '威海', value: 25},
          {name: '承德', value: 25},
          {name: '厦门', value: 26},
          {name: '汕尾', value: 26},
          {name: '潮州', value: 26},
          {name: '丹东', value: 27},
          {name: '太仓', value: 27},
          {name: '曲靖', value: 27},
          {name: '烟台', value: 28},
          {name: '福州', value: 29},
          {name: '瓦房店', value: 30},
          {name: '即墨', value: 30},
          {name: '抚顺', value: 31},
          {name: '玉溪', value: 31},
          {name: '张家口', value: 31},
          {name: '阳泉', value: 31},
          {name: '莱州', value: 32},
          {name: '湖州', value: 32},
          {name: '汕头', value: 32},
          {name: '昆山', value: 33},
          {name: '宁波', value: 33},
          {name: '湛江', value: 33},
          {name: '揭阳', value: 34},
          {name: '荣成', value: 34},
          {name: '连云港', value: 35},
          {name: '葫芦岛', value: 35},
          {name: '常熟', value: 36},
          {name: '东莞', value: 36},
          {name: '河源', value: 36},
          {name: '淮安', value: 36},
          {name: '泰州', value: 36},
          {name: '南宁', value: 37},
          {name: '营口', value: 37},
          {name: '惠州', value: 37},
          {name: '江阴', value: 37},
          {name: '蓬莱', value: 37},
          {name: '韶关', value: 38},
          {name: '嘉峪关', value: 38},
          {name: '广州', value: 38},
          {name: '延安', value: 38},
          {name: '太原', value: 39},
          {name: '清远', value: 39},
          {name: '中山', value: 39},
          {name: '昆明', value: 39},
          {name: '寿光', value: 40},
          {name: '盘锦', value: 40},
          {name: '长治', value: 41},
          {name: '深圳', value: 41},
          {name: '珠海', value: 42},
          {name: '宿迁', value: 43},
          {name: '咸阳', value: 43},
          {name: '铜川', value: 44},
          {name: '平度', value: 44},
          {name: '佛山', value: 44},
          {name: '海口', value: 44},
          {name: '江门', value: 45},
          {name: '章丘', value: 45},
          {name: '肇庆', value: 46},
          {name: '大连', value: 47},
          {name: '临汾', value: 47},
          {name: '吴江', value: 47},
          {name: '石嘴山', value: 49},
          {name: '沈阳', value: 50},
          {name: '苏州', value: 50},
          {name: '茂名', value: 50},
          {name: '嘉兴', value: 51},
          {name: '长春', value: 51},
          {name: '胶州', value: 52},
          {name: '银川', value: 52},
          {name: '张家港', value: 52},
          {name: '三门峡', value: 53},
          {name: '锦州', value: 54},
          {name: '南昌', value: 54},
          {name: '柳州', value: 54},
          {name: '三亚', value: 54},
          {name: '自贡', value: 56},
          {name: '吉林', value: 56},
          {name: '阳江', value: 57},
          {name: '泸州', value: 57},
          {name: '西宁', value: 57},
          {name: '宜宾', value: 58},
          {name: '呼和浩特', value: 58},
          {name: '成都', value: 58},
          {name: '大同', value: 58},
          {name: '镇江', value: 59},
          {name: '桂林', value: 59},
          {name: '张家界', value: 59},
          {name: '宜兴', value: 59},
          {name: '北海', value: 60},
          {name: '西安', value: 61},
          {name: '金坛', value: 62},
          {name: '东营', value: 62},
          {name: '牡丹江', value: 63},
          {name: '遵义', value: 63},
          {name: '绍兴', value: 63},
          {name: '扬州', value: 64},
          {name: '常州', value: 64},
          {name: '潍坊', value: 65},
          {name: '重庆', value: 66},
          {name: '台州', value: 67},
          {name: '南京', value: 67},
          {name: '滨州', value: 70},
          {name: '贵阳', value: 71},
          {name: '无锡', value: 71},
          {name: '本溪', value: 71},
          {name: '克拉玛依', value: 72},
          {name: '渭南', value: 72},
          {name: '马鞍山', value: 72},
          {name: '宝鸡', value: 72},
          {name: '焦作', value: 75},
          {name: '句容', value: 75},
          {name: '北京', value: 79},
          {name: '徐州', value: 79},
          {name: '衡水', value: 80},
          {name: '包头', value: 80},
          {name: '绵阳', value: 80},
          {name: '乌鲁木齐', value: 84},
          {name: '枣庄', value: 84},
          {name: '杭州', value: 84},
          {name: '淄博', value: 85},
          {name: '鞍山', value: 86},
          {name: '溧阳', value: 86},
          {name: '库尔勒', value: 86},
          {name: '安阳', value: 90},
          {name: '开封', value: 90},
          {name: '济南', value: 92},
          {name: '德阳', value: 93},
          {name: '温州', value: 95},
          {name: '九江', value: 96},
          {name: '邯郸', value: 98},
          {name: '临安', value: 99},
          {name: '兰州', value: 99},
          {name: '沧州', value: 100},
          {name: '临沂', value: 103},
          {name: '南充', value: 104},
          {name: '天津', value: 105},
          {name: '富阳', value: 106},
          {name: '泰安', value: 112},
          {name: '诸暨', value: 112},
          {name: '郑州', value: 113},
          {name: '哈尔滨', value: 114},
          {name: '聊城', value: 116},
          {name: '芜湖', value: 117},
          {name: '唐山', value: 119},
          {name: '平顶山', value: 119},
          {name: '邢台', value: 119},
          {name: '德州', value: 120},
          {name: '济宁', value: 120},
          {name: '荆州', value: 127},
          {name: '宜昌', value: 130},
          {name: '义乌', value: 132},
          {name: '丽水', value: 133},
          {name: '洛阳', value: 134},
          {name: '秦皇岛', value: 136},
          {name: '株洲', value: 143},
          {name: '石家庄', value: 147},
          {name: '莱芜', value: 148},
          {name: '常德', value: 152},
          {name: '保定', value: 153},
          {name: '湘潭', value: 154},
          {name: '金华', value: 157},
          {name: '岳阳', value: 169},
          {name: '长沙', value: 175},
          {name: '衢州', value: 177},
          {name: '廊坊', value: 193},
          {name: '菏泽', value: 194},
          {name: '合肥', value: 229},
          {name: '武汉', value: 273},
          {name: '大庆', value: 279}
        ];
        var geoCoordMap = {
          '海门': [121.15, 31.89],
          '鄂尔多斯': [109.781327, 39.608266],
          '招远': [120.38, 37.35],
          '舟山': [122.207216, 29.985295],
          '齐齐哈尔': [123.97, 47.33],
          '盐城': [120.13, 33.38],
          '赤峰': [118.87, 42.28],
          '青岛': [120.33, 36.07],
          '乳山': [121.52, 36.89],
          '金昌': [102.188043, 38.520089],
          '泉州': [118.58, 24.93],
          '莱西': [120.53, 36.86],
          '日照': [119.46, 35.42],
          '胶南': [119.97, 35.88],
          '南通': [121.05, 32.08],
          '拉萨': [91.11, 29.97],
          '云浮': [112.02, 22.93],
          '梅州': [116.1, 24.55],
          '文登': [122.05, 37.2],
          '上海': [121.48, 31.22],
          '攀枝花': [101.718637, 26.582347],
          '威海': [122.1, 37.5],
          '承德': [117.93, 40.97],
          '厦门': [118.1, 24.46],
          '汕尾': [115.375279, 22.786211],
          '潮州': [116.63, 23.68],
          '丹东': [124.37, 40.13],
          '太仓': [121.1, 31.45],
          '曲靖': [103.79, 25.51],
          '烟台': [121.39, 37.52],
          '福州': [119.3, 26.08],
          '瓦房店': [121.979603, 39.627114],
          '即墨': [120.45, 36.38],
          '抚顺': [123.97, 41.97],
          '玉溪': [102.52, 24.35],
          '张家口': [114.87, 40.82],
          '阳泉': [113.57, 37.85],
          '莱州': [119.942327, 37.177017],
          '湖州': [120.1, 30.86],
          '汕头': [116.69, 23.39],
          '昆山': [120.95, 31.39],
          '宁波': [121.56, 29.86],
          '湛江': [110.359377, 21.270708],
          '揭阳': [116.35, 23.55],
          '荣成': [122.41, 37.16],
          '连云港': [119.16, 34.59],
          '葫芦岛': [120.836932, 40.711052],
          '常熟': [120.74, 31.64],
          '东莞': [113.75, 23.04],
          '河源': [114.68, 23.73],
          '淮安': [119.15, 33.5],
          '泰州': [119.9, 32.49],
          '南宁': [108.33, 22.84],
          '营口': [122.18, 40.65],
          '惠州': [114.4, 23.09],
          '江阴': [120.26, 31.91],
          '蓬莱': [120.75, 37.8],
          '韶关': [113.62, 24.84],
          '嘉峪关': [98.289152, 39.77313],
          '广州': [113.23, 23.16],
          '延安': [109.47, 36.6],
          '太原': [112.53, 37.87],
          '清远': [113.01, 23.7],
          '中山': [113.38, 22.52],
          '昆明': [102.73, 25.04],
          '寿光': [118.73, 36.86],
          '盘锦': [122.070714, 41.119997],
          '长治': [113.08, 36.18],
          '深圳': [114.07, 22.62],
          '珠海': [113.52, 22.3],
          '宿迁': [118.3, 33.96],
          '咸阳': [108.72, 34.36],
          '铜川': [109.11, 35.09],
          '平度': [119.97, 36.77],
          '佛山': [113.11, 23.05],
          '海口': [110.35, 20.02],
          '江门': [113.06, 22.61],
          '章丘': [117.53, 36.72],
          '肇庆': [112.44, 23.05],
          '大连': [121.62, 38.92],
          '临汾': [111.5, 36.08],
          '吴江': [120.63, 31.16],
          '石嘴山': [106.39, 39.04],
          '沈阳': [123.38, 41.8],
          '苏州': [120.62, 31.32],
          '茂名': [110.88, 21.68],
          '嘉兴': [120.76, 30.77],
          '长春': [125.35, 43.88],
          '胶州': [120.03336, 36.264622],
          '银川': [106.27, 38.47],
          '张家港': [120.555821, 31.875428],
          '三门峡': [111.19, 34.76],
          '锦州': [121.15, 41.13],
          '南昌': [115.89, 28.68],
          '柳州': [109.4, 24.33],
          '三亚': [109.511909, 18.252847],
          '自贡': [104.778442, 29.33903],
          '吉林': [126.57, 43.87],
          '阳江': [111.95, 21.85],
          '泸州': [105.39, 28.91],
          '西宁': [101.74, 36.56],
          '宜宾': [104.56, 29.77],
          '呼和浩特': [111.65, 40.82],
          '成都': [104.06, 30.67],
          '大同': [113.3, 40.12],
          '镇江': [119.44, 32.2],
          '桂林': [110.28, 25.29],
          '张家界': [110.479191, 29.117096],
          '宜兴': [119.82, 31.36],
          '北海': [109.12, 21.49],
          '西安': [108.95, 34.27],
          '金坛': [119.56, 31.74],
          '东营': [118.49, 37.46],
          '牡丹江': [129.58, 44.6],
          '遵义': [106.9, 27.7],
          '绍兴': [120.58, 30.01],
          '扬州': [119.42, 32.39],
          '常州': [119.95, 31.79],
          '潍坊': [119.1, 36.62],
          '重庆': [106.54, 29.59],
          '台州': [121.420757, 28.656386],
          '南京': [118.78, 32.04],
          '滨州': [118.03, 37.36],
          '贵阳': [106.71, 26.57],
          '无锡': [120.29, 31.59],
          '本溪': [123.73, 41.3],
          '克拉玛依': [84.77, 45.59],
          '渭南': [109.5, 34.52],
          '马鞍山': [118.48, 31.56],
          '宝鸡': [107.15, 34.38],
          '焦作': [113.21, 35.24],
          '句容': [119.16, 31.95],
          '北京': [116.46, 39.92],
          '徐州': [117.2, 34.26],
          '衡水': [115.72, 37.72],
          '包头': [110, 40.58],
          '绵阳': [104.73, 31.48],
          '乌鲁木齐': [87.68, 43.77],
          '枣庄': [117.57, 34.86],
          '杭州': [120.19, 30.26],
          '淄博': [118.05, 36.78],
          '鞍山': [122.85, 41.12],
          '溧阳': [119.48, 31.43],
          '库尔勒': [86.06, 41.68],
          '安阳': [114.35, 36.1],
          '开封': [114.35, 34.79],
          '济南': [117, 36.65],
          '德阳': [104.37, 31.13],
          '温州': [120.65, 28.01],
          '九江': [115.97, 29.71],
          '邯郸': [114.47, 36.6],
          '临安': [119.72, 30.23],
          '兰州': [103.73, 36.03],
          '沧州': [116.83, 38.33],
          '临沂': [118.35, 35.05],
          '南充': [106.110698, 30.837793],
          '天津': [117.2, 39.13],
          '富阳': [119.95, 30.07],
          '泰安': [117.13, 36.18],
          '诸暨': [120.23, 29.71],
          '郑州': [113.65, 34.76],
          '哈尔滨': [126.63, 45.75],
          '聊城': [115.97, 36.45],
          '芜湖': [118.38, 31.33],
          '唐山': [118.02, 39.63],
          '平顶山': [113.29, 33.75],
          '邢台': [114.48, 37.05],
          '德州': [116.29, 37.45],
          '济宁': [116.59, 35.38],
          '荆州': [112.239741, 30.335165],
          '宜昌': [111.3, 30.7],
          '义乌': [120.06, 29.32],
          '丽水': [119.92, 28.45],
          '洛阳': [112.44, 34.7],
          '秦皇岛': [119.57, 39.95],
          '株洲': [113.16, 27.83],
          '石家庄': [114.48, 38.03],
          '莱芜': [117.67, 36.19],
          '常德': [111.69, 29.05],
          '保定': [115.48, 38.85],
          '湘潭': [112.91, 27.87],
          '金华': [119.64, 29.12],
          '岳阳': [113.09, 29.37],
          '长沙': [113, 28.21],
          '衢州': [118.88, 28.97],
          '廊坊': [116.7, 39.53],
          '菏泽': [115.480656, 35.23375],
          '合肥': [117.27, 31.86],
          '武汉': [114.31, 30.52],
          '大庆': [125.03, 46.58]
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        let chinaMap6 = echarts.init(this.$refs.baiduMap6);
        if (chinaMap6) {
          let option = {
            title: {
              text: '全国主要城市空气质量 - 百度地图',
              subtext: 'data from PM25.in',
              sublink: 'http://www.pm25.in',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            bmap: {
              center: [104.114129, 37.550339],
              zoom: 5,
              roam: true,
              mapStyle: {
                styleJson: [{
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'land',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#f3f3f3'
                  }
                }, {
                  'featureType': 'railway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fdfdfd'
                  }
                }, {
                  'featureType': 'highway',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'green',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'subway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'local',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'arterial',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                }, {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fefefe'
                  }
                }, {
                  'featureType': 'building',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                }, {
                  'featureType': 'label',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#999999'
                  }
                }]
              }
            },
            series: [
              {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(59,131,253)'
                  }
                }
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data.sort(function (a, b) {
                  return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgba(47,207,244)',
                    shadowBlur: 10,
                    shadowColor: '#333'
                  }
                },
                zlevel: 1
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          chinaMap6.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = chinaMap6.getModel().getComponent('bmap').getBMap();
//                    bmap.addControl(new BMap.MapTypeControl());
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
        }
      },
      baiduMap7() {
        var data = [
          {name: '海门', value: 9},
          {name: '鄂尔多斯', value: 12},
          {name: '招远', value: 12},
          {name: '舟山', value: 12},
          {name: '齐齐哈尔', value: 14},
          {name: '盐城', value: 15},
          {name: '赤峰', value: 16},
          {name: '青岛', value: 18},
          {name: '乳山', value: 18},
          {name: '金昌', value: 19},
          {name: '泉州', value: 21},
          {name: '莱西', value: 21},
          {name: '日照', value: 21},
          {name: '胶南', value: 22},
          {name: '南通', value: 23},
          {name: '拉萨', value: 24},
          {name: '云浮', value: 24},
          {name: '梅州', value: 25},
          {name: '文登', value: 25},
          {name: '上海', value: 25},
          {name: '攀枝花', value: 25},
          {name: '威海', value: 25},
          {name: '承德', value: 25},
          {name: '厦门', value: 26},
          {name: '汕尾', value: 26},
          {name: '潮州', value: 26},
          {name: '丹东', value: 27},
          {name: '太仓', value: 27},
          {name: '曲靖', value: 27},
          {name: '烟台', value: 28},
          {name: '福州', value: 29},
          {name: '瓦房店', value: 30},
          {name: '即墨', value: 30},
          {name: '抚顺', value: 31},
          {name: '玉溪', value: 31},
          {name: '张家口', value: 31},
          {name: '阳泉', value: 31},
          {name: '莱州', value: 32},
          {name: '湖州', value: 32},
          {name: '汕头', value: 32},
          {name: '昆山', value: 33},
          {name: '宁波', value: 33},
          {name: '湛江', value: 33},
          {name: '揭阳', value: 34},
          {name: '荣成', value: 34},
          {name: '连云港', value: 35},
          {name: '葫芦岛', value: 35},
          {name: '常熟', value: 36},
          {name: '东莞', value: 36},
          {name: '河源', value: 36},
          {name: '淮安', value: 36},
          {name: '泰州', value: 36},
          {name: '南宁', value: 37},
          {name: '营口', value: 37},
          {name: '惠州', value: 37},
          {name: '江阴', value: 37},
          {name: '蓬莱', value: 37},
          {name: '韶关', value: 38},
          {name: '嘉峪关', value: 38},
          {name: '广州', value: 38},
          {name: '延安', value: 38},
          {name: '太原', value: 39},
          {name: '清远', value: 39},
          {name: '中山', value: 39},
          {name: '昆明', value: 39},
          {name: '寿光', value: 40},
          {name: '盘锦', value: 40},
          {name: '长治', value: 41},
          {name: '深圳', value: 41},
          {name: '珠海', value: 42},
          {name: '宿迁', value: 43},
          {name: '咸阳', value: 43},
          {name: '铜川', value: 44},
          {name: '平度', value: 44},
          {name: '佛山', value: 44},
          {name: '海口', value: 44},
          {name: '江门', value: 45},
          {name: '章丘', value: 45},
          {name: '肇庆', value: 46},
          {name: '大连', value: 47},
          {name: '临汾', value: 47},
          {name: '吴江', value: 47},
          {name: '石嘴山', value: 49},
          {name: '沈阳', value: 50},
          {name: '苏州', value: 50},
          {name: '茂名', value: 50},
          {name: '嘉兴', value: 51},
          {name: '长春', value: 51},
          {name: '胶州', value: 52},
          {name: '银川', value: 52},
          {name: '张家港', value: 52},
          {name: '三门峡', value: 53},
          {name: '锦州', value: 54},
          {name: '南昌', value: 54},
          {name: '柳州', value: 54},
          {name: '三亚', value: 54},
          {name: '自贡', value: 56},
          {name: '吉林', value: 56},
          {name: '阳江', value: 57},
          {name: '泸州', value: 57},
          {name: '西宁', value: 57},
          {name: '宜宾', value: 58},
          {name: '呼和浩特', value: 58},
          {name: '成都', value: 58},
          {name: '大同', value: 58},
          {name: '镇江', value: 59},
          {name: '桂林', value: 59},
          {name: '张家界', value: 59},
          {name: '宜兴', value: 59},
          {name: '北海', value: 60},
          {name: '西安', value: 61},
          {name: '金坛', value: 62},
          {name: '东营', value: 62},
          {name: '牡丹江', value: 63},
          {name: '遵义', value: 63},
          {name: '绍兴', value: 63},
          {name: '扬州', value: 64},
          {name: '常州', value: 64},
          {name: '潍坊', value: 65},
          {name: '重庆', value: 66},
          {name: '台州', value: 67},
          {name: '南京', value: 67},
          {name: '滨州', value: 70},
          {name: '贵阳', value: 71},
          {name: '无锡', value: 71},
          {name: '本溪', value: 71},
          {name: '克拉玛依', value: 72},
          {name: '渭南', value: 72},
          {name: '马鞍山', value: 72},
          {name: '宝鸡', value: 72},
          {name: '焦作', value: 75},
          {name: '句容', value: 75},
          {name: '北京', value: 79},
          {name: '徐州', value: 79},
          {name: '衡水', value: 80},
          {name: '包头', value: 80},
          {name: '绵阳', value: 80},
          {name: '乌鲁木齐', value: 84},
          {name: '枣庄', value: 84},
          {name: '杭州', value: 84},
          {name: '淄博', value: 85},
          {name: '鞍山', value: 86},
          {name: '溧阳', value: 86},
          {name: '库尔勒', value: 86},
          {name: '安阳', value: 90},
          {name: '开封', value: 90},
          {name: '济南', value: 92},
          {name: '德阳', value: 93},
          {name: '温州', value: 95},
          {name: '九江', value: 96},
          {name: '邯郸', value: 98},
          {name: '临安', value: 99},
          {name: '兰州', value: 99},
          {name: '沧州', value: 100},
          {name: '临沂', value: 103},
          {name: '南充', value: 104},
          {name: '天津', value: 105},
          {name: '富阳', value: 106},
          {name: '泰安', value: 112},
          {name: '诸暨', value: 112},
          {name: '郑州', value: 113},
          {name: '哈尔滨', value: 114},
          {name: '聊城', value: 116},
          {name: '芜湖', value: 117},
          {name: '唐山', value: 119},
          {name: '平顶山', value: 119},
          {name: '邢台', value: 119},
          {name: '德州', value: 120},
          {name: '济宁', value: 120},
          {name: '荆州', value: 127},
          {name: '宜昌', value: 130},
          {name: '义乌', value: 132},
          {name: '丽水', value: 133},
          {name: '洛阳', value: 134},
          {name: '秦皇岛', value: 136},
          {name: '株洲', value: 143},
          {name: '石家庄', value: 147},
          {name: '莱芜', value: 148},
          {name: '常德', value: 152},
          {name: '保定', value: 153},
          {name: '湘潭', value: 154},
          {name: '金华', value: 157},
          {name: '岳阳', value: 169},
          {name: '长沙', value: 175},
          {name: '衢州', value: 177},
          {name: '廊坊', value: 193},
          {name: '菏泽', value: 194},
          {name: '合肥', value: 229},
          {name: '武汉', value: 273},
          {name: '大庆', value: 279}
        ];
        var geoCoordMap = {
          '海门': [121.15, 31.89],
          '鄂尔多斯': [109.781327, 39.608266],
          '招远': [120.38, 37.35],
          '舟山': [122.207216, 29.985295],
          '齐齐哈尔': [123.97, 47.33],
          '盐城': [120.13, 33.38],
          '赤峰': [118.87, 42.28],
          '青岛': [120.33, 36.07],
          '乳山': [121.52, 36.89],
          '金昌': [102.188043, 38.520089],
          '泉州': [118.58, 24.93],
          '莱西': [120.53, 36.86],
          '日照': [119.46, 35.42],
          '胶南': [119.97, 35.88],
          '南通': [121.05, 32.08],
          '拉萨': [91.11, 29.97],
          '云浮': [112.02, 22.93],
          '梅州': [116.1, 24.55],
          '文登': [122.05, 37.2],
          '上海': [121.48, 31.22],
          '攀枝花': [101.718637, 26.582347],
          '威海': [122.1, 37.5],
          '承德': [117.93, 40.97],
          '厦门': [118.1, 24.46],
          '汕尾': [115.375279, 22.786211],
          '潮州': [116.63, 23.68],
          '丹东': [124.37, 40.13],
          '太仓': [121.1, 31.45],
          '曲靖': [103.79, 25.51],
          '烟台': [121.39, 37.52],
          '福州': [119.3, 26.08],
          '瓦房店': [121.979603, 39.627114],
          '即墨': [120.45, 36.38],
          '抚顺': [123.97, 41.97],
          '玉溪': [102.52, 24.35],
          '张家口': [114.87, 40.82],
          '阳泉': [113.57, 37.85],
          '莱州': [119.942327, 37.177017],
          '湖州': [120.1, 30.86],
          '汕头': [116.69, 23.39],
          '昆山': [120.95, 31.39],
          '宁波': [121.56, 29.86],
          '湛江': [110.359377, 21.270708],
          '揭阳': [116.35, 23.55],
          '荣成': [122.41, 37.16],
          '连云港': [119.16, 34.59],
          '葫芦岛': [120.836932, 40.711052],
          '常熟': [120.74, 31.64],
          '东莞': [113.75, 23.04],
          '河源': [114.68, 23.73],
          '淮安': [119.15, 33.5],
          '泰州': [119.9, 32.49],
          '南宁': [108.33, 22.84],
          '营口': [122.18, 40.65],
          '惠州': [114.4, 23.09],
          '江阴': [120.26, 31.91],
          '蓬莱': [120.75, 37.8],
          '韶关': [113.62, 24.84],
          '嘉峪关': [98.289152, 39.77313],
          '广州': [113.23, 23.16],
          '延安': [109.47, 36.6],
          '太原': [112.53, 37.87],
          '清远': [113.01, 23.7],
          '中山': [113.38, 22.52],
          '昆明': [102.73, 25.04],
          '寿光': [118.73, 36.86],
          '盘锦': [122.070714, 41.119997],
          '长治': [113.08, 36.18],
          '深圳': [114.07, 22.62],
          '珠海': [113.52, 22.3],
          '宿迁': [118.3, 33.96],
          '咸阳': [108.72, 34.36],
          '铜川': [109.11, 35.09],
          '平度': [119.97, 36.77],
          '佛山': [113.11, 23.05],
          '海口': [110.35, 20.02],
          '江门': [113.06, 22.61],
          '章丘': [117.53, 36.72],
          '肇庆': [112.44, 23.05],
          '大连': [121.62, 38.92],
          '临汾': [111.5, 36.08],
          '吴江': [120.63, 31.16],
          '石嘴山': [106.39, 39.04],
          '沈阳': [123.38, 41.8],
          '苏州': [120.62, 31.32],
          '茂名': [110.88, 21.68],
          '嘉兴': [120.76, 30.77],
          '长春': [125.35, 43.88],
          '胶州': [120.03336, 36.264622],
          '银川': [106.27, 38.47],
          '张家港': [120.555821, 31.875428],
          '三门峡': [111.19, 34.76],
          '锦州': [121.15, 41.13],
          '南昌': [115.89, 28.68],
          '柳州': [109.4, 24.33],
          '三亚': [109.511909, 18.252847],
          '自贡': [104.778442, 29.33903],
          '吉林': [126.57, 43.87],
          '阳江': [111.95, 21.85],
          '泸州': [105.39, 28.91],
          '西宁': [101.74, 36.56],
          '宜宾': [104.56, 29.77],
          '呼和浩特': [111.65, 40.82],
          '成都': [104.06, 30.67],
          '大同': [113.3, 40.12],
          '镇江': [119.44, 32.2],
          '桂林': [110.28, 25.29],
          '张家界': [110.479191, 29.117096],
          '宜兴': [119.82, 31.36],
          '北海': [109.12, 21.49],
          '西安': [108.95, 34.27],
          '金坛': [119.56, 31.74],
          '东营': [118.49, 37.46],
          '牡丹江': [129.58, 44.6],
          '遵义': [106.9, 27.7],
          '绍兴': [120.58, 30.01],
          '扬州': [119.42, 32.39],
          '常州': [119.95, 31.79],
          '潍坊': [119.1, 36.62],
          '重庆': [106.54, 29.59],
          '台州': [121.420757, 28.656386],
          '南京': [118.78, 32.04],
          '滨州': [118.03, 37.36],
          '贵阳': [106.71, 26.57],
          '无锡': [120.29, 31.59],
          '本溪': [123.73, 41.3],
          '克拉玛依': [84.77, 45.59],
          '渭南': [109.5, 34.52],
          '马鞍山': [118.48, 31.56],
          '宝鸡': [107.15, 34.38],
          '焦作': [113.21, 35.24],
          '句容': [119.16, 31.95],
          '北京': [116.46, 39.92],
          '徐州': [117.2, 34.26],
          '衡水': [115.72, 37.72],
          '包头': [110, 40.58],
          '绵阳': [104.73, 31.48],
          '乌鲁木齐': [87.68, 43.77],
          '枣庄': [117.57, 34.86],
          '杭州': [120.19, 30.26],
          '淄博': [118.05, 36.78],
          '鞍山': [122.85, 41.12],
          '溧阳': [119.48, 31.43],
          '库尔勒': [86.06, 41.68],
          '安阳': [114.35, 36.1],
          '开封': [114.35, 34.79],
          '济南': [117, 36.65],
          '德阳': [104.37, 31.13],
          '温州': [120.65, 28.01],
          '九江': [115.97, 29.71],
          '邯郸': [114.47, 36.6],
          '临安': [119.72, 30.23],
          '兰州': [103.73, 36.03],
          '沧州': [116.83, 38.33],
          '临沂': [118.35, 35.05],
          '南充': [106.110698, 30.837793],
          '天津': [117.2, 39.13],
          '富阳': [119.95, 30.07],
          '泰安': [117.13, 36.18],
          '诸暨': [120.23, 29.71],
          '郑州': [113.65, 34.76],
          '哈尔滨': [126.63, 45.75],
          '聊城': [115.97, 36.45],
          '芜湖': [118.38, 31.33],
          '唐山': [118.02, 39.63],
          '平顶山': [113.29, 33.75],
          '邢台': [114.48, 37.05],
          '德州': [116.29, 37.45],
          '济宁': [116.59, 35.38],
          '荆州': [112.239741, 30.335165],
          '宜昌': [111.3, 30.7],
          '义乌': [120.06, 29.32],
          '丽水': [119.92, 28.45],
          '洛阳': [112.44, 34.7],
          '秦皇岛': [119.57, 39.95],
          '株洲': [113.16, 27.83],
          '石家庄': [114.48, 38.03],
          '莱芜': [117.67, 36.19],
          '常德': [111.69, 29.05],
          '保定': [115.48, 38.85],
          '湘潭': [112.91, 27.87],
          '金华': [119.64, 29.12],
          '岳阳': [113.09, 29.37],
          '长沙': [113, 28.21],
          '衢州': [118.88, 28.97],
          '廊坊': [116.7, 39.53],
          '菏泽': [115.480656, 35.23375],
          '合肥': [117.27, 31.86],
          '武汉': [114.31, 30.52],
          '大庆': [125.03, 46.58]
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };

        function renderItem(params, api) {
          var coords = [
            [116.7, 39.53],
            [103.73, 36.03],
            [112.91, 27.87],
            [120.65, 28.01],
            [119.57, 39.95]
          ];
          var points = [];
          for (var i = 0; i < coords.length; i++) {
            points.push(api.coord(coords[i]));
          }
          var color = api.visual('color');

          return {
            type: 'polygon',
            shape: {
              points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
              })
            },
            style: api.style({
              fill: color,
              stroke: echarts.color.lift(color)
            })
          };
        }

        let chinaMap7 = echarts.init(this.$refs.baiduMap7);
        if (chinaMap7) {
          let option = {
            title: {
              text: '全国主要城市空气质量',
              subtext: 'data from PM25.in',
              sublink: 'http://www.pm25.in',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            bmap: {
              center: [104.114129, 37.550339],
              zoom: 5,
              roam: true,
              mapStyle: {
                styleJson: [
                  {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                      "color": "#044161"
                    }
                  },
                  {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                      "color": "#004981"
                    }
                  },
                  {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                      "color": "#064f85"
                    }
                  },
                  {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                      "color": "#004981"
                    }
                  },
                  {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                      "color": "#005b96",
                      "lightness": 1
                    }
                  },
                  {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                      "color": "#004981"
                    }
                  },
                  {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                      "color": "#00508b"
                    }
                  },
                  {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                      "color": "#056197",
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                      "visibility": "off"
                    }
                  },
                  {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                      "color": "#029fd4"
                    }
                  },
                  {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                      "color": "#1a5787"
                    }
                  },
                  {
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                      "visibility": "off"
                    }
                  }
                ]
              }
            },
            series: [
              {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#ddb926'
                  }
                }
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data.sort(function (a, b) {
                  return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                  return val[2] / 10;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                  }
                },
                zlevel: 1
              },
              {
                type: 'custom',
                coordinateSystem: 'bmap',
                renderItem: renderItem,
                itemStyle: {
                  normal: {
                    opacity: 0.5
                  }
                },
                animation: false,
                silent: true,
                data: [0],
                z: -10
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          chinaMap7.setOption(option, true);
          //得到地图-添加缩放/类型等
          var bmap = chinaMap7.getModel().getComponent('bmap').getBMap();
          bmap.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          bmap.addControl(new BMap.NavigationControl());
        }

      },
      //百度地图-公交检索
      baiduMap5() {
        let mp = new BMap.Map(this.$refs.baiduMap5);
        //20190125 11 根据城市名定位
        /*
                var point=new BMap.Point(116.331398,39.897445);
                mp.centerAndZoom(point,11)
                mp.centerAndZoom("青岛",11);
                */
        //20190125 10 根据ip定位
        /*
                var point=new BMap.Point(116.331398,39.897445);
                mp.centerAndZoom(point,12);
                function myFun(result){
                    var cityName=result.name;
                    mp.setCenter(cityName);
                    alert("当前定位城市"+cityName);
                }
                var myCity=new BMap.LocalCity();
                myCity.get(myFun);
                */
        //20190125 10 浏览器定位--不好使
        var point = new BMap.Point(116.331398, 39.897445);
        mp.centerAndZoom(point, 12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          console.log("this.getStatus()");
          console.log(this.getStatus());
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            mp.addOverlay(mk);
            map.panTo(r.point);
//                        alert('您的位置'+r.point.lng+","+r.point.lat)
          } else {
//                        alert('failed'+this.getStatus());
          }
        }, {enableHighAccuracy: true})
        //20190125 09 google坐标转成百度坐标
        /*
                //谷歌坐标
                var x=116.32715863448607;
                var y=39.990912172420714;
                var ggPoint=new BMap.Point(x,y);
                //地图初始化
                mp.centerAndZoom(ggPoint,15);
                mp.addControl(new BMap.NavigationControl());
                //添加谷歌marker和label
                var markergg=new BMap.Marker(ggPoint);
                mp.addOverlay(markergg);
                var labelgg=new BMap.Label("未转换的谷歌标注(错误)",{
                    offset:new BMap.Size(20,-10)
                });
                markergg.setLabel(labelgg);
                //转换
                setTimeout(function(){
                    var convertor=new BMap.Convertor();
                    var pointArr=[];
                    pointArr.push(ggPoint);
                    convertor.translate(pointArr,3,5,translateCallback);
                },1000);
                var translateCallback=function(data){
                    if(data.status==0){
                        var marker=new BMap.Marker(data.points[0]);
                        mp.addOverlay(marker);
                        var label=new BMap.Label("转换后的百度标注:",{
                            offset:new BMap.Size(20,-10)
                        });
                        marker.setLabel(label);
                        mp.setCenter(data.points[0]);
                    }
                }
                */

        //20190125 08 逆地址解析
        /*
                var point = new BMap.Point(116.331398, 39.897445);
                mp.centerAndZoom(point, 12);
                var geoc = new BMap.Geocoder();
                mp.addEventListener("click", function (e) {
                    var pt = e.point;
                    //geoc.getPoint
                    geoc.getLocation(pt, function (rs) {
                        var addComp = rs.addressComponents;
                        alert(addComp.province + "," + addComp.city + "," + addComp.district
                            + "," + addComp.street + "," + addComp.streetNumber);
                    })
                })
                */

        //20190125 07 地址解析
        /*
                var point=new BMap.Point(116.331398,39.897445);
                mp.centerAndZoom(point,12);
                //创建地址解析器实例
                var myGeo=new BMap.Geocoder();
                myGeo.getPoint("北京市海淀区上地10街",function(point){
                    if(point){
                       mp.centerAndZoom(point,16);
                        mp.addOverlay(new BMap.Marker(point));
                    }else{
                        alert("没有解析结果");
                    }
                },'北京市')
                */

        //20190125 06 起点终点名称规划步行路线
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11)
                var walking=new BMap.WalkingRoute(mp,{
                    renderOptions:{
                        map:mp,
                        autoViewport:true
                    }
                })
                walking.search("天坛公园","故宫");
                */

        //20190125 05 起点终点名称查询驾车路线
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                var p1=new BMap.Point(116.301934,39.977552);
                var p2=new BMap.Point(116.508328,39.919141);
                var driving=new BMap.DrivingRoute(mp,{
                    renderOptions:{
                        map:mp,
                        autoViewport:true
                    }
                });
                driving.search(p1,p2);
                */
        /*
                //不好使
                var start="天安门";
                var  end="百度大厦";
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                //三种驾车策略：最少时间/最短距离/避开高速
//                var routePolicy=[
//                    BMAP_TRANSIT_POLICY_LEAST_TIME,
//                    BMAP_DRIVING_POLICY_LEAST_DISTANCE,
//                    BMAP_DRIVING_POLICY_AVOID_HIGHEAYS
//                ]
                search(start,end,4);
                function search(start,end,route){
                    var driving=new BMap.DrivingRoute(mp,{
                        renderOptions:{map:mp,autoViewport:true},
                        policy:route
                    })
                    driving.search(start,end);
                }
*/
        //20190125 04 查询公交地铁路线
        /*青岛
                mp.centerAndZoom("青岛",12);
                var busline=new BMap.BusLineSearch(mp,{
                    renderOptions:{map:mp},
                    onGetBusListComplete:function(result){
                        if(result){
                            //获取第一个公交列表显示到map
                            var fstLine=result.getBusListItem(0);
                            console.log("result");
                            console.log(result);
                            busline.getBusLine(fstLine);
                        }
                    }
                })
                function busSearch(){
                    var busName=313;
                    var obj= busline.getBusList(busName);
                }
                setTimeout(function(){
                    busSearch();
                },1500)
                */
        /*北京
                mp.centerAndZoom(new BMap.Point(116.404,39.915),12);
                var busline=new BMap.BusLineSearch(mp,{
                    renderOptions:{map:mp},
                    onGetBusListComplete:function(result){
                        if(result){
                            //获取第一个公交列表显示到map
                            var fstLine=result.getBusListItem(0);
                            console.log("result");
                            console.log(result);
                            busline.getBusLine(fstLine);
                        }
                    }
                })
                function busSearch(){
                    var busName=331;
                   var obj= busline.getBusList(busName);
                }
                setTimeout(function(){
                    busSearch();
                },1500)
                */


        //20190125 03 根据起点终点不明确的公交换乘
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),12);
                mp.enableScrollWheelZoom();
                var transit=new BMap.TransitRoute(mp,{
                    renderOptions:{map:mp}
                });
                transit.search("王府井","西单");
                */
        /*
                var start="魏公村",end="公园";
                var transit=new BMap.TransitRoute(mp,{
                    renderOptions:{map:mp},
                    onResultsHtmlSet:function(){

                    }
                })
                transit.search(start,end);
                */

        //20190125 02 根据起点终点经纬度查询公交换乘
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),12);
                var p1=new BMap.Point(116.301934,39.977552);
                var p2=new BMap.Point(116.508328,39.919141);
                var transit=new BMap.TransitRoute(mp,{
                    renderOptions:{map:mp}
                })
                transit.search(p1,p2);
                */
        //20190125 01 根据起点终点查询公交换乘
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),14);
                //不好使
//                var start="百度大厦";
//                var end="天安门";
                var start=new BMap.Point(116.301934,39.977552);
                var end=new BMap.Point(116.508328,39.919141);
                var routePolicy=[
                    BMAP_TRANSIT_POLICY_LEAST_TIME,BMAP_TRANSIT_POLICY_LEAST_TRANSFER,BMAP_TRANSIT_POLICY_LEAST_WALKING,
                    BMAP_TRANSIT_POLICY_AVOID_SUBWAYS
                ];
                var transit=new BMap.TransitRoute(mp,{
                    renderOptions:{map:mp},
                    policy:0
                })
                search(start,end,routePolicy[0]);
                function search(start,end,route){
//                    transit.setPolicy(route);
                    transit.search(start,end);
                }
                */
      },
      //百度地图-检索
      baiduMap4() {
        let mp = new BMap.Map(this.$refs.baiduMap4);
        //20190124 08 检索LBS云数据
        var point = new BMap.Point(116.403694, 39.927552);
        var options = {
          renderOptions: {
            map: mp
          },
          onSearchComplete: function (results) {
            console.log("search completed");
          }
        };
        var localSearch = new BMap.LocalSearch(mp, options);
        mp.addEventListener("load", function () {
          var circle = new BMap.Circle(point, 5000, {
            fillColor: 'blue',
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.3
          })
          mp.addOverlay(circle);
          localSearch.searchNearby('餐馆', point, 1000);
        })
        mp.centerAndZoom(point, 12);
        mp.enableScrollWheelZoom();
        mp.addControl(new BMap.NavigationControl());
        var drawingManager = new BMapLib.DrawingManager(mp, {
          isOpen: false,
          enableDrawingTool: true,
          drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            offset: new BMap.Size(5, 5),
            scale: 0.8,
            drawingModes: [
              BMAP_DRAWING_CIRCLE
            ]
          }
        })
        var circle = null;
        drawingManager.addEventListener('circlecomplete', function (e, overlay) {
          mp.clearOverlays();
          circle = e;
          mp.addOverlay(overlay);
          var radius = parseInt(e.getRadius());
          var center = e.getCenter();
          drawingManager.close();
          localSearch.searchNearby('餐馆', center, 1000);
        })


        //20190124 08 本地检索数据接口
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                var options={
                    onSearchComplete:function(results){
                        if(local.getStatus() == BMAP_STATUS_SUCCESS){
                            var s=[];
                            for(var i=0;i<results.getCurrentNumPois();i++){
                                s.push(results.getPoi(i).title+","+results.getPoi(i).address);
                            }
                            console.log(s.join("<br/>"));
                        }
                    }
                }
                var local=new BMap.LocalSearch(mp,options);
                local.search("公园");
                */
        //20190124 07 圆形区域检索
        /*
                var mPoint=new BMap.Point(116.274625,39.961627);
                mp.enableScrollWheelZoom();
                mp.centerAndZoom(mPoint,15);
                var circle=new BMap.Circle(mPoint,1000,{
                    fillColor:'blue',
                    strokeWeight:1,
                    fillOpacity:0.3,
                    strokeOpacity:0.3
                });
                mp.addOverlay(circle);
                var local=new BMap.LocalSearch(mp,{
                    renderOptions:{
                        map:mp,
                        autoViewport:false
                    }
                })
                local.searchNearby("餐饮",mPoint,1000);
                */
        //20190124 06 矩形区域检索
        /*
                mp.centerAndZoom(new BMap.Point(116.274625,39.961627),11);
                mp.enableScrollWheelZoom();
                var pStart=new BMap.Point(116.274625,39.961627);
                var pEnd=new BMap.Point(116.367474,39.988609);
                var bs=new BMap.Bounds(pStart,pEnd);
                var local=new BMap.LocalSearch(mp,{
                    renderOptions:{map:mp}
                })
                local.searchInBounds("银行",bs)
                //矩形区域
                var polygon=new BMap.Polygon([
                    new BMap.Point(pStart.lng,pStart.lat),
                    new BMap.Point(pEnd.lng,pStart.lat),
                    new BMap.Point(pEnd.lng,pEnd.lat),
                    new BMap.Point(pStart.lng,pEnd.lat),
                ],{
                    strokeColor:'blue',
                    strokeWeight:6,
                    strokeOpacity:0.5
                });
                mp.addOverlay(polygon);
                */
        //20190124 05 多关键字检索
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                var myKeys=['酒店','加油站'];
                var local=new BMap.LocalSearch(mp,{
                    renderOptions:{map:mp,panel:'r-result'},
                    pageCapacity:5
                })
                local.searchInBounds(myKeys,mp.getBounds());
                */
        //20190124 04返回北京市“景点”关键字的检索结果，并展示在地图上
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                var local=new BMap.LocalSearch(mp,{
                    renderOptions:{map:mp}
                });
                local.search("景点");
                */
      },
      //百度地图-个性化地图
      baiduMap3() {
        let mp = new BMap.Map(this.$refs.baiduMap3);
        var point = new BMap.Point(116.404, 39.915);
        //添加平移缩放
        mp.addControl(new BMap.NavigationControl());
        //添加比例尺
        mp.addControl(new BMap.ScaleControl());
        //添加缩略地图
        mp.addControl(new BMap.OverviewMapControl());
        mp.enableScrollWheelZoom();
        //添加地图类型控件
        mp.addControl(new BMap.MapTypeControl());
        mp.centerAndZoom(point, 14);
        //normal light  dark redalert googlelite  grassgreen midnight pink darkgreen  bluish grayscale hardedge
        changeMapStyle('midnight');
        //样式
        for (var key in mapstyles) {
//                    console.log(key);
        }

        function changeMapStyle(style) {
          mp.setMapStyle({style: style});
        }

      },
      //百度地图-全景图
      baiduMap2() {
        let mp = new BMap.Map(this.$refs.baiduMap2);
        //20190124 01 全景图
        mp.centerAndZoom(new BMap.Point(120.305456, 31.570037), 12);
        mp.enableScrollWheelZoom(true);
        //覆盖区域图层测试
        mp.addTileLayer(new BMap.PanoramaCoverageLayer());
        //构造全景控件
        var stCtrl = new BMap.PanoramaControl();
        stCtrl.setOffset(new BMap.Size(20, 20));
        //添加全景控件
        mp.addControl(stCtrl);

      },
      //百度地图1
      baiduMap1() {
//                var mp = new BMap.Map('baiduMap1');
        let mp = new BMap.Map(this.$refs.baiduMap1);
        //20190124 05 单个点沿线运动
        mp.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
        //起点终点
        var myP1 = new BMap.Point(116.380967, 39.953285);
        var myP2 = new BMap.Point(116.424374, 39.914668);
        //图片
        var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/Mario.png",
          new BMap.Size(32, 70), {
            imageOffset: new BMap.Size(0, 0)
          });
        //
        var i = 0;
        var paths = 0;
        var pts, carMk = null;
        var driving2 = new BMap.DrivingRoute(mp, {renderOptions: {map: mp, autoViewport: true}});
        driving2.search(myP1, myP2);
        driving2.setSearchCompleteCallback(function () {
          pts = driving2.getResults().getPlan(0).getRoute(0).getPath();
          paths = pts.length;
          carMk = new BMap.Marker(pts[0], {icon: myIcon});
          mp.addOverlay(carMk);
          resetMkPoint();

          //更新位置
          function resetMkPoint() {
            if (i < paths) {
//                            console.log("i" + i);
              carMk.setPosition(pts[i]);
              i = i + 10;
              setTimeout(function () {
                resetMkPoint(i)
              }, 1000)
            }
//                        carMk.setPosition(pts[80]);

          }
        });

        //20190124 04 多个点注册点击事件
        /*
                var point=new BMap.Point(116.404,39.915);
                mp.centerAndZoom(point,15);
                var json_data=[
                    [116.404,39.915],
                    [116.383752,39.91334],
                    [116.384502,39.932241]
                ];
                var pointArray=new Array();
                for(var i=0;i<json_data.length;i++){
                    var marker=new BMap.Marker(new BMap.Point(
                        json_data[i][0],json_data[i][1]
                    ));
                    mp.addOverlay(marker);
                    pointArray[i]=new BMap.Point(json_data[i][0],json_data[i][1]);
                    marker.addEventListener("click",attribute);
                }
                mp.setViewport(pointArray);
                function attribute(e){
                    var p=e.target;
                    console.log("marker位置是"+p.getPosition().lng);
                }
                */

        //20190124 03 地图单击事件
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                function showInfo(e){
                    alert(e.point.lng+","+e.point.lat);
                }
                mp.addEventListener("click",showInfo());
                */
        //20190124 02 图块加载完成
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                mp.addEventListener("tilesloaded",function(){
                    console.log("地图加载完毕");
                });
                */
        //20190124 01 添加/删除自定义网格
        /*
                var point=new BMap.Point(116.404,39.915);
                mp.centerAndZoom(point,15);
                mp.enableScrollWheelZoom();
                var tileLayer=new BMap.TileLayer({isTransparentPng:true});
                tileLayer.getTilesUrl=function(tileCoord,zoom){
                    var x=tileCoord.x;
                    var y=tileCoord.y;
                    return "http://lbsyun.baidu.com/jsdemo/img/border.png"
                }
                function add_control(){
                    mp.addTileLayer(tileLayer);
                }
                function delete_Control(){
                    mp.removeTileLayer(tileLayer);
                }
                add_control();
                /*


                //20190124 01 添加/删除魔兽地图
            /*
                mp.addControl(new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                }))
                mp.centerAndZoom(new BMap.Point(0, 0), 3);
                var tileLayer = new BMap.TileLayer();
                tileLayer.getTilesUrl = function (tileCoord, zoom) {
                    var x = tileCoord.x;
                    var y = tileCoord.y;
                    console.log('http://lbsyun.baidu.com/jsdemo/demo/tiles/' + zoom + '/tile' + x + '_' + y + '.png');
                    var url = 'http://lbsyun.baidu.com/jsdemo/demo/tiles/' + zoom + '/tile' + x + '_' + y + '.png';
                    return url;
                }
//                mp.addTileLayer(tileLayer);

                function add_control() {
                    mp.addTileLayer(tileLayer);
                }

                function delete_control() {
                    mp.removeTileLayer(tileLayer);
                }

                add_control();
                */

        //20190123 06 添加/删除清华微观图
        /*
                mp.addControl(new BMap.NavigationControl({
                    anchor:BMAP_ANCHOR_TOP_RIGHT,
                    type:BMAP_NAVIGATION_CONTROL_SMALL
                }));
                mp.centerAndZoom(new BMap.Point(116.332782, 40.007978), 16);
                var tileLayer = new BMap.TileLayer();
                tileLayer.getTilesUrl = function (tileCoord, zoom) {
                    var x = tileCoord.x;
                    var y = tileCoord.y
                    //根据当前坐标选取适合的瓦片图
                    console.log("图片地址：" + 'http://lbsyun.baidu.com/jsdemo/demo/tiles' + zoom + '/tile/' + x + '_' + y + '.png');
                    return 'http://lbsyun.baidu.com/jsdemo/demo/tiles' + zoom + '/tile/' + x + '_' + y + '.png';
                }
                mp.addTileLayer(tileLayer);
                */
        //20190123 05 添加/删除路况图层
        /*
//                mp.centerAndZoom(new BMap.Point(116.404,39.915),12);
                mp.centerAndZoom("青岛",12);
                var ctrl=new BMapLib.TrafficControl({
                    showPanel:false,//是否显示路况提示面板
                })
                mp.addControl(ctrl);
                ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
                */

        //20190123 04 设置鼠标样式/拖拽放大/测距
        /*
                mp.centerAndZoom("重庆",12);
                //设置地图默认的鼠标指针样式
                mp.setDefaultCursor("url('bird.cur')");
                //点击获取经纬度
                mp.addEventListener("click",function(e){
                    alert(e.point.lng+","+e.point.lat);
                })

                //测距
//                var myDis=new BMapLib.DistanceTool(mp);
//                mp.addEventListener("load",function(){
//                    myDis.open();
//                })

                //拉框放大
//                var myDrag=new BMapLib.RectangleZoom(mp,{
//                    followText:'拖拽鼠标进行操作'
//                })
//                myDrag.open();
/*

                //20190123 03 覆盖物添加右侧菜单
                /*
                var point=new BMap.Point(116.404,39.915);
                mp.centerAndZoom(point,15);

                var removeMarker=function(marker){
                    mp.removeOverlay(marker);
                }
                //创建右键菜单
                var markMenu=new BMap.ContextMenu();
                markMenu.addItem(new BMap.MenuItem('删除'),removeMarker.bind(marker));
                //
                var marker=new BMap.Marker(point);
                mp.addOverlay(marker);
                marker.addContextMenu(markMenu);
                */
        //20190123 02 添加右侧菜单
        /*
                var point = new BMap.Point(116.404, 39.915);
                mp.centerAndZoom(point, 15);
                var menu = new BMap.ContextMenu();
                var txtMenuItem = [
                    {
                        text: '放大',
                        callback: function () {
                            mp.zoomIn()
                        }
                    },
                    {
                        text: '缩小',
                        callback:function(){mp.zoomOut()}
                    }
                ];
                for(var i=0;i<txtMenuItem.length;i++){
                    menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
                }
                mp.addContextMenu(menu);
                */

        //20190123 01 添加带检索功能的信息窗口
        /*
                 var poi = new BMap.Point(116.307852, 40.057031);
                 mp.centerAndZoom(poi, 16);
                 mp.enableScrollWheelZoom();
                 var content="lalalal";
                 var searchInfoWindow=null;
                 searchInfoWindow=new BMapLib.SearchInfoWindow(mp,content,{
                     title:'百度大厦',
                     width:290,
                     height:105,
                     panel:'panel',
                     enableAutoPan:true,
                     searchTypes:[
                         BMAPLIB_TAB_SEARCH,
                         BMAPLIB_TAB_TO_HERE,
                         BMAPLIB_TAB_FROM_HERE
                     ]
                 })
                 var marker=new BMap.Marker(poi);
                 marker.enableDragging();
                 marker.addEventListener("click",function(e){
                     searchInfoWindow.open(marker);
                 });
                 mp.addOverlay(marker);
                 */
        //20190122 02 添加纯文字的信息
        /*
                var point=new BMap.Point(116.417854,39.921988);
                mp.centerAndZoom(point,15);
                var marker=new BMap.Marker(point);
                mp.addOverlay(marker);
                var opts={
                    width:200,
                    height:100,
                    title:'海底捞王府井店',
                    enableMessage:true,
                    message:'晚上一起吃个饭吧，查看地址'
                }
                var infoWindow=new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货8层",opts);
                marker.addEventListener("click",function(){
                    mp.openInfoWindow(infoWindow,point);
                });
                */

        //20190122 08 添加热力图
        /*
                var point=new BMap.Point(116.418261,39.921984);
                mp.centerAndZoom(point,15);
                mp.enableScrollWheelZoom();

                var points =[
                    {"lng":116.418261,"lat":39.921984,"count":50},
                    {"lng":116.423332,"lat":39.916532,"count":51},
                    {"lng":116.419787,"lat":39.930658,"count":15},
                    {"lng":116.418455,"lat":39.920921,"count":40},
                    {"lng":116.418843,"lat":39.915516,"count":100},
                    {"lng":116.42546,"lat":39.918503,"count":6},
                    {"lng":116.423289,"lat":39.919989,"count":18},
                    {"lng":116.418162,"lat":39.915051,"count":80},
                    {"lng":116.422039,"lat":39.91782,"count":11},
                    {"lng":116.41387,"lat":39.917253,"count":7},
                    {"lng":116.41773,"lat":39.919426,"count":42},
                    {"lng":116.421107,"lat":39.916445,"count":4},
                    {"lng":116.417521,"lat":39.917943,"count":27},
                    {"lng":116.419812,"lat":39.920836,"count":23},
                    {"lng":116.420682,"lat":39.91463,"count":60},
                    {"lng":116.415424,"lat":39.924675,"count":8},
                    {"lng":116.419242,"lat":39.914509,"count":15},
                    {"lng":116.422766,"lat":39.921408,"count":25},
                    {"lng":116.421674,"lat":39.924396,"count":21},
                    {"lng":116.427268,"lat":39.92267,"count":1},
                    {"lng":116.417721,"lat":39.920034,"count":51},
                    {"lng":116.412456,"lat":39.92667,"count":7},
                    {"lng":116.420432,"lat":39.919114,"count":11},
                    {"lng":116.425013,"lat":39.921611,"count":35},
                    {"lng":116.418733,"lat":39.931037,"count":22},
                    {"lng":116.419336,"lat":39.931134,"count":4},
                    {"lng":116.413557,"lat":39.923254,"count":5},
                    {"lng":116.418367,"lat":39.92943,"count":3},
                    {"lng":116.424312,"lat":39.919621,"count":100},
                    {"lng":116.423874,"lat":39.919447,"count":87},
                    {"lng":116.424225,"lat":39.923091,"count":32},
                    {"lng":116.417801,"lat":39.921854,"count":44},
                    {"lng":116.417129,"lat":39.928227,"count":21},
                    {"lng":116.426426,"lat":39.922286,"count":80},
                    {"lng":116.421597,"lat":39.91948,"count":32},
                    {"lng":116.423895,"lat":39.920787,"count":26},
                    {"lng":116.423563,"lat":39.921197,"count":17},
                    {"lng":116.417982,"lat":39.922547,"count":17},
                    {"lng":116.426126,"lat":39.921938,"count":25},
                    {"lng":116.42326,"lat":39.915782,"count":100},
                    {"lng":116.419239,"lat":39.916759,"count":39},
                    {"lng":116.417185,"lat":39.929123,"count":11},
                    {"lng":116.417237,"lat":39.927518,"count":9},
                    {"lng":116.417784,"lat":39.915754,"count":47},
                    {"lng":116.420193,"lat":39.917061,"count":52},
                    {"lng":116.422735,"lat":39.915619,"count":100},
                    {"lng":116.418495,"lat":39.915958,"count":46},
                    {"lng":116.416292,"lat":39.931166,"count":9},
                    {"lng":116.419916,"lat":39.924055,"count":8},
                    {"lng":116.42189,"lat":39.921308,"count":11},
                    {"lng":116.413765,"lat":39.929376,"count":3},
                    {"lng":116.418232,"lat":39.920348,"count":50},
                    {"lng":116.417554,"lat":39.930511,"count":15},
                    {"lng":116.418568,"lat":39.918161,"count":23},
                    {"lng":116.413461,"lat":39.926306,"count":3},
                    {"lng":116.42232,"lat":39.92161,"count":13},
                    {"lng":116.4174,"lat":39.928616,"count":6},
                    {"lng":116.424679,"lat":39.915499,"count":21},
                    {"lng":116.42171,"lat":39.915738,"count":29},
                    {"lng":116.417836,"lat":39.916998,"count":99},
                    {"lng":116.420755,"lat":39.928001,"count":10},
                    {"lng":116.414077,"lat":39.930655,"count":14},
                    {"lng":116.426092,"lat":39.922995,"count":16},
                    {"lng":116.41535,"lat":39.931054,"count":15},
                    {"lng":116.413022,"lat":39.921895,"count":13},
                    {"lng":116.415551,"lat":39.913373,"count":17},
                    {"lng":116.421191,"lat":39.926572,"count":1},
                    {"lng":116.419612,"lat":39.917119,"count":9},
                    {"lng":116.418237,"lat":39.921337,"count":54},
                    {"lng":116.423776,"lat":39.921919,"count":26},
                    {"lng":116.417694,"lat":39.92536,"count":17},
                    {"lng":116.415377,"lat":39.914137,"count":19},
                    {"lng":116.417434,"lat":39.914394,"count":43},
                    {"lng":116.42588,"lat":39.922622,"count":27},
                    {"lng":116.418345,"lat":39.919467,"count":8},
                    {"lng":116.426883,"lat":39.917171,"count":3},
                    {"lng":116.423877,"lat":39.916659,"count":34},
                    {"lng":116.415712,"lat":39.915613,"count":14},
                    {"lng":116.419869,"lat":39.931416,"count":12},
                    {"lng":116.416956,"lat":39.925377,"count":11},
                    {"lng":116.42066,"lat":39.925017,"count":38},
                    {"lng":116.416244,"lat":39.920215,"count":91},
                    {"lng":116.41929,"lat":39.915908,"count":54},
                    {"lng":116.422116,"lat":39.919658,"count":21}]
                if(!isSupportCanvas()){
                    alert("热力图目前只支持canvas支持的浏览器");
                }
                function isSupportCanvas(){
                    var elem=document.createElement('canvas');
                    return !!(elem.getContext && elem.getContext('2d'))
                }
                var heatmapOverlay=new BMapLib.HeatmapOverlay({"radius":20});
                mp.addOverlay(heatmapOverlay);
                heatmapOverlay.setDataSet({data:points,max:100});
                heatmapOverlay.show();
                 */
        //20190122 07 添加自定义覆盖物
        /*
                var TianAnMen = new BMap.Point(116.3964, 39.9093);
                mp.centerAndZoom(TianAnMen, 12);
                mp.enableScrollWheelZoom();
                //西南角和东北角
                var SW = new BMap.Point(116.29579, 39.837146);
                var NE = new BMap.Point(116.475451, 39.9764);
                var groundOverlay = new BMap.GroundOverlay(new BMap.Bounds(SW, NE), {
                    opacity: 1,
                    displayOnMinLevel: 10,
                    displayOnMaxLevel: 14,
                });
                groundOverlay.setImageURL("http://lbsyun.baidu.com/jsdemo/img/si-huan.png");
                mp.addOverlay(groundOverlay);
                */
        //20190122 06 添加行政hu区划
        /*
                mp.centerAndZoom(new BMap.Point(116.403765,39.914850),5);
                mp.enableScrollWheelZoom();
                function getBoundary(){
                    var bdary=new BMap.Boundary();
                    bdary.get("北京市海淀区",function(rs){
                        mp.clearOverlays();
                        var count=rs.boundaries.length;//行政区划点个数
                        if(count==0){
                            alert("未能获取当前输入行政区域");
                            return;
                        }
                        var pointArray=[];
                        for(var i=0;i<count;i++){
                            //建立多边形
                            var ply=new BMap.Polygon(rs.boundaries[i],{
                                strokeWeight:2,strokeColor:'#ff0000'
                            })
                            mp.addOverlay(ply);
                           // pointArray=pointArray.concat(ply.getPath);
                        }
                       // mp.setViewport(pointArray);
                       // addLabel();
                    });
                }
                setTimeout(function(){getBoundary();},2000);
                function addLabel(){
                    var pointArray=[
                        new BMap.Point(121.716076,23.703799),
                        new BMap.Point(112.121885,14.570616),
                        new BMap.Point(123.776573,25.695422),
                    ];
                    var optsArray=[{},{},{}];
                    var labelArray=[];
                    var contentArray=['222','33','444']
                    for(var i=0;i<pointArray.length;i++){
                        optsArray[i].pointer= pointArray[i];
                        labelArray[i]=new BMap.Label(contentArray[i],optsArray[i]);
                        labelArray[i].setStyle({
                            color:'red',
                            fontSize:'12px',
                            height:'20px',
                            lineHeight:'20px',
                        })
                    }
                    mp.addOverlay(labelArray[i]);
                }
                */

        //20190122 05 添加椭圆
        /*
                var point=new BMap.Point(116.404,39.915);
                mp.centerAndZoom(point,10);
                var oval=new BMap.Polygon(add_oval(point,0.1,0.3),
                    {strokeColor:'blue',strokeWeight:6,strokeOpacity:0.5});
                mp.addOverlay(oval);
                //center椭圆中心点 x横向坐标 y纵向坐标
                function add_oval(center,x,y){
                    var assemble=new Array();
                    var angle,dot;
                    var tangent=x/y;
                    for(var i=0;i<36;i++){
                        angle=(2*Math.PI/36)*i;
                        dot=new BMap.Point(center.lng+Math.sin(angle)*y*tangent,center.lat+Math.cos(angle)*y);
                        assemble.push(dot);
                    }
                    console.log(assemble);
                    return assemble;

                }
                */
        //20190122 04 添加弧线
        /*
                mp.centerAndZoom(new BMap.Point(118.454,32.955),6);
                mp.enableScrollWheelZoom();
                var bjPosition=new BMap.Point(116.432045,39.910683),
                    hzPosition=new BMap.Point(120.129721,30.314429),
                    twPosition=new BMap.Point(121.491121,25.127053);
                var points=[bjPosition,hzPosition,twPosition];
                var curve=new BMapLib.CurveLine(points,
                    {strokeColor:'blue',strokeWeight:3,strokeOpacity:0.5});
                mp.addOverlay(curve);
                curve.enableEditing();//开启编辑 功能
                */

        //20190122 03 添加海量点 未弄好
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),5);
                mp.enableScrollWheelZoom();//启用滚轮放大缩小
                if(document.createElement('canvas').getContext){
                    //判断当前浏览器是否支持绘制海量点
                    var data = {"data":[[74.438,39.006,1],[74.932,38.382,1],[75.402,37.879,1],[75.24,38.777,1],[75.264,39.656,1],[75.547,37.826,1],[75.769,39.345,1],[76.073,38.162,1],[76.154,39.673,1],[77.139,37.549,1],[76.821,39.37,1],[77.094,40.11,1],[77.363,38.011,1],[77.201,39.44,1],[77.921,37.257,1],[77.75,37.929,1],[77.835,39.3,1],[77.718,39.828,1],[77.975,40.858,1],[78.085,36.315,1],[78.266,37.584,1],[78.558,37.505,1],[78.449,40.946,1],[79.191,32.206,1],[78.918,37.314,1],[79.066,39.855,1],[79.057,40.704,1],[79.185,41.198,1],[79.562,31.931,1],[79.317,37.236,1],[79.523,37.417,1],[79.287,39.963,1],[79.364,40.476,1],[79.312,41.245,1],[79.952,33.571,1],[79.903,37.101,1],[79.871,37.181,1],[79.855,40.643,1],[79.826,41.16,1],[79.723,41.742,1],[80.155,34.754,1],[80.003,36.382,1],[80.167,37.109,1]]};
                    var points=[];

                    for(var i=0;i<data.data.length;i++){
                        points.push(new BMap.Point(data.data[i][0],data.data[i][1]));
                    }
                    var options={
                        size:BMAP_POINT_SIZE_SMALL,
                        shape:BMAP_POINT_SHAPE_STAR,
                        color:'#d340c3',
                    }
                    console.log(points);
                    //初始化pointCollection
                    var pointCollection=new BMap.PointCollection(points,options);
                    pointCollection.addEventListener("click",function(e){
                        alert('单击点的坐标：'+e.point.lng+','+e.point.lat);
                    });
                    mp.addOverlay(pointCollection);

                }else{
                    alert('请在chrome，safariie8以上浏览器查看本示例');
                }
                */

        //20190122 01 添加文字标签
        /*
                var point=new BMap.Point(116.417854,39.921988);
                mp.centerAndZoom(point,15);
                var opts={
                    position:point,//指定文本标注所在的地理位置
                    offset:new BMap.Size(30,-30),//文本偏移量
                };
                var label=new BMap.Label("小悦悦，你好可爱哦……喜欢你",opts);
                label.setStyle({
                    color:'#666',
                    fontSize:"12px",
                    height:'20px',
                    lineHeight:'20px',
                    fontFamily:'微软雅黑',
                    borderColor:'#666'

                })
                mp.addOverlay(label);
                */

        //20190121 08 创建点的新图标/添加标注/点击获取marker的位置
        /*
                var point=new BMap.Point(116.404,39.915);
                mp.centerAndZoom(point,15);
                //创建图片
                var pt=new BMap.Point(116.417,39.909);
                var myIcon=new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif",
                    new BMap.Size(300,157));
                var marker2=new BMap.Marker(pt,{icon:myIcon});
                mp.addOverlay(marker2);
                //添加标注
                var label=new BMap.Label("我是小可爱",{offset:new BMap.Size(10,10)});
                marker2.setLabel(label);
                marker2.addEventListener("click",getAttr);
                function getAttr(){
                    var p=marker2.getPosition();
                    alert("marker的位置是："+p.lng+","+p.lat);
                }
                //隐藏hide 显示show
//                marker2.hide();
//                marker2.show();
*/
        //20190121 07 折线上添加方向箭头
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),14);
                mp.enableScrollWheelZoom(true);
                var sy=new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,{
                    scale:0.6,
                    strokeColor:'red',
                    strokeWeight:2
                })
                var icons=new BMap.IconSequence(sy,'10','30');
                var pois=[
                    new BMap.Point(116.350658,39.938285),
                    new BMap.Point(116.386446,39.939281),
                    new BMap.Point(116.389034,39.913828),
                    new BMap.Point(116.442501,39.914603),
                ];
                var poliLine=new BMap.Polyline(pois,{
                    enableEditing:false,
                    enableClicking:true,
                    icons:[icons],
                    strokeWeight:'8',
                    strokeOpacity:0.8,
                    strokeColor:'#18a45b'
                });
                mp.addOverlay(poliLine);
                */
        //20190121 07 添加/删除覆盖物 弹跳动画
        /*
                var point=new BMap.Point(116.404, 39.915);
                mp.centerAndZoom(point, 15);
                //创建点
                var marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
                mp.addOverlay(marker);
                //添加动画
                marker.setAnimation(BMAP_ANIMATION_BOUNCE);

               //创建线
               var polyline = new BMap.Polyline([new BMap.Point(116.399, 39.910), new BMap.Point(116.405, 39.920),
                   new BMap.Point(116.425, 39.900)],{strokeColor:'blue',strokeWeight:2,strokeOpacity:0.5});
//                mp.addOverlay(polyline);
               //创建圆
               var circle=new BMap.Circle(point,500,{strokeColor:"blue",strokeWeight:2,strokeOpaity:0.5});
//                mp.addOverlay(circle);
               //创建多边形
               var polygon=new BMap.Polygon([
                   new BMap.Point(116.387112,39.920977),
                   new BMap.Point(116.385243,39.913063),
                   new BMap.Point(116.394226,39.917988),
                   new BMap.Point(116.401772,39.921364),
                   new BMap.Point(116.41248,39.927893),
               ],{strokeColor:'blue',strokeWeight:2,strokeOpacity:0.5})
//                mp.addOverlay(polygon);
               //创建矩形
               var pStart=new BMap.Point(116.392214,39.918985);
               var pEnd=new BMap.Point(116.41478,39.911901);
               var rectangle=new BMap.Polygon([
                   new BMap.Point(pStart.lng,pStart.lat),
                   new BMap.Point(pEnd.lng,pStart.lat),
                   new BMap.Point(pEnd.lng,pEnd.lat),
                   new BMap.Point(pStart.lng,pEnd.lat),
               ],{strokeColor:'blue',strokeWeight:2,strokeOpacity:0.5});
               mp.addOverlay(rectangle);
               */
        //20190121 06 添加城市列表
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),14);
                mp.enableScrollWheelZoom();
                mp.enableInertialDragging();
                mp.enableContinuousZoom();
                var size=new BMap.Size(10,10);
                mp.addControl(new BMap.CityListControl({
                    anchor:BMAP_ANCHOR_TOP_LEFT,
                    offset:size,
                    onChangeBefor:function(){
                        console.log("before");
                    },
                    onChangeAfter:function(){
                        console.log("after");
                    }
                }))
                */
        //20190121 05 添加自定义控件
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                //定义一个控件类
                function ZoomControl(){
                    //默认停靠位置和偏移量
                    this.defaultAnchor=BMAP_ANCHOR_TOP_LEFT;
                    this.defaultOffset=new BMap.Size(10,10);
                }
                //通过js的prototype属性继承于BMap.control
                ZoomControl.prototype=new BMap.Control();
                //自定义控件必须实现自己的initialize()并且将控件的DOM元素返回
                //在本方法中创建一个div元素作为控件的容器，并且将其添加到地图容器中
                ZoomControl.prototype.initialize=function(map){
                    var div=document.createElement("div");
                    var span1=document.createElement("span");
                    span1.appendChild(document.createTextNode("放大两倍"));
                    span1.style.cursor="pointer";
                    span1.style.border="1px solid gray";
                    span1.style.backgroundColor="red";
                    span1.onclick=function(e){
                        mp.setZoom(map.getZoom()+2);
                    }
                    var span2=document.createElement("span");
                    span2.appendChild(document.createTextNode("缩小大两倍"));
                    span2.style.cursor="pointer";
                    span2.style.border="1px solid gray";
                    span2.style.backgroundColor="blue";
                    span2.onclick=function(e){
                        mp.setZoom(map.getZoom()-2);
                    }
                    div.appendChild(span1);
                    div.appendChild(span2);
                    mp.getContainer().appendChild(div);
                    return div;
                }
                var myZoomCtrl=new ZoomControl();
                mp.addControl(myZoomCtrl);
                */
        //20190121 04 添加第三方版权控件
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                var cr=new BMap.CopyrightControl({
                    anchor:BMAP_ANCHOR_TOP_RIGHT,
                });
                mp.addControl(cr);
                var bs=mp.getBounds();
                cr.addCopyright({id:1,content:"<a href='#' style='font-size:20px;background:transparent'>yueyue</a>",bounds:bs});
                */
        //20190121 03 添加定位相关控件
        /*
                mp.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
                //添加带有定位的导航控件
                var navigationControl = new BMap.NavigationControl({
                    //左上角
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    //lange类型
                    type: BMAP_NAVIGATION_CONTROL_LARGE,
                    //启用定位
                    enableGeolocation: true

                });
                mp.addControl(navigationControl);
                //添加定位控件
                var geolocationControl = new BMap.GeolocationControl();
                geolocationControl.addEventListener("locationSuccess", function (e) {
                    console.log("当前地址:" + e);
                    //定位成功事件
//                    var address = "";
//                    address += e.addressComponent.province;
//                    address += e.addressComponent.city;
//                    address += e.addressComponent.district;
//                    address += e.addressComponent.street;
//                    address += e.addressComponent.streetNumber;
//                    console.log("当前地址:" + address);
                });
                geolocationControl.addEventListener("locationError", function (e) {
                    console.log(e.message);
                });
                mp.addControl(geolocationControl);
                */
        //20190121 02 添加地图类型缩略图控件
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),11);
                //2D图 混合图
                var mapType1=new BMap.MapTypeControl({
                    mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
                    anchor:BMAP_ANCHOR_TOP_LEFT
                });
                //缩略图
                //var overView=new BMap.OverviewMapControl();
                // mp.addControl(overView);
                //缩略图:打开状态
                var overViewOpen=new BMap.OverviewMapControl({isOpen:true,anchor:BMAP_ANCHOR_BOTTOM_RIGHT});
                mp.addControl(mapType1);
                mp.addControl(overViewOpen);
                */
        //20190121 01 测距 添加工具条比例尺
        /*
                mp.centerAndZoom("重庆", 12);
                //创建点坐标A-大渡口区
                var pointA = new BMap.Point(106.486654, 29.490295);
                //创建点坐标B-江北区
                var pointB = new BMap.Point(106.581515, 29.615467);
                //获取两点距离，保留两位小数
                console.log('从大渡口到江北区的距离是：' + (mp.getDistance(pointA, pointB)).toFixed(2) + '米');
                //定义折线
                var polyline = new BMap.Polyline([pointA, pointB], {
                    strokeColor: 'blue',
                    strokeWeight: 6,
                    strokeOpacity: 0.5
                });
                //添加折线到地图上
                mp.addOverlay(polyline);
                //添加删除工具条比例尺
                var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
                var top_left_navigation = new BMap.NavigationControl();//左上角添加默认缩放平移控件
                //右上角仅包含平移和缩放按钮
                var top_right_navigation = new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_RIGHT,
                    type: BMAP_NAVIGATION_CONTROL_SMALL
                });
//                缩放控件tye有四种类型：
//                BMAP_NAVIGATION_CONTROL_SMALL，仅包含平移和缩放按钮
//                BMAP_NAVIGATION_CONTROL_PAN，仅包含平移按钮
//                BMAP_NAVIGATION_CONTROL_ZOOM,仅包含缩放按钮
                //添加控件和比例addControl 删除removeControl
                mp.addControl(top_left_control);
                mp.addControl(top_left_navigation);
                mp.addControl(top_right_navigation);
                */

        //20190118 07 获取地图显示范围
        /*
                mp.centerAndZoom(new BMap.Point(116.404,39.915),14);
                let bs=mp.getBounds();//获取可视区域
                let bssw=bs.getSouthWest();//左下角
                let bsne=bs.getNorthEast();//右上角
                console.log("当前地图可视范围bssw："+bssw.lng+","+bssw.lat);
                console.log("当前地图可视范围bsne："+bsne.lng+","+bsne.lat);
                */
        //20190118 06将地图显示范围设定在指定区域，地图拖出该区域后会重新弹回
        /*
                 mp.centerAndZoom(new BMap.Point(116.404,39.915),13);
                 mp.enableScrollWheelZoom();
                 let b=new BMap.Bounds(new BMap.Point(116.027143,39.772348),new BMap.Point(116.832025,40.123))
                 try{
                     //script 须引入/AreaRestriction_min.js
                     BMapLib.AreaRestriction.setBounds(mp,b)
                 }catch(e){
                      console.log(e);
                 }
                 */
        //20190118 05 拖拽地图
        /*
                mp.centerAndZoom(new BMap.Point(116.4035,39.915),8)
                mp.enableScrollWheelZoom(true);
                mp.disableDragging();//禁止拖拽
                setTimeout(function(){mp.enableDragging()},3000);
                */
        //20190118 04 缩放地图 2s后放大14级
        /*
                mp.centerAndZoom(new BMap.Point(116.4035,39.915),8);
                setTimeout(function(){mp.setZoom(14)},3000);
                */
        //20190118 03 设置地图最大最小级别
        /*
                mp.minZoom=4;
                mp.maxZoom=8;
                mp.centerAndZoom(new BMap.Point(116.4035,39.915),8);
                mp.enableScrollWheelZoom(true);
                */
        //20190118 02 根据城市名设置地图中心点
//                mp.centerAndZoom("上海",15);
        //20190118 01 地图展示
        /*
                //设置中心点坐标 1上海-北京 2北京
                //1.1地图初始化，同时设置地图展示级别
//                mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
                //1.2等待两秒钟后，地图它会移动到新中心点。panTo()方法将让地图平滑移动至新中心点，如果移动距离超过了当前地图区域大小，则地图会直跳到该点。
//                window.setTimeout(function(){
//                    mp.panTo(new BMap.Point(116.409, 39.918));
//                }, 3000);
                //2 直接跳到 116.404, 39.915
                mp.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
                // 添加地图类型控件
                let myControl=new BMap.MapTypeControl({
                    mapTypes:[
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]
                });
                mp.addControl(myControl);
                mp.setCurrentCity("北京");
                mp.enableScrollWheelZoom(true);
                */


      },
      //极坐标
      polarline() {
        /*
                var data = [];
                for (var i = 0; i <= 360; i++) {
                    var t = i / 180 * Math.PI;
                    var r = Math.sin(2 * t) * Math.cos(2 * t);
                    data.push([r, i]);
                }
                let polarChart = echarts.init(this.$refs.polarChart);
                if (polarChart) {
                    let option = {
                        legend: {
                            data: ['line']
                        },
                        polar: {
                            center: ['50%', '54%']
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        angleAxis: {
                            type: 'value',
                            startAngle: 0
                        },
                        radiusAxis: {
                            min: 0
                        },
                        series: [{
                            coordinateSystem: 'polar',
                            name: 'line',
                            type: 'line',
                            showSymbol: false,
                            data: data
                        }],
                        animationDuration: 2000
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    polarChart.setOption(option, true);
                }
                */
        //20190115模拟散点图01
        let polarChart = echarts.init(this.$refs.polarChart);
        if (polarChart) {
          let option = {
            tooltip: {},
            xAxis: {},
            yAxis: {},
            series: [{
              type: 'scatter',
              symbolSize: 10,
              data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81]
              ]
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          polarChart.setOption(option, true);
        }
      },
      polarline1() {
        var data = [];
        for (var i = 0; i <= 100; i++) {
          var theta = i / 100 * 360;
          var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
          data.push([r, theta]);
        }
//                console.log(data)
        let polarChart1 = echarts.init(this.$refs.polarChart1);
        if (polarChart1) {
          let option = {
            title: {
              text: '极坐标双数值轴'
            },
            legend: {
              data: ['line']
            },
            polar: {},
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            angleAxis: {
              type: 'value',
              startAngle: 0
            },
            radiusAxis: {},
            series: [{
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              data: data
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          polarChart1.setOption(option, true);
        }

      },
      //世界地图
      worldMap() {
        let worldMap = echarts.init(this.$refs.worldMap);
        if (worldMap) {
          let option = {
            title: {
              text: '世界地图(2010)',
              subtext: 'from United Nations',
              sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
              left: 'center',
              top: 'top'
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                //添加千分位 1359821.465  ==1，359,821 .456
                var value = (params.value + '').split('.');
//                                console.log(value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,'));
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                  + '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
              }
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            visualMap: {
              type: 'continuous',
              min: 0,
              max: 1000000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              color: ['orangered', 'yellow', 'lightskyblue']
            },
            series: [
              {
                name: '世界地图(2010)',
                type: 'map',
                mapType: 'world',
                roam: true,
                itemStyle: {
                  emphasis: {label: {show: true}}
                },
                //中文
//                                nameMap:{
//                                    'China' : '中国'
//                                },
//                                data:[
//                                    {name : '中国', value : 1359821.465},
//                                ]
                //英文
                data: [
                  {name: 'China', value: 1359821.465},
                ]
              }
            ]
          };
          // 使用刚指定的配置项和数据显示图表。
          worldMap.setOption(option, true);
        }
      },
      renderItem(params, api) {
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();
        return {
          type: 'rect',
          shape: {
            x: start[0] + 1,
            y: start[1],
            width: size[0] - 2,
            height: size[1]
          },
          style: style
        };
      },
      genData(count) {
        var nameList = [
          '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < 50; i++) {
          name = Math.random() > 0.65
            ? makeWord(4, 1) + '·' + makeWord(3, 0)
            : makeWord(2, 1);
          legendData.push(name);
          seriesData.push({
            name: name,
            value: Math.round(Math.random() * 100000)
          });
          selected[name] = i < 6;
        }
        return {
          legendData: legendData,
          seriesData: seriesData,
          selected: selected
        };

        function makeWord(max, min) {
          var nameLen = Math.ceil(Math.random() * max + min);
          var name = [];
          for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
          }
          return name.join('');
        }
      },
      //bar
      renderLine6() {
        let lineChart6 = echarts.init(this.$refs.barChartRef2);
        //'squareRoot' 、 'scott' 、 'freedmanDiaconis' 、 'sturges'
        let girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0];
        let bins = ecStat.histogram(girth);
        let interval;
        let min = Infinity;
        let max = -Infinity;
        let customData = [[5, 15, 3], [15, 25, 5], [25, 35, 12], [35, 45, 17]
          , [45, 55, 23], [55, 65, 24], [65, 75, 42], [75, 85, 41], [85, 95, 21], [95, 105, 52]];

        let data = echarts.util.map(customData, function (item, index) {
          min = Math.min(min, item[0]);
          max = Math.max(max, item[1]);
//                     interval = item[1]-item[0];
          // console.log("interval" + interval);
          return item;
        });

        let option = {
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '2%',
            containLabel: true
          },
          tooltip: {
            formatter: function (params) {
              return "[" + params.data[0] + "至" + params.data[1] + "]:" + params.data[2];
            }
          },
          xAxis: [{
            type: 'value',
            min: min,
            max: max,
            interval: interval,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              onZero: true,
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              inside: false,
              alignWithLabel: true,
            },
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ccc'
              }
            },
          }],
          series: [{
            name: 'height',
            type: 'custom',
            renderItem: this.renderItem,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            itemStyle: {
              normal: {
                borderColor: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                borderWidth: 1,
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253,0.3)'// 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244,0.3)'  // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
              }
            },
            encode: {
              x: [0, 1],
              y: 2,
              tooltip: 2,
              label: 2
            },
            data: data
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        lineChart6.setOption(option, true);
      },
      //bar
      renderLine5() {
        let lineChart5 = echarts.init(this.$refs.barChartRef1);
        //'squareRoot' 、 'scott' 、 'freedmanDiaconis' 、 'sturges'
        let girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0];
        let bins = ecStat.histogram(girth);
        let interval;
        let min = Infinity;
        let max = -Infinity;
//                let data = echarts.util.map(bins.data, function (item, index) {
//                    console.log();
//                    var x0 = bins.bins[index].x0;
//                    var x1 = bins.bins[index].x1;
//                    interval = x1 - x0;
//                    min = Math.min(min, x0);
//                    max = Math.max(max, x1);
//                    console.log("interval"+interval);
//                    return [x0, x1, item[1]];
//                });
        let customData = [[-12.51, 21.5, 3], [21.5, 45.5, 3], [45.5, 65.2, 3], [65.2, 87.1, 3]
          , [87.1, 99.2, 3], [99.2, 115, 3], [115, 143.4, 3], [143.4, 167.3, 3], [167.3, 200.1, 3], [200.1, 243, 3]];

        let data = echarts.util.map(customData, function (item, index) {
          min = Math.min(min, item[0]);
          max = Math.max(max, item[1]);
//                     interval = item[1]-item[0];
//                    console.log("interval" + interval);
          return item;
        });

        let option = {
          grid: {
            left: '2%',
            right: '3%',
            bottom: '2%',
            top: '3%',
            containLabel: true
          },
          tooltip: {
            formatter: function (params) {
              return "<div style='line-height: 25px'>" + params.data[0] + "至" + params.data[1] + "</div>" +
                "<div style='line-height: 25px;'>" + "数量&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;" +
                "<span style='display:inline-block'>" + params.data[2] + "</span></div>"
            },
          },
          xAxis: [{
            type: 'value',
            min: min,
            max: max,
            interval: interval,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              onZero: true,
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              inside: false,
              alignWithLabel: true,
            },
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ccc'
              }
            },
          }],
          series: [{
            name: 'height',
            type: 'custom',
            renderItem: this.renderItem,
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            itemStyle: {
              normal: {
                borderColor: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                borderWidth: 1,
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253,0.3)'// 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244,0.3)'  // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
              }
            },
            encode: {
              x: [0, 1],
              y: 2,
              tooltip: 2,
              label: 2
            },
            data: data
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        lineChart5.setOption(option, true);
      },
      //box
      renderLine1() {
        this.lineChart1 = echarts.init(this.$refs.lineChartRef);
        this.pieData = this.genData(50);
        if (this.lineChart1) {
          //5.2018121101 盒须图 multiple categories
          this.boxplotData = dataTool.prepareBoxplotData([
            [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
            [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
            [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
            [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
            [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
          ]);
//                    console.log("=====boxplotData=====");
//                    console.log(this.boxplotData);
//                    console.log(this.boxplotData.axisData);
//                    console.log(this.boxplotData.boxData);
//                    console.log(this.boxplotData.outliers);
          let option = {
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '10%',
              right: '10%',
              bottom: '15%'
            },
            xAxis: {
              type: 'category',
              data: this.boxplotData.axisData,
              boundaryGap: true,
              nameGap: 30,
              axisLabel: {
                formatter: 'expr {value}'
              },
              axisLine: {
                onZero: true,
                lineStyle: {
                  color: '#ccc'
                }
              },
              axisTick: {
                inside: false,
                alignWithLabel: true,
              },
            },
            yAxis: {
              type: 'value',
              name: 'km/s minus 299,000',
              nameGap: 15,
              axisLabel: {
                formatter: '{value}'
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#6b819c"
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ccc'
                }
              },
              axisTick: {
                show: false
              }
            },
            series: [
              {
                name: 'boxplot',
                type: 'boxplot',
                data: this.boxplotData.boxData,
                itemStyle: {
                  normal: {
                    borderColor: {
                      type: 'linear',
                      x: 1,
                      y: 0,
                      x2: 0,
                      y2: 0,
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(59,131,253)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: 'rgba(47,207,244)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    borderWidth: 2,
                    color: {
                      type: 'linear',
                      x: 1,
                      y: 0,
                      x2: 0,
                      y2: 0,
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(59,131,253,0.3)'// 0% 处的颜色
                      }, {
                        offset: 1,
                        color: 'rgba(47,207,244,0.3)'  // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                  }
                },
                tooltip: {
                  formatter: function (param) {
                    return [
                      'Experiment ' + param.name + ': ',
                      'upper: ' + 2222,
                      'Q3: ' + param.data[4],
                      'median: ' + param.data[3],
                      'Q1: ' + param.data[2],
                      'lower: ' + param.data[1]
                    ].join('<br/>');
                  }
                }
              },
              {
                name: 'outlier',
                type: 'scatter',
                itemStyle: {
                  normal: {
                    color: 'rgb(235,102,35,0.7)',
                  }
                },
                data: this.boxplotData.outliers
              }
            ]
          };
          //4.2018121001 rainfall
//                    let option = {
//                        title: {
//                            text: '雨量流量关系图',
//                            subtext: '测试流量',
//                            x: 'center'
//                        },
//                        grid: {
//                            bottom: 80,
//                        },
//                        toolbox: {
//                            dataZoom: {
//                                yAxisIndex: 'none',//暂时不太明白
//                            },
//                            restore: {},
//                            saveAsImage: {},
//                        },
//                        tooltip: {
//                            trigger: 'axis',
//                            axisPointer: {
//                                type: 'cross',
//                                label: {
//                                    backgroundColor: '#505678'
//                                }
//                            },
//                        },
//                        legend: {
//                            data: ['流量', '降雨量'],
//                            x: 'left'
//                        },
//                        dataZoom: [
//                            {
//                                show: true,
//                                realtime: true,
//                                start: 5,
//                                end: 10
//                            },
//                            {
//                                type: 'inside',
//                                realtime: true,
//                                start: 40,
//                                end: 50
//                            }],
//                        xAxis: [{
//                            type: 'category',
//                            boundaryGap: false,
//                            axisLine: {
//                                onZero: false,//
//                            },
//                            data: [
//                                '2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00'].map(function (str) {
//                                return str.replace(' ', '\n')
//                            })
//                        }],
//                        yAxis: [
//                            {
//                                name: '流量(m^3/s)',
//                                type: 'value',
//                                max: 100,
//                            },
//                            {
//                                name: '降雨量(mm)',
//                                nameLocation: 'start',
//                                max: 500,
//                                type: 'value',
//                                inverse: true,
//                            }],
//                        series: [
//                            {
//                                name: '流量',
//                                type: 'line',
//                                lineStyle: {
//                                    width: 1,
//                                },
//                                //折线面积图
//                                itemStyle: {
//                                    normal: {
//                                        areaStyle: {
//                                            type: 'default',
//                                            //color: 'rgba(59,131,253,0.3)'
////                                        color: {
////                                            type: 'linear',
////                                            x: 0,
////                                            y: 0,
////                                            x2: 0,
////                                            y2: 1,
////                                            colorStops: [{
////                                                offset: 0, color: 'rgba(59,131,253,0.3)'//0%处颜色
////                                            }, {
////                                                offset: 1, color: 'rgba(47,207,244,0.3)'//100%处颜色
////                                            }],
////                                            globalCoord: false,//缺省值为false
////                                        },
//                                        }
//                                    }
//                                },
//                                //markArea
//                                markArea: {
//                                    silent: true,
//                                    data: [[{
//                                        xAxis: '2009/6/12\n2:00'
//                                    }, {
//                                        xAxis: '2009/6/12\n8:00'
//                                    }]]
//                                },
//                                data: [1.97, 2.96, 3.96, 4.95, 5.95, 6.94, 7.94, 8.94, 9.94, 10.94],
//                            },
//                            {
//                                name: '降雨量',
//                                type: 'line',
//                                yAxisIndex: 1,
//                                lineStyle: {
//                                    width: 1,
//                                },
//                                itemStyle: {
//                                    normal: {
//                                        areaStyle: {},
//                                    }
//                                },
//                                markArea: {
//                                    silent: true,
//                                    data: [[{
//                                        xAxis: '2009/6/12\n6:00'
//                                    }, {
//                                        xAxis: '2009/6/12\n8:00'
//                                    }]]
//                                },
//                                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//                            }]
//                    };

          //4.2018120501 legend scroll vertical
          /*
                    let option = {
                       title:{
                           text:'同名数量统计',
                           subtext:'纯属虚构',
                           x:'center',
                       },
                        tooltip:{
                           trigger:'item',
                            formatter: "{a}<br/>{b} : {c} ({d}%)",
                        },
                        legend:{
                           type:'scroll',
                            orient:'vertical',
                            right:10,
                            top:20,
                            bottom:20,
                            pageButtonItemGap:30,
                            pageButtonGap:20,
                            pageButtonPosition:'end',
                            pageFormatter:'{current}页/总共{total}页',
                            pageIconColor:'red',
                            pageIconInactiveColor:'blue',
                            pageIconSize:'20',
                            pageTextStyle:{
                               color:'red'
                            },
                            animation:true,
                            animationDurationUpdate:800,//默认动画时长
                            data:this.pieData.legendData,
                            selected:this.pieData.selected
                        },
                        series:[{
                            name:'姓名',
                            type:'pie',
                            radius:'55%',
                            center:['40%','50%'],
                            data:this.pieData.seriesData,
                            itemStyle:{
                               emphasis:{
                                   shadowBlur:10,
                                   shadowOffsetX:0,
                                   shadowColor:'rgba(0,0,0,0.5)'
                               }
                            }
                        }]

                    };
                    */
          //3.2018120403 stacked area chart
          //stack折线图堆叠~ 第二条线的数值=本身的数值+第一条线的数值，第三条的数值=第二条线图上的数值+本身的数值，以此类推......
          //堆叠图实际显示的是：邮件营销=120，联盟广告=120+220=340,视频广告=340+150=490，直接访问=490+320=810，搜索引擎=810+820=1630）
          /*
                   let option = {
                       title:{
                          text:'堆叠区域图'
                       },
                       toolbox:{
                           feature:{
                               saveAsImage:{},
                           }
                       },
                       grid:{
                           left:'3%',
                           right:'4%',
                           bottom:'3%',
                           containLabel:true,
                       },
                       legend:{
                          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
                       },
                       tooltip:{
                           trigger:'axis',
                           //坐标轴指示器是指示坐标轴当前刻度的工具
                           axisPointer:{
                               type:'cross',
                               label:{
                                   backgroundColor:'#6a7985'
                               }
                           }
                       },
                       xAxis: {
                           type: 'category',
                           boundaryGap: false,
                           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                       },
                       yAxis: {
                           type: 'value'
                       },
                       series: [
                           {
                               name:'邮件营销',
                               type:'line',
                               stack: '总量',
                               data:[120, 132, 101, 134, 90, 230, 210]
                           },
                           {
                               name:'联盟广告',
                               type:'line',
                               stack: '总量',
                               data:[100, 182, 191, 234, 290, 330, 310]
                           },
                           {
                               name:'视频广告',
                               type:'line',
                               stack: '总量',
                               data:[150, 232, 201, 154, 190, 330, 410]
                           },
                           {
                               name:'直接访问',
                               type:'line',
                               stack: '总量',
                               data:[320, 332, 301, 334, 390, 330, 320]
                           },
                           {
                               name:'搜索引擎',
                               type:'line',
                               stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                               data:[820, 932, 901, 934, 1290, 1330, 1320]
                           }
                       ]
                   };
                   */
          //2.2018120402 basic area chart
          /*
                    let option = {
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            //折线面积图
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        //color: 'rgba(59,131,253,0.3)'
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: 'rgba(59,131,253,0.3)'//0%处颜色
                                            }, {
                                                offset: 1, color: 'rgba(47,207,244,0.3)'//100%处颜色
                                            }],
                                            globalCoord: false,//缺省值为false
                                        },
                                    }
                                }
                            },
                            smooth: true
                        }]
                    };
                    */
          //1.2018120401 basic line chart
          /*
                    let option = {
                        xAxis:[
                            {
                            type:'category',
                                data:['Mon','Thu','Web','Thu','Fri','Sat','Sun'],
                            }
                        ],
                        yAxis:[
                            {
                                type:'value',
                            }
                        ],
                        series:[{
                            data:[820,932,901,934,1290,1330,1320],
                            type:'line'
                        }]
                    };
                    */
          // 使用刚指定的配置项和数据显示图表。
          this.lineChart1.setOption(option, true);
        }
      },
      //bar
      renderLine2() {
        let lineChart4 = echarts.init(this.$refs.barChartRef);
        //'squareRoot' 、 'scott' 、 'freedmanDiaconis' 、 'sturges'
        let girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0];
        let bins = ecStat.histogram(girth);
        let option = {
          color: ['rgba(59,131,253)'],
          grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
          },
          tooltip: {
            formatter: function (params) {
              return params.value[1];
            }
          },
          xAxis: [{
            type: 'value',
            scale: true, //这个一定要设，不然barWidth和bins对应不上
            axisLabel: {
              // formatter: '{value}'
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              onZero: true,
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              inside: false,
              alignWithLabel: true,
            },
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#6b819c"
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ccc'
              }
            },
          }],
          series: [{
            name: 'height',
            type: 'bar',
            barWidth: '99.3%',
            label: {
              normal: {
                show: true,
                position: 'insideTop',
                formatter: function (params) {
                  return params.value[1];
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                borderWidth: 2,
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(59,131,253,0.3)'// 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(47,207,244,0.3)'  // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
              }
            },
//                        data: bins.data
            data: [[5, 4], [15, 6], [25, 1], [35, 3], [45, 5], [55, 6], [65, 7], [75, 8], [85, 8], [95, 14]],
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        lineChart4.setOption(option, true);
      },
      formatterData(params) {
//                console.log(params);
        return params.value[1];
      },
      renderLine3() {
        this.lineChart3 = echarts.init(this.$refs.line1);
        if (this.lineChart3) {
          //2.2018120402 basic area chart
          let option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  show: true,
                  formatter: '{value}',
                  backgroundColor: '#5267B3',
                }
              },
              padding: [10, 20],
            },
            xAxis: {
              type: 'category',
              name: '组段',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'ww', 'rr', 'ff', 'ee'],
              axisLine: {
                onZero: true,
                lineStyle: {
                  color: '#ccc'
                }
              },
            },
            yAxis: {
              type: 'value',
              name: '频数',
              nameLocation: "end",
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ccc'
                }
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#6b819c"
                }
              },
              axisTick: {
                show: false
              }
            },
            series: [{
//                            data: [820, 932, 901, 934, 1290, 1330, 1320],
              data: [0, 0, 0.075, 1, 1, 1, 1, 1, 1, 1, 10000],
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default',
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0, color: 'rgba(59,131,253,0.3)' // 0% 处的颜色
                      }, {
                        offset: 1, color: 'rgba(47,207,244,0.3)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    }
                  },
                  color: "#1890FF",
                  barBorderRadius: 0,
                  lineStyle: {
                    width: 2
                  }
                },
              },
              markLine: {
                data: [
                  {
                    name: 'Y 轴值为 100 的水平线',
                    yAxis: 200
                  }
                ],
                itemStyle: {
                  normal: {
                    lineStyle: {
                      type: 'solid',
                      width: 3,
                      color: 'rgba(112,205,255,1)'
                    }
                  }
                }
              },
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          this.lineChart3.setOption(option, true);
        }
      },
      renderLine4() {
        let lineChart2 = echarts.init(document.getElementById('lineChart2'));
        //20190114水印
        let watermarkText = '小悦悦';
        let canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 100;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.2;
        ctx.font = "20px Microsoft Yahei";
        ctx.translate(50, 50);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(watermarkText, 0, 0);
        let option = {
          //20190114水印
          backgroundColor: {
            image: canvas,
            repeat: 'repeat',
          },
          // backgroundColor:'red',//颜色
          xAxis: [
            {
              type: 'category',
              name: '组段',
              data: ['1', '2', '3', '4', '5', '6', '7'],
              silent: true,
              axisPointer: {
                type: 'line',
                triggerTooltip: false,
                lineStyle: {
                  type: "dashed"
                },
                label: {
                  show: false
                }
              },
              axisLine: {
                onZero: true,
                lineStyle: {
                  color: '#ccc'
                }
              },
              axisTick: {
                inside: false,
                alignWithLabel: true,
              },
              triggerEvent: true
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '频数',
              nameLocation: "start",
              axisPointer: {
                show: false
              },
              nameTextStyle: {
                align: "left",
                width: 80,
                rich: {},
                padding: [0, 25, 0, 0]
              },
              nameGap: 15,
              axisLabel: {
                formatter: '{value}'
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  color: "#6b819c"
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ccc'
                }
              },
              axisTick: {
                show: false
              }
            },
          ],
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        lineChart2.setOption(option, true);
      },
      resize() {
        if (this.lineChart1) this.lineChart1.resize();
        if (this.lineChart2) this.lineChart2.resize();
        if (this.lineChart3) this.lineChart3.resize();
      },
      drawClear() {
        if (this.lineChart1) this.lineChart1.clear();
        if (this.lineChart2) this.lineChart2.clear();
        if (this.lineChart3) this.lineChart3.clear();
      },
    },
    filters: {
      //根据length截取字符串
      getLength: function getLength(value, length) {
        if (value) {
          if (value.length > length) {
            return value.substr(0, length) + "...";
          } else {
            return value;
          }
        }
      },
    },
    components: {},
    watch: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss">
  @import "../../common/scss/index.scss";
  #echartDemo3 {
    //height: 100%;
    height: calc(100vh - 102px);
    overflow-y: auto;
    position: relative;
    background: transparent;
    border-radius: $border-radius;
    border: 1px solid $um-border-color;
    box-shadow: 0 2px 20px rgba(136, 136, 136, 0.5);
    .main-content {
      background-color: #0f173b;
      /*padding: 15px 15px 15px 195px;*/
      padding: 15px 15px 15px 15px;
      box-sizing: border-box;
      .block-title {
        height: 40px;
        line-height: 40px;
        margin-top: 8px;
        .title-name {
          position: relative;
          display: inline-block;
          width: 400px;
          float: left;
          margin-left: 20px;

          padding-left: 10px;
          text-align: left;
          color: #a2a3a4;
          &:before {
            position: absolute;
            left: 0;
            top: 10px;
            display: inline-block;
            content: '';
            width: 2px;
            height: 20px;
            background-color: #116ac6;
          }
        }
      }
      .charts {
        height: calc(100vh - 130px);
        margin-bottom: 15px;
        .chart {
          display: inline-block;
          width: calc(50% - 10px);
          height: 100%;
          background-color: #343c67;
          position: relative;
          border-radius: 6px;
          .pie_sum {
            position: absolute;
            width: 50%;
            height: calc(100% - 50px);
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            div {
              position: absolute;
              top: 52%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .sum_name {
              text-align: center;
              font-size: 16px;
              color: #aaaaaa;
            }
            .sum_number {
              text-align: center;
              font-size: 16px;
              margin-top: 0;
            }
          }
          .pieChart {
            position: absolute;
            z-index: 2;
            height: calc(100% - 50px);
            width: 50%;
            margin: auto;
            left: 0;
            right: 0;
            top: 40px;
          }
          .lineChart {
            position: absolute;
            height: calc(100% - 50px);
            width: 100%;
            top: 40px;
          }
          .legend {
            display: inline-block;
            overflow-y: auto;
            width: 100px;
            box-sizing: border-box;
            max-height: 220px;
            position: absolute;
            bottom: 0;
            left: 10px;
            .legend-item {
              display: inline-block;
              width: 100%;
              cursor: pointer;
              margin: 5px 0;
              span.icon {
                display: inline-block;
                width: 10px;
                height: 10px;
                position: relative;
                top: -8px;
                border-radius: 100%;
                background-color: #1890ff;
              }
              span.text {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                span {
                  display: block;
                  height: 15px;
                  line-height: 15px;
                }
                .legend-name {
                  /*width: 40px;*/
                  color: #fff;
                  line-height: 32px;
                  font-size: 10px;
                }
                .legend-data {
                  color: #aaa;
                  font-size: 10px;
                }
              }
              &:hover {
                span.icon {
                  display: inline-block;
                  width: 13px;
                  height: 13px;
                  border-radius: 100%;
                  background-color: #1890ff;
                }
              }
            }
          }
          .common-table {
            width: 100%;
            table-layout: fixed;
            text-align: center;
            tr:nth-child(2n+1) {
              background-color: rgba(255, 255, 255, 0.01);
            }
            th {
              background-color: rgba(255, 255, 255, 0.05);
              box-sizing: border-box;
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: #999;
              position: relative;
              & > span {
                display: inline-block;
              }
              .drop {
                display: inline-block;
                width: 14px;
                height: 8px;
                margin: auto;
              }
              &:not(:last-child):after {
                content: '';
                height: 20px;
                width: 1px;
                margin: auto;
                top: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, .6);
                position: absolute;
                right: 0;
              }
            }
            td {
              height: 30px;
              line-height: 30px;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              img {
                display: inline-block;
                width: 20px;
                height: 20px;
                cursor: pointer;
                vertical-align: middle;
              }
            }
          }
        }
        .chart1 {
          float: left;
          margin-right: 15px;
        }
        .chart2 {
          float: right;
        }
      }
    }

  }

</style>
