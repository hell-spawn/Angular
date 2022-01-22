import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/NowPlayingMoviesResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public movies: Movie[] = [];
  public searchText = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.searchText = params.query;
      this.movieService.searchMovies(params.query).subscribe((movies) => {
        this.movies = movies;
        console.log(this.movies);
      });
    });
  }
}
