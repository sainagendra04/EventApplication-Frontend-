import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { RegistrationServiceService } from 'src/Services/RegisterService/registration-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user:User={
    id: 0,
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmpassword: ''
  };
  successMessage: string = '';

  constructor(private service:RegistrationServiceService, private router:Router) { }


  ngOnInit(): void {
  }

  registerUser():void
  {
    this.service.postUser(this.user)
      .subscribe(
        response => {
          console.log('User registered successfully:', response);
          this.successMessage = 'User registered successfully!';
          this.navigateToSignIn();
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
  }

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }
}
