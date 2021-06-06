import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { Public } from "./auth/public";

@Controller()
export class AppController {
  constructor(private authServic: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login (@Request() req) {
    return this.authServic.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}