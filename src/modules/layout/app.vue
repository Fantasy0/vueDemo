<template>
  <div class='base-theme'>
    <div class="content-wrapper">
      <!--侧栏-->
      <!--<sidebar></sidebar>-->
      <!--top-->
      <NavHeader></NavHeader>
      <!--bottom-->
      <div class="content-r" style="min-height: 500px">
        <transition name="app" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
    import sidebar from './sidbar.vue'
    import NavHeader from './header.vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      sidebar,
      NavHeader
    }
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../../common/scss/index.scss";

  .app-enter-active, .app-leave-active {
    @include transition(all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0));
  }

  .app-enter {
    @include transform(translateX(calc(#{$sidebar-expanded-width} - 50vw)));
    opacity: 0;
  }

  .app-leave-to {
    @include transform(translateX(calc(50vw - #{$sidebar-expanded-width})));
    opacity: 0;
  }

  .content-wrapper {
    position: relative;
    height: 100vh;
    @include box-sizing();
    @include transition(.5s all);
    background: red;
    @include clearfix();
    min-width: 970px;


    //背景图片
    background: url("../login/img/bg.png") center center no-repeat;
    background-size: cover;
    height: 100%;
    overflow: auto;
    //展开折叠
    &.r-collapsed {
      //width: calc(100% - #{$sidebar-collapsed-width});
      width: 100%;
    }
    &.r-expanded {
      //width: calc(100% - #{$sidebar-expanded-width});
      width: 100%;
    }

    .content-r {
      padding: 20px 20px;
    }
  }

</style>
