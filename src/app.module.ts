import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaygroundsModule } from './playgrounds/playgrounds.module';

@Module({
  imports: [PlaygroundsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
