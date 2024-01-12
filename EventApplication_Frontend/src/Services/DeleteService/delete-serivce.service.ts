import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteSerivceService {

  constructor(private http:HttpClient) { }
  //eventId!: number;
  //user = sessionStorage.getItem('user');
  req:string = "https://localhost:7229/api/WishList/";

  deleteEvent(eventId: number): Observable<any> {
    console.log(eventId);
    return this.http.delete(this.req + eventId);
  }     
}
