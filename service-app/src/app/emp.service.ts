import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _http:HttpClient) { }
 /* getEmployees():any[]{
    return[
      {
        "name":"Ajit",
        "id":1
      },
      {
        "name":"Jatin",
        "id":2
      }
    ]
  }*/
  //private path="https://jsonplaceholder.typicode.com/todos";
  private path="./assets/employees.json";
  getEmployees(){
    return this._http.get(this.path).pipe(map((response:any)=>response));
  }
}
