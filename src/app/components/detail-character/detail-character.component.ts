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
  private _nameSearch: string;

  constructor( private char: CharactersService, private _route: ActivatedRoute) {
  }
            

  ngOnInit(){
    this._nameSearch = this._route.snapshot.paramMap.get('name');
    this.char.getCharacterData(this._nameSearch).subscribe((characters: any[]) => {
      var listCharacters: any = {
        name: characters['name'],
        image: characters['image'],
        age: this.checkArrayToString(characters['age'],'age'),
        culture: this.checkArrayToString(characters['culture'],'0'),
        father: this.checkValue(characters['father']),
        gender: characters['gender'],
        house: characters['house'],
        isAlive: characters['alive'],
        performer: characters['actor'],
        related: this.checkArrayToArray(characters['related'],'name'),
        religion: characters['religion'],
        siblings: characters['siblings'],
        spouse: characters['spouse'],
        titles: characters['titles'],
      };
      this.characters = listCharacters;
    });
  }

  //Transforma un array a un string pasandole el array y la columna dentro de ese array que tiene que devolver
  checkArrayToString(element: Array<any>, column: string){
    let result: string;
    if(element === null || element === undefined || !(column in element) || element[column] == ''){
      result = 'N/A';
    } else{
      result = element[column];
    }
    return result;
  }

  //Transforma un objeto a un array, pasandole el objeto y la columna a recoger dentro de ese objeto que tiene que devolver
  checkArrayToArray(element: Array<any>, column: string){
    let result: Array<string> = [];
    if(element === null || element === undefined || element.length == 0){
      result = ['N/A'];
    } else{
      for(let x = 0; x < element.length; x++){
        result.push(element[x][column]);
      }
    }
    return result;
  }

  //Chequea que los valores existen y si no existen devuelve respuesta N/A
  checkValue(element: any){
    let result: string;
    if(element === null || element === undefined || element === ''){
      result = 'N/A';
    } else {
      result = element;
    }
    return result;
  }

}
