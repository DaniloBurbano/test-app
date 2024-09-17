import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';

import * as fs from 'fs';
const moviesPath = "D:/test-app/src/data/movies.json";

@Injectable()
export class MoviesService {
  private movies: Movie[] = JSON.parse(fs.readFileSync(moviesPath, "utf-8"));

  getAllMovies(){
    return this.movies
  }

  createMovie(title:string, genre:string, release_date:string, rating:number, duration:number){
    const movie = {
      id: (this.movies.length + 1).toString(),
      title,
      genre,
      release_date,
      rating,
      duration
    }
    this.movies.push(movie);
    return movie;
  }

  updateMovie(){}

  deleteMovie(id:string){
    this.movies = this.movies.filter(movie => movie.id.toString() !== id.toString());
    //fs.writeFileSync(moviesPath, JSON.stringify(this.movies, null, "  "));
  }
}
