import { Injectable } from "@nestjs/common";
import { UsersService } from "src/user/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.pass === pass) {
      const { pass, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
     const payload = { username: user.name, sub: user.id };
     const { code, name, email, tel, fax, phone, id } = user.dataValues;
    return {
       user: { code, name, email, tel, fax, phone, id },
      access_token: this.jwtService.sign(payload)
    }
  }
}