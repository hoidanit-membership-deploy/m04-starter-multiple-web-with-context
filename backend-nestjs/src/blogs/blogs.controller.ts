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

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) { }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    const blog = await this.blogsService.create(createBlogDto);
    return {
      statusCode: 201,
      message: 'Blog created successfully',
      data: blog,
    };
  }

  @Get()
  async findAll() {
    const blogs = await this.blogsService.findAll();
    return {
      statusCode: 200,
      message: 'Blogs fetched successfully',
      data: blogs,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const blog = await this.blogsService.findOne(id);
    return {
      statusCode: 200,
      message: 'Blog fetched successfully',
      data: blog,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    const blog = await this.blogsService.update(id, updateBlogDto);
    return {
      statusCode: 200,
      message: 'Blog updated successfully',
      data: blog,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.blogsService.remove(id);
    return {
      statusCode: 200,
      message: 'Blog deleted successfully',
    };
  }
}
