import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = 'https://api.got.show/api/show/';

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(this.url + 'characters');
  }

  getCharacterData(name: string) {
    return this.http.get(this.url + 'characters/' + name);
  }

  getAllCharactersByHouse(name: string) {
    return this.http.get(this.url + 'characters/byHouse/' + name);
  }

  getAllCharactersByAge() {
    return this.http.get(this.url + 'ages/');
  }
}
