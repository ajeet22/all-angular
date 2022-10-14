import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  title='Inner App';
  message:string='';
  @Input() otitle:string='';
  @Input() nn1:string='';
  @Input() nn2:string='';
  @Input() sum1:string='';
  sum2:number=0;
  constructor() { }
  display(){
    this.sum2=Number(this.sum1)+1;
  }
  ngOnInit(): void {
    
  }

  

}
