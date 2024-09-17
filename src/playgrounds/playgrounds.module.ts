import { Module } from '@nestjs/common';
import { PlaygroundsController } from './playgrounds.controller';
import { PlaygroundsService } from './playgrounds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Playground, PlaygroundSchema } from './entities/playgrounds.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Playground.name,
        schema: PlaygroundSchema,
      },
    ]),
  ],
  controllers: [PlaygroundsController],
  providers: [PlaygroundsService],
  exports: [PlaygroundsService],
})
export class PlaygroundsModule {}
