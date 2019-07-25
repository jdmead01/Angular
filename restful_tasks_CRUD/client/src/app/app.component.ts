import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];
  oneTask = [];
  newTask : any;
  editTask : any;
  constructor (private _httpService : HttpService ) {

  };
  ngOnInit () {
    this.getTasksFromService();
    this.newTask = { title: '', description: '' };
  }
  getTasksFromService () {
    const observable = this._httpService.getTasks();
    observable.subscribe ( data => {
      console.log('Got our Tasks!', data);
      this.tasks = data;
    });
  }
  getAllTasksWithClick() {
    this.getTasksFromService();
  }
  getOneTaskFromService(id) {
    const observable = this._httpService.getOneTask(id);
    observable.subscribe ( data => {
      console.log('Got One Task!', data);
      this.oneTask = [data['data']];
    });
  };
  getOneTaskWithClick() {
    this.getOneTaskFromService(this.taskId);
  }
  taskId = '';
  onKey(event: any) {
    this.taskId = event.target.value;
    console.log(this.taskId);
  }
  onNewTaskSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe( data => {
      console.log('Successfully added!', data);
      this.getTasksFromService();
      this.newTask = { title: '', description: '' };
    });
  };
  onDelete(id) {
    const observable = this._httpService.deleteTask(id);
    observable.subscribe( data => {
      console.log('Successfully deleted!', data);
      this.getTasksFromService();
    });
  };
  onEdit(task) {
    this.editTask = { _id: task._id, title : task.title, description : task.description };
  };
  onEditSubmit() {
    const observable = this._httpService.updateTask(this.editTask._id, this.editTask);
    observable.subscribe( data => {
      console.log('Successfully updated!', data);
      this.getTasksFromService();
      this.editTask = null;
    });
  }
}
