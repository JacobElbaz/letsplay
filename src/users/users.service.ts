import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../playgrounds/entities/users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com',
      password: '123456',
      phone: '0550505050',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@gmail.com',
      password: '111111',
      phone: '0564978489',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === +id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  update(id: string, updateUserDto: any) {
    const index = this.users.findIndex((user) => user.id === +id);
    this.users[index] = updateUserDto;
  }

  remove(id: string) {
    const index = this.users.findIndex((user) => user.id === +id);
    this.users.splice(index, 1);
  }
}
