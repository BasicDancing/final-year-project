import { TestBed } from '@angular/core/testing';

import { DecoratorEquipmentService } from './decorator-equipment.service';

describe('DecoratorEquipmentService', () => {
  let service: DecoratorEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoratorEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
