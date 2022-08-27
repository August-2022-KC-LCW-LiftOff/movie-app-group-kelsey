import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  constructor(private http: HttpClient) { }

  getTrendingMovies() {
    return this.http.get(' https://api.themoviedb.org/3/trending/movie/week?api_key=1f7e681b9c2246549159a83d86c95a41');
  }
}
