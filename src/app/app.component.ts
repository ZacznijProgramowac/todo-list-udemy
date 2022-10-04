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
    }, {
      name: 'Zrobić obiad',
      deadline: '2022-10-03',
      done: false
    }
  ];

  constructor() {
    this.config = {
      title: 'Lista zadań',
      footer: 'Lista zadań zbudowana w Angularze',
      date: formatDate(new Date(), 'yyyy', 'pl-PL')
    }
    this.sortTask();
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
    this.taskName = '';
    this.taskDate = '';
    this.sortTask();
  }

  changeButton() {
    this.editMode = !this.editMode;
  }

  markTaskDone(task: Task) {
    task.done = !task.done;
    this.sortTask();
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(
      value => value !== task
    )
    this.sortTask();
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

}
