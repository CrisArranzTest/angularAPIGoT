import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharactersService } from '../../service/characters/characters.service';

import { Characters } from '../../interface/characters/characters';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  private characters: Characters;
  private nameSearch: string;

  constructor(private char: CharactersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.nameSearch = this.route.snapshot.paramMap.get('name');

    this.char.getCharacterData(this.nameSearch).subscribe((characters: Characters) => {
      console.log(characters);
      const listCharacters: any = {
        nombre: this.checkValue(characters.name),
        imagen: this.checkValue(characters.image),
        edad: this.checkObjectToString(characters.age, 'age'),
        cultura: this.checkArrayToString(characters.culture, '0'),
        padre: this.checkValue(characters.father),
        genero: this.checkValue(characters.gender),
        casa: this.checkValue(characters.house),
        vivo: characters.alive,
        actor: this.checkValue(characters.actor),
        relacionado: this.checkArrayToArray(characters.related, 'name'),
        religion: this.checkArrayToString(characters.religion, '0'),
        hermanos: this.checkArrayToArray(characters.siblings, null),
        esposa: this.checkArrayToString(characters.spouse, '0'),
        titulos: this.checkArrayToArray(characters.titles, null),
      };
      this.characters = listCharacters;
      console.log(this.characters);
    });
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

  // Transforma un objeto a un string pasandole el array y la columna dentro de ese array que tiene que devolver
  checkObjectToString(element: object, column: string) {
    let result: string;
    if (element === null || element === undefined || !(column in element) || element[column] === '') {
      result = 'N/A';
    } else {
      result = element[column];
    }
    return result;
  }

  // Transforma un objeto a un array, pasandole el objeto y la columna a recoger dentro de ese objeto que tiene que devolver
  checkArrayToArray(element: Array<any>, column: string) {
    let result: Array<string> = [];
    if (element === null || element === undefined || element.length === 0) {
      result = ['N/A'];
    } else {
      console.log(element);
      for (const x of element) {
        column === null ? result.push(x) : result.push(x[column]);
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
