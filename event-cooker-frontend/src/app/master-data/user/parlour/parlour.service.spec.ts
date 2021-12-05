import { TestBed } from '@angular/core/testing';

import { ParlourService } from './parlour.service';

describe('ParlourService', () => {
  let service: ParlourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParlourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
