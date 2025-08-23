import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/Home.tsx'),
  },
  {
    path: '/about',
    component: () => import('./pages/About.tsx'),
  },
  {
    path: '/blog',
    component: () => import('./pages/Blog.tsx'),
  },
]

export default routes