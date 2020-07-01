import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { HousesComponent } from './components/houses/houses.component';
import { DetailHousesComponent } from './components/detail-houses/detail-houses.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent,
    DetailCharacterComponent,
    HousesComponent,
    DetailHousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
