import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpService } from "./../http.service";
=======
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  authors = [];

  constructor(private _httpService: HttpService) {

  };

  ngOnInit() {
    this.getAuthorsFromService();
  };

  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe( data => {
      console.log("Successfully got data from server!", data);
      this.authors = data["data"];
    });
  };

  deleteAuthorsThroughService(id) {
    let observable = this._httpService.removeAuthors(id);
    observable.subscribe( data => {
      console.log("Successfully delete data from server!", data);
      this.getAuthorsFromService();
    });
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
  }

}
