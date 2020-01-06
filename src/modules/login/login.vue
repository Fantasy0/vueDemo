<template>
  <div id="login">
    <!--<particles></particles>-->
    <!--logo start-->
    <div class="logomain">
      <img src="../login/img/avatar.png" alt="">
      <span><span class="orange">vue</span>demo</span>
    </div>
    <!--logo end-->
    <!--登陆框 start-->
    <div class="main">
      <div class="loginmain">
        <p class="login-title mg-bottom">登录</p>
        <p class="error" v-if="userError">{{userError}}<i class="icon icon-tishi"></i></p>
        <div class="item item-user mg-bottom">
          <span class="login-icon user-icon"></span>
          <input v-model.trim="USER.userName" class="text" required type="text" maxlength="15"
                 placeholder="请输入您的用户名"
                 @keyup.enter="login()">
        </div>
        <div class="item item-user mg-bottom10 mg-top">
          <span class="login-icon pwd-icon"></span>
          <input v-model.trim="USER.userPass" class="text" required type="password" maxlength="16"
                 placeholder="请输入您的密码" @keyup.enter="login()">
        </div>
        <div class="item pd-bottom">
          <button class="sure" @click.stop="login()" @keyup.enter="login()">登录</button>
          <p class="tip-red">
            温馨提示：使用<span class="tip-blue">IE10</span>及以上、<span class="tip-blue">谷歌</span>、
            <span class="tip-blue">火狐</span>浏览器将提升您系统的使用体验
          </p>
        </div>
      </div>
    </div>
    <!--登陆框 end-->
  </div>
</template>

