import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HostingService } from './hosting.service';
import { Movie, MovieInfo } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl: string = '';
  constructor(private http: HttpClient, private _hosting: HostingService) {
    _hosting.hostSubject.subscribe(host => {
      this.apiUrl = this._hosting.buildUrl('player_api.php');
    });
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}&action=get_vod_categories`);
  }
  getMovies(categoryId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}&action=get_vod_streams&category_id=${categoryId}`);
  }
  getMovieInfo(movieId: number): Observable<MovieInfo> {
    return this.http.get<MovieInfo>(`${this.apiUrl}&action=get_vod_info&vod_id=${movieId}`);
  }
  getMovieSourceBase(): string {
    return this._hosting.getSourceBase('movie');
  }
  getMovieLink(streamId: number, extension: string) {
    return `${this.getMovieSourceBase()}/${streamId}.${extension}`
  }
}
