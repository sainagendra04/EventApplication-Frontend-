import { TestBed } from '@angular/core/testing';

import { FavoriteServiceService } from './favorite-service.service';
import { EventItem } from 'src/Models/EventItem';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FavoriteServiceService', () => {
  let service: FavoriteServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FavoriteServiceService]
    });

    service = TestBed.inject(FavoriteServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the server with event data', (done) => {
    const mockEvent: EventItem = {
      id: 1,
      title: 'Sample Event',
      email: '',
      type: '',
      short_title: '',
      datetime_utc: new Date,
      visible_at: new Date,
      visible_until: new Date,
      venue:{
        id: 0,
        name: '',
        address: '',
        city: '',
        state: '',
        country: ''
      },
      performers: []
    };

    service.postFavorite(mockEvent).subscribe((response) => {
      // Check if the response is handled correctly
      expect(response).toBeDefined();
      // Add additional checks if needed
      done();
    });

    const req = httpTestingController.expectOne(service.req);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockEvent);

    // Mock the response data as needed
    const responseData = { /* Add mock response data */ };
    req.flush(responseData);
  });

  
});
