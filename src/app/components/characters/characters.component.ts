import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../service/characters/characters.service';
import { Characters } from '../../interface/characters/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  private characters: Array<Characters> = [];

  constructor( private char: CharactersService ) {
  }

  ngOnInit(){
    this.char.getAllData().subscribe((characters: any[]) => {

      let listCharacters: Characters;
      characters.forEach(function(element){
        listCharacters = {
          age: this.checkArrayToString(element['age'],'age'),
          culture: this.checkArrayToString(element['culture'],'0'),
          father: this.checkValue(element['father']),
          gender: element['gender'],
          house: element['house'],
          isAlive: element['alive'],
          name: this.checkArrayToString(element['age'],'name'),
          performer: element['actor'],
          related: this.checkArrayToArray(element['related'],'name'),
          religion: element['religion'],
          siblings: element['siblings'],
          spouse: element['spouse'],
          titles: element['titles'],
        };

        this.characters.push(listCharacters);
      }.bind(this));
      console.log(this.characters);
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
