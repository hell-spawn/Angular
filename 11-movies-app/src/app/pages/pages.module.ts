import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, MoviesComponent, SearchComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
