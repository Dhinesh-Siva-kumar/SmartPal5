import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLakeComponent } from './job-lake.component';

describe('JobLakeComponent', () => {
  let component: JobLakeComponent;
  let fixture: ComponentFixture<JobLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobLakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
