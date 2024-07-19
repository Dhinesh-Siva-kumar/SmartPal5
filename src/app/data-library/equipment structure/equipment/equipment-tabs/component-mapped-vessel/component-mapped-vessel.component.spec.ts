import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMappedVesselComponent } from './component-mapped-vessel.component';

describe('ComponentMappedVesselComponent', () => {
  let component: ComponentMappedVesselComponent;
  let fixture: ComponentFixture<ComponentMappedVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMappedVesselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMappedVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
