import dashboard from '@/components/learns/spring/common/DashboardSpring.vue'

const routes =  [
  {
    path: '/learn/spring',
    component: dashboard,
    children: [
      {
        path: '/learn/spring/overview',
        component: () => import(/* webpackChunkName: "Overview" */ '@/components/learns/spring/course/Overview.vue')
      },
      {
        path: '/learn/spring/messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../components/learns/spring/course/Messages.vue')
      }
    ]
  }
]

export default routes