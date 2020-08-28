import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private _url: string = 'https://api.got.show/api/show/characters';

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get(this._url);
  }

  getCharacterData(name: string) {
    return this.http.get(this._url + '/' + name);
  }

  getAllCharactersByHouse (name: string){
    return this.http.get(this._url + '/byHouse/' + name);
  }
}
