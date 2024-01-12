import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventHomePageComponent } from './event-home-page/event-home-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WsihListComponent } from './wsih-list/wsih-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"home",
    component:EventHomePageComponent
  },
  {
    path:"registration",
    component:UserRegistrationComponent
  },
  {
    path:"signin",
    component:LoginComponent
  },
  {
    path:"wishlist",
    component:WsihListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ReactiveFormsModule
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
