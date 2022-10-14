import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';

  onClickSubmit(data:any){
    alert("Entered data:"+data.emailid+" "+data.password+" "+data.dob);
  }
}
