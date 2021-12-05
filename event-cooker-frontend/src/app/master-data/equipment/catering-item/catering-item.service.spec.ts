import { TestBed } from '@angular/core/testing';

import { CateringItemService } from './catering-item.service';

describe('CateringItemService', () => {
  let service: CateringItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateringItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
