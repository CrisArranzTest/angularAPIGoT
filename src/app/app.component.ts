import { Component, OnInit } from '@angular/core';
import { CharactersService } from './service/characters.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularAPIGoT';  
  private characters: any;

  constructor( private char: CharactersService ) {
  }

  ngOnInit(){
    this.characters = this.char.getAllData();
  }
}
