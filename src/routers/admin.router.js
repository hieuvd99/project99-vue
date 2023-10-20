import BoardAdmin from '@/components/admin/BoardAdmin.vue'

const routes =  [
  {
    path: '/admin',
    component: BoardAdmin,
    children: [
      {
        path: '/admin/all-user',
        component: () => import('@/components/admin/AllUser.vue')
      },
      {
        path: '/admin/user/:id',
        component: () => import('@/components/admin/UserInfo.vue')
      }
    ]
  }
]

export default routes