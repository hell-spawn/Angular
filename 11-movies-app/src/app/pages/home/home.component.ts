import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/NowPlayingMoviesResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private moviesService: MoviesService) {}

  public movies: Movie[] = [];
  public gridMovies: Movie[] = [];

  ngOnInit(): void {
    this.moviesService.getNowPlayingMovies().subscribe((nowPlayingMovies) => {
      this.movies = nowPlayingMovies.results;
      this.gridMovies = [...this.movies];
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(scroll) {
    const top =
      (scroll.target.documentElement.scrollTop ||
        scroll.target.body.scrollTop) + 1300;
    const maxHeight =
      scroll.target.documentElement.scrollHeight ||
      scroll.target.body.scrollHeight;
    if (this.moviesService.loading) {
      return;
    }
    if (top > maxHeight) {
      this.moviesService.getNowPlayingMovies().subscribe((listMovies) => {
        console.log('Movies: ', listMovies);
        this.gridMovies.push(...listMovies.results);
      });
    }
  }

  ngOnDestroy() {
    this.moviesService.resetPageService();
  }
}
