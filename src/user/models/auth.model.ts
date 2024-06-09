import { ApiProperty } from '@nestjs/swagger';
export class signIn {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
