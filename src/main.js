// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import rootStore from './common/vuex/rootStore'
import {CLEAR_USER_INFO} from './common/vuex/mutationTypes'
import {RECOVER_USER_INFO} from './common/vuex/actionTypes'
//接口地址BASEURL
import link from './link'

Vue.config.productionTip = false
window.BASE = link.LINK
Vue.use(Vuex);
const store = new Vuex.Store(rootStore);

/**
 * storage event listener
 */
window.addEventListener('storage', function (e) {
  if (e.key === CLEAR_USER_INFO) {
    store.commit(CLEAR_USER_INFO);
    location.href = LINKS.login;
  }
});

router.beforeEach((to, from, next) => {
  //url访问路由时控制权限
  //权限信息
  let Auths = [];
  //不存在用户信息
  if (!store.state.user.UserName) {
    //刷新时
    store.dispatch("RECOVER_USER_INFO");
    if (store.state.user.userName) {
      //刷新存在
      //console.log("刷新");
      Auths = store.state.user.Auths;
    } else {
      //console.log("刷新不存在");
    }
  } else {
    //存在用户信息
    // console.log("存在");
    Auths = store.state.user.Auths;
  }

  //let name=to.name;
  let path = to.path;

  //含有权限信息
  let authFlag = false;

  if (path == '/') {
    authFlag = true;
  }
  if (authFlag) {
    //   next()
  } else {
    //没有权限,退出,进去登陆界面
    // console.log("没有权限,进入登陆界面");
    // store.dispatch("SIGN_OUT");
    // router.push({path: "/"});
    // next(false)

  }

  next();

});
router.afterEach(route => {
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
