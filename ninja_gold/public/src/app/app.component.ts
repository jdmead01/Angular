import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Ninja Gold';
  allGold = 0;
  gold = [];
  constructor(private _httpService: HttpService){
  }
  getAllGoldFromService(){
    let tempObservable =this._httpService.getAllGold();
    tempObservable.subscribe(data =>
    console.log('Got our Golds!', data));
}

  getFarmGoldFromService(min:Number, max:Number):void{
    let tempObservable = this._httpService.getFarmGold(min, max);
    // tempObservable.subscribe(data => {
    //   console.log('Got our Golds!', data);
    //   this.allGold += data;});
    console.log(tempObservable);
    this.allGold += tempObservable;
    this.goldLog(tempObservable);
  }

  goldLog(number:Number) {
    var x = `${number} Of Gold was added to your treasure`;
    this.gold.unshift(x);
    // this.gold.reverse();
}
}
