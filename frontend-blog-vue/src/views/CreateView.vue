<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const router = useRouter()
const blogStore = useBlogStore()

const form = ref({
  title: '',
  excerpt: '',
  content: '',
  category: 'General'
})

const categories = ['General', 'Vue.js', 'React', 'Angular', 'Backend', 'DevOps', 'Database', 'Mobile']

const handleSubmit = async () => {
  if (!form.value.title || !form.value.content) {
    alert('Vui lòng nhập tiêu đề và nội dung!')
    return
  }

  await blogStore.createBlog({
    ...form.value,
    author: 'Hỏi Dân IT'
  })

  router.push('/')
}
</script>

<template>
  <div>
    <div class="page-header">
      <div>
        <h1 class="page-title">✨ Viết bài mới</h1>
        <p class="page-subtitle">Chia sẻ kiến thức của bạn</p>
      </div>
    </div>

    <div class="card" style="max-width: 800px; margin: 0 auto;">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="form-label">Tiêu đề</label>
          <input
            v-model="form.title"
            type="text"
            class="form-input"
            placeholder="Nhập tiêu đề bài viết..."
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label">Danh mục</label>
          <select v-model="form.category" class="form-select">
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Mô tả ngắn</label>
          <input
            v-model="form.excerpt"
            type="text"
            class="form-input"
            placeholder="Mô tả ngắn gọn về bài viết..."
          />
        </div>

        <div class="form-group">
          <label class="form-label">Nội dung</label>
          <textarea
            v-model="form.content"
            class="form-textarea"
            placeholder="Viết nội dung bài viết của bạn..."
            required
          ></textarea>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button type="button" @click="router.push('/')" class="btn btn-secondary">
            Hủy
          </button>
          <button type="submit" class="btn btn-primary" :disabled="blogStore.loading">
            {{ blogStore.loading ? 'Đang lưu...' : '💾 Lưu bài viết' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
