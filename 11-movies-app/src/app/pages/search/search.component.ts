import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private movies: Movie[];

  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
      this.movieService
        .searchMovies(params.query)
        .subscribe((movies) => console.log(movies));
    });
  }
}
