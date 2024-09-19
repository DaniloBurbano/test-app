import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { User } from './user.entity';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: EntityRepository<User>,
        private moviesService:MoviesService
    ) {}
    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async findUserMovies(userId: number){
        return await this.moviesService.findMoviesByUser(userId);
    }
}
