import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDataLibraryComponent } from './vessel-data-library.component';

describe('VesselDataLibraryComponent', () => {
  let component: VesselDataLibraryComponent;
  let fixture: ComponentFixture<VesselDataLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselDataLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VesselDataLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
