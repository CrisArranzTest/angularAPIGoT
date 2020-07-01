import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../service/characters/characters.service';
import { Characters } from '../../interface/characters/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  private characters: Array<Characters>;

  constructor( private char: CharactersService ) {
  }

  ngOnInit(){
    this.char.getAllData().subscribe((characters: any[]) => {
      let numCharacters = characters.length;
      let listCharacters: Characters;
      for(let x= 0; x < numCharacters; x++){
        listCharacters = {
          age: this.checkArray(characters[x]['age'],'age'),
          culture: this.checkArray(characters[x]['culture'],'0'),
          father: this.checkValue(characters[x]['father']),
          gender: characters[x]['gender'],
          house: characters[x]['house'],
          isAlive: characters[x]['alive'],
          name: this.checkArray(characters[x]['age'],'name'),
          performer: characters[x]['actor'],
          related: characters[x]['related'],
          religion: characters[x]['religion'],
          siblings: characters[x]['siblings'],
          spouse: characters[x]['spouse'],
          titles: characters[x]['titles'],
        };
        console.log(listCharacters);
        //this.characters.push(listCharacters);
      }
    });
  }

  checkArray(element: Array<any>, column: string){
    let result: string;
    if(element === null || element === undefined || !(column in element) || element[column] == ''){
      result = 'N/A';
    } else {
      result = element[column];
    }
    return result;
  }

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
