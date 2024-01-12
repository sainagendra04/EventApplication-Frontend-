import { TestBed } from '@angular/core/testing';

import { RegistrationServiceService } from './registration-service.service';
import { User } from 'src/Models/User';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegistrationServiceService', () => {
  let service: RegistrationServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationServiceService]
    });

    service = TestBed.inject(RegistrationServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the server with user data', () => {
    const mockUser: User = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      mobilenumber: '1234567890',
      email: 'john.doe@example.com',
      password: 'password',
      confirmpassword: 'password'
    };

    service.postUser(mockUser).subscribe();

    const req = httpTestingController.expectOne(service.req);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush({}); // You can mock the response data as needed
  });

});
