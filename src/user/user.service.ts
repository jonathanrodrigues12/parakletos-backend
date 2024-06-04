import { Injectable, NotFoundException } from '@nestjs/common';
import { signIn } from 'src/model/user/auth.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/util/util';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async signIn(request: signIn) {
    const password = await hashPassword(request.password);
    const checkEmail = this.prismaService.people.findUnique({
      where: {
        email: request.email,
        Login: {
          password: password,
        },
      },
    });
    if (!checkEmail) {
      throw new NotFoundException(`Invalid credentials First`);
    }
  }
}
