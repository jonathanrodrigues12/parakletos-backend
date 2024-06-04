import { Controller, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { signIn } from 'src/model/user/auth.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  async auth(request: signIn) {
    try {
      const auth = await this.userService.signIn(request);
    } catch (error) {
      return { statusCode: 401, message: 'Invalid credentials' };
    }
  }
}
