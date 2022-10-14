import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested-comp-app';
  n1:number=0;
  n2:number=0;
  sum:number=0;
  onSum(data:any){
    this.n1=data.n1;
    this.n2=data.n2;
    this.sum=this.n1+this.n2;
  }

}
