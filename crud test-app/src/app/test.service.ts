import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http: HttpClient) { }

  path: string="https://jsonplaceholder.cypress.io/";
  
  listUsers(){
    return this._http.get(this.path+'users');
  }

  viewUsers(id: string){
    return this._http.get(this.path+'users/'+id);
  }

  addUser(userObj: any){
    return this._http.post(this.path+'users', userObj);
  }

  delteUser(id:any){
    return this._http.delete(this.path+'users/'+id)
  }

  updateUser(id:any, userObj:any){
    return this._http.put(this.path+'user/'+id, userObj);

  }

}
