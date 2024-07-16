import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSpareComponent } from './archive-spare.component';

describe('ArchiveSpareComponent', () => {
  let component: ArchiveSpareComponent;
  let fixture: ComponentFixture<ArchiveSpareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveSpareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveSpareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
