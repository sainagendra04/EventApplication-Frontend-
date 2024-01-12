import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventItem } from 'src/Models/EventItem';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  constructor(private http:HttpClient) { }

  req:string = "https://localhost:7229/api/WishList";

  postFavorite(event:EventItem):Observable<any>
  {
    return this.http.post(this.req,event);
  }

}
