import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPlanComponent } from './job-plan.component';

describe('JobPlanComponent', () => {
  let component: JobPlanComponent;
  let fixture: ComponentFixture<JobPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
