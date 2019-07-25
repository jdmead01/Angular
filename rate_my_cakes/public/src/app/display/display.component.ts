import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    @Input() cakeToShow: any;
      // tslint:disable-next-line:variable-name
      constructor(private _httpService: HttpService) {}

  ngOnInit() {
    console.log('in the ngOnIt in display.component.ts ');
  }

}
