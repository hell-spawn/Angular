import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits';
import { MovieDetail } from 'src/app/interfaces/MovieDetail';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public currentMovie: MovieDetail;
  public currentCast: Cast[];

  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activeRoute.snapshot.params;

    combineLatest([
      this.movieService.getDetailMovie(id),
      this.movieService.getCredits(id),
    ]).subscribe(([movieDetail, cast]) => {
      if (!movieDetail) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.currentMovie = movieDetail;
      this.currentCast = cast;
    });
  }

  backPage() {
    this.location.back();
  }
}
