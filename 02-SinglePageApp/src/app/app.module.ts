import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


// Services
import {HeroesService} from '../app/services/heroes.service'
//Routes
import {APP_ROUTING} from './app.routes'

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        HeroesComponent,
        HeroComponent,
        SearchComponent,
        HeroCardComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [
        HeroesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
