import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';
import { User } from 'src/Models/User';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginServiceService', () => {
  let service: LoginServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginServiceService]
    });

    service = TestBed.inject(LoginServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to the server with user credentials and handle the response', (done) => {
    const mockUser: User = {
      id: 1,
      email: 'john.doe@example.com',
      password: 'password',
      firstname: '',
      lastname: '',
      mobilenumber: '',
      confirmpassword: ''
    };

    service.login(mockUser).subscribe((response) => {
      // Check if the response is handled correctly
      expect(response).toBeDefined();
      expect(sessionStorage.getItem('token')).toBeDefined();
      expect(sessionStorage.getItem('user')).toBe(mockUser.email);
      done();
    });

    const req = httpTestingController.expectOne(`${service.req}?email=${encodeURIComponent(mockUser.email)}&password=${encodeURIComponent(mockUser.password)}`);
    expect(req.request.method).toBe('GET');

    // Mock the response data as needed
    const responseData = { token: 'mockToken' };
    req.flush(responseData);
  });
});
