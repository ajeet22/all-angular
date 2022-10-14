import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellocomponentComponent } from './hellocomponent/hellocomponent.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { OldPipePipe } from './old-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HellocomponentComponent,
    HighlightDirectiveDirective,
    CustompipeComponent,
    OldPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
