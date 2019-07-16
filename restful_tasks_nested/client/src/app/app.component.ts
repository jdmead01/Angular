import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private _httpService : HttpService ) {

  }

  title = 'Restful Tasks Nested';
  tasks = [];
  oneTask = [];
  taskId = '';
  selectedTask = false;

  ngOnInit () {
    // this.getTasksFromService();
  }
  getTasksFromService () {
    let observable = this._httpService.getTasks();
    observable.subscribe ( data => {
      console.log('Got our Tasks!', data);
      this.tasks = data['data'];
    });
  }
  getAllTasksWithClick() {
    this.getTasksFromService();
  }

  getOneTaskFromService(id) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe ( data => {
      console.log('Got One Task!', data);
      console.log(this.tasks);
      this.oneTask = [data['data']];
      this.selectedTask = true;
    });
  }
  getOneTaskWithClick() {
    this.getOneTaskFromService(this.taskId);
  }

  onKey(event: any) {
    this.taskId = event.target.value;
    console.log(this.taskId);
  }

}
