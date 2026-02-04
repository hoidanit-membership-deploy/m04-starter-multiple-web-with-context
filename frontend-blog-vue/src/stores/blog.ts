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

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type { Blog, CreateBlogDto, UpdateBlogDto } from '@/types/blog'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const useBlogStore = defineStore('blog', () => {
  const blogs = ref<Blog[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const sortedBlogs = computed(() => {
    return [...blogs.value].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  })

  async function fetchBlogs(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`${API_URL}/blogs`)
      blogs.value = response.data.data || response.data
    } catch (err) {
      error.value = 'Không thể tải danh sách bài viết'
      console.error(err)
      blogs.value = getDemoBlogs()
    } finally {
      loading.value = false
    }
  }

  async function getBlog(id: string | number): Promise<Blog | undefined> {
    try {
      const response = await axios.get(`${API_URL}/blogs/${id}`)
      return response.data.data || response.data
    } catch (err) {
      return blogs.value.find(b => b.id == id) || getDemoBlogs().find(b => b.id == id)
    }
  }

  async function createBlog(blogData: CreateBlogDto): Promise<Blog> {
    loading.value = true
    try {
      const response = await axios.post(`${API_URL}/blogs`, blogData)
      const newBlog: Blog = response.data.data || response.data
      blogs.value.unshift(newBlog)
      return newBlog
    } catch (err) {
      const newBlog: Blog = {
        id: Date.now(),
        ...blogData,
        createdAt: new Date().toISOString()
      }
      blogs.value.unshift(newBlog)
      return newBlog
    } finally {
      loading.value = false
    }
  }

  async function updateBlog(id: string | number, blogData: UpdateBlogDto): Promise<Blog | undefined> {
    loading.value = true
    try {
      const response = await axios.patch(`${API_URL}/blogs/${id}`, blogData)
      const updatedBlog: Blog = response.data.data || response.data
      const index = blogs.value.findIndex(b => b.id == id)
      if (index !== -1) {
        blogs.value[index] = updatedBlog
      }
      return updatedBlog
    } catch (err) {
      const index = blogs.value.findIndex(b => b.id == id)
      if (index !== -1) {
        blogs.value[index] = { ...blogs.value[index], ...blogData }
        return blogs.value[index]
      }
    } finally {
      loading.value = false
    }
  }

  async function deleteBlog(id: string | number): Promise<void> {
    loading.value = true
    try {
      await axios.delete(`${API_URL}/blogs/${id}`)
      blogs.value = blogs.value.filter(b => b.id != id)
    } catch (err) {
      blogs.value = blogs.value.filter(b => b.id != id)
    } finally {
      loading.value = false
    }
  }

  function getDemoBlogs(): Blog[] {
    return [
      {
        id: 1,
        title: 'Khám phá Vue 3 Composition API',
        excerpt: 'Tìm hiểu cách sử dụng Composition API trong Vue 3 để xây dựng ứng dụng hiệu quả hơn.',
        content: 'Vue 3 mang đến Composition API - một cách tiếp cận mới để tổ chức code trong component. Thay vì sử dụng Options API truyền thống, Composition API cho phép bạn nhóm logic theo tính năng, giúp code dễ đọc và tái sử dụng hơn.\n\nVới setup() function hoặc <script setup>, bạn có thể sử dụng các reactive primitives như ref(), reactive(), computed(), và watch() để xây dựng logic component một cách linh hoạt.',
        category: 'Vue.js',
        author: 'Hỏi Dân IT',
        createdAt: '2026-01-15T10:00:00Z'
      },
      {
        id: 2,
        title: 'Docker cho người mới bắt đầu',
        excerpt: 'Hướng dẫn chi tiết cách sử dụng Docker để containerize ứng dụng của bạn.',
        content: 'Docker là công cụ tuyệt vời để đóng gói và triển khai ứng dụng. Bài viết này sẽ hướng dẫn bạn từ cơ bản đến nâng cao về Docker.\n\nChúng ta sẽ học cách viết Dockerfile, xây dựng images, chạy containers, và sử dụng Docker Compose để quản lý nhiều services.',
        category: 'DevOps',
        author: 'Hỏi Dân IT',
        createdAt: '2026-01-10T14:30:00Z'
      },
      {
        id: 3,
        title: 'Xây dựng REST API với NestJS',
        excerpt: 'Học cách xây dựng REST API chuyên nghiệp với NestJS framework.',
        content: 'NestJS là framework Node.js mạnh mẽ, lấy cảm hứng từ Angular. Nó cung cấp kiến trúc module rõ ràng, dependency injection, và nhiều tính năng enterprise-grade.\n\nTrong bài viết này, chúng ta sẽ xây dựng một REST API hoàn chỉnh với authentication, validation, và database integration.',
        category: 'Backend',
        author: 'Hỏi Dân IT',
        createdAt: '2026-01-05T09:15:00Z'
      }
    ]
  }

  return {
    blogs,
    loading,
    error,
    sortedBlogs,
    fetchBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
  }
})
