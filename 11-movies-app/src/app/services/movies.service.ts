import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  Movie,
  NowPlayingMoviesResponse,
} from '../interfaces/NowPlayingMoviesResponse';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  initialPage = 1;
  BASE_URL: string = 'https://api.themoviedb.org/3';
  loading: boolean = false;

  constructor(private httpClient: HttpClient) {}

  getNowPlayingMovies(): Observable<NowPlayingMoviesResponse> {
    this.loading = true;
    return this.httpClient
      .get<NowPlayingMoviesResponse>(`${this.BASE_URL}/movie/now_playing`, {
        params: this.getDefaultParameters(),
      })
      .pipe(
        tap(() => {
          this.initialPage++;
          this.loading = false;
        })
      );
  }

  searchMovies(searchText: string): Observable<Movie[]> {
    let params = {
      ...this.getDefaultParameters(),
      page: '1',
      query: searchText,
    };
    return this.httpClient
      .get<NowPlayingMoviesResponse>(`${this.BASE_URL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getDefaultParameters() {
    return {
      api_key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
      language: 'en-US',
      page: this.initialPage.toString(),
    };
  }
}
