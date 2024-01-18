import DashboardJava from '@/components/learns/java/common/DashboardJava.vue'

const routes =  [
  {
    path: '/learn/java/',
    component: DashboardJava,
    children: [
      {
        path: '/learn/java/',
        component: () => import('@/components/learns/java/course/OverviewJava.vue')
      },
      {
        path: '/learn/java/java-basic/',
        component: () => import('@/components/learns/java/course/JavaBasic.vue')
      },
      {
        path: '/learn/java/design-pattern/',
        component: () => import('@/components/learns/java/course/DesignPattern.vue')
      },
      {
        path: '/learn/java/java8-lambda-expressions/',
        component: () => import('@/components/learns/java/course/Java8LambdaExpressions.vue')
      }
    ]
  }
]

export default routes