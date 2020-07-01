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
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CronologyComponent } from './components/cronology/cronology.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent,
    DetailCharacterComponent,
    HousesComponent,
    DetailHousesComponent,
    FooterComponent,
    HeaderComponent,
    CronologyComponent
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
