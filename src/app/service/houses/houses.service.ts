import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private url = 'https://api.got.show/api/show/';

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(this.url + 'houses');
  }

  getHouseData(name: string) {
    return this.http.get(this.url + 'houses/' + name);
  }
}
