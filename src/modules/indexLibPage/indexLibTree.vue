<template>
  <div id="indexLibTree">
    <div class="query">
      <input type="text" class="ipt" v-model="ipt">
      <div class="query-content" v-show="ipt.length">
        <div v-for="item in queryDt" class="query-item" @click="handleItemClick(item)">
          {{ item.title }}
        </div>
      </div>
    </div>
    <transition name="tree" mode="out-in">
      <my-tree :list="dt" @selectItem="selectItem($event)"></my-tree>
    </transition>
  </div>
</template>

<script>
  import MyTree from './components/MyTree'

  export default {
    data() {
      return {
        ipt: '',
        queryDt: [],
        allParent: [],
        //tree
        dt: [
          {
            id: 1,
            title: '山东省',
            spread: false,
            children: [
              {
                id: 11,
                title: '青岛市',
                spread: false,
                children: [
                  {
                    id: 111,
                    title: '平度',
                    spread: false,
                    children: [
                      {
                        id: 1111,
                        title: '白沙河',
                        spread: false
                      },
                      {
                        id: 1112,
                        title: '张戈庄'
                      }
                    ]
                  },
                  {
                    id: 112,
                    title: '市南'
                  }
                ]
              },
              {
                id: 12,
                title: '济南市',
                spread: false,
                children: [
                  {
                    id: 121,
                    title: '历下区'
                  },
                  {
                    id: 122,
                    title: '章丘市'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: '河北省',
            spread: false,
            children: [
              {id: 21, title: '廊坊'},
              {id: 22, title: '唐山'}
            ]
          },
          {
            id: 3, title: '宇宙', spread: false,
            children: [
              {
                id: 31, title: '亚洲', spread: false,
                children: [
                  {
                    id: 311, title: '中国', spread: false,
                    children: [
                      {
                        id: 3111, title: '山东省', spread: false,
                        children: [
                          {id: 31111, title: '青岛市', spread: false,},
                          {id: 31112, title: '济南市', spread: false,}
                        ]
                      },
                    ]
                  },
                  {id: 312, title: '俄罗斯', spread: false,}
                ]
              },
              {id: 32, title: '北美'}
            ]
          },
        ]
      }
    },
    methods: {
      selectItem(item) {
        console.log(item)
      },
      search: function (dt) {
        for (let i = 0; i < dt.length; i++) {
          let obj = dt[i]
          if (obj.title.indexOf(this.ipt) > -1) {
            this.queryDt.push(obj)
          }
          else {
            if (obj.children) {
              this.search(obj.children)
            }
          }
        }
      },
      handleItemClick: function (item) {

        let rs = this.findPathByLeafId(item.id, this.dt);
        this.ipt = ''
        rs.forEach(function (item) {
          item.spread = true
        })

      },
      //递归实现
      //@leafId  为你要查找的id，
      //@nodes   为原始Json数据
      //@path    供递归使用，不要赋值
      findPathByLeafId: function (leafId, nodes, path) {
        if (path === undefined) {
          path = [];
        }
        for (var i = 0; i < nodes.length; i++) {
          var tmpPath = path.concat();
          tmpPath.push(nodes[i]);
          if (leafId == nodes[i].id) {
            return tmpPath;
          }
          if (nodes[i].children) {
            var findResult = this.findPathByLeafId(leafId, nodes[i].children, tmpPath);
            if (findResult) {
              return findResult;
            }
          }
        }
      }
    },
    watch: {
      ipt() {
        this.queryDt.length = 0
        if (this.ipt.length > 0) {
          this.search(this.dt)
        }

      }
    },
    components: {
      MyTree
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss">
  #indexLibTree {
    .tree-enter, .tree-leave-to {
      opacity: 0;
    }
    .tree-enter-active, .tree-leave-active {
      transition: opacity .5s;
    }
    .query {
      position: relative;
    }
    .query .query-content {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 27px;
      width: 212px;
      height: 200px;
      border: 1px solid red;
      background-color: rgb(18, 55, 97);
    }
    .query .ipt {
      width: 200px;
      line-height: 25px;
      padding: 0 5px;
    }
    .query .btn {
      height: 27px;
    }
    .query-item {
      cursor: pointer;
      font-size: 13px;
      line-height: 25px;
      box-sizing: border-box;
      padding-left: 5px;
    }
    .query-item:hover {
      background-color: #eee;
    }
  }

</style>
