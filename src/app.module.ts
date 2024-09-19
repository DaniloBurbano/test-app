import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { defineConfig } from '@mikro-orm/postgresql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/movies.entity';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(defineConfig({
      host: 'localhost',
      port: 5432,
      user: 'admin',
      password: 'admin',
      dbName: 'movies',
      entities: [Movie, User],
      debug: true,
      migrations: {
        path: './migrations',
        glob: '!(*.d).{js,ts}',
      },
    })),

    MoviesModule,

    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
