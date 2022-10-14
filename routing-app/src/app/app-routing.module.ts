import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'career', component:CareerComponent},
  {path:'employees/:empid', component: EmpdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
