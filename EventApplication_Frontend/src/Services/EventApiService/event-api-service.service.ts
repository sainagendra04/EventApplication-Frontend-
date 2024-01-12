import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventApiServiceService {

  constructor(private http:HttpClient) { }

  req:string = "https://localhost:7286/api/Event";
  //req:string = "https://localhost:7169/gateway/api/Event";

  getEvents():Observable<any>
  {
    console.log("Service is called")
    return this.http.get(this.req);
  }
}
