import { TestBed } from '@angular/core/testing';

import { DancerEquipmentService } from './dancer-equipment.service';

describe('DancerEquipmentService', () => {
  let service: DancerEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancerEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
