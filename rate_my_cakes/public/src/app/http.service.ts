import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    imageUrl = '';
    constructor(private _http: HttpClient) {
        this.getCakes();
    }
    getCake(id) {
      let cake = this._http.get(`/cakes/${id}`);
      console.log(cake);
      return cake;

  }
    setTargetCakeUrl(url: string) {
      this.imageUrl = url;
      console.log('hoebags slutty URL ' + this.imageUrl);
    }
    getCakes() {
        return this._http.get('/cakes');
    }
    createCake(post) {
      return this._http.post('/cakes', post);
    }
}
