import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PlaygroundsService } from './playgrounds.service';
import { CreatePlaygroundDto } from './dto/create-playground.dto';
import { UpdatePlaygroundDto } from './dto/update-playground.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Playground } from './entities/playgrounds.entity';

@ApiBearerAuth()
@ApiTags('playgrounds')
@Controller('playgrounds')
export class PlaygroundsController {
  constructor(private readonly playgroundsService: PlaygroundsService) {}

  @Get()
  @ApiOkResponse({ type: Playground, isArray: true })
  findALl(@Query() paginationQuery: PaginationQueryDto) {
    return this.playgroundsService.findAll(paginationQuery);
  }

  @Get(':id')
  @ApiOkResponse({ type: Playground })
  findOne(@Param('id') id: string) {
    return this.playgroundsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: Playground })
  create(@Body() createPlaygroundDto: CreatePlaygroundDto) {
    return this.playgroundsService.create(createPlaygroundDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Playground })
  update(
    @Param('id') id: string,
    @Body() updatePlaygroundDto: UpdatePlaygroundDto,
  ) {
    return this.playgroundsService.update(id, updatePlaygroundDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playgroundsService.remove(id);
  }
}
