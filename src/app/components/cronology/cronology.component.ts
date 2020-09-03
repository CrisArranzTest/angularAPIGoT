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
  private charactersInfo: Array<any> = [];
  private charactersRange: Array<number>;

  constructor(private char: CharactersService) {
  }

  ngOnInit() {
    this.char.getAllData().subscribe((characters: Array<any>) => {
      characters.forEach(function(character: Characters) {
        if (this.checkArrayToString(character.age, 'age') !== 'N/A' && character.age !== null && character.image !== undefined) {
          const listCharacters: any = {
            name: character.name,
            age: this.checkArrayToString(character.age, 'age'),
            image: character.image,
            range: this.getTruncByTens(this.checkArrayToString(character.age, 'age'))
          };
          this.charactersInfo.push(listCharacters);
        }
      }.bind(this));

      this.charactersInfo = this.orderCharactersDesc(this.charactersInfo, 'age');
      this.charactersRange = this.getArrayRange(this.charactersInfo);
      this.characters = this.getCharacter(this.charactersRange, this.charactersInfo);

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

  // Obtenemos un array con los rangos de los characters
  getArrayRange(character: Array<any>) {
    let arrayRange: Array<number> = [];
    for (let x = 0 ; x < character.length ; x++) {
      arrayRange.push(character[x]['range']);
    }

    return arrayRange.filter((v, i, a) => a.indexOf(v) === i);

  }

  // Obtenemos el array final de los characters
  getCharacter(range: Array<number>, info: Array<any>) {
    let character: Array<any> = [];
    
    range.forEach(function(element) {
      let range: any = {
        range: element,
        info: this.getInfoByRage(element, info)
      }
      character.push(range);
    }.bind(this));

    return character;
  }


  // Obtenemos el redondeo por decenas
  getTruncByTens(age: number) {
    return Math.trunc(age / 10) * 10;
  }

  // Obtenemos el array con los datos filtrados por rango
  getInfoByRage(range: number, info: Array<any>) {
    let arrayInfo: Array<any> = [];
    info.forEach(function(element) {
      if (range === element.range) {
        arrayInfo.push(element);
      }
    });

    return arrayInfo;
  }
}
