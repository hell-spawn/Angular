import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-mini-slide-show',
  templateUrl: './mini-slide-show.component.html',
  styleUrls: ['./mini-slide-show.component.css'],
})
export class MiniSlideShowComponent implements OnInit {
  @Input() cast: Cast[];

  @ViewChild('swiperCast') swiper: Swiper;

  config: SwiperOptions = {
    slidesPerView: 5.5,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
