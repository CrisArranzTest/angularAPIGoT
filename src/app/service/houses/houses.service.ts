import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private _url: string = 'https://api.got.show/api/show/houses';

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(this._url);
  }

  getHouseData(name: string) {
    return this.http.get(this._url + '/' + name);
  }
}
