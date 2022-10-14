import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppComponent } from './app.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';

const routes: Routes = [
  {path:'showdata', component: ShowemployeeComponent},
  {path:'add', component:AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
