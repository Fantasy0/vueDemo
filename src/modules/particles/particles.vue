<template>

    <div id="particles"></div>

</template>

<script>
   require('particles.js')
  const particles = require('./particles.json');

  export default {
    data () {
      return {}
    },
    mounted(){
//        particlesJS.load('particles', particles); buhaoyong
      particlesJS('particles', particles)
    }
  }
</script>

<style type="text/css">
  #particles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*background-color: #f7fafc;*/
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    /*background-position: 50% 50%;*/
  }
</style>
