import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaygroundsController } from './playgrounds/playgrounds.controller';

@Module({
  imports: [],
  controllers: [AppController, PlaygroundsController],
  providers: [AppService],
})
export class AppModule {}
