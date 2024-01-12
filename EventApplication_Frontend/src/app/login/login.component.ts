import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { LoginServiceService } from 'src/Services/LoginService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:User = {
    id: 0,
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmpassword: ''
  }

  constructor(private formBuilder:FormBuilder, private service:LoginServiceService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  loginUser():any
  {
    this.service.login(this.loginForm.value).subscribe(data=>{
      console.log(data.token);
      if(data.token===sessionStorage.getItem("token"))
      {
        this.router.navigate(['/home']);
      }
      else
      {
        console.error("Unauthorized user attempted for the login");
        this.router.navigate(['/signin']); 
      }
    },
    error=>{
      console.log("Error logging in",error);
    }
    )
  }

  // navigateToHome()
  // {
  //   this.router.navigate(['/home']);
  // }

}
