import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { userCreateModel } from './models/userCreate.model';
import { userUpdateModel } from './models/userUpdate.model';
import { paginationRequest } from 'src/common/paginationRequest';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('auth')
  // async auth(@Body() request: signIn): Promise<any> {
  //   try {
  //     const auth = await this.userService.signIn(request);
  //   } catch (error) {
  //     return { statusCode: 401, message: 'Invalid credentials' };
  //   }
  // }
  @Post('create-user')
  async userCreate(@Body() request: userCreateModel): Promise<any> {
    try {
      const newUser = await this.userService.userCreate(request);
      return newUser;
    } catch (error) {
      return { statusCode: 400, message: 'The user could not be created.' };
    }
  }

  @Put('update-user/:id')
  async updateUser(@Param('id') id: string, @Body() request: userUpdateModel) {
    try {
      const updateUser = await this.userService.userUpdate(id, request);
      return updateUser;
    } catch (error) {
      return { statusCode: 400, message: 'The user could not be update.' };
    }
  }

  @Get(':id')
  async GetUser(@Param('id') id: string) {
    try {
      const user = await this.userService.getUser(id);
      return user;
    } catch (error) {
      return { statusCode: 400, message: 'The user not found' };
    }
  }

  @Get('listUser/')
  async listUser(@Param() request: paginationRequest) {
    try {
      const listUser = await this.userService.listUser(request);
      return listUser;
    } catch (error) {
      return { statusCode: 400, message: 'The user not found' };
    }
  }
}
