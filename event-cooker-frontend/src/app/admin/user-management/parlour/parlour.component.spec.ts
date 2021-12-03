import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlourComponent } from './parlour.component';

describe('ParlourComponent', () => {
  let component: ParlourComponent;
  let fixture: ComponentFixture<ParlourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParlourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
