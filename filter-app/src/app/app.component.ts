import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    },
    {
      "empId":3,
      "name":"amit",
      "location":"Delhi"
    },
    {
      "empId":4,
      "name":"Mark",
      "location":"Delhi"
    }
  ];
}
