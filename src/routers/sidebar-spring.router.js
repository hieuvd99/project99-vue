import DashboardSpring from '@/components/learns/spring/common/DashboardSpring.vue'

const routes =  [
  {
    path: '/learn/spring/',
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
      ,
      {
        path: '/learn/spring/spring-jpa',
        component: () => import('../components/learns/spring/course/SpringJPA.vue')
      }
      ,
      {
        path: '/learn/spring/relationship',
        component: () => import('../components/learns/spring/course/Relationship.vue')
      },
      {
        path: '/learn/spring/pageable',
        component: () => import('../components/learns/spring/course/Pageable.vue')
      },
      {
        path: '/learn/spring/spring-security',
        component: () => import('../components/learns/spring/course/SpringSecurity.vue')
      }
    ]
  }
]

export default routes