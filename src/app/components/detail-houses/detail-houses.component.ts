import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HousesService } from '../../service/houses/houses.service';
import { CharactersService } from '../../service/characters/characters.service';

import { Characters } from '../../interface/characters/characters';
import { Houses } from '../../interface/houses/houses';

@Component({
  selector: 'app-detail-houses',
  templateUrl: './detail-houses.component.html',
  styleUrls: ['./detail-houses.component.scss']
})
export class DetailHousesComponent implements OnInit {

  private houses: Houses;
  private nameSearch: string;
  private charactersByHouse: Array<string> = [];

  constructor(private house: HousesService, private char: CharactersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.nameSearch = this.route.snapshot.paramMap.get('name');

    this.char.getAllCharactersByHouse(this.nameSearch).subscribe((people: Array<any>) => {
      people.forEach(function(name: Characters) {
          this.charactersByHouse.push(name.name);
        }.bind(this));
    });

    this.house.getHouseData(this.nameSearch).subscribe((houses: Houses) => {
      console.log(houses);
      const listHouses: any = {
        asentamiento: houses[0].seat,
        aliados: houses[0].allegiance,
        region: houses[0].region,
        religion: houses[0].religion,
        nombre: houses[0].name,
        bandera: houses[0].logoURL,
        sello: houses[0].sigil,
        frase: houses[0].words,
        pertenecen: this.charactersByHouse
      };
      this.houses = listHouses;
      console.log(this.houses);
    });
  }

}
