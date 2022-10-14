import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
 template:`<p>Service/Injectable Demo</p><br>
  <li *ngFor="let a of emp">
  {{a.userId}}
  {{a.id}}
  {{a.title}}
  {{a.completed}}
  </li>`
})
export class AppComponent {
  title = 'service-app';
  emp:any[]=[];
  constructor(private _empService:EmpService){};
  ngOnInit(){
    this._empService.getEmployees().subscribe(employees=>{
      this.emp=employees});
  }

}
