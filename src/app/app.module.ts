import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharactersService } from './characters/shared/characters.service'; // cli does not automatically import services

/*
  Components - building blocks of an application (custom html elements)
  Services - Data retrieval/persistance for the application
  Pipes - Data formatting (ONLY), should not be used to
    modify the data for another piece to used
  Directives - Direct html modifications (typically through custom html attributes)
  Module - Sub sections of the application or cross-application reusable pieces (plugins)
  Enum/Interface/Class - Generic code structures
  Guards - Used with routing to control path resolutions, typically used to deliver 404 for invalid ids
    or for authorization on a route
*/

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent // components are loaded through declarations
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CharactersService
  ], // services are loaded in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
