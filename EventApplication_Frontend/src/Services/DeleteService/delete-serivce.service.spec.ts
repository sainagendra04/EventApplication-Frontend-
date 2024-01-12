import { TestBed } from '@angular/core/testing';

import { DeleteSerivceService } from './delete-serivce.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DeleteSerivceService', () => {
  let service: DeleteSerivceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeleteSerivceService]
    });

    service = TestBed.inject(DeleteSerivceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a DELETE request to the server for a specific event', (done) => {
    const eventIdToDelete = 1;

    service.deleteEvent(eventIdToDelete).subscribe(() => {
      // Check if the request is sent correctly
      done();
    });

    const req = httpTestingController.expectOne(`${service.req}${eventIdToDelete}`);
    expect(req.request.method).toBe('DELETE');

    // Respond with a successful status code
    req.flush(null, { status: 200, statusText: 'OK' });
  });

});
