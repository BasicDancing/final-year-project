import { TestBed } from '@angular/core/testing';

import { DancerService } from './dancer.service';

describe('DancerService', () => {
  let service: DancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
