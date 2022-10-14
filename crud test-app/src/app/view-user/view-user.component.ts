import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId: string='';
  userDetails:any;

  constructor(private userService: TestService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe((data:any)=>{ // subscribe to get data
      this.userId=data.id; //getting id only
      console.log(this.userId);
    });
    this.userService.viewUsers(this.userId).subscribe((data:any)=>{
      this.userDetails=data; // getting all data
      console.log(this.userDetails);
    });
  }

}
