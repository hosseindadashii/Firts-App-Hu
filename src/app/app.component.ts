import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  tasks = [{
    name : 'Math',
    WorkedTime : '4h',
    time: '6h'
  }]
  subject : string;
  time: string;


  Save() {
    let obj = {
      name : this.subject,
      WorkedTime: '',
      time : this.time
    }
    this.tasks.push(obj);
    console.log(this.tasks);
  }
}
