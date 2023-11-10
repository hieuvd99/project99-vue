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
    ]
  }
]

export default routes