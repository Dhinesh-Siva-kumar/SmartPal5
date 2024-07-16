import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveJobComponent } from './archive-job.component';

describe('ArchiveJobComponent', () => {
  let component: ArchiveJobComponent;
  let fixture: ComponentFixture<ArchiveJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
