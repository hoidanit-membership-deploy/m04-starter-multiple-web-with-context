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

export interface Blog {
  id: number | string
  title: string
  excerpt?: string
  content: string
  category?: string
  author?: string
  createdAt: string
  updatedAt?: string
}

export interface CreateBlogDto {
  title: string
  excerpt?: string
  content: string
  category?: string
  author?: string
}

export interface UpdateBlogDto {
  title?: string
  excerpt?: string
  content?: string
  category?: string
}
