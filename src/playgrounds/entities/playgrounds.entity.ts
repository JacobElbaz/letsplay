import { User } from './users.entity';

export class Playground {
  id: number;
  name: string;
  location: string;
  description: string;
  players: User[];
  availablePlaces: number;
  playgroundType: string;
  createdAt: Date;
  createdBy: User;
  date: Date;
  startTime: string;
  endTime: string;
}
