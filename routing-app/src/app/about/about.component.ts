import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Student Details";
  students:any[]=[
    {
      "id":1,
      "fname":"Ajit",
      "lname":"Kumar",
      "age": 24,
      "address":"Siwan, Bihar"
    },
    {
      "id":2,
      "fname":"Sujeet",
      "lname":"Singh",
      "age": 34,
      "address":"Patna, Bihar"
    },
    {
      "id":4,
      "fname":"Ranjan",
      "lname":"Asish",
      "age": 20,
      "address":"KGP, Kharagpur"
    },
    {
      "id":5,
      "fname":"Aparna",
      "lname":"Mj",
      "age": 40,
      "address":"Allapuzha, Kerala"
    }
  ];

}
