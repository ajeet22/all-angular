import { style } from '@angular/animations';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  /*template:`<p>This is demo</p><br><br>
  {{message}}<br><br>
  <input type="button" value="Submit" (click)="show()" /><br>
  <input type="text" (input)="show1($event)" />`,
  template:`<p><appHighlight>Custom Directive</appHighlight>`,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'first-angular-app';
   name='Two-Way-Data-Binding';
   name1=this.name;
   message:String="";
  display(){
    alert("This is event binding from template to component.")
  }
  update(){
    if(this.name1=='override 2 way binding'){
      this.name1=this.name;
    }else{
      this.name1='override 2 way binding';
    }
  }
  show():void{
    this.message="Hi";
  }
  show1(ev:Event):void{
    const element=ev.currentTarget as HTMLInputElement
    const value=element.value
    this.message=value;
  }
  message="Hi";
  chk=true;
  numArray: number[]=[23,45,67,12];*/
}
