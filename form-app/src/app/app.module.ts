import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksumAppComponent } from './marksum-app/marksum-app.component';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AngularmatComponent } from './angularmat/angularmat.component';
import {MatButtonModule} from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarksumAppComponent,
    ModeldrivenComponent,
    AngularmatComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, 
    BrowserAnimationsModule, MatSliderModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
