import { TestBed } from '@angular/core/testing';

import { ParlourPackageService } from './parlour-package.service';

describe('ParlourPackageService', () => {
  let service: ParlourPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParlourPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
