import { Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Controller } from '@nestjs/common';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/findAll')
  findAll() {
    return this.userService.findAll()
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}