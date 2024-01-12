import { TestBed } from '@angular/core/testing';

import { EventApiServiceService } from './event-api-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EventApiServiceService', () => {
  let service: EventApiServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventApiServiceService]
    });

    service = TestBed.inject(EventApiServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to the server and return events', (done) => {
    const mockEvents = [
      { id: 1, name: 'Event 1', description: 'Description 1' },
      { id: 2, name: 'Event 2', description: 'Description 2' },
      // Add more mock events as needed
    ];

    service.getEvents().subscribe((events) => {
      // Check if the response is handled correctly
      expect(events).toEqual(mockEvents);
      // Add additional checks if needed
      done();
    });

    const req = httpTestingController.expectOne(service.req);
    expect(req.request.method).toBe('GET');

    // Mock the response data as needed
    req.flush(mockEvents);
  });
});
