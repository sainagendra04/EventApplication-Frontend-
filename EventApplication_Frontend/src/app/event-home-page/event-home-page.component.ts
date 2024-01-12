import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventItem } from 'src/Models/EventItem';
import { EventApiServiceService } from 'src/Services/EventApiService/event-api-service.service';
import { LoginComponent } from '../login/login.component';
import { FavoriteServiceService } from 'src/Services/FavoriteService/favorite-service.service';

@Component({
  selector: 'app-event-home-page',
  templateUrl: './event-home-page.component.html',
  styleUrls: ['./event-home-page.component.css']
})
export class EventHomePageComponent implements OnInit {
  events: EventItem[] = [];
  event:EventItem = {
    email:'',
    id: 0,
    type: '',
    title: '',
    short_title: '',
    datetime_utc: new Date ,
    visible_at: new Date ,
    visible_until: new Date,
    venue: {
      id: 0,
      name: '',
      address: '',
      city: '',
      state: '',
      country: ''
    },
    performers: []
  }
  user = sessionStorage.getItem("user");
  constructor(
    private service:EventApiServiceService,
    private favService:FavoriteServiceService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.getEventDetails();
  }

  getEventDetails(): void {

    this.service.getEvents().subscribe(data => {
      console.log("Component is called");
      console.log(data);

      this.events = data?.events;

      console.log(this.events);

      for (let event of this.events) {
        console.log(event.title);
      }
      
    });
  }
  logout()
  {
    sessionStorage.clear();
    this.route.navigate(['/signin']);
  }

  wishList()
  {
    this.route.navigate(['/wishlist']);
  }

  addEventToFavorite(event: EventItem)
  {
    //const userName:string | null= sessionStorage.getItem('user');
    event.email=this.user!=null?this.user:'';
    console.log("The method addEventToFAvorite is called fine");
    this.favService.postFavorite(event).subscribe(data=>{

      console.log("The event data is :",data);
    })
  }
}
