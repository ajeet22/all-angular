import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFilterPipe } from './employee.pipe';



@NgModule({
  declarations: [
    EmployeeFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[EmployeeFilterPipe]
})
export class SharedModule { }
