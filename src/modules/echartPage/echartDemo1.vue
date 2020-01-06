<template>
  <div id="echartDemo1">
    <div class="main-content">
      <div class="charts clearfix">
        <div class="chart chart1">
          <div class="block-title">
            <div class="title-name">风险情况占比</div>
          </div>
          <div class="legend">
            <div class="legend-item" v-for="(item,i) in pieData"
                 @mouseenter="highLight(item.name,i,item.percent)"
                 @mouseleave="downPlay(item.name,i,item.percent)">
              <span class="icon" :style="{'background-color':pieColor[i]}"></span>
              <span class="text">
                              <span class="legend-name">{{item.name}}</span>
                             </span>
            </div>
          </div>
          <div id="pieChart"></div>
          <div class="pie_sum">
            <div>
              <p class="sum_name">{{name}}</p>
              <p class="sum_number">{{percent}}%</p>
            </div>
          </div>
        </div>
        <div class="chart chart2">
          <div class="block-title">
            <div class="title-name">关注企业</div>
          </div>
          <div id="lineChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import addIcon from './img/analysis.png'
  import fresh from './img/analysis.png'
  import pending from './img/analysis.png'
  import processed from './img/analysis.png'
  import remove from './img/analysis.png'
  import chartt from './img/analysis.png'
  import chartd from './img/analysis.png'
  export default {
    data() {
      return {
        addIcon, fresh, pending, processed, remove,
        name: '高危企业',
        percent: '40',
        pieChart: '',
        lineChart: '',
        pieData: [{value: 4, name: '高危企业', percent: 30},
          {value: 3, name: '重点关注企业', percent: 60},
          {value: 3, name: '一般关注企业', percent: 80}],

        pieColor: ['rgb(255,55,55)', '#ff6370', '#9dadff']
      }
    },
    mounted() {
      this.renderPie()
      this.renderLine()
      window.onresize = () => {
        this.pieChart.resize()
        this.lineChart.resize()
      }
    },
    methods: {
      highLight(name, i, percent) {
        this.pieChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: i,
        })
        this.name = name
        this.percent = percent
      },
      downPlay(name, i, percent) {
        this.pieChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: i,
        })
        this.name = name
        this.percent = percent
      },
      renderPie() {
        let that = this;
        this.pieChart = echarts.init(document.getElementById('pieChart'));
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: function (param) {
              let color = that.pieColor[param.dataIndex]
              return `<div style='color: #fff'>${param.name}</div>
                      <table cellspacing="10px" style="color: #fff"><tr><td>行业</td><td>数量</td><td>占比</td><td>趋势</td></tr>
                      <tr><td>小贷</td><td>23</td><td>11%</td><td>3<img src=${chartt} alt=""></td></tr>
                      <tr><td>小贷</td><td>23</td><td>11%</td><td>3<img src=${chartd} alt=""></td></tr>
                      </table>`
            },
            backgroundColor: "rgba(0,0,0,.6)",
            borderColor: "#ccc",
            borderWidth: 0,
            textStyle: {
              color: '#333'
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
          },
          legend: {
            show: false,
            orient: 'horizontal',
            bottom: 20,
            data: ['高危企业', '重点关注企业', '一般关注企业'],
            formatter: function (name, i) {
              return name;
            }
          },
          color: that.pieColor,
          series: [
            {
              name: '客户数量',
              type: 'pie',
              radius: ['60%', '80%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'inside',
                  formatter: function (param) {
                    if (Math.floor(param.percent) > 5) {
                      return param.percent + '%'
                    } else {
                      return ""
                    }
                  },
                },
                emphasis: {
                  show: false,
                  position: 'inside',
                  formatter: function (param) {
                    if (Math.floor(param.percent) > 5) {
                      return param.percent + '%'
                    } else {
                      return ""
                    }
                  },
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: that.pieData
            }
          ]
        };
        //click
        this.pieChart.off('click')
        this.pieChart.on('click', function (params) {
          console.log("click:" + params.name);
          that.name = params.name
          that.percent = params.percent
        });
        //mouseover
        this.pieChart.on('mouseover', function (params) {
          console.log("mouseover:" + params.name);
          that.name = params.name
          that.percent = params.percent
        });
        // 使用刚指定的配置项和数据显示图表。
        this.pieChart.setOption(option, true);
      },
      renderLine() {
        this.lineChart = echarts.init(document.getElementById('lineChart'));
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#505765'
              }
            }
          },
          legend: {
            data: ['企业总数', '风险事件总和', '风险'],
            textStyle: {
              color: '#fff'
            }
          },
          dataZoom: [
            {
              textStyle: {
                color: '#fff'
              }
            }
          ],
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                textStyle: {
                  color: '#fff'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
          ],
          yAxis: [
            {
              type: 'value',
              interval: 100,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#fff'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#fff',
                }
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                }
              }
            }
          ],
          series: [
            {
              name: '企业总数',
              type: 'bar',
              smooth: false,
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: 'rgba(59,131,253,1)' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'rgba(47,207,244,00)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                  label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}',
                    textStyle: {
                      color: '#fff'
                    }
                  }
                }
              },
              barWidth: 14,
              data: [100, 200, 300, 400, 500, 400, 150, 100, 95, 160, 50, 45]
            },
            {
              name: '风险事件总和',
              type: 'line',
              smooth: false,
              symbol: 'circle',
              symbolSize: 4,
              hoverAnimation: false,
              itemStyle: {
                shadowColor: 'rgb(235,102,35)',
                normal: {
                  color: 'red',
                }
              },
              lineStyle: {
                color: 'rgb(235,102,35)',
                shadowColor: 'rgb(235,102,35)',
                shadowOffsetY: 0,
                shadowBlur: 10
              },
              data: [50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45]
            },
            {
              name: '风险',
              type: 'line',
              smooth: false,
              symbol: 'circle',
              symbolSize: 4,
              hoverAnimation: false,
              itemStyle: {
                shadowColor: 'rgb(235,102,35)',
                normal: {
                  color: 'rgb(235,102,35)',
                }
              },
              lineStyle: {
                color: 'rgb(235,102,35)',
                shadowColor: 'rgb(235,102,35)',
                shadowOffsetY: 0,
                shadowBlur: 10
              },
              data: [150, 175, 200, 250, 100, 150, 250, 200, 195, 260, 150, 145]
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.lineChart.setOption(option, true);
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

  #echartDemo1 {
    height: 100%;
    position: relative;
    background: transparent;
    border-radius: $border-radius;
    border: 1px solid $um-border-color;
    box-shadow: 0 2px 20px rgba(136, 136, 136, 0.5);
    .main-content {
      background-color: #0f173b;
      height: calc(100vh - 102px);
      /*padding: 15px 15px 15px 195px;*/
      padding: 15px 15px 15px 15px;
      box-sizing: border-box;
    }
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
        #pieChart {
          position: absolute;
          z-index: 2;
          height: calc(100% - 50px);
          width: 50%;
          margin: auto;
          left: 0;
          right: 0;
          top: 40px;
        }
        #lineChart {
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

</style>
