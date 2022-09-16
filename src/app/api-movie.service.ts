import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  constructor(private http: HttpClient) { }

  getTrendingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${env.tmdb_api_key}`);
  }

  getUpcomingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${env.tmdb_api_key}&language=en-US&page=1&region=US`)
  }

  
}
