import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemetographerComponent } from './cinemetographer.component';

describe('CinemetographerComponent', () => {
  let component: CinemetographerComponent;
  let fixture: ComponentFixture<CinemetographerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemetographerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemetographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
