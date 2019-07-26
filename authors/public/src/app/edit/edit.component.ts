import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpService } from "./../http.service";

import { ActivatedRoute, Router } from '@angular/router';

///// < Purpose >
// // ActivatedRoute : URL parameter extraction
// // Router : URL redirection
=======
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
<<<<<<< HEAD
  id : string;
  private sub: any;
  author: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { };

  ngOnInit() {

    ///////////// URL parameter extract /////////////////
    this.sub = this._route.params.subscribe( params => {
      this.id = params['id'];
    });
    /////////////////////////////////////////////////////

    this.oneAuthorInfoRetrieve();
  }

  oneAuthorInfoRetrieve() {
    const observable = this._httpService.getOneAuthor(this.id);
    observable.subscribe ( data => {
      console.log('Successfully got data from server', data);
      this.author = data["data"];
    });
  }

  updateAuthorInfoThroughService () {
    const observable = this._httpService.updateAuthor(this.id, this.author);
    observable.subscribe ( data => {
      if ( data['message'] === 'Error' ) {
        console.log(data);
        console.log(data['message']);
        console.log(data['error']);
        this.error = data;
      } else {
        console.log('Successfully update data to server', data);
        this._router.navigate(['/']);
      }
    });
  }

  reRouteToHome () {
    this._router.navigate(['/']);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
  }

}
