import DashboardBlog from '@/components/learns/blog/common/DashboardBlog.vue'

const routes =  [
  {
    path: '/learn/blog',
    component: DashboardBlog,
    children: [
      {
        path: '/learn/blog',
        component: () => import('@/components/learns/blog/course/OverviewBlog.vue')
      },
      {
        path: '/learn/blog/microservice',
        component: () => import('@/components/learns/blog/course/Microservice.vue')
      },
      {
        path: '/learn/blog/docker',
        component: () => import('@/components/learns/blog/course/Docker.vue')
      }
    ]
  }
]

export default routes