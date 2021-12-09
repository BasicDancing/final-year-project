import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllProfileComponent } from './user-all-profile.component';

describe('UserAllProfileComponent', () => {
  let component: UserAllProfileComponent;
  let fixture: ComponentFixture<UserAllProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
