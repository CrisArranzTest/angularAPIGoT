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
}
