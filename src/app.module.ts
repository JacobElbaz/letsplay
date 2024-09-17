import { Module } from '@nestjs/common';
import { PlaygroundsModule } from './playgrounds/playgrounds.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/users.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [
    PlaygroundsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
    AuthModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
