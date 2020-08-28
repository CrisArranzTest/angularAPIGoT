import { Component, OnInit } from '@angular/core';

import { HousesService } from '../../service/houses/houses.service';

import { Houses } from '../../interface/houses/houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  private houses: Array<any> = [];

  constructor(private house: HousesService) { }

  ngOnInit() {
    this.house.getAllData().subscribe((houses: Array<any>) => {
      houses.forEach(function(house: Houses) {
        if(house.logoURL !== '' && house.logoURL !== undefined && house.logoURL !== null) {
          const listHouses: any = {
            name: this.delWordInString(house.name, "User:"),
            logo: house.logoURL
          };
          this.houses.push(listHouses);
        }
      }.bind(this));
    });
  }

  delWordInString(element: string, word: string) {
    element = element.indexOf(word) === 0 ? element.substr(element.indexOf(word) + word.length) : element;
    return element;
  }

}
