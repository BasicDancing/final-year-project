import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyManagementComponent } from './geography-management.component';

describe('GeographyManagementComponent', () => {
  let component: GeographyManagementComponent;
  let fixture: ComponentFixture<GeographyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
