import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventItem } from 'src/Models/EventItem';
import { EventApiServiceService } from 'src/Services/EventApiService/event-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events:EventItem[]=[];

  constructor(private service:EventApiServiceService, private route:Router) { }

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

  Register()
  {
    this.route.navigate(['/registration']);
  }
  SignIn()
  {
    this.route.navigate(['/signin']);
  }

}
