import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { ImageNotFoundPipe } from './pipes/image-not-found.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistComponent,
        NavbarComponent,
        ImageNotFoundPipe,
        SafeUrlPipe,
        CardComponent,
        LoadingComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
