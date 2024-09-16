import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlaygroundsService } from './playgrounds.service';
import { CreatePlaygroundDto } from './dto/create-playground.dto';
import { UpdatePlaygroundDto } from './dto/update-playground.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('playgrounds')
export class PlaygroundsController {
  constructor(private readonly playgroundsService: PlaygroundsService) {}

  @Get()
  findALl(@Query() paginationQuery: PaginationQueryDto) {
    return this.playgroundsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playgroundsService.findOne(id);
  }

  @Post()
  create(@Body() createPlaygroundDto: CreatePlaygroundDto) {
    return this.playgroundsService.create(createPlaygroundDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaygroundDto: UpdatePlaygroundDto,
  ) {
    return this.playgroundsService.update(id, updatePlaygroundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playgroundsService.remove(id);
  }
}
