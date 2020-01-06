import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 此处路由配置 webpackChunkName为webpack打包时会将name相同的打包在同一js中
 */
const App = () => import(/* webpackChunkName: "system" */'@/modules/layout/app.vue');
const NotFound = () => import(/* webpackChunkName: "system" */'@/modules/layout/not-found.vue');
const login = () => import(/* webpackChunkName: "system" */'@/modules/login/login.vue');
//home
const home = () => import(/* webpackChunkName: "home" */'@/modules/homePage/home.vue');
//全貌图
const businessGraph = () => import(/* webpackChunkName: "home" */'@/modules/homePage/businessGraph.vue');
//业务图
const incidenceGraph = () => import(/* webpackChunkName: "home" */'@/modules/homePage/incidenceGraph.vue');
//indexlib
const indexLibList = () => import(/* webpackChunkName: "indexLib" */'@/modules/indexLibPage/indexLibList.vue');
const indexLibDetail = () => import(/* webpackChunkName: "indexLib" */'@/modules/indexLibPage/indexLibDetail.vue');
const indexLibTree = () => import(/* webpackChunkName: "indexLib" */'@/modules/indexLibPage/indexLibTree.vue');
//echart
const echartDemo1 = () => import(/* webpackChunkName: "echart" */'@/modules/echartPage/echartDemo1.vue');
const echartDemo2 = () => import(/* webpackChunkName: "echart" */'@/modules/echartPage/echartDemo2.vue');
const echartDemo3 = () => import(/* webpackChunkName: "echart" */'@/modules/echartPage/echartDemo3.vue');


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    //home
    {
      path: '/vuedemo',
      meta: {name: '首页', className: 'icon-quanxian'},
      component: App,
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {name: '主页', menu: false},
          component: home,
        },
        {
          path: 'business-graph',
          name: 'business-graph',
          meta: {name: '全貌图', menu: false},
          component: businessGraph,
        },
        {
          path: 'incidence-graph',
          name: 'incidence-graph',
          meta: {name: '业务图', menu: false},
          component: incidenceGraph,
        },
        //indexLib
        {
          path: 'indexLib-list',
          name: 'indexLib-list',
          meta: {name: '指标列表', menu: false},
          component: indexLibList,
        },
        {
          path: 'indexLib-detail',
          name: 'indexLib-detail',
          meta: {name: '指标详情', menu: false},
          component: indexLibDetail,
        },
        {
          path: 'indexLib-tree',
          name: 'indexLib-tree',
          meta: {name: '指标树', menu: false},
          component: indexLibTree,
        },
        //echartPage
        {
          path: 'echart-demo1',
          name: 'echart-demo1',
          meta: {name: '折线图1', menu: false},
          component: echartDemo1,
        },
        {
          path: 'echart-demo2',
          name: 'echart-demo2',
          meta: {name: '折线图2', menu: false},
          component: echartDemo2,
        },
        {
          path: 'echart-demo3',
          name: 'echart-demo3',
          meta: {name: '折线图3', menu: false},
          component: echartDemo3,
        }
      ]
    },
    {
      path: '*',
      name: 404,
      component: NotFound
    },
  ]
})
