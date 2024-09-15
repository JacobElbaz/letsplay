import { User } from 'src/playgrounds/entities/users.entity';
import { IsString } from 'class-validator';

export class CreatePlaygroundDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly location: string;
  @IsString()
  readonly description?: string;
  readonly availablePlaces: number;
  @IsString()
  readonly playgroundType: string;
  readonly createdAt: Date;
  readonly createdBy: User;
  readonly date: Date;
  @IsString()
  readonly startTime: string;
  @IsString()
  readonly endTime: string;
}
