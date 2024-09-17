import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CommentDto {
  @ApiProperty({
    description: 'The comment text',
    example: 'This is a comment',
  })
  @IsString()
  text: string;

  @ApiProperty({
    description: 'The id of who created the comment',
    example: '1',
  })
  @IsString()
  createdBy: string;
}
