import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  formdata:any;
  emailid:string='';
  password:string='';
  dob:Date=new Date(0);

  student_list:any[]=[];

  constructor() { }
//without validation
 /* ngOnInit(){
    this.formdata=new FormGroup({
      emailid: new FormControl("test@gmail.com"),
      password: new FormControl("wipro123"),
      dob: new FormControl("2022-10-09")
    });
  }*/

  //with validation
  ngOnInit(){
    this.formdata=new FormGroup({
      emailid: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("[^@]+@[^@]+")
      ])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      dob: new FormControl("", Validators.compose([
        Validators.required])
        )
    });
  }
  onClickSubmit(data:any){
    this.emailid=data.emailid;
    this.password=data.password;
    this.dob=data.dob;
  }

}
