import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  //templateUrl: './hello.component.html',
  //styleUrls: ['./hello.component.css']
  template:`<h1>Hello Component {{title}}</h1><br>
  {{comp}}<br>
  {{number1}}<br>
  {{number1+20+10}}`,
  styles:[`h1{color:blue}`]
})
export class HelloComponent{
  title='Hi there!';
  @Input() comp:string="";
  @Input() number1:number=0;
}
