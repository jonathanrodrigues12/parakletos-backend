import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/util/util';
import { userCreateModel } from './models/userCreate.model';
import { signIn } from './models/auth.model';
import { userUpdateModel } from './models/userUpdate.model';
import { promises } from 'dns';
import { userResponseModel } from './models/userResponse.model';
import { paginationRequest } from 'src/common/paginationRequest';

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

  async userCreate(request: userCreateModel): Promise<userCreateModel> {
    const newUser = await this.prismaService.people.create({
      data: {
        name: request.name,
        lastName: request.lastName,
        gender: request.gender,
        email: request.email,
        address: request.address,
        complement: request.complement,
        cep: request.cep,
        city: request.city,
        dob: request.dob,
        document: request.document,
        maritalStatus: request.maritalStatus,
        neighborhood: request.neighborhood,
        number: request.number,
        phone: request.phone,
        photo: request.photo,
        state: request.state,
      },
    });

    return newUser;
  }
  async userUpdate(
    id: string,
    request: userUpdateModel,
  ): Promise<userUpdateModel> {
    const updateUser = await this.prismaService.people.update({
      where: { id: id },
      data: {
        name: request.name,
        lastName: request.lastName,
        gender: request.gender,
        email: request.email,
        address: request.address,
        complement: request.complement,
        cep: request.cep,
        city: request.city,
        dob: request.dob,
        maritalStatus: request.maritalStatus,
        neighborhood: request.neighborhood,
        number: request.number,
        phone: request.phone,
        photo: request.photo,
        state: request.state,
      },
    });
    return updateUser;
  }

  async getUser(id: string): Promise<userResponseModel> {
    const user = await this.prismaService.people.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  }

  async listUser(request: paginationRequest): Promise<userResponseModel[]> {
    const skip = (request.currentPage - 1) * request.pageSize;
    const listUser = await this.prismaService.people.findMany({
      skip: skip,
      take: request.pageSize,
    });
    return listUser;
  }
}
