import Vue from 'vue'
import Router from 'vue-router'
import useSelectTree from '@/views/useSelectTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'useSelectTree',
      component: useSelectTree
    }
  ]
})
