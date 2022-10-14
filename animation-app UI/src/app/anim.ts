import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
export const myanim =  trigger('myAnimation',[
    state('small',style({
      tranform:'scale(1)',
    })),
    state('large',style({
      transform:'scale(1.5)',
      background: 'green',
    })),
    //transition('small=>large',animate('1000ms ease-in'))
    /*transition('small<=>large',animate('3000ms 1000ms ease-in',
    style({transform:'translateX(140px)'}))),*/
    transition('small <=> large', animate('3000ms 1000ms ease-in', keyframes([
        style({opacity: 0, transform:'translateX(-75%)', offset:0}),
        style({opacity: .2, transform:'translateY(40px) rotateY(90deg)', offset:0.5}),
        style({opacity: 1, transform:'translateY(0)', offset:1.0})
    ])))
  ])