import DashboardVue from '@/components/learns/vuejs/common/DashboardVue.vue'

const routes =  [
  {
    path: '/learn/vuejs',
    component: DashboardVue,
    children: [
      {
        path: '/learn/vuejs/',
        component: () => import('@/components/learns/vuejs/course/OverviewVue.vue')
      },
      {
        path: '/learn/vuejs/directive',
        component: () => import('@/components/learns/vuejs/course/Directive.vue')
      },
      {
        path: '/learn/vuejs/computed',
        component: () => import('@/components/learns/vuejs/course/Computed.vue')
      }
    ]
  }
]

export default routes