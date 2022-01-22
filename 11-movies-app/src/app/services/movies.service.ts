import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetail } from '../interfaces/MovieDetail';
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

  getDefaultParameters() {
    return {
      api_key: 'xxxxxxx-xxxxxx-xxxxx',
      language: 'en-US',
      page: this.initialPage.toString(),
    };
  }

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

  getDetailMovie(id: string): Observable<MovieDetail> {
    let params = {
      ...this.getDefaultParameters(),
    };
    return this.httpClient
      .get<MovieDetail>(`${this.BASE_URL}/movie/${id}`, {
        params,
      })
      .pipe(catchError((err) => of(null)));
  }

  getCredits(id: string): Observable<Cast[]> {
    let params = {
      ...this.getDefaultParameters(),
      page: '1',
    };

    return this.httpClient
      .get<Credits>(`${this.BASE_URL}/movie/${id}/credits`, { params })
      .pipe(
        map((result) => result.cast),
        catchError((err) => of([]))
      );
  }

  resetPageService() {
    this.initialPage = 1;
  }
}
