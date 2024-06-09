import { ApiProperty } from '@nestjs/swagger';

export class userResponseModel {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  maritalStatus: string;
  @ApiProperty()
  document: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  number: number;
  @ApiProperty()
  complement: string;
  @ApiProperty()
  neighborhood: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  state: string;
  @ApiProperty()
  cep: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  deletedAt: Date;
}
