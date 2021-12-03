import { TestBed } from '@angular/core/testing';

import { CinematographerService } from './cinematographer.service';

describe('CinematographerService', () => {
  let service: CinematographerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinematographerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
