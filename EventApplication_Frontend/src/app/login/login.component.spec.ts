import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { async, of, throwError } from 'rxjs';
import { LoginServiceService } from 'src/Services/LoginService/login-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginServiceService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj('LoginServiceService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: LoginServiceService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when login is successful', () => {
    const mockToken = 'mockToken';
    // Create an instance of the User type
    const user: User = { id: 1, firstname: 'John', lastname: 'Doe', mobilenumber: '1234567890', email: 'test@example.com', password: 'password', confirmpassword: 'password' };
    spyOn(component.loginForm, 'value').and.returnValue(user);
    mockLoginService.login.and.returnValue(of({ token: mockToken }));
  
    component.loginUser();
  
    expect(mockLoginService.login).toHaveBeenCalledWith(user);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });
  

  it('should handle error and navigate to signin on login failure', () => {
    const mockToken = 'mockToken';
    // Create an instance of the User type
    const user: User = { id: 1, firstname: 'John', lastname: 'Doe', mobilenumber: '1234567890', email: 'test@example.com', password: 'password', confirmpassword: 'password' };
    spyOn(component.loginForm, 'value').and.returnValue(user);
    mockLoginService.login.and.returnValue(of({ token: mockToken }));
  

    component.loginUser();

    expect(mockLoginService.login).toHaveBeenCalledWith(user);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/signin']);
  });
});
