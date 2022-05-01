import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpClient) { }
  baseURLAPI ="https://localhost:44373/api";
  getUserList():Observable<any>{
    return this.httpservice.get(this.baseURLAPI+"/users");
  }
  getUserById(userId:number):Observable<any>{
    return this.httpservice.get(this.baseURLAPI+"/users/"+userId);
  }

  getDepartList():Observable<any>{
    return this.httpservice.get(this.baseURLAPI+"/departments");
  }

  postUser(user:any):Observable<any>{
    return this.httpservice.post(this.baseURLAPI+"/users",user);
  }
  updateUser(userId:number,user:any):Observable<any>{
    return this.httpservice.put(this.baseURLAPI+"/users/"+userId,user);
  }
  deleteUser(userId:number):Observable<any>{
    return this.httpservice.delete(this.baseURLAPI+"/users/"+userId);
  }
}
