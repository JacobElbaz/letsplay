import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreatePlaygroundDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly location: string;
  @IsNumber()
  readonly numberOfPlayers: number;
  @IsArray()
  readonly players: string[];
  @IsString()
  readonly playgroundType: string;
  @IsString()
  readonly createdBy: string;
  @IsString()
  readonly date: string;
  @IsString()
  readonly startTime: string;
  @IsNumber()
  readonly duration: number;
}
