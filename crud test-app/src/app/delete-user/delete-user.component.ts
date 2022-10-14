import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:string='';
  constructor(private activatedRoute: ActivatedRoute, private userService: TestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.userId=data.id;
    });

    if(this.userId){
      this.userService.delteUser(this.userId).subscribe((data:any)=>{
        console.log("User deleted of user id: "+this.userId);
      }, err =>{
        console.log(err);
      });
    }
  }

}
