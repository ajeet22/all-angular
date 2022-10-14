import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUser: any;
  constructor(private userService: TestService) { }

  ngOnInit(){
     this.userService.listUsers().subscribe((data:any) =>{
      this.listUser=data;
     });
  }

}