<script>
  import particles from '../particles/particles.vue'
  import axios from 'axios'
  import * as api from './loginModel.js'
  import qs from 'qs'
  import debounce from 'lodash/debounce'
  import {SIGN_IN} from '../../common/vuex/actionTypes'
  import {SET_USER_INFO} from '../../common/vuex/mutationTypes'
  import menu from './menu.json'

  export default {
    data() {
      return {
        USER: {
          ID: -1,
          userName: "",
          CompanyID: 1,
          userPass: '',
          DepID: 1,
          Auths: "",//权限
          Login: "",
          token: '',//token
          currentMenuRouter: 'index',
        },
        //提示信息
        userError: "",
        ips: '',//IP
        refer: '',
        codeimg: '',
        //菜单
        nav_list: menu,
      }
    },
    mounted() {
      this.getUserIP(ip => {
        this.ips = ip
      })
      this.refreshCode();
    },
    computed: {
      //按钮是否可用
      sureEnable() {
        let flag = false;
        //页面加载完，在判断信息是否填写完毕
        if (this.USER.userName === "" || this.USER.userName === undefined) {
          return flag = true;
        }
        if (this.USER.userPass === "" || this.USER.userPass === undefined) {
          return flag = true;
        }
        return flag;
      }
    },
    beforeRouteEnter(to, from, next) {
      if (from.name == null) {
        //首次登录
        console.log("首次登陆beforeRouteEnter")
        next()
      } else {
        console.log("beforeRouteEnter")
        next(vm => {
          if (vm.$route.query.change == 'session') {
            vm.$message.error('长时间未操作，请重新登录')
          }
          if (vm.$route.query.change == 'other') {
            vm.$message.error('帐号在其他地方登录，请重新登录')
          }
          if (vm.$route.query.change == 'pers') {
            vm.$message.error('账号权限变更，请重新登录')
          }
          vm.refer = from.name
          vm.refer_full = from.fullPath
          vm.refer_query = from.query
        })
      }
    },
    methods: {
      // 获取ip
      getUserIP(onNewIP) {
        //  onNewIp - your listener function for new IPs
        //compatibility for firefox and chrome
        var myPeerConnection =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection
        var pc = new myPeerConnection({
            iceServers: []
          }),
          noop = function () {
          },
          localIPs = {},
          ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
          key

        function iterateIP(ip) {
          if (!localIPs[ip]) onNewIP(ip)
          localIPs[ip] = true
        }

        //create a bogus data channel
        pc.createDataChannel('')

        // create offer and set local description
        pc.createOffer()
          .then(function (sdp) {
            sdp.sdp.split('\n').forEach(function (line) {
              if (line.indexOf('candidate') < 0) return
              line.match(ipRegex).forEach(iterateIP)
            })

            pc.setLocalDescription(sdp, noop, noop)
          })
          .catch(function (reason) {
            // An error occurred, so handle the failure to connect
          })

        //sten for candidate events
        pc.onicecandidate = function (ice) {
          if (
            !ice ||
            !ice.candidate ||
            !ice.candidate.candidate ||
            !ice.candidate.candidate.match(ipRegex)
          )
            return
          ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
        }
      },
      // 刷新验证码
      refreshCode() {
        this.codeimg = BASE + '/loginInit/getCheckCode?random=' + Math.random()
      },
      keyDown(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          this.login();
        }
      },
      //判读各种不为空
      check() {
        let flag = true;
        if (this.USER.userName === "" || this.USER.userName === undefined) {
          this.userError = '用户名不能为空';
          return flag = false;
        }
        if (this.USER.userPass === "") {
          this.userError = '密码不能为空';
          return flag = false;
        }
        //密码各种验证
        //1密码长度要大于8位，由数字和字母组成
//                let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
//                //字数8位以上/不能为纯数字/纯字母 只能 1.数字+字母+字符 组合
//                if(!reg.test(this.USER.userPass)){
//                    this.userError = '密码格式不正确(字数8-16位,数字和字母组合)';
//                    return flag = false;
//                }

        return flag;
      },
      //登录
      login: debounce(function () {
        //暂时不调用接口
        this.getTreeMenu();
        /*
        if (!this.check()) {
          return;
        }
        //01登陆接口
        api.userLogin({
          userCode: this.USER.userName,
          passWord: this.USER.userPass,
          ip: this.ips,
          checkCode: ' ',
          userModelCode: "01",
          linkName: "",
        })
          .then(rs => {
            if (rs.resultCode === 'success') {
//              LocalStorage.set("JSESSIONID", data.JSESSIONID);
              //菜单权限
              this.getTreeMenu();

            } else {
              // this.loading = false
              console.log(rs.resultMessage)
            }
          })
          .catch(err => {
            //this.loading = false
            console.log('网络错误，请稍后重试')
          })
//02登陆接口--从参数上取
//        let params = {
//          userCode: this.USER.userName,
//          passWord: this.USER.userPass,
//          ip: this.ips,
//          checkCode: ' ',
//          userModelCode: "01",
//          linkName: "",
//        };
//        axios
//          .post(BASE + '/loginInit/userLogin',
//            qs.stringify(Object.assign({route: this.$router.history.current.name}, params), {depth: 10}))
//          .then(({data: rs}) => {
//            if (rs.resultCode === 'success') {
//              //菜单权限
//              this.getTreeMenu();
//
//            } else {
//              // this.loading = false
//              console.log(rs.resultMessage)
//            }
//          })
//          .catch(err => {
//            //this.loading = false
//            console.log('网络错误，请稍后重试')
//          })
        //03 formdata
//        let formdata = new FormData()
//        formdata.append('userCode', this.USER.userName)
//        formdata.append('passWord', this.USER.userPass)
//        formdata.append('ip', this.ips)
//        formdata.append('checkCode', "")
//        formdata.append('userModelCode', "01")
//        formdata.append('linkName', "")
//        axios
//          .post(BASE + '/loginInit/userLogin', formdata)
//          .then(({data: rs}) => {
//            if (rs.resultCode === 'success') {
//             //菜单权限
//              this.getTreeMenu();
//
//            } else {
//              console.log(rs.resultMessage)
//            }
//          })
//          .catch(err => {
//            console.log('网络错误，请稍后重试')
//          })
*/

      }, 300),
      //得到菜单权限
      getTreeMenu() {
        //权限
        this.USER.Auths = this.nav_list;
        //默认当前路由
        this.USER.currentMenuRouter = 'home';
        this.$store.dispatch(SIGN_IN, this.USER);
        this.$router.push({name: "home"})
//        api.getUserPermission()
//          .then(res => {
//            if (res.resultCode == 'success') {
//              var nav_list = res.resultData;//权限
//              this.USER.Auths = nav_list;
//              //默认当前路由
//              this.USER.currentMenuRouter = 'home';
//              this.$store.dispatch(SIGN_IN, this.USER);
//              this.$router.push({name: "home"})
//            }
//
//          })
//          .catch(err => {
//            console.log('网络错误，请稍后重试')
//          })

      }
    },
    components: {
      particles
    },
  }
