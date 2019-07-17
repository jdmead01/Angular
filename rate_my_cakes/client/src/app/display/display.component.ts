import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() message : any

  obj : any

  amount : Number

  constructor(private _http : HttpService) {

    this.amount = 0

    this.obj = {
      name : '',
      url : '',
      ratings : []
    }

   }


  show(id){
    this._http.getCake(id)
      .subscribe(data => {
        this.obj = data
      })
  }

}
