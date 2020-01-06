<template>
  <div class="side-menu">
    <!--一级-->
    <div class="side-menu-item side-menu-first">{{currentMenuObj.name}}</div>
    <!--二级-->
    <div class=" side-menu-item side-menu-two" :class="{secondactive: currentSecondMenuId===secondNav.id}"
         v-if="currentMenuObj.subclassList && currentMenuObj.subclassList.length>0"
         v-for="secondNav in currentMenuObj.subclassList" @click.stop="cutTwoNav(secondNav)">
      {{secondNav.name}}
    </div>
  </div>
</template>
<script type="text/babel">
  import {SIGN_IN, SIGN_OUT, SET_MENU} from '../../common/vuex/actionTypes'
  export default {
    data() {
      return {}
    },
    computed: {
      userName() {
        return this.$store.state.user.realName;
      },
      //一级菜单
      menuList() {
        return this.$store.state.user.Auths;
      },
      currentMenuObj() {
        return this.menuList.filter(item => item.id == this.currentFirstMenuId)[0];
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
    methods: {
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
    mounted() {
    },
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../../common/scss/index.scss";

  .side-menu {
    z-index: 100;
    position: absolute;
    top: 20%;
    left: 20px;
    border-radius: 5px;
    @include box-sizing();
    width: 100px;
    overflow: hidden;
    outline: none;
    background: rgba(226, 241, 255, 0.3);
    .side-menu-item {
      padding: 8px 12px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
    .side-menu-first {
      font-size: 16px;
      color: #f0ad2b;

    }
    .side-menu-two {
      cursor: pointer;
    }
    .secondactive {
      color: #1890ff;
    }
  }
</style>
