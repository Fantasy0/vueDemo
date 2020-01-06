<template>
  <div class="header">
    <div class="logo">
      <div class="img_wrapper">
        <img src="../login/img/avatar.png" alt="">
      </div>
      <span><span class="orange">vue</span>Demo</span>
    </div>
    <!--一级菜单start-->
    <div class="nav-list">
      <div v-for="(firstNav,index) in menuList" class="nav-first-item" @click.stop="cutFirstNav(firstNav)"
           :class="{firstactive: currentFirstMenuId===firstNav.id}">{{firstNav.name}}
        <div class="nav-second-div">
          <div v-for="(secondNav,index) in firstNav.subclassList" class="nav-second-item"
               :class="{secondactive: currentSecondMenuId===secondNav.id}"
               @click.stop="cutTwoNav(secondNav)">{{secondNav.name}}
          </div>
        </div>
      </div>
    </div>
    <!--一级菜单end-->
  </div>
</template>
<script type="text/babel">
  import {SIGN_IN, SIGN_OUT, SET_MENU} from '../../common/vuex/actionTypes'
  import LINKS from '../../link'
  import loginModel from '../login/loginModel'
  import debounce from 'lodash/debounce'

  export default {
    data() {
      return {
        //定时器相关 start
        timer: null,
        timetip: '上午好',
        //定时器相关 end
        url: LINKS,
      }
    },
    methods: {
      getDate() {
        let now = new Date(), hour = now.getHours()
//                console.log("定时器调用方法了"+hour);
        if (hour < 6) {
          this.timetip = "凌晨好！";
        }
        else if (hour < 9) {
          this.timetip = "早上好！";
        }
        else if (hour < 12) {
          this.timetip = "上午好！";
        }
        else if (hour < 14) {
          this.timetip = "中午好！";
        }
        else if (hour < 17) {
          this.timetip = "下午好！";
        }
        else if (hour < 19) {
          this.timetip = "傍晚好！";
        }
        else if (hour < 22) {
          this.timetip = "晚上好！";
        }
        else {
          this.timetip = "夜里好！";
        }
      },
      //当前一级菜单点击项
      cutFirstNav(nav) {
        //当前点击1级菜单
        this.currentFirstMenuId = nav.id;
        //当前2级
        this.currentSecondMenuId = nav.subclassList[0].id;
        //不跳转页面或者跳转页面-默认第一项
        this.$router.push({name: nav.subclassList[0].route});
      },
      //当前2级菜单点击项
      cutTwoNav(nav) {
        //1级
        this.currentFirstMenuId = nav.parentId;
        //当前2级
        this.currentSecondMenuId = nav.id;
        //不跳转页面或者跳转页面-默认第一项
        this.$router.push({name: nav.route});
      },
    },
    computed: {
      userName() {
        return this.$store.state.user.realName;
      },
      //一级菜单
      menuList() {
        return this.$store.state.user.Auths;
      },
      //当前一级菜单
      currentFirstMenuId: {
        get() {
          let currentFirstMenuId = this.$store.state.menu.currentFirstMenuId;
          return currentFirstMenuId;
        },
        set(currentFirstMenuId) {
          let menu = this.$store.state.menu;
          menu.currentFirstMenuId = currentFirstMenuId;
          this.$store.dispatch(SET_MENU, menu);
        }
      },
      //当前2级菜单
      currentSecondMenuId: {
        get() {
          let currentSecondMenuId = this.$store.state.menu.currentSecondMenuId;
          return currentSecondMenuId;
        },
        set(currentSecondMenuId) {
          let menu = this.$store.state.menu;
          menu.currentSecondMenuId = currentSecondMenuId;
          this.$store.dispatch(SET_MENU, menu);
        }
      },
    },
    mounted() {
      //上午下午好显示信息
      this.getDate();
      //定时器 1小时=60分钟=60*60秒=3600*1000毫秒=3600000毫秒
      //定时器 2小时=3600000毫秒*2
      let t = 3600000 * 2;
      //添加定时 一小时判断一次
      this.timer = setInterval(() => {
        this.getDate();
      }, t);
    },
    beforeDestroy() {
      //clear定时
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    watch: {},
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
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../../common/scss/index.scss";

  .header {
    height: $header-height;
    border: 1px solid $um-border-color;
    background: transparent;
    box-shadow: 0 0 15px rgba(50, 50, 50, 0.8);
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */
    {
      transform: translateY(-10px);
      opacity: 0;
    }
    .logo {
      display: inline-block;
      height: 60px;
      float: left;
      margin-left: 20px;
      font-size: 18px;
      .img_wrapper {
        height: 60px;
        line-height: 60px;
        display: inline-block;
        float: left;
        img {
          display: inline-block;
          width: 20px;
          position: relative;
          top: 4px;
        }
      }
      span {
        height: 60px;
        line-height: 60px;
        display: inline-block;
        /*margin-left: 10px;*/
        color: #257bc0;
        text-shadow: 0px 0px 50px rgba($um-white, 0.5);;
      }
      span.orange {
        color: $um-orange;
      }
    }

    & > .user {
      float: right;
      text-align: left;
      position: relative;
      z-index: $index-header;
      padding: 8px;
      //item
      .user-info {
        padding-right: 20px;
        height: 40px;
        color: $um-white;
        font-size: 16px;
        cursor: pointer;
        //左侧图标
        .user-img {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          margin-top: 5px;
        }
        .setting-img {
          background: url("../login/img/settings.png") center center no-repeat;
          background-size: cover;
          width: 16px;
          height: 16px;
        }
        .avatar-img {
          background: url("../login/img/avatar.png") center center no-repeat;
          background-size: cover;
          width: 34px;
          height: 34px;
        }
        //右侧下拉箭头
        .icon {
          font-size: 8px;
          color: #999;
          /*padding-left: 10px;*/
        }
        .user-info-left, .user-info-right {
          float: left;
        }
        .tip {
          line-height: 20px;
          padding-left: 5px;
          padding-right: 5px;
          font-size: 14px;
        }
        .time {
          font-size: 12px;
        }

      }
      &:hover {
        .gray-pop {
          display: inline-block;
        }
        .icon-jiantou-copy1 {
          color: $um-blue;
        }
      }
    }
    //用户退出
    .gray-pop {
      display: none;
      width: 64px;
      padding: 10px 18px;
      position: absolute;
      right: 20px;
      top: 52px;
      border-radius: 4px;
      background: #5267B3;
      color: $um-white;
      line-height: 24px;
      text-align: left;
      z-index: 1;
      border: 1px solid $um-border-color;
      box-shadow: 0 0 20px rgba(130, 130, 130, 0.4);
      &:before {
        content: "";
        border: 8px solid transparent;
        border-bottom-color: $um-border-color;
        position: absolute;
        top: -15px;
        right: 40px;
      }

      .pop-item {
        cursor: pointer;
        text-align: center;
        padding-top: 2px;
        padding-bottom: 2px;
        border-bottom: 1px dashed $um-white;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          color: $um-blue;
        }

      }
    }
    //一级菜单
    .nav-list {
      font-size: 16px;
      color: $header-color;
      padding-left: 5%;
      float: left;
      .nav-first-item {
        display: inline-block;
        padding: 20px 20px 15px 10px;
        margin-right: 20px;
        cursor: pointer;
        position: relative;
        &:hover {
          .nav-second-div {
            display: inline-block;
          }
        }
      }
      .firstactive {
        font-weight: bold;
        color: $um-white;
        border-bottom: 2px solid $um-blue;
      }
      .nav-second-div {
        z-index: 100;
        display: none;
        position: absolute;
        top: 55px;
        left: -24px;
        border-radius: 5px;
        width: 100px;
        box-sizing: border-box;
        background: rgba(226, 241, 255, 0.3);
        .nav-second-item {
          text-align: center;
          padding: 5px 8px;
          &:hover {
            background: rgba(226, 241, 255, 0.5);
          }
        }
        .secondactive {
          background: rgba(125, 190, 251, 0.9);
        }
      }

    }
    //小屏错位
    @media screen and (max-width: 1200px) {
      .first-list {
        padding-left: 0;
      }
    }
    //退出登陆
    .passmian {
      padding-bottom: 10px;
      input[type="text"], input[type="password"] {
        box-sizing: border-box;
        height: 40px;
        width: 300px;
        /*background: transparent;*/
        background: #f1f4f7;
        color: #666;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #dae1e7;
        box-shadow: none;
        border-radius: 4px;
        text-indent: 1em;
        @include transition(.3s all);
        &:hover {
          border: 1px solid $um-blue;
        }
        &:focus {
          border: 1px solid $um-blue;
        }
      }
      //标题
      p.title {
        font-size: 18px;
        padding-bottom: 10px;
        color: $um-white;
        text-align: center;
      }
      //一项
      .item {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 10px;
        text-align: center;
      }

    }
  }
</style>
