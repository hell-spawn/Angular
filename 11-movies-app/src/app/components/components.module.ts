import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { NgRatingBarModule } from 'ng-rating-bar';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    NgxUsefulSwiperModule,
    NgRatingBarModule,
  ],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
