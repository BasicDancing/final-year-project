import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFeedLeftComponent } from './job-feed-left.component';

describe('JobFeedLeftComponent', () => {
  let component: JobFeedLeftComponent;
  let fixture: ComponentFixture<JobFeedLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFeedLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFeedLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
