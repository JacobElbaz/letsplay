import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The user name', example: 'John Doe' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'johndoe@mail.com', description: 'The user email' })
  @IsString()
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'The user password' })
  @IsString()
  readonly password: string;

  @ApiProperty({ example: '0801234567', description: 'The user phone number' })
  @IsString()
  readonly phone: string;
}
