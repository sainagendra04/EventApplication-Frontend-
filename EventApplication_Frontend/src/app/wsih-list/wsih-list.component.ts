import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { EventItem } from 'src/Models/EventItem';
import { DeleteSerivceService } from 'src/Services/DeleteService/delete-serivce.service';
import { WishListServiceService } from 'src/Services/WishListService/wish-list-service.service';

@Component({
  selector: 'app-wsih-list',
  templateUrl: './wsih-list.component.html',
  styleUrls: ['./wsih-list.component.css']
})
export class WsihListComponent implements OnInit {

  events: EventItem[]= [];
  user = sessionStorage.getItem('user');
  constructor(private service:WishListServiceService,
     private route:Router,
     private deleteService:DeleteSerivceService,) { }

  ngOnInit(): void {
    this.getWishListItem();
  }

  getWishListItem():any
  {
    this.service.getWishListEvents().subscribe(data => {
      console.log("Component is called");
      console.log(data);

      this.events = data;

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

  deleteEvent(id:number):any
  {
    this.deleteService.deleteEvent(id).subscribe(
      data => {
        console.log(data);
        console.log('Delete service response:', data);

      // Check if the response contains valid data
      if (data) {
        // Your logic with the response data
        console.log('Data received:', data);
      } else {
        console.warn('Response data is empty.');
      }
      this.route.navigate(['/wishlist']);
      });
  }
}
