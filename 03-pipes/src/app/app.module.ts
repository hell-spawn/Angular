import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID, ɵregisterLocaleData} from '@angular/core';

import {AppComponent} from './app.component';

import {CapitalizePipe} from './pipes/capitalize.pipe'


import {registerLocaleData} from '@angular/common';
import locale_es_CO from '@angular/common/locales/es-CO'
import locale_en_US from '@angular/common/locales/en'
import locale_fr_FR from '@angular/common/locales/fr';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ShowPasswordPipe } from './pipes/show-password.pipe';
registerLocaleData(locale_es_CO);
registerLocaleData(locale_en_US);
registerLocaleData(locale_fr_FR);



@NgModule({
    declarations: [
        AppComponent,
        CapitalizePipe,
        SafeUrlPipe,
        ShowPasswordPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-CO'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
