<template>
  <div>
    随机颜色值:{{color}}
    <div :style="{'background': color}">我是带颜色的</div>
  </div>
</template>

<script>
  import {getRandomColor} from '../../common/utils/colorUtils'

  export default {
    data() {
      return {
        color: '',
      }
    },
    mounted() {
      this.color = getRandomColor();
    },
    methods: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss">

</style>
