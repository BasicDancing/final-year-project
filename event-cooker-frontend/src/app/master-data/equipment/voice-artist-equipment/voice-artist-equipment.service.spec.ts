import { TestBed } from '@angular/core/testing';

import { VoiceArtistEquipmentService } from './voice-artist-equipment.service';

describe('VoiceArtistEquipmentService', () => {
  let service: VoiceArtistEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceArtistEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
