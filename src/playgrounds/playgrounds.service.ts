import { Injectable, NotFoundException } from '@nestjs/common';
import { Playground } from './entities/playgrounds.entity';

@Injectable()
export class PlaygroundsService {
  private readonly playgrounds: Playground[] = [
    {
      id: 1,
      name: 'Playground 1',
      description: 'This is playground 1',
      location: 'Location 1',
      players: [],
      availablePlaces: 10,
      playgroundType: 'Type 1',
      createdAt: new Date(),
      createdBy: null,
      date: new Date(),
      startTime: '10:00',
      endTime: '12:00',
    },
    {
      id: 2,
      name: 'Playground 2',
      description: 'This is playground 2',
      location: 'Location 2',
      players: [],
      availablePlaces: 10,
      playgroundType: 'Type 2',
      createdAt: new Date(),
      createdBy: null,
      date: new Date(),
      startTime: '14:00',
      endTime: '16:00',
    },
  ];

  findAll(): Playground[] {
    return this.playgrounds;
  }

  findOne(id: string): Playground {
    const playground = this.playgrounds.find(
      (playground) => playground.id === +id,
    );
    if (!playground) {
      throw new NotFoundException(`Playground with id ${id} not found`);
    }
    return playground;
  }

  create(createPlaygroundDto: any) {
    this.playgrounds.push(createPlaygroundDto);
    return createPlaygroundDto;
  }

  update(id: string, updatePlaygroundDto: any) {
    const index = this.playgrounds.findIndex(
      (playground) => playground.id === +id,
    );
    this.playgrounds[index] = updatePlaygroundDto;
  }

  remove(id: string) {
    const index = this.playgrounds.findIndex(
      (playground) => playground.id === +id,
    );
    this.playgrounds.splice(index, 1);
  }
}
