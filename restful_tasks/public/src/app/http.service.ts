import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.getOneTask();
    // this.deleteOneTask();
  }


  //  Invoke each function you wrote in the service and have the service console.log the data it receives

  getTasks() {
    const tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data =>
      console.log('Got our tasks!', data));
  }

  getOneTask() {
    const tempObservableGetOne = this._http.get('/tasks/');
    tempObservableGetOne.subscribe(data =>
      console.log('Got one task', data));
  }

  deleteOneTask() {
    const tempObservableDeleteOne = this._http.delete('/tasks/');
    tempObservableDeleteOne.subscribe(data =>
      console.log('Deleted one task', data));
  }

}
