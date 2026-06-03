import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // extendRoutes: (routes) => setupLayouts(routes)
  extendRoutes: (routes) => {
    return [
      ...setupLayouts([
        ...routes,
        {
          path: '/test/test',
          component: () => import('@/pages/test.vue')
        }
      ])
    ]
  }
})

export default router
