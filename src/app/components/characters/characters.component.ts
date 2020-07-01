import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../service/characters/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  private characters: Array<any> = [];

  constructor( private char: CharactersService ) {
  }

  ngOnInit(){
    this.char.getAllData().subscribe((characters: any[]) => {
      characters.forEach(function(element){
        if(element['image'] !== '' && element['image'] !== undefined && element['image'] !== null){
          var listCharacters: any = {
            name: element['name'],
            image: element['image'],
          };
          this.characters.push(listCharacters);
        }
      }.bind(this));
      console.log(this.characters);
    });
  }
}
