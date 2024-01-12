import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // Ensure this import statement is correct
import { WishListServiceService } from './wish-list-service.service';

describe('WishListServiceService', () => {
  let service: WishListServiceService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WishListServiceService]
    });

    service = TestBed.inject(WishListServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getWishListEvents and return data', () => {
    const mockResponse = [{ event: 'Event 1' }, { event: 'Event 2' }];

    service.getWishListEvents().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.req}${service.user}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });
});
