import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFeedMiddleComponent } from './job-feed-middle.component';

describe('JobFeedMiddleComponent', () => {
  let component: JobFeedMiddleComponent;
  let fixture: ComponentFixture<JobFeedMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFeedMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFeedMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
