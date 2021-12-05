import { TestBed } from '@angular/core/testing';

import { CinematographerEquipmentService } from './cinematographer-equipment.service';

describe('CinematographerEquipmentService', () => {
  let service: CinematographerEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinematographerEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
