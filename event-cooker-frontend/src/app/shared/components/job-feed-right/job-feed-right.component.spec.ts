import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFeedRightComponent } from './job-feed-right.component';

describe('JobFeedRightComponent', () => {
  let component: JobFeedRightComponent;
  let fixture: ComponentFixture<JobFeedRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFeedRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFeedRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
