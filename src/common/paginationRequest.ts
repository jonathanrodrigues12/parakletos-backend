import { ApiProperty } from '@nestjs/swagger';

export class paginationRequest {
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  currentPage: number;
}
