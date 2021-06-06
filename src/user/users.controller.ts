import { Body, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService as UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { User } from './models/user.model';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/find')
  findAll(@Query('page') page: string, @Query('limit') limit: string, @Query('search') search?: string) {
    return this.usersService.find(+page, +limit, search);
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('/save')
  save(@Body() user: User) {
    return this.usersService.save(user);
  }

  @Delete('/remove/:id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}