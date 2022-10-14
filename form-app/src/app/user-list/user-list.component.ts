import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  name:string='';
  age:number=0;
  address:string='';
  id:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  user_list:any[]=[{
    "name":"Nishant",
    "age":34,
    "address":"Patna, Bihar",
    "id":1
  }];

  onClickSubmit(data:any){
    this.name=data.name;
    this.age=data.age;
    this.address=data.address;
    this.id= (this.id)+1;
    this.user_list.push(data);
  }

  editDetails(data:any){
    let index = this.user_list.indexOf(data);
    data.name="Ram";
    data.age=45;
    data.address="Lalbahadur Nagar, Delhi";
    this.user_list[index]=data;
    index++;
  }

  removeUser(data:any){
    let index = this.user_list.indexOf(data);
    this.user_list.pop().indexOf(index);
  }

}
