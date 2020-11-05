import { TestBed } from '@angular/core/testing';

import { BlinggServiceService } from './blingg-service.service';

describe('BlinggServiceService', () => {
  let service: BlinggServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlinggServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
