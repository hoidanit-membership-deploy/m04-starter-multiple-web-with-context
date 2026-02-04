/*
 * Author: Hỏi Dân IT - @hoidanit
 *
 * This source code is developed for the course
 * "Deploy Siêu Tốc".
 * It is intended for educational purposes only.
 * Unauthorized distribution, reproduction, or modification is strictly prohibited.
 *
 * Copyright (c) 2026 Hỏi Dân IT. All Rights Reserved.
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/CreateView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/EditView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('@/views/BlogDetailView.vue')
    }
  ]
})

export default router
