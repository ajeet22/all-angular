import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularmatComponent } from './angularmat/angularmat.component';
import { AppComponent } from './app.component';
import { MarksumAppComponent } from './marksum-app/marksum-app.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'student', component: MarksumAppComponent},
  {path:'employee', component: ModeldrivenComponent},
  {path:'material', component: AngularmatComponent},
  {path:'user', component:UserListComponent},
  {path:'material/:id', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
