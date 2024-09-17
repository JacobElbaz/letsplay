import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePlaygroundDto {
  @ApiProperty({
    description: 'The playground name',
    example: 'Football at night',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The playground location',
    example: 'Paris',
  })
  @IsString()
  readonly location: string;

  @ApiProperty({
    description: 'The number of players',
    example: 10,
  })
  @IsNumber()
  @IsPositive()
  readonly numberOfPlayers: number;

  @ApiProperty({
    description: 'The ids of users who subscribed to this playground',
    example: ['1'],
  })
  @IsArray()
  readonly players: string[];

  @ApiProperty({
    description: 'The playground type',
    example: 'Football',
  })
  @IsString()
  readonly playgroundType: string;

  @ApiProperty({
    description: 'The id of who created the playground',
    example: '1',
  })
  @IsString()
  readonly createdBy: string;

  @ApiProperty({
    description: 'The date of the game',
    example: '2021-09-22',
  })
  @IsString()
  readonly date: string;

  @ApiProperty({
    description: 'The start time of the game',
    example: '20:00',
  })
  @IsString()
  readonly startTime: string;

  @ApiProperty({
    description: 'The duration of the playground in minutes',
    example: 90,
  })
  @IsNumber()
  @IsPositive()
  readonly duration: number;

  @ApiProperty({ description: 'Commentaires du playground', type: [Object] })
  comments: { text: string; createdBy: string; createdAt: Date }[];
}
