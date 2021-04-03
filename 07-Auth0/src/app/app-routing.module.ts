import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '@auth0/auth0-angular'
import { AdministrationComponent } from './pages/administration/administration.component'
import { CatalogComponent } from './pages/catalog/catalog.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
