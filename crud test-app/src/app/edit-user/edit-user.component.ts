import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  dataLoaded: boolean=false;
  userId:any;
  userDetails:any;
  editFormGroup: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private userService: TestService,private activated: ActivatedRoute) { }

  ngOnInit(): void { 
    this.dataLoaded = false;
    this.activated.params.subscribe((data:any)=>{
      this.userId=data.id;
    });

    if(this.userId !==''){
      //view user details
      this.userService.viewUsers(this.userId).toPromise().then((data)=>{
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);
        //build the edit form
        this.editFormGroup = this.formBuilder.group({
          'name':new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email)
        })
        this.dataLoaded=true;
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
  
  //update data, passing userId from the component that taken from ngOnInit
  updateUser(){
    this.userService.updateUser(this.userId, this.editFormGroup.value);
    console.log(this.editFormGroup.value);
  }

}
