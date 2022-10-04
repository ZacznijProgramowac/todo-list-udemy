import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { Task } from './tasks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null = null;
  taskName: string = 'Domyśle zdanie: Odkurzanie'
  taskDate: string = '';
  editMode: boolean = true;
  tasks: Task[] = [
    {
      name: 'Wyrzucić śmieci',
      deadline: '2022-10-02',
      done: false
    }, {
      name: 'Nakarmić kota',
      deadline: '2022-10-01',
      done: false
    }, {
      name: 'Zrobić zakupy',
      deadline: '2022-10-03',
      done: false
    },{
      name: 'Zrobić obiad',
      deadline: '2022-10-03',
      done: true
    }
  ];

  constructor() {

    this.config = {
      title: 'Lista zadań',
      footer: 'Lista zadań zbudowana w Angularze',
      date: formatDate(new Date(), 'yyyy', 'pl-PL')
    }
  }

  clearTasks(): void {
    this.tasks = [];
  }

  addTask() {
    let task: Task =
    {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    }
    this.tasks.push(task);
    this.taskName ='';
    this.taskDate='';
  }

  changeButton(){
    this.editMode = !this.editMode;
  }

}
