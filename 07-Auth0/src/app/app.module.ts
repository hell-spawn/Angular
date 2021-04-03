import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './pages/home/home.component'
import { CatalogComponent } from './pages/catalog/catalog.component'
import { AdministrationComponent } from './pages/administration/administration.component'
import { AuthModule } from '@auth0/auth0-angular'
import { environment } from 'src/environments/environment'

@NgModule({
    declarations: [AppComponent, NavbarComponent, HomeComponent, CatalogComponent, AdministrationComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot({
            ...environment.auth,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
