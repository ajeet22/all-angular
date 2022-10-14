import { Component, OnInit } from '@angular/core';
import { time } from 'console';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date = new Date();
  constructor() {}
  second: any;
  minutes: any;
  hours:any;
  ngOnInit(): void {
    const seconds = 1;
    setInterval(() => {
      this.date = new Date();
      this.second = this.date.getSeconds();
      this.minutes = this.date.getMinutes();
      this.hours=this.date.getHours();
    }, seconds * 1000);
  }
}