</script>

<style type="text/css" lang="scss">
  @import "../../common/scss/index.scss";

  html, body, .login {
    height: 100%;
  }

  #login {
    background: url("./img/bg-login.jpg") center center no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;

    input[type="text"], input[type="password"] {
      font-size: 14px;
      height: 40px;
      width: 100%;
      background: #f1f4f7;
      /*color: #666;*/
      color: #333;
      box-sizing: border-box;
      outline: none;
      border: 1px solid #dae1e7;
      box-shadow: none;
      border-radius: $border-radius;
      text-indent: 3.35em;
      @include transition(.3s all);
      &:hover {
        border: 1px solid $um-blue;
      }
      &:focus {
        border: 1px solid $um-blue;
        //box-shadow: 0 3px 5px #e6f9f6;
      }
    }
    //logo
    .logomain {
      position: absolute;
      top: 8%;
      left: 5%;
      height: 40px;
      line-height: 40px;
      font-size: 32px;
      @include user-select(none);
      img {
        display: inline-block;
        height: 40px;
        position: relative;
        top: 4px;
        left: 8px;
      }
      span {
        color: #257bc0;
        text-shadow: 0 2px 8px rgba(136, 136, 136, 0.6);
      }
      span.orange {
        color: $um-orange;
      }

    }
    //登陆框
    .main {
      width: 380px;
      background: rgba($um-white, 0.8);
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      .loginmain {
        padding: 40px;
        margin: 0 auto;
        .login-title {
          font-size: 18px;
          color: $um-blue;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            top: 28px;
            left: 2px;
            width: 30px;
            height: 2px;
            font-weight: bold;
            background-color: $um-blue;
          }
        }
        .item {
          position: relative;
          width: 100%;
          //标题
          p.title {
            font-size: 26px;
            text-align: left;
            color: $um-white;
            //前面的竖线
            position: relative;
            padding-left: 20px;
            &:before {
              content: '';
              position: absolute;
              top: 5px;
              left: 0;
              width: 8px;
              height: 26px;
              font-weight: bold;
              background-color: $um-blue;
            }

          }
          //
          //用户
          .login-icon {
            position: absolute;
            top: 10px;
            left: 10px;
            display: inline-block;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 29px;
              width: 1px;
              height: 18px;
              font-weight: bold;
              background-color: #d6d6d6;
            }

          }
          .user-icon {
            background: url("img/user-icon.png") center center no-repeat;
            background-size: cover;
            width: 15px;
            height: 18px;
          }
          .pwd-icon {
            background: url("img/key-icon.png") center center no-repeat;
            background-size: cover;
            width: 19px;
            height: 18px;
          }

        }
        //错误提示
        .error {
          color: $um-error-red;
          text-align: right;
          margin-bottom: 5px;
          .icon-tishi {
            font-size: 16px;
          }
        }
        //记住密码
        .item-pwd {
          color: $color-gray-content;
        }
        //用户名和密码
        .item-user {
          position: relative;
          //用户
          .login-icon {
            position: absolute;
            top: 10px;
            left: 10px;
            display: inline-block;
          }
          .user-icon {
            background: url("img/user-icon.png") center center no-repeat;
            background-size: cover;
            width: 17px;
            height: 18px;
          }
          .pwd-icon {
            background: url("img/key-icon.png") center center no-repeat;
            background-size: cover;
            width: 17px;
            height: 18px;
          }

        }
        .checkbox {
          width: 14px;
          height: 14px;
          line-height: 14px;
          vertical-align: text-bottom;
          color: $um-blue;
          margin-right: 8px;

        }
        //忘记密码
        .item-fp {
          text-align: right;
          padding-right: 0;
        }

      }

      button {
        padding: 0;
        height: 40px;
        width: 300px;
        border-radius: 4px;
        border: 0;
        outline: none;
        cursor: pointer;
        transition: all 0.4s;
        line-height: 40px;
      }

      .sure {
        background-color: $um-blue;
        color: white;
        &:hover {
          background-color: $um-blue-hover;
        }
      }
      //按钮不可用
      .btnEnable {
        background-color: $btn-border;
        color: #666;
        &:hover {
          background-color: $btn-border;
        }
      }

    }
  }

</style>
