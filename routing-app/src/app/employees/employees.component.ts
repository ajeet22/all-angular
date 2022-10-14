import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent{

  title:string='Employee List';
  employees:any[]=[
    {
      "name":"Ram",
      "id":1
    },
    {
      "name":"Jatin",
      "id":2
    },
    {
      "name":"Prabhu",
      "id":3
    },
    {
      "name":"Sakshi",
      "id":4
    }
  ];

}
