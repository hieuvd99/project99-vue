import DashboardSpring from '@/components/learns/spring/common/DashboardSpring.vue'

const routes =  [
  {
    path: '/learn/spring',
    component: DashboardSpring,
    children: [
      {
        path: '/learn/spring/',
        component: () => import('@/components/learns/spring/course/OverviewSpring.vue')
      },
      {
        path: '/learn/spring/messages',
        component: () => import('../components/learns/spring/course/Messages.vue')
      },
      {
        path: '/learn/spring/messages',
        component: () => import('../components/learns/spring/course/Messages.vue')
      }
    ]
  }
]

export default routes