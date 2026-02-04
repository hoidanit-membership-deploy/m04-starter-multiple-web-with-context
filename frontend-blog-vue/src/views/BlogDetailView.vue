<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

const blog = ref(null)

onMounted(async () => {
  blog.value = await blogStore.getBlog(route.params.id)
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

const handleDelete = async () => {
  if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
    await blogStore.deleteBlog(blog.value.id)
    router.push('/')
  }
}
</script>

<template>
  <div v-if="blog">
    <div class="card" style="max-width: 900px; margin: 0 auto;">
      <div style="margin-bottom: 1.5rem;">
        <button @click="router.push('/')" class="btn btn-secondary">
          ← Quay lại
        </button>
      </div>

      <span class="blog-category">{{ blog.category || 'General' }}</span>

      <h1 style="font-size: 2.5rem; font-weight: 700; margin: 1rem 0; line-height: 1.3;">
        {{ blog.title }}
      </h1>

      <div style="display: flex; align-items: center; gap: 1rem; color: var(--text-light); margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border);">
        <span>👤 {{ blog.author || 'Anonymous' }}</span>
        <span>•</span>
        <span>📅 {{ formatDate(blog.createdAt) }}</span>
      </div>

      <div style="font-size: 1.1rem; line-height: 1.8; white-space: pre-wrap;">
        {{ blog.content }}
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
        <router-link :to="`/edit/${blog.id}`" class="btn btn-primary">
          ✏️ Chỉnh sửa
        </router-link>
        <button @click="handleDelete" class="btn btn-danger">
          🗑️ Xóa bài viết
        </button>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <div class="spinner"></div>
  </div>
</template>
