import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEquipmentComponent } from './component-equipment.component';

describe('ComponentEquipmentComponent', () => {
  let component: ComponentEquipmentComponent;
  let fixture: ComponentFixture<ComponentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
