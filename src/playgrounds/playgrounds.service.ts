import { Injectable, NotFoundException } from '@nestjs/common';
import { Playground } from './entities/playgrounds.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlaygroundDto } from './dto/create-playground.dto';
import { UpdatePlaygroundDto } from './dto/update-playground.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class PlaygroundsService {
  constructor(
    @InjectModel(Playground.name)
    private readonly playgroundModel: Model<Playground>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.playgroundModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const playground = await this.playgroundModel.findOne({ _id: id }).exec();
    if (!playground) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return playground;
  }

  create(createPlaygroundDto: CreatePlaygroundDto) {
    const playground = new this.playgroundModel(createPlaygroundDto);
    return playground.save();
  }

  async update(id: string, updatePlaygroundDto: UpdatePlaygroundDto) {
    const existingPlayground = await this.playgroundModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updatePlaygroundDto },
        { new: true },
      )
      .exec();
    if (!existingPlayground) {
      throw new NotFoundException(`Playground with id ${id} not found`);
    }
    return existingPlayground;
  }

  async remove(id: string) {
    const playground = await this.playgroundModel.findOneAndDelete({ _id: id });
    if (!playground) {
      throw new NotFoundException(`Playground with id ${id} not found`);
    }
    return playground;
  }
}
