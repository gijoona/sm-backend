import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Public } from "src/auth/public";
import { CategoryService } from "./category.service";
import { Category } from "./models/category.model";

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Public()
  @Get('/findAll')
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('/findCompanyList/:code')
  findCompanyList(@Param('code') code: string) {
    return this.categoryService.findCompanyList(code);
  }

  @Post('/add')
  create(@Body() category: Category) {
    return this.categoryService.create(category);
  }

  @Post('/add/list')
  createList(@Body() categorys: Category[]) {
    return this.categoryService.createList(categorys);
  }

  @Patch('/modify')
  update(@Body() category: Category) {
    return this.categoryService.update(category);
  }

  @Delete('/remove/:code')
  delete(@Param('code') code: string) {
    return this.categoryService.delete(code);
  }

}