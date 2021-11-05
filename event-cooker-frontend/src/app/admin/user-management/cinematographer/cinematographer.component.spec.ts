import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematographerComponent } from './cinematographer.component';

describe('CinematographerComponent', () => {
  let component: CinematographerComponent;
  let fixture: ComponentFixture<CinematographerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinematographerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
