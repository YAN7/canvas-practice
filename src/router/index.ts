// @ts-nocheck

import { createRouter, createWebHashHistory } from 'vue-router'

// 自动注入路由
const modules = import.meta.glob('../views/*.vue')
const autoRoutes = Object.entries(modules).map(([key, component]) => {
  // key 有几种情况:
  // 1. '../views/module/index.vue'
  // 2. '../views/module/xxx-xx.vue'
  // 3. '../views/xxx.vue'
  const path = key.replace('../views', '').replace('.vue', '')
  return {
    path,
    component
  }
})

const routes = autoRoutes

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
