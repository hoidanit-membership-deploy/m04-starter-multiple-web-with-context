<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const router = useRouter()
const route = useRoute()
const blogStore = useBlogStore()

const form = ref({
  title: '',
  excerpt: '',
  content: '',
  category: 'General'
})

const categories = ['General', 'Vue.js', 'React', 'Angular', 'Backend', 'DevOps', 'Database', 'Mobile']

onMounted(async () => {
  const blog = await blogStore.getBlog(route.params.id)
  if (blog) {
    form.value = {
      title: blog.title,
      excerpt: blog.excerpt || '',
      content: blog.content,
      category: blog.category || 'General'
    }
  }
})

const handleSubmit = async () => {
  if (!form.value.title || !form.value.content) {
    alert('Vui lòng nhập tiêu đề và nội dung!')
    return
  }

  await blogStore.updateBlog(route.params.id, form.value)
  router.push('/')
}
</script>

<template>
  <div>
    <div class="page-header">
      <div>
        <h1 class="page-title">✏️ Chỉnh sửa bài viết</h1>
        <p class="page-subtitle">Cập nhật nội dung bài viết</p>
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
            {{ blogStore.loading ? 'Đang lưu...' : '💾 Cập nhật' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
