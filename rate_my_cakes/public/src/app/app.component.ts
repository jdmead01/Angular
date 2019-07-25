import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Rate My Cakes Hooker';
    newCake: any;
    allCakes: any;
    // imageUrl = '';
    // loggedIn: boolean;
    cakeToShow: any;
    observable: any;

    constructor(private _httpService: HttpService) {}

    ngOnInit() {
      this.getCakesFromService();
      this.newCake = {bakerName: '', ImageUrl: ''};
      this.allCakes = [];
      this.observable = [];

    }

    getCakesFromService() {
      const observable = this._httpService.getCakes();
      observable.subscribe(data => {
        console.log('########################## in CakesFromService bitches', data);
        this.allCakes = data;
        console.log("cakeToShow");
        console.log(this.cakeToShow);
      });
    }

    getCakeFromService(id: number): void {
      const observable = this._httpService.getCake(id);
      observable.subscribe(data => {
        console.log('########################## in 1 CakeFromService', data);
        // this.imageUrl = data['data']['ImageUrl'];
        this.cakeToShow = data;
      });

    }
    onSubmit() {
      console.log('I am in onSubmit for a new cake!', this.newCake);
      const observable = this._httpService.createCake(this.newCake);
      observable.subscribe(data => {
        console.log('########################## in onSubmit bitches', data);
      });
    }
//     tasks = [];
//     getTasksFromService(){
//         // this._httpService.getTasks();
//         let observable = this._httpService.getTasks();
//         observable.subscribe(data => {
//             console.log("Got our tasks!", data);
//             // In this example, the array of tasks is assigned to the key 'tasks' in the data object.
//             // This may be different for you, depending on how you set up your Task API.
//             this.tasks = data['tasks'];
//         });
//     }

//     onButtonClick(): void {
//         console.log(`Click event is working`);
//     }
//     onButtonClickParam(num: Number): void {
//         console.log(`Click event is working with num param: ${num}`);
//     }
//     onButtonClickParams(num: Number, str: String): void {
//         console.log(`Click event is working with num param: ${num} and str param: ${str}`);
//     }
//     onButtonClickEvent(event: any): void {
//         console.log(`Click event is working with event: ${event}`);
//     }
    }
