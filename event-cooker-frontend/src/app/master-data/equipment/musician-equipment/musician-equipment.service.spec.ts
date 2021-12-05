import { TestBed } from '@angular/core/testing';

import { MusicianEquipmentService } from './musician-equipment.service';

describe('MusicianEquipmentService', () => {
  let service: MusicianEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicianEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
