import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { signIn } from 'src/model/user/auth.model';
import { promises } from 'dns';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async auth(@Body() request: signIn): Promise<any> {
    try {
      const auth = await this.userService.signIn(request);
    } catch (error) {
      return { statusCode: 401, message: 'Invalid credentials' };
    }
  }
}
