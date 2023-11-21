import DashboardSql from '@/components/learns/sql/common/DashboardSql.vue'

const routes =  [
  {
    path: '/learn/sql',
    component: DashboardSql,
    children: [
      {
        path: '/learn/sql/',
        component: () => import('@/components/learns/sql/course/OverviewSql.vue')
      },
      {
        path: '/learn/sql/joines',
        component: () => import('@/components/learns/sql/course/Joines.vue')
      }
    ]
  }
]

export default routes