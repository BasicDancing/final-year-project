import { TestBed } from '@angular/core/testing';

import { VoiceArtistService } from './voice-artist.service';

describe('VoiceArtistService', () => {
  let service: VoiceArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
