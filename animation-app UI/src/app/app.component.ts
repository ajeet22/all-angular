import { animate, state, style, transition, trigger, keyframes, animation } from '@angular/animations';
import { Component } from '@angular/core';
import { myanim } from './anim';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[myanim]
  /*template: `<p [@myAnimation]='state' (click)='animateMe()'>I will animate</p>`,
  styles: [`
  p{
    width:200px;
    background:hotpink;
    margin:100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  `],
  animations:[ 
    trigger('myAnimation',[
      state('small',style({
        tranform:'scale(1)',
      })),
      state('large',style({
        transform:'scale(1.5)',
        background: 'green',
      })),
      //transition('small=>large',animate('1000ms ease-in'))
      transition('small<=>large',animate('3000ms 1000ms ease-in'))
    ]),
  ]*/
})
export class AppComponent { 
  title = 'app';
  state:string='small';

  animateMe(){
    this .state=(this.state==='small'?'large':'small');
  }
}
