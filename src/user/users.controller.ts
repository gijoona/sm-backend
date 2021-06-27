import { Body, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService as UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { User } from './models/user.model';
import { Public } from 'src/auth/public';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Public()
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
  
  @Public()
  @Post('/create')
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Delete('/remove/:code')
  delete(@Param('code') code: string) {
    return this.usersService.delete(code);
  }

  @Get('/carts/:id')
  findCartAll(@Param('id') id: string, @Query('page') page: string, @Query('limit') limit: string) {
    return this.usersService.findCartAll(+page, +limit, id);
  }

  @Post('/carts/:id')
  findCart(@Param('id') id: string, @Body() param: any) {
    return this.usersService.findCart(+param.page, +param.limit, id, param.categorys, param.search);
  }
}