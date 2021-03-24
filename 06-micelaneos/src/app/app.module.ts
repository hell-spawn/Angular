import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClassComponent } from './components/class/class.component';
import { HighlitghtDirective } from './directives/highlitght.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';

@NgModule({
    declarations: [
        AppComponent,
        NgStyleComponent,
        ClassComponent,
        HighlitghtDirective,
        NgswitchComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
