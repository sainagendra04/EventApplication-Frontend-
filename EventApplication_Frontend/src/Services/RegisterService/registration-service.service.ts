import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient) { }

  req:string ="https://localhost:7294/api/User/";

  postUser(user:User):Observable<any>
  {
    console.log("Registration Service is called")
    return this.http.post(this.req, user);
    console.log(user);
  }
}
