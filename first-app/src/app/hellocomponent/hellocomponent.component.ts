import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellocomponent',
  templateUrl: './hellocomponent.component.html',
  styleUrls: ['./hellocomponent.component.css']
})
export class HellocomponentComponent{
  title: String = 'Built-in Demo';
  todayDate: Date = new Date();
  num: number[]=[1,2,3,5,6,7];
  nameFilter: String = '';
  employees: any[]=[
    {
      "empId":1,
      "name":"Raj",
      "location":"Mumbai"
    },
    {
      "empId":2,
      "name":"Rahul",
      "location":"Delhi"
    }
  ];
}
