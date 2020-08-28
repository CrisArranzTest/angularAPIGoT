import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { CronologyComponent } from './components/cronology/cronology.component';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { DetailHousesComponent } from './components/detail-houses/detail-houses.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent } ,
  { path: 'characters/:name', component: DetailCharacterComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:name', component: DetailHousesComponent },
  { path: 'cronology', component: CronologyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
