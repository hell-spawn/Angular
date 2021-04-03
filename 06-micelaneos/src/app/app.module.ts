import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClassComponent } from './components/class/class.component';
import { HighlitghtDirective } from './directives/highlitght.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { DemoComponent } from './pages/demo/demo.component';
import { TestRxjsComponent } from './pages/test-rxjs/test-rxjs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        NgStyleComponent,
        ClassComponent,
        HighlitghtDirective,
        NgswitchComponent,
        DemoComponent,
        TestRxjsComponent,
        NavbarComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
