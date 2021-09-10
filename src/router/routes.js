const children = [
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/pages/exampleDemo/')
  }
]

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/pages/'),
    redirect: '/example',
    children: [...children]
  },
  {
    path: '/login',
    component: () => import('../views/login/')
  },
  {
    path: '/404',
    component: () => import('../components/404.vue')
  }
]

export { routes }
