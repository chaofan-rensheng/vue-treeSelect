<template>
  <div class="use-select-tree">
    <select-tree
      :data="data"
      popper-class="tree-popper"
      ref="selectTree"
      clearable
      :multiple="false"
      >
    </select-tree>
  </div>
</template>

<script>
import SelectTree from '@/components/SelectTree'
export default {
  name: 'useSelectTree',
  components: {
    SelectTree
  },
  props: {

  },
  data () {
    return {
      value: null,
      data: [{
        label: '一级 1',
        id: '1',
        children: [{
          label: '二级 1-1',
          id: '1-1',
          children: [{
            label: '三级 1-1-1',
            id: '1-1-1'
          }]
        }]
      },
      {
        label: '一级 2',
        id: '2',
        children: [{
          label: '二级 2-1',
          id: '2-1',
          children: [{
            label: '三级 2-1-1',
            id: '2-1-1'
          }]
        }, {
          label: '二级 2-2',
          id: '2-2',
          children: [{
            label: '三级 2-2-1',
            id: '2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        id: '3',
        children: [{
          label: '二级 3-1',
          id: '3-1',
          children: [{
            label: '三级 3-1-1',
            id: '3-1-1'
          }]
        }, {
          label: '二级 3-2',
          id: '3-2',
          children: [{
            label: '三级 3-2-1',
            id: '3-2-1'
          }]
        }]
      }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>
  .use-select-tree{
    width: 300px;
    margin: 100px auto;
  }
  .el-select-dropdown__item {
    padding: 0;
    height: auto;
  }
</style>
