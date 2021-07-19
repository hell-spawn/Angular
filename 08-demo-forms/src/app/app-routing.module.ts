import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { TempleateFormComponent } from './pages/templeate-form/templeate-form.component';

const routes: Routes = [
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TempleateFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'reactive' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
