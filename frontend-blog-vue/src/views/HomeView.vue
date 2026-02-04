<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '../stores/blog'
import { RouterLink } from 'vue-router'

const blogStore = useBlogStore()

onMounted(() => {
  blogStore.fetchBlogs()
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const handleDelete = async (id) => {
  if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
    await blogStore.deleteBlog(id)
  }
}
</script>

<template>
  <div>
    <div class="page-header">
      <div>
        <h1 class="page-title">📝 Danh sách Blog</h1>
        <p class="page-subtitle">Khám phá các bài viết mới nhất</p>
      </div>
      <RouterLink to="/create" class="btn btn-primary">
        ✨ Viết bài mới
      </RouterLink>
    </div>

    <div v-if="blogStore.loading" class="loading">
      <div class="spinner"></div>
    </div>

    <div v-else-if="blogStore.sortedBlogs.length === 0" class="empty-state">
      <div class="empty-icon">📭</div>
      <h3 class="empty-title">Chưa có bài viết nào</h3>
      <p class="empty-text">Hãy tạo bài viết đầu tiên của bạn!</p>
      <RouterLink to="/create" class="btn btn-primary">
        Viết bài ngay
      </RouterLink>
    </div>

    <div v-else class="blog-grid">
      <article v-for="blog in blogStore.sortedBlogs" :key="blog.id" class="blog-card">
        <div class="blog-image">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 3rem;">
            📄
          </div>
        </div>
        <div class="blog-content">
          <span class="blog-category">{{ blog.category || 'General' }}</span>
          <h2 class="blog-title">
            <RouterLink :to="`/blog/${blog.id}`" style="color: inherit; text-decoration: none;">
              {{ blog.title }}
            </RouterLink>
          </h2>
          <p class="blog-excerpt">{{ blog.excerpt || blog.content?.substring(0, 120) + '...' }}</p>
          <div class="blog-meta">
            <span class="blog-date">📅 {{ formatDate(blog.createdAt) }}</span>
            <div class="blog-actions">
              <RouterLink :to="`/edit/${blog.id}`" class="btn btn-secondary btn-sm">
                ✏️ Sửa
              </RouterLink>
              <button @click="handleDelete(blog.id)" class="btn btn-danger btn-sm">
                🗑️ Xóa
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
