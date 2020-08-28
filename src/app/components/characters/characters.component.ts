import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../service/characters/characters.service';

import { Characters } from '../../interface/characters/characters';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  private characters: Array<any> = [];

  constructor(private char: CharactersService) {
  }

  ngOnInit(){
    this.char.getAllData().subscribe((characters: Array<any>) => {
      characters.forEach(function(character: Characters) {
        if(character.image !== '' && character.image !== undefined && character.image !== null) {
          const listCharacters: any = {
            name: character.name,
            image: character.image
          };
          this.characters.push(listCharacters);
        }
      }.bind(this));
      console.log(this.characters);
    });
  }
}
