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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

interface AppItem {
  icon: string;
  title: string;
  tech: string;
  techColor: string;
  description: string;
  gradient: string;
  link: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container navbar-content">
        <a href="#" class="logo">Hỏi Dân IT</a>
        <ul class="nav-links">
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#apps">Ứng dụng</a></li>
          <li><a href="#features">Tính năng</a></li>
          <li><a href="#tech">Công nghệ</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container hero-content">
        <div class="hero-badge">
          <span>🚀</span>
          <span>Deploy Siêu Tốc Course</span>
        </div>
        <h1 class="hero-title">
          Hệ Thống<br>
          <span>Web Applications</span>
        </h1>
        <p class="hero-subtitle">
          Khám phá các ứng dụng web được xây dựng với công nghệ hiện đại.
          Từ Blog, Portfolio đến Backend API - tất cả được triển khai
          với Docker và Caddy.
        </p>
        <div class="hero-buttons">
          <a href="#apps" class="btn btn-primary">
            Khám phá ngay
          </a>
          <a href="#features" class="btn btn-outline">
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>

    <!-- Apps Section -->
    <section id="apps" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Các <span>Ứng Dụng</span></h2>
          <p>Truy cập các ứng dụng trong hệ thống</p>
        </div>
        <div class="apps-grid">
          <a *ngFor="let app of apps" href="#" class="app-card">
            <div class="app-card-image" [style.background]="app.gradient">
              {{ app.icon }}
            </div>
            <div class="app-card-content">
              <div class="app-card-tech" [style.color]="app.techColor">
                {{ app.tech }}
              </div>
              <h3>{{ app.title }}</h3>
              <p>{{ app.description }}</p>
              <span class="app-card-link">
                Truy cập ngay →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section" style="background: rgba(99, 102, 241, 0.03)">
      <div class="container">
        <div class="section-header">
          <h2>Tính <span>Năng</span></h2>
          <p>Những điểm nổi bật của hệ thống</p>
        </div>
        <div class="features-grid">
          <div *ngFor="let feature of features" class="feature-card">
            <div class="feature-icon" [style.background]="feature.gradient">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Công <span>Nghệ</span></h2>
          <p>Các công nghệ được sử dụng trong dự án</p>
        </div>
        <div class="tech-stack">
          <div class="tech-item">
            <span>🅰️</span>
            <strong>Angular</strong>
          </div>
          <div class="tech-item">
            <span>💚</span>
            <strong>Vue.js</strong>
          </div>
          <div class="tech-item">
            <span>⚛️</span>
            <strong>React</strong>
          </div>
          <div class="tech-item">
            <span>🐱</span>
            <strong>NestJS</strong>
          </div>
          <div class="tech-item">
            <span>🐳</span>
            <strong>Docker</strong>
          </div>
          <div class="tech-item">
            <span>🔒</span>
            <strong>Caddy</strong>
          </div>
          <div class="tech-item">
            <span>🐘</span>
            <strong>PostgreSQL</strong>
          </div>
          <div class="tech-item">
            <span>📘</span>
            <strong>TypeScript</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; Hỏi Dân IT @hoidanit. All rights reserved.</p>
        <div class="footer-links">
          <a  target="_blank" href="https://hoidanit.vn">Website</a>
          <a target="_blank" href="https://youtube.com/@hoidanit">YouTube</a>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent {
  apps: AppItem[] = [
    {
      icon: '📝',
      title: 'Blog Platform',
      tech: 'Vue.js',
      techColor: '#42b883',
      description: 'Nền tảng blog với đầy đủ chức năng CRUD. Viết, chỉnh sửa và quản lý bài viết một cách dễ dàng.',
      gradient: 'linear-gradient(135deg, #42b883 0%, #35495e 100%)',
      link: environment.blogUrl
    },
    {
      icon: '👨‍💻',
      title: 'Portfolio / CV',
      tech: 'React',
      techColor: '#61dafb',
      description: 'Trang portfolio cá nhân hiện đại. Giới thiệu kỹ năng, dự án và thông tin liên hệ.',
      gradient: 'linear-gradient(135deg, #61dafb 0%, #764ba2 100%)',
      link: environment.cvUrl
    },
    {
      icon: '⚙️',
      title: 'Backend API',
      tech: 'NestJS',
      techColor: '#e0234e',
      description: 'RESTful API với NestJS. Xác thực JWT, CRUD operations và kết nối PostgreSQL.',
      gradient: 'linear-gradient(135deg, #e0234e 0%, #ff6b6b 100%)',
      link: environment.apiUrl + '/v1/health'
    }
  ];

  features: Feature[] = [
    {
      icon: '🐳',
      title: 'Docker Ready',
      description: 'Tất cả ứng dụng được container hóa với Docker, dễ dàng triển khai.',
      gradient: 'linear-gradient(135deg, #2496ed 0%, #1d8cf8 100%)'
    },
    {
      icon: '🔒',
      title: 'HTTPS với Caddy',
      description: 'Tự động SSL certificates với Caddy reverse proxy.',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #00b894 100%)'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Giao diện đẹp trên mọi thiết bị từ mobile đến desktop.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '⚡',
      title: 'Hiệu Suất Cao',
      description: 'Tối ưu hóa performance với lazy loading và code splitting.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];
}
