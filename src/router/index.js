import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import dressList from '@/components/dress/index'
import dressEdit from '@/components/dressedit/index'
import DressRoom from '@/components/dressroom/index'
import Performance from '@/components/performance/index'
import Order from '@/components/order/index'
import A from '@/components/a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/app/dress',
      name: 'dressList',
      component: dressList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/app/dress/edit',
      name: 'dressEdit',
      component: dressEdit,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/app/dress-room',
      name: 'DressRoom',
      component: DressRoom
    },
    {
      path: '/app/performance',
      name: 'Performance',
      component: Performance
    },
    {
      path: '/app/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/app/a',
      name: 'A',
      component: A
    }
  ]
})
