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
        path: '/learn/spring/modules',
        component: () => import('@/components/learns/spring/course/Modules.vue')
      },
      {
        path: '/learn/spring/mvc',
        component: () => import('../components/learns/spring/course/MVC.vue')
      },
      {
        path: '/learn/spring/annotation',
        component: () => import('../components/learns/spring/course/Annotation.vue')
      }
    ]
  }
]

export default routes