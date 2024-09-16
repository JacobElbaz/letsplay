import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaygroundsModule } from './playgrounds/playgrounds.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [PlaygroundsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
