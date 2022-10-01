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
    }
  ];

  constructor() {

    this.config = {
      title: 'Lista zadań',
      footer: 'Lista zadań zbudowana w Angularze',
      date: formatDate(new Date(), 'yyyy', 'pl-PL')
    }

  }
}
