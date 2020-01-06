<template>
  <div class="mytree">
    <div
      class="parent"
      v-for="item in list"
      :key="item.id">
      <span :class="[item.spread? 'arrow-down':'arrow-up',arrow]" @click="item.spread=!item.spread"
            v-if="item.children"></span>
      <span @click.stop="selectItem(item)">{{ item.title }}</span>
      <div v-if="item.children" class="children-item" v-show="item.spread">
        <my-tree :list="item.children" @selectItem="selectItem($event)"></my-tree>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyTree',
    props: {
      list: Array
    },
    data() {
      return {
        arrow: 'arrow'
      }
    },
    computed: {},
    methods: {
      selectItem(item) {
        this.$emit('selectItem', item)
      }
    },
    components: {}
  }
</script>

<style type="text/css" lang="scss">
  .mytree {
    .parent, .children-item {
      line-height: 30px;
      font-size: 13px;
    }

    .parent span {
      cursor: pointer;
    }

    .arrow {
      position: relative;
      top: -3px;
      display: inline-block;
      cursor: pointer;

    }
    .arrow-up {
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #105eb6;
    }

    .arrow-down {
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #105eb6;
    }

    .children-item {
      padding-left: 25px;
    }
  }
</style>
