import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { Public } from "src/auth/public";
import { CompsService } from "./comps.service";
import { Company } from "./models/comp.model";

@Controller('comps')
export class CompsController {
  constructor(private compsService: CompsService) {}

  @Public()
  @Get('/findCmpNo/:cmpNo')
  findCmpNo(@Param('cmpNo') cmpNo: string) {
    return this.compsService.findCmpNo(cmpNo);
  }

  @Public()
  @Post('/save')
  save(@Body() company: Company) {
    return this.compsService.save(company);
  }

  @Patch('/update')
  update(@Body() company: Company) {
    return this.compsService.update(company);
  }
}