import { Component } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista zadań';

  get footer(): string {
    return ' © Lista zadań,All rights reserved.';
  }

  get date(): Data{
    return new Date;
  }
}
