import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '../container/index'
import Canvas from '../container/Mycanvas'
import stepOne from '../container/stepOne'
import stepTwo from '../container/stepTwo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: Canvas
    },
    {
      path: '/stepOne',
      name: 'stepOne',
      component: stepOne
    },
    {
      path: '/stepTwo',
      name: 'stepTwo',
      component: stepTwo
    }
  ]
})
