import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {

  employees:any[]=[];
  employee1: any = new Employee();
  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {
    this.employee.getEmployee().subscribe((emp:any)=>{
      this.employees=emp });
  }

  save(data:any){
    this.employee.addEmployee(this.employees).subscribe((data:any) => console.log(data), (error:any) => console.log(error));
    this.employee1=new Employee();
  }

}
