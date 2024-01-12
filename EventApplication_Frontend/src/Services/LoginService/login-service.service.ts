import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  req:string = "https://localhost:7055/api/Authentication";
  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>
  {
    console.log("login services called");
    const encodedEmail = encodeURIComponent(user.email);
    const encodedPassword = encodeURIComponent(user.password);

    console.log(encodedEmail,encodedPassword);
    return this.http.get(this.req + "?email=" + encodedEmail + "&password=" + encodedPassword, { responseType: 'json' })
  .pipe(
    map((response: any) => {
      // Handle the response accordingly
      sessionStorage.setItem("token", response.token);
      console.log(response);
      sessionStorage.setItem("user",user.email);
      return response;
    })
  );
  }

}
