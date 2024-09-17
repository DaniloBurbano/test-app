import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService:MoviesService){}

  @Get()
  getAllMovies(){
    return this.moviesService.getAllMovies()
  }

  @Post()
  CreateMovie(@Body() newMovie:any){
    return this.moviesService.createMovie( 
      newMovie.title, 
      newMovie.genre,
      newMovie.release_date,
      newMovie.rating,
      newMovie.duration,
    )
  }

  @Delete(':id')
  deleteMovie(@Param('id') id:string){
    this.moviesService.deleteMovie(id)    
  }



}
