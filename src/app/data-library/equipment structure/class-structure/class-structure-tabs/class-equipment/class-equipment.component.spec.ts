import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEquipmentComponent } from './class-equipment.component';

describe('ClassEquipmentComponent', () => {
  let component: ClassEquipmentComponent;
  let fixture: ComponentFixture<ClassEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
