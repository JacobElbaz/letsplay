import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaygroundsModule } from '../playgrounds/playgrounds.module';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import {
  Playground,
  PlaygroundSchema,
} from '../playgrounds/entities/playgrounds.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Playground.name, schema: PlaygroundSchema },
    ]),
    PlaygroundsModule, // Importer le module des playgrounds pour utiliser PlaygroundsService
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
