import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  //private path ="./assets/employees.json";
  private path = "https://jsonplaceholder.typicode.com/todos";
  getEmployee(){
    return this._http.get(this.path).pipe(map((response:any)=>response));
  }

  addEmployee(employee: any): Observable<any>{
    return this._http.post(`${this.path}`, employee);

  }
}
