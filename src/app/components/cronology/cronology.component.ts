import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../service/characters/characters.service';

import { Characters } from '../../interface/characters/characters';

@Component({
  selector: 'app-cronology',
  templateUrl: './cronology.component.html',
  styleUrls: ['./cronology.component.scss']
})
export class CronologyComponent implements OnInit {

  private characters: Array<any> = [];

  constructor(private char: CharactersService) {
  }

  ngOnInit() {
    this.char.getAllData().subscribe((characters: Array<any>) => {
      characters.forEach(function(character: Characters) {
        if (this.checkArrayToString(character.age, 'age') !== 'N/A' && character.age !== null) {
          const listCharacters: any = {
            name: character.name,
            age: this.checkArrayToString(character.age, 'age'),
            image: character.image,
            position: 0
          };
          this.characters.push(listCharacters);
        }
      }.bind(this));

      this.characters = this.orderCharactersDesc(this.characters, 'age');
      this.characters = this.directionCronologyCharacters(this.characters, 'position');
      console.log(this.characters);
    });
  }

  // Ordena los personajes de manera ascendente (de menor a mayor)
  orderCharactersAsc(characters: Array<any>, age: string) {
    for (let x = 0; x < characters.length; x++) {
      for (let y = 0; y < characters.length - x - 1; y++) {
          if (characters[y][age] > characters[y + 1][age]) {
              const tmp: Characters = characters[y + 1];
              characters[y + 1] = characters[y];
              characters[y] = tmp;
          }
      }
    }
    return characters;
  }

  // Ordena los personajes de manera descendente (de mayor a menor)
  orderCharactersDesc(characters: Array<any>, age: string) {
    for (let x = 0; x < characters.length; x++) {
      for (let y = 0; y < characters.length - x - 1; y++) {
          if (characters[y][age] < characters[y + 1][age]) {
              const tmp: Characters = characters[y + 1];
              characters[y + 1] = characters[y];
              characters[y] = tmp;
          }
      }
    }
    return characters;
  }

  // Le da los valores correctos al array para colocarlo en la web
  directionCronologyCharacters(characters: Array<any>, position: string) {
    for (let x = 0; x < characters.length; x++) {
      x % 2 === 0 ? characters[x][position] = 0 : characters[x][position] = 1;
    }
    return characters;
  }

  // Transforma un array a un string pasandole el array y la columna dentro de ese array que tiene que devolver
  checkArrayToString(element: Array<string>, column: string) {
    let result: string;
    if (element === null || element === undefined || !(column in element) || element[column] === '') {
      result = 'N/A';
    } else {
      result = element[column];
    }
    return result;
  }
}
