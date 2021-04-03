import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { TestRxjsComponent } from './pages/test-rxjs/test-rxjs.component';

const routes: Routes = [
    { path: 'demo', component: DemoComponent },
    { path: 'test-rxjs', component: TestRxjsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'demo' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
