import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../service/characters/characters.service';
import { Characters } from '../../interface/characters/characters';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  private characters: Characters;
  // tslint:disable-next-line: variable-name
  private _nameSearch: string;

  // tslint:disable-next-line: variable-name
  constructor( private char: CharactersService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._nameSearch = this._route.snapshot.paramMap.get('name');
    this.char.getCharacterData(this._nameSearch).subscribe((characters: any[]) => {
      console.log(characters);
      const listCharacters: any = {
        // tslint:disable-next-line: no-string-literal
        name: this.checkValue(characters['name']),
        // tslint:disable-next-line: no-string-literal
        image: this.checkValue(characters['image']),
        // tslint:disable-next-line: no-string-literal
        age: this.checkArrayToString(characters['age'], 'age'),
        // tslint:disable-next-line: no-string-literal
        culture: this.checkArrayToString(characters['culture'], '0'),
        // tslint:disable-next-line: no-string-literal
        father: this.checkValue(characters['father']),
        // tslint:disable-next-line: no-string-literal
        gender: this.checkValue(characters['gender']),
        // tslint:disable-next-line: no-string-literal
        house: this.checkValue(characters['house']),
        // tslint:disable-next-line: no-string-literal
        isAlive: characters['alive'],
        // tslint:disable-next-line: no-string-literal
        performer: this.checkValue(characters['actor']),
        // tslint:disable-next-line: no-string-literal
        related: this.checkArrayToArray(characters['related'], 'name'),
        // tslint:disable-next-line: no-string-literal
        religion: this.checkArrayToString(characters['religion'], '0'),
        // tslint:disable-next-line: no-string-literal
        siblings: this.checkArrayToArray(characters['siblings'], null),
        // tslint:disable-next-line: no-string-literal
        spouse: this.checkArrayToString(characters['spouse'], '0'),
        // tslint:disable-next-line: no-string-literal
        titles: this.checkArrayToArray(characters['titles'], null),
      };
      this.characters = listCharacters;
      console.log(this.characters);
    });
  }

  // Transforma un array a un string pasandole el array y la columna dentro de ese array que tiene que devolver
  checkArrayToString(element: Array<any>, column: string) {
    let result: string;
    if (element === null || element === undefined || !(column in element) || element[column] === '') {
      result = 'N/A';
    } else{
      result = element[column];
    }
    return result;
  }

  // Transforma un objeto a un array, pasandole el objeto y la columna a recoger dentro de ese objeto que tiene que devolver
  checkArrayToArray(element: Array<any>, column: string) {
    let result: Array<string> = [];
    if(element === null || element === undefined || element.length === 0){
      result = ['N/A'];
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let x = 0; x < element.length; x++) {
        column === null ? result.push(element[x]) : result.push(element[x][column]);
      }
    }
    return result;
  }

  // Chequea que los valores existen y si no existen devuelve respuesta N/A
  checkValue(element: any) {
    let result: string;
    if (element === null || element === undefined || element === '') {
      result = 'N/A';
    } else {
      result = element;
    }
    return result;
  }

}
