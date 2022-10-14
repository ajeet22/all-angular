import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterc',
  templateUrl: './filterc.component.html',
  styleUrls: ['./filterc.component.css']
})
export class FiltercComponent {
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
