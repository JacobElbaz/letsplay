import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    description: 'The user email',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'The user password',
  })
  @IsString()
  readonly password: string;
}
