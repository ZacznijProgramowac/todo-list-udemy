import { Component } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null = null;

  constructor(){
    setTimeout(() => {
      this.config ={
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze',
        date: formatDate(new Date(),'yyyy','pl-PL')
      }
    },1000)
    
  }
}
