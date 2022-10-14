import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksum-app',
  templateUrl: './marksum-app.component.html',
  styleUrls: ['./marksum-app.component.css']
})
export class MarksumAppComponent implements OnInit {

  math:number=0;
  science:number=0;
  english:number=0;
  sum:number=0;
  avg:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any){
    this.math=data.math;
    this.science=data.science;
    this.english=data.english;
    this.sum=this.math+this.science+this.english;
    this.avg=this.sum/3;
  }

}
