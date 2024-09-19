import { Controller, Get } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}
    
    @Get()
    async getAllMovies() {
        return await this.UsersService.getAllUsers();
    }
    // constructor(private readonly em: EntityManager) {}

    // @Get()
    // async checkConnection() {
    //     try {
    //       // Intenta contar las entidades User en la base de datos
    //       const userCount = await this.em.count('Movie');
    //       return `Connected successfully! User count: ${userCount}`;
    //     } catch (error) {
    //       return `Error connecting to the database: ${error.message}`;
    //     }
    // }

}
