import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AppComponent } from './app.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'create', component: AdduserComponent },
  {
    path: 'list',
    children: [
      {path: '', component: UserListComponent},
      { path: 'view/:id', component: ViewUserComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
      { path: 'edit/:id', component: EditUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
