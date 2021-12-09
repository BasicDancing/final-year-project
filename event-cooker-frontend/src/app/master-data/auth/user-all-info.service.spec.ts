import { TestBed } from '@angular/core/testing';

import { UserAllInfoService } from './user-all-info.service';

describe('UserAllInfoService', () => {
  let service: UserAllInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAllInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
