import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-houter',
  //templateUrl: './houter.component.html',
  //styleUrls: ['./houter.component.css']
  template:`<p>H Outer</p><br>
  <input type="text" (change)=triggerEvent($event);><br>`,
})
export class HOuterComponent {
  @Output() myEvent:EventEmitter<string>=new EventEmitter<string>();

  triggerEvent(val:any){
    this.myEvent.emit(val.target.value);
  }
}
