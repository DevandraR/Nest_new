import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

@Controller('tweets')
export class TweetsController {
  constructor() {}

  @Get()
  findAll(): string {
    return 'This action returns all tweets';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} tweet`;
  }

  @Post()
  create(@Body() tweet: any): string {
    return 'This action adds a new tweet';
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} tweet`;
  }
}