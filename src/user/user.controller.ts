import { Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Controller } from '@nestjs/common';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/find')
  findAll(@Query('page') page: string, @Query('limit') limit: string, @Query('search') search?: string) {
    return this.userService.find(+page, +limit, search);
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}