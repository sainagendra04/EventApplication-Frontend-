import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListServiceService {

  constructor(private http:HttpClient) { }

  req:string = "https://localhost:7229/api/WishList/";
  user:string|null = sessionStorage.getItem('user');

  getWishListEvents():Observable<any>
  {
    console.log("WishList service is called");
    return this.http.get(this.req+this.user);
  }
}
