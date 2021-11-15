import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/NowPlayingMoviesResponse';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  @Input() movies: Movie[];

  @ViewChild('swiperMovies') swiper: Swiper;

  config: SwiperOptions = {
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
