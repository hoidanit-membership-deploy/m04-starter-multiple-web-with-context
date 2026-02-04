<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <RouterLink to="/" class="logo">
        <div class="logo-icon">B</div>
        <span>BlogVue</span>
      </RouterLink>
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Trang chủ</RouterLink>
        <RouterLink to="/create" class="nav-link">Viết bài</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>
