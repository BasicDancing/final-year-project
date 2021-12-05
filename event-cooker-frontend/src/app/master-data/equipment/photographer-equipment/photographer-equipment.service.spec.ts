import { TestBed } from '@angular/core/testing';

import { PhotographerEquipmentService } from './photographer-equipment.service';

describe('PhotographerEquipmentService', () => {
  let service: PhotographerEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographerEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
