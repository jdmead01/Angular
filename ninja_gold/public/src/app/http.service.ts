import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
  }
  getFarmGold(min, max){
    return Math.floor(Math.random() * (max - min) + min);
    // return 7;
  }

  casinoGold(min, max, negative) {
    if (negative === false ) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    if (negative === true ) {
      return -1 * (Math.floor(Math.random() * (max - min) + min));
  }
}
}
