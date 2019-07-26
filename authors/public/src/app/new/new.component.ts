import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpService } from "./../http.service";

import { Router } from "@angular/router";
=======
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
<<<<<<< HEAD
  author: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {
      name: ""
    }
  }

  addAuthorThroughService () {
    const observable = this._httpService.addAuthor(this.author);
    observable.subscribe ( data => {
      if (data['message'] === 'Error') {
        console.log(data);
        console.log(data['message']);
        console.log(data['error']);
        this.error = data;
      }
      else {
        console.log("Successfully added data to server!" + data);
        this._router.navigate(["/"]);
      };
    });
  }

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
}
