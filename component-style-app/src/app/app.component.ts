import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template:`<p>AppComponent</p><br>
  <app-hello comp="{{company}}" [number1]="num1"></app-hello><br>
  <app-houter (myEvent)=changeValue($event)></app-houter><br>
  Value of variable "value" is:{{value}}<br>`
})
export class AppComponent {
  title = 'componentstyle-app';
  company:string="Wipro";
  num1:number=10;

  value:string="";
  changeValue(val:string){
    this.value=val;
  }
}
