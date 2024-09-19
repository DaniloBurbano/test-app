import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]),
    MoviesModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
