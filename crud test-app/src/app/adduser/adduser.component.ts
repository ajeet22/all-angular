import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  pageLoaded: boolean=false;
  addUserForm: FormGroup = new FormGroup({}) //in html, formGroup is same 
  constructor(private formBuilder: FormBuilder, private userService: TestService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl('')
    })
  }

  createUser(){
     this.userService.addUser(this.addUserForm.value).subscribe((data:any)=>{
      console.log("User Created successfully")
      console.log(data)
     }, err => {
      console.log(err);
     });
  }


}